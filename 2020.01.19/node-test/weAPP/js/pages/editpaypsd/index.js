$(function(){
    for(var name in Editpaypsd_Event_Class){
		EventDispatcher.addEventListener(name,eval("Editpaypsd_Event_Class." + name));
	}

	pageInit();
});

var Editpaypsd_Event_Class = /** @class */ (function () {
	function Editpaypsd_Event_Class() {
	}
	
	return Editpaypsd_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    $("#exampleInput").val("");
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
function getVerifyCode(){
    var reqParamData = {
        "signName": "XWG用户中心",
        "templateCode": "SMS_172800183",
        "username": $("#exampleInput").val()
    };
    let pUrl = serverURL+"/appauth/login/createSmsValidata";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        var phoneCode = data;
        $("#exampleInput1").val(phoneCode);
    },null,null,false,true,true);
}

//当点击保存
function onClickSave(){
    let username = $("#exampleInput").val();
    let smsCode = $("#exampleInput1").val();
    var psd1 = $(".row2 .wrap #example3").val();
    var psd2 = $(".row2 .wrap #example4").val();

    if(username==""){
        alert("用户名为空!")
        return;
    }
    if(smsCode==""){
        alert("验证码为空!")
        return;
    }
    if(psd1==""||psd2==""){
        alert("密码输入为空!")
        return;
    }
    if(psd1!=psd2){
        alert("两次输入密码不一致");
        return;
    }
    if(psd1.length!=6){
        alert("密码输入格式应为6位数字!")
        return;
    }

    reqKeyPair();
}


//返回公共请求参数
function getCommonReqParamObj(needAppId){
    let timeParam = Math.floor(new Date().getTime()/1000);
    var retData = {
        "version": "1.0",
        "timestamp": timeParam,
        "performer_app_id": "",
        "performer_user_id": "",
    };
    if(!needAppId){
        return retData;
    }

    let walletUserInfo = window.localStorage.getItem("walletUserInfo");
    if(walletUserInfo==null){
        //这里写未登录提示跳转去登录
        return;
    }
    let userInfo = JSON.parse(walletUserInfo)
    let uidParam = userInfo.userId;
    
    let interactData = window.localStorage.getItem("interactData");
    if(interactData==null){
        return;
    }
    let interactJsonData = JSON.parse(interactData);
    let appId = interactJsonData.appid;

    retData.performer_app_id = appId;
    retData.performer_user_id = uidParam;

    return retData;
}

// 创建临时 RSA 密钥对
function reqKeyPair(){
    let walletToken  = window.localStorage.getItem("walletToken");
    if(walletToken==null){
        //这里写未登录提示跳转去登录
        return;
    }

    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.key.create";
    reqParamData.collectible_ids = "";
    
     let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/key/create";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let resultData = data;
        reqResetPayPassword(resultData.pem,resultData.id);

    },headers,null,false,true,true);
}

//请求重设支付密码
function reqResetPayPassword(pem,id){
    //这里是新设置用户支付密码请求;
    let walletToken  = window.localStorage.getItem("walletToken");
    let smsCode = $("#exampleInput1").val();
    let newPsd = $(".row2 .wrap #example3").val();

    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.user.pin.reset";
    reqParamData.new_pin = encrypt(newPsd,pem,id);
    reqParamData.vcode = smsCode;

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/user/pin/reset";

    HttpUtil.doPost(pUrl,reqParamData,function(data){
        alert("重置支付密码成功！这里需要提示面板进行确定跳转返回上一层")
        // window.location.href = "security.html";
    },headers,null,false,true,true);
}