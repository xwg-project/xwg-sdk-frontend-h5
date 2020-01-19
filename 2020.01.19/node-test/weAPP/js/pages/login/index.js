$(function(){
    for(var name in Login_Event_Class){
        EventDispatcher.addEventListener(name,eval("Login_Event_Class." + name));
    }

    pageInit();
});

var Login_Event_Class = /** @class */ (function () {
	function Login_Event_Class() {
	}
    Login_Event_Class.local_GoLogin = function(data){
		var params = "";
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			params = data.message;
        goLogin(params);
	}
	return Login_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    
}

//获取验证码
function getVCode(){
    var reqParamData = {
        "signName": "XWG用户中心",
        "templateCode": "SMS_172800186",
        "username": $("#exampleInput").val()
    };
    let pUrl = serverURL+"/appauth/login/createSmsValidata";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        var phoneCode = data;
        $("#exampleInput1").val(phoneCode);
    },null,null,false,true,true);
}

//前往登录
function goLogin(data){
    // 加载loading....。。
    // loading1();
    var reqParamData = {
        "code": data,
        "smsCode": $("#exampleInput1").val(),
        "username": $("#exampleInput").val()
    };
    let pUrl = serverURL+"/appauth/login/thirdMoblieToken";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        EventDispatcher.dispatchEvent({type:"onLogin",message:{code:"0",msg:""}});
        var token = data.access_token;
        // var saveToke = JSON.stringify(token);
        window.localStorage.setItem("walletToken",token);

        var messageObj = {key:"wallet_access_token",defaultObject:token};
        EventDispatcher.dispatchEvent({type:"onSetKV",message:messageObj});

        getUserMsg(token);
        // 请求成功3s后移除加载loading....。。
        // setTimeout(function(){
        //     removeLoading('test');
        // },3000);
    },null,null,false,true,true);
}

//获取用户基础信息
function getUserMsg(token){
     let headers = {
        'Authorization': "Bearer " + token,
        'Accept-Language': 'zh'
     };
     let pUrl = serverURL+"/appauth/current/user";
     HttpUtil.doPost(pUrl,{},function(data){
        var objs = data;
        var objData = JSON.stringify(objs);
        window.localStorage.setItem("walletUserInfo",objData);

        window.location.href = "home.html";
     },headers,null,false,true,true);
}

function loginUp() {
    EventDispatcher.dispatchEvent({type:"getAuthCode",message:{code:"0",msg:$("#exampleInput").val()}});
}