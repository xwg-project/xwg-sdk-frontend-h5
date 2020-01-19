$(function(){
    for(var name in Editpassword_Event_Class){
		EventDispatcher.addEventListener(name,eval("Editpassword_Event_Class." + name));
	}

	pageInit();
});

var Editpassword_Event_Class = /** @class */ (function () {
	function Editpassword_Event_Class() {
	}
	
	return Editpassword_Event_Class;
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


// 忘记密码重置密码
function forgetPsd(){
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
        alert("密码两次输入不一致!")
        return;
    }
    let reqParamData = {
        "password": psd1,
        "passwordTemp": psd2,
        "smsCode": smsCode,
        "username": username
    };
    let pUrl = serverURL+"/appauth/login/resetPasswordBySms";

    HttpUtil.doPost(pUrl,reqParamData,function(data){
        alert("重置密码成功！这里需要提示面板进行确定跳转返回上一层")
        // window.location.href = "security.html";
    },null,null,false,true,true);
}