$(function(){
    for(var name in Myinfo_Event_Class){
        EventDispatcher.addEventListener(name,eval("Myinfo_Event_Class." + name));
    }

    pageInit();
});

var Myinfo_Event_Class = /** @class */ (function () {
	function Myinfo_Event_Class() {
	}

	return Myinfo_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    let userMsg = window.localStorage.getItem("walletUserInfo");
    if(userMsg==null){
        //这里写未登录提示跳转去登录
        return;
    }
    let userInfo = JSON.parse(userMsg)

    let authedStr = "";
    let authed = userInfo.authed;
    if(authed==0){
        authedStr="未认证";
    }else if(authed==1){
        authedStr="认证中";
    }else if(authed==2){
        authedStr="已认证";
    }
    $(".content-info .renzhen").text(authedStr);

    var nickName = userInfo.nickName;
    var username = userInfo.username
    $(".up .oText").text(nickName);
    var avatarStr = userInfo.avatar==""?"./images/touxiang.png":userInfo.avatar;
    $(".photo .ImgSrc").attr('src', avatarStr);
    $(".itemAll .use4 .userinfo").text(nickName);
    $(".itemAll .wrap4 .phone").text(username);


    //做个下简易的验证  大小 格式
    $('#avatarInput').on('change', function(e) {
        var filemaxsize = 1024 * 5;//5M
        var target = $(e.target);
        var Size = target[0].files[0].size / 1024;
        if(Size > filemaxsize) {
          alert('图片过大，请重新选择!');
          $(".avatar-wrapper").childre().remove;
          return false;
        }
        if(!this.files[0].type.match(/image.*/)) {
          alert('请选择正确的图片!')
        }
      });

    $(".avatar-save").on("click", function() {
          var avatarModal = $("body").find('#avatar-modal');
          var avatarWrapper = avatarModal.find('.avatar-wrapper');
          var img =  avatarWrapper.find('#tailorImg');
          var cas = img.cropper('getCroppedCanvas');  
          var dataUrl = cas.toDataURL('');
          uploadURL(dataUrl)
      })

}


function uploadURL(baseURL){
    // var authed = 1;
    let walletToken  = window.localStorage.getItem("walletToken");
    var reqParamData = {
        "file": baseURL
    };

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/source/file/uploadHead";

    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let avaImg = data;
        let userMsg = window.localStorage.getItem("walletUserInfo");
        let userInfo = JSON.parse(userMsg);
        userInfo.avatar = avaImg;
        // ava.authed = "";
        var userInfoStr = JSON.stringify(userInfo);
        window.localStorage.setItem("walletUserInfo",userInfoStr);
        $(".photo .ImgSrc").attr('src', avaImg);

    },headers,null,false,true,true);
}