$(function(){
    for(var name in Identity_Event_Class){
		EventDispatcher.addEventListener(name,eval("Identity_Event_Class." + name));
	}

	pageInit();
});

var Identity_Event_Class = /** @class */ (function () {
	function Identity_Event_Class() {
	}

    return Identity_Event_Class;
}());

//页面初始化完成调用函数
function pageInit(){
    $("#uploadSubmit").on("click", function() {
        UploadId();
    });
}

// 上传身份证
function UploadId() {
    // 15位和18位身份证号码的正则表达式
    // 测试身份证号
    // var idCard = 336767199903037878;
    var authName = $(".content .wrapper_box #input3").val();
    var authCode = $(".content .wrapper_box #input4").val();

    var file1 = "";
    if($("#example1 .fileinput-preview img").length>0){
        file1= $("#example1 .fileinput-preview img")[0].src;
    }
    var file2 = "";
    if($("#example2 .fileinput-preview img").length>0){
        file2 = $("#example2 .fileinput-preview img")[0].src;
    }
    
    if(authName==""){
        alert("姓名不能为空!");
        return;
    }
    if(authCode==""){
        alert("证件号码不能为空!");
        return;
    }
    if(file1==""||file2==""){
        alert("请上传证件照!");
        return;
    }

    var regIdCard=/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/;
     // 如果通过该验证，说明身份证格式正确，但准确性还需计算
     if(regIdCard.test(authCode)) {
            if(authCode.length==18){
                // 将前17位加权因子保存在数组里
                var idCardWi=new Array( 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 );
                // 这是除以11后，可能产生的11位余数、验证码，也保存成数组
                var idCardY=new Array( 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 );
                var idCardWiSum=0; // 用来保存前17位各自乖以加权因子后的总和
                for(var i=0;i<17;i++){
                idCardWiSum+=authCode.substring(i,i+1)*idCardWi[i];
                }
                var idCardMod=idCardWiSum%11; // 计算出校验码所在数组的位置
                var idCardLast=authCode.substring(17); // 得到最后一位身份证号码
                // 如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                if(idCardMod==2) {
                    if(idCardLast=="X"||idCardLast=="x"){
                //         alert("恭喜通过验证啦！");
                     }else{
                        alert("身份证号码错误！");
                        return;
                     }
                } else {
                    // 用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                    if(idCardLast==idCardY[idCardMod]){
                        // alert("恭喜通过验证啦！");
                    } else{
                        alert("身份证号码错误！");
                        return;
                    }
                 }
          } else {
            alert("身份证格式不正确!");
            return;
        }
     } else {
        alert("身份证格式不正确!");
        return;
     }


    let walletToken  = window.localStorage.getItem("walletToken");
    var reqParamData = {
      "authName": authName,
      "authCode": authCode,
      "authType": 1,
      "file1": file1,
      "file2": file2
    };

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
     };
     let pUrl = serverURL+"/source/file/uploadAuth";
     HttpUtil.doPost(pUrl,reqParamData,function(data){
        let userMsg = window.localStorage.getItem("walletUserInfo");
        let userInfo = JSON.parse(userMsg);
        userInfo.authed = 1
        let userInfoStr = JSON.stringify(userInfo);
        window.localStorage.setItem("walletUserInfo",userInfoStr);
        alert("上传成功!");
        window.location.href = "myInfo.html";
     },headers,null,false,true,true);
  }