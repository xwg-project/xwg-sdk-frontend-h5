
$(function(){
    for(var name in Security_Event_Class){
        EventDispatcher.addEventListener(name,eval("Security_Event_Class." + name));
    }

    pageInit();
});

var Security_Event_Class = /** @class */ (function () {
    function Security_Event_Class() {
    }

    return Security_Event_Class;
}());

var g_InputPayPassword=0;
var g_InputOldPayPassword=0;
//页面初始化完成调用函数
function pageInit(){
    let userMsg = window.localStorage.getItem("walletUserInfo");
    if(userMsg==null){
        //这里写未登录提示跳转去登录
        return;
    }
    let userInfo = JSON.parse(userMsg)
    let payPsd = userInfo.payPsd;
    let payPsdStr = "";
    if(payPsd==0){
        payPsdStr = "未设置";
    }else if(payPsd==1){
        payPsdStr = "已设置";
    }
    $(".content-info .renzhen").text(payPsdStr);

}

function onSetPayPsd(){
    let userMsg1 = window.localStorage.getItem("walletUserInfo");
    let avatar = JSON.parse(userMsg1);
    if(avatar.payPsd==0){
      $(".content-info .renzhen").text("未设置");
      var oDiv = '<div class="payPan">'+
        '<div class="paybox">'+
            '<div class="title">'+'你尚未设置支付密码'+'</div>'+
            '<div class="content">'+'为保障您的资金安全，支付前请先设置支付密码！'+'</div>'
        '</div>'+
        '</div>';
        $.modal({
            text: oDiv,
            buttons: [
                { text: "取消", className: "a1"},
                {text: "去设置",className: "a2",
                  onClick: function(){
                    let oData = {priceText:"",promptText:"请输入支付密码"}
                    openPasswordInputBox(oData,onFristSetPayPW);
                  }
                },
            ],
        });
    }
    if(avatar.payPsd==1){
      $(".content-info .renzhen").text("已设置");
      var oDiv = '<div class="payPan">'+
        '<div class="paybox">'+
            '<div class="title">'+'请选择支付密码操作'+'</div>'+
            '<div class="content">'+'如果修改支付密码点击修改密码，如忘记支付密码请点击忘记密码！'+'</div>'
        '</div>'+
        '</div>';
      $.modal({
          text: oDiv,
          buttons: [
              { text: "忘记密码", className: "a1",
                onClick: function() {
                  window.location.href = "editpaypsd.html"
                }
              },
              {text: "修改密码",className: "a2",
                onClick: function(){
                  let oData = {priceText:"",promptText:"请输入旧的支付密码"}
                  openPasswordInputBox(oData,onInputOldPassword);
                }
              },
          ],
      });
    }
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
        let walletUserInfo = window.localStorage.getItem("walletUserInfo");
        let userInfo = JSON.parse(walletUserInfo)
        if(userInfo.payPsd==0){
            reqSetPayPassword(resultData.pem,resultData.id);
        }else{
            reqResetPayPassword(resultData.pem,resultData.id);
        }

    },headers,null,false,true,true);
    
}

//第一次输入支付密码
function onFristSetPayPW(password){
    g_InputPayPassword = password;
    let oData = {priceText:"",promptText:"请确认支付密码"}
    openPasswordInputBox(oData,onSetPayPWComplete);
}

//当输入设置支付密码完成
function onSetPayPWComplete(password){
    if(g_InputPayPassword!=password){
        alert("两次输入密码不一致,请重新输入");
        let oData = {priceText:"",promptText:"请输入支付密码"}
        openPasswordInputBox(oData,onFristSetPayPW);
        return;
    }
    closePasswordInputBox();

    // 获取密钥对
    reqKeyPair();
}
//请求设置支付密码
function reqSetPayPassword(pem,id){
    //这里是新设置用户支付密码请求;
    let walletToken  = window.localStorage.getItem("walletToken");
    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.user.pin.update";
    reqParamData.new_pin = encrypt(g_InputPayPassword,pem,id);
    reqParamData.old_pin = "";

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/user/pin/update";

    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let walletUserInfo  = window.localStorage.getItem("walletUserInfo");
        let userInfo = JSON.parse(walletUserInfo)
        userInfo.payPsd = 1;
        let userInfoStr = JSON.stringify(userInfo);
        window.localStorage.setItem("walletUserInfo",userInfoStr);
        alert("支付密码设置成功!");
        $(".content-info .renzhen").text("已设置");

    },headers,null,false,true,true);
}

//当输入旧密码
function onInputOldPassword(password){
    g_InputOldPayPassword = password;
    let oData = {priceText:"",promptText:"请输入新的支付密码"}
    openPasswordInputBox(oData,onInputNewPassword0);
}
//当输入新密码第一遍
function onInputNewPassword0(password){
    g_InputPayPassword = password;
    let oData = {priceText:"",promptText:"请确认新的支付密码"}
    openPasswordInputBox(oData,onInputNewPassword1);
}
//当输入新密码第二遍
function onInputNewPassword1(password){
    if(g_InputPayPassword!=password){
        alert("两次输入密码不一致,请重新输入");
        let oData = {priceText:"",promptText:"请输入支付密码"}
        openPasswordInputBox(oData,onFristSetPayPW);
        return;
    }
    closePasswordInputBox();

    // 获取密钥对
    reqKeyPair();
}
//请求重设支付密码
function reqResetPayPassword(pem,id){
    //这里是新设置用户支付密码请求;
    let walletToken  = window.localStorage.getItem("walletToken");
    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.user.pin.update";
    reqParamData.new_pin = encrypt(g_InputPayPassword,pem,id);
    reqParamData.old_pin = encrypt(g_InputOldPayPassword,pem,id);

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/user/pin/update";

    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let walletUserInfo  = window.localStorage.getItem("walletUserInfo");
        let userInfo = JSON.parse(walletUserInfo)
        userInfo.payPsd = 1;
        let userInfoStr = JSON.stringify(userInfo);
        window.localStorage.setItem("walletUserInfo",userInfoStr);
        alert("支付密码重新设置成功!");
        $(".content-info .renzhen").text("已设置");

    },headers,null,false,true,true);
}