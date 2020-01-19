$(function(){
    for(var name in Register_Event_Class){
        EventDispatcher.addEventListener(name,eval("Register_Event_Class." + name));
    }

    pageInit();
});

var Register_Event_Class = /** @class */ (function () {
	function Register_Event_Class() {
	}

    Register_Event_Class.local_GoLogin = function(data){
		var params = "";
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			params = data.message;

        goRegister(params);
	}

	return Register_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    $("#exampleInput").val("");
    $("#exampleInput1").val("");
    $("#exampleInput2").val("");
    $("#exampleInput3").val("");
    $("#exampleInput4").val("");
}


function inputClear() {
    $("#exampleInput").val("");
    $("#exampleInput2").val("");
}


function ShowPass1(){
    let imgShow = document.getElementById("imgShow");
    let Example4 = document.getElementById("example4");
    if (Example4.type == "password") {
        Example4.type = "text";
        imgShow.src = "images/yan2.png";
    }else {
        Example4.type = "password";
        imgShow.src = "images/yan1.png";
    }
}

function ShowPass(){
    let picShow = document.getElementById("picShow");
    let Example3 = document.getElementById("example3");
    if (Example3.type == "password") {
        Example3.type = "text";
        picShow.src = "images/yan2.png";
    }else {
        Example3.type = "password";
        picShow.src = "images/yan1.png";
    }
}

//获取验证码
function getVCode(){
    var reqParamData = {
        "signName": "XWG用户中心",
        "templateCode": "SMS_172800184",
        "username": $("#exampleInput").val()
    };
    let pUrl = serverURL+"/appauth/login/createSmsValidata";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        var phoneCode = data;
        $("#exampleInput1").val(phoneCode);
    },null,null,false,true,true);
}


function onClickRegister(){
    let username = $("#exampleInput").val();
    let usernick = $("#exampleInput2").val();
    let smsCode = $("#exampleInput1").val();
    let password = $("#exampleInput3").val();
    let passwordTemp = $("#exampleInput4").val();

    if(username==""){
        alert("手机号为空!")
        return;
    }
    if(usernick==""){
        alert("昵称为空!")
        return;
    }
    if(smsCode==""){
        alert("验证码为空!")
        return;
    }
    if(password==""||passwordTemp==""){
        alert("密码输入为空!")
        return;
    }
    if(password!=passwordTemp){
        alert("两次输入密码不一致");
        return;
    }

    let isChecked = $('#treatyCB').prop('checked');
    if(!isChecked){
        alert("请仔细阅读并同意协议!");
        return;
    }

    EventDispatcher.dispatchEvent({type:"getAuthCode",message:{code:"0",msg:$("#exampleInput").val()}});
}

function goRegister(authCode){
    let username = $("#exampleInput").val();
    let usernick = $("#exampleInput2").val();
    let smsCode = $("#exampleInput1").val();
    let password = $("#exampleInput3").val();
    let passwordTemp = $("#exampleInput4").val();

    let interactData = window.localStorage.getItem("interactData");
    let interactDataObj = JSON.parse(interactData);
    var reqParamData = {
        "clientId":interactDataObj.appid,
        "code": authCode,
        "username": username,
        "nickName":usernick,
        "smsCode": smsCode,
        "password": password,
        "passwordTemp":passwordTemp
    };
    let pUrl = serverURL+"/appauth/login/thirdUnamePsdRegToken";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        EventDispatcher.dispatchEvent({type:"onLogin",message:{code:"0",msg:""}});
        var token = data.access_token;
        // var saveToke = JSON.stringify(token);
        window.localStorage.setItem("walletToken",token);

        var messageObj = {key:"wallet_access_token",defaultObject:token};
        EventDispatcher.dispatchEvent({type:"onSetKV",message:messageObj});

        getUserMsg(token);
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