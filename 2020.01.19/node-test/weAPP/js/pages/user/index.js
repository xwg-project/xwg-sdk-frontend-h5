$(function(){
    for(var name in User_Event_Class){
        EventDispatcher.addEventListener(name,eval("User_Event_Class." + name));
    }

    pageInit();
});

var User_Event_Class = /** @class */ (function () {
	function User_Event_Class() {
	}

	return User_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    let userMsg = window.localStorage.getItem("walletUserInfo");
    if(userMsg==null){
        //这里写未登录提示跳转去登录
        return;
    }
    let userInfo = JSON.parse(userMsg)

    var nickName = userInfo.nickName;
    $(".up .oText").text(nickName);
    var avatarStr = userInfo.avatar==""?"./images/touxiang.png":userInfo.avatar;
    $(".photo .ImgSrc").attr('src', avatarStr);


    $('#logoutBtn').on('click', function(e) {
        // alert("这里一个弹框提示是否确认退出!");
        var messageObj = {key:"wallet_access_token",defaultObject:""};
		EventDispatcher.dispatchEvent({type:"onSetKV",message:messageObj});

		window.localStorage.removeItem("walletToken");
		window.localStorage.removeItem("walletUserInfo");

		window.location.href = "login.html";
    });
}