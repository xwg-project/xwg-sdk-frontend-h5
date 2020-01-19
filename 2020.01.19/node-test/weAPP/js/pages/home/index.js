$(function(){
    for(var name in Home_Event_Class){
        EventDispatcher.addEventListener(name,eval("Home_Event_Class." + name));
    }

    pageInit();
});

var Home_Event_Class = /** @class */ (function () {
	function Home_Event_Class() {
	}

	return Home_Event_Class;
}());

//当前顶部显示的货币类型
const g_CurTopShowSymbol = "TCB"
//货币列表
var g_CurrencyList = [];

//支付钥匙对数据;
var g_PayKeyPairData={};
//输入的支付密码
var g_InputPayPassword = "";
//支付订单数据
var g_PayOrderData = {};

//我的货币页数
var g_PageNum0 = 1;
//我的道具页数
var g_PageNum1 = 1;
//每页结果数
// const g_PageSize = 5;

// 设备分辨率高度
var clientHeight = window.screen.height;
$(function(){
  console.log(clientHeight);
});
var mybox = 0.85 * clientHeight;
var mynum = Math.round(mybox / 60);
console.log(mynum);

const g_PageSize = mynum;

var g_MyCurrencyScroll = null;
var g_MyCurrencyScroll1 = null;




//页面初始化完成调用函数
function pageInit(){
    let userMsg = window.localStorage.getItem("walletUserInfo");
    if(userMsg==null){
        //这里写未登录提示跳转去登录
        return;
    }
    let userInfo = JSON.parse(userMsg)
    $(".up .oText").text(userInfo.nickName);
    let avatarStr = userInfo.avatar==""?"./images/touxiang.png":userInfo.avatar;
    $(".photo .ImgSrc").attr('src', avatarStr);

    $(".wrapbox_2 .child1 .spaMoney").text("0.00");

    //注册点击tab按钮监听事件
     $(document).on('click','li',function(e){
         let num = $(this).index();
         onChangeTab(num);
    });
    
    g_MyCurrencyScroll = new iScroll("home", {
        onScrollMove: function () { //拉动时
        //上拉加载
            if (this.y < this.maxScrollY) {
                $(".pull-loading").html("释放加载");
                $(".pull-loading").addClass("loading");
            } else {
                $(".pull-loading").html("上拉加载");
                $(".pull-loading").removeClass("loading");
            }
        },
        onScrollEnd: function () { //拉动结束时
            //上拉加载
            if ($(".pull-loading").hasClass('loading')) {
                $(".pull-loading").html("加载中...");
                showMyCurrencyList();
            }
        }
    });

    g_MyCurrencyScroll1 = new iScroll("profile", {
        onScrollMove: function () { //拉动时
        //上拉加载
            if (this.y < this.maxScrollY) {
                $(".pull-loading").html("释放加载");
                $(".pull-loading").addClass("loading");
            } else {
                $(".pull-loading").html("上拉加载");
                $(".pull-loading").removeClass("loading");
            }
        },
        onScrollEnd: function () { //拉动结束时
            //上拉加载
            if ($(".pull-loading").hasClass('loading')) {
                $(".pull-loading").html("加载中...");
                reqCollectItemList();
            }
        }
    });


    //请求货币列表
    onChangeTab(0);

    let requestObj = getRequest();
    if(requestObj==null||requestObj==""||!requestObj.hasOwnProperty("orderId"))
        return;
    
    let orderId = requestObj.orderId;
    if(orderId!=null&orderId!=""){
        reqPayOrderData(orderId);
    }

    //注册支付点击事件
    $(document).on("click", "#show-custom", function() {
        onClickPay();
    });

    //注册关闭支付弹框事件
    $(document).on("click", ".weui-popup__overlay", function() {
        closePayPopup();
    });
    $(document).on("click", ".close-popup", function() {
        closePayPopup();
    });
    
}

//关闭支付弹框
function closePayPopup(){
    EventDispatcher.dispatchEvent({type:"onPay",message:{code:"1",msg:"用户取消支付"}});
}

//返回URL传参
function getRequest() {
    let url = location.search ;
    url = decodeURI(url);
    let theRequest = new Object();
    if (url.indexOf("?") != -1) {
        let str = url.substr(1);
        strs = str.split("&");
        for(let i = 0; i < strs.length; i ++) {
            theRequest[strs[i].split("=")[0].replace(/\s/g,"")]=unescape(strs[i].split("=")[1].replace(/\s/g,""));
        }
    }
    return theRequest;
}

// 货币换算超过3位数显示逗号,并且取两位小数
function dealNumber(money){
    if(money && money!=null){
        money = String(money);
        let left=money.split('.')[0],right=money.split('.')[1];
        right = right ? (right.length>=2 ? '.'+right.substr(0,2) : '.'+right+'0') : '.00';
        let temp = left.split('').reverse().join('').match(/(\d{1,3})/g);
        return (Number(money)<0?"-":"") + temp.join(',').split('').reverse().join('')+right;
    }else if(money===0){   //注意===在这里的使用，如果传入的money为0,if中会将其判定为boolean类型，故而要另外做===判断
        return '0.00';
    }else{
        return "";
    }
};

//根据类型返回从所有货币列表中返回对应数据
function getCurrencyDataBySymbol(symbol){
    let retData = null;
    if(symbol==null||symbol==""){
        return retData;
    }
    if(g_CurrencyList==null||g_CurrencyList.length<=0){
        let currencyList = window.localStorage.getItem("currencyList");
        g_CurrencyList = JSON.parse(currencyList);
    }
    for(let i=0,lengthI = g_CurrencyList.length;i<lengthI;i++){
        let item = g_CurrencyList[i];
        if(item!=null&&item.symbol==symbol){
            retData = item;
            break;
        }
    }
    return retData;
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


//切换Tab监听事件
function onChangeTab(index){
    $(".pull-loading").html("加载中...");
    $(".scroller .content").html('');
    if(index==0){   //我的货币
        // $("#home .wrapper").html('');
        g_PageNum0 = 1;
        reqCurrencyList();
        // window.scrollTo(0,0);
        g_MyCurrencyScroll.refresh();
    }else if(index==1){ //我的道具
        // $("#profile .wrapper").html('');
        g_PageNum1 = 1;
        reqCollectItemList();
        
        g_MyCurrencyScroll1.refresh();
    }
}

//请求货币列表
function reqCurrencyList(){
    if(g_CurrencyList.length<=0){
        reqAllCurrencyList();
    }else{
        reqMyCurrency();
    }
}

// 请求所有货币列表
function reqAllCurrencyList() {
    let reqParamData = getCommonReqParamObj(false);
    reqParamData.method = "token.list.query";

    let pUrl = serverURL+"/wallet/token/list/query";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        g_CurrencyList = data;
        window.localStorage.setItem("currencyList",JSON.stringify(g_CurrencyList));
        //请求货币列表成功后请求用户货币列表
        reqMyCurrency();
    },null,null,false,true,true);
}

// 请求我的货币
function reqMyCurrency() {
    let walletToken  = window.localStorage.getItem("walletToken");
    if(walletToken==null){
        //这里写未登录提示跳转去登录
        return;
    }

    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.token.list.query";
    reqParamData.symbols =  "";
    
    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/token/list/query";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let resultData = data;
        let index = 0;
        for(let key in resultData){
            let item = resultData[key];
            if(item==null)
                continue;
            let symbol = item.symbol;
            //这里特殊处理顶部显示的货币类型
            if(g_CurTopShowSymbol!=null&&g_CurTopShowSymbol!=""&&g_CurTopShowSymbol==symbol){
                // resultData.split(index,1);
                let balance = item.balance;
                let available = balance.available;
                let currencyData = getCurrencyDataBySymbol(symbol);
                //小数点位数
                let decimalPoint = mult = Math.pow(10, currencyData.decimals);
                let showText = dealNumber((available/decimalPoint).toFixed(2));

                $(".wrapbox_2 .child1 .spaMoney").text(showText);
                // delete resultData[key];
                resultData.splice(index,1);
                break;
            }
            index++;
        }

        g_MyCurrencyList = resultData;

        showMyCurrencyList();
    },headers,null,false,true,true);
}

function showMyCurrencyList(){
    let data = g_MyCurrencyList;
    let pageNum = g_PageNum0;
    let pageSize = g_PageSize;
    let startIndex = (pageNum-1)*pageSize;
    
    let lengthI = (data.length<=(startIndex+pageSize))?data.length:(startIndex+pageSize);
    for(let i=startIndex;i<lengthI;i++){
        let item = data[i];
        if(item==null)
            continue;

        let balance = item.balance;
        let available = balance.available;

        let symbol = item.symbol;
        let currencyData = getCurrencyDataBySymbol(symbol);
        //小数点位数
        let decimalPoint = mult = Math.pow(10, currencyData.decimals);
        let showText = dealNumber((available/decimalPoint).toFixed(2));

        let otems = '<div class=\"otems\"><div class=\"pic\"><img src=\"'+currencyData.icon_url+'\"></div><div class=\"txt1\">'+currencyData.name+'</div><div class=\"txt2\">'+showText+'</div></div>';
        $(".scroller .content").append(otems);
    }
    g_PageNum0++;
    
    if(startIndex>=data.length){
        $('.pull-loading').html("没有数据了");
    }else{
        $(".pull-loading").html("上拉加载");
    }

    g_MyCurrencyScroll.refresh();
    // $('#home .wrapper').html(otems);
}


// 获取用户藏品道具列表
function reqCollectItemList(){
    let walletToken  = window.localStorage.getItem("walletToken");
    if(walletToken==null){
        //这里写未登录提示跳转去登录
        return;
    }

    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.collectible.item.list.query";
    reqParamData.collectible_ids = "";
    
    reqParamData.page_num = g_PageNum1;
    reqParamData.page_size = g_PageSize;
    

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/collectible/item/list/query";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let insetData = data;
        for(let i = 0,lengthI=insetData.length; i < lengthI; i++ ){
            let category = insetData[i].category;
            let icon_url = category.icon_url;
            let title =  category.title;

            let properties = insetData[i].properties;
            let rarity = properties.rarity;
            let generation = properties.generation;
            let level = properties.level; 
            let cst = properties.cst;
            if(rarity=="common") {
                rarity="普通"
            }
            else if(rarity=="rare"){
                rarity="稀有"
            }
            else if(rarity=="epic"){
                rarity="史诗"
            }
            else if(rarity=="legendary"){
                rarity="传奇"
            }
            else if(rarity=="mythical"){
                rarity="神话"
            }

            let otems = '<div class="otems">'+
                    '<div class="pic">'+
                    '<img src="'+icon_url+'">'+
                    '</div>'+
                    '<div class="txt1">'+
                        '<div class="txt1_1">'+ title +'</div>'+
                        '<div class="txt1_2">'+
                        '<span class="span1">'+ rarity +'</span>'+
                        '<span class="span2">'+ generation + '代' + '</span>'+
                        '<span>'+ level + '星' + '</span>'+
                        '</div>'+  
                    '</div>'+
                    '<div class="txt2">'+cst+'</div>'+
            '</div>';
            $(".scroller .content1").append(otems);
        }

        g_MyCurrencyScroll1.refresh();
        g_PageNum1++;

        if(insetData.length<g_PageSize){
            $('.pull-loading').html("没有数据了");
        }else{
            $(".pull-loading").html("上拉加载");
        }
    },headers,null,false,true,true);

}

//当点击支付
function onClickPay(){
    // 获取密钥对
    reqKeyPair();
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
        // 公钥 ID
        g_PayKeyPairData.id = resultData.id;
        // 密钥对
        g_PayKeyPairData.pem = resultData.pem;

        checkOpenPayPWInputBox();
    },headers,null,false,true,true);

}


//检测打开密码输入框
function checkOpenPayPWInputBox(){
    let walletUserInfo = window.localStorage.getItem("walletUserInfo");
    let userInfo = JSON.parse(walletUserInfo)
    let payPsd = userInfo.payPsd;
    //先检测是否有设置过支付密码 0未设置
    if(payPsd==0){
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
    }else{
        let oData = {priceText:g_PayOrderData.total_amount + " " + g_PayOrderData.symbol,promptText:"请输入支付密码"}
        openPasswordInputBox(oData,onInputPayPWComplete);
    }
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

    //这里是新设置用户支付密码请求;
    let walletToken  = window.localStorage.getItem("walletToken");
    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.user.pin.update";
    reqParamData.new_pin = encrypt(g_InputPayPassword,g_PayKeyPairData.pem,g_PayKeyPairData.id);
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
        window.localStorage.setItem("walletUserInfo",walletToken);
        
        alert("支付密码设置成功!");
    },headers,null,false,true,true);

}

//当输入密码完成
function onInputPayPWComplete(password){
    //请求支付订单
    g_InputPayPassword = password;
    reqPayOrder();
    closePasswordInputBox();
}


// 支付订单
function reqPayOrder() {
    let walletToken  = window.localStorage.getItem("walletToken");
    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.payment.pay";
    reqParamData.order_no = g_PayOrderData.order_no;
    reqParamData.pin = encrypt(g_InputPayPassword,g_PayKeyPairData.pem,g_PayKeyPairData.id);

    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/payment/pay";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        EventDispatcher.dispatchEvent({type:"onPay",message:{code:0,msg:""}});
        $.closePopup("#half");
        alert("支付成功!");
    },headers,null,false,true,true);

}

//请求支付订单数据
function reqPayOrderData(orderId){
    let walletToken  = window.localStorage.getItem("walletToken");
    if(walletToken==null){
        //这里写未登录提示跳转去登录
        return;
    }
        //676445623473405952
    let reqParamData = getCommonReqParamObj(true);
    reqParamData.method = "person.order.info.query";
    reqParamData.order_no = orderId;


    let headers = {
        'Authorization': "Bearer " + walletToken,
        'Accept-Language': 'zh'
    };
    let pUrl = serverURL+"/wallet/person/order/info/query";
    HttpUtil.doPost(pUrl,reqParamData,function(data){
        let resData = data;
        let status = resData.status;
        let emsg = "";
        if(status=="SUCCESS"){
            emsg = "订单已完成支付,请勿重复提交!";
        }else if(status=="CLOSED"){
            emsg = "订单已关闭!";
        }
        
        if(emsg!=""){
            EventDispatcher.dispatchEvent({type:"onPay",message:{code:1,msg:emsg}});
            alert(emsg);
            return;
        }
        
        let obj = new Object();

        let symbol = resData.symbol;
        let currencyData = getCurrencyDataBySymbol(symbol);
        //小数点位数
        let decimalPoint = mult = Math.pow(10, currencyData.decimals);
        obj.symbol = symbol; // 货币类型
        obj.order_no = resData.order_no;		//订单编号
        obj.total_amount = parseFloat((resData.total_amount/decimalPoint).toFixed(2));//订单金额
        obj.fee_amount = parseFloat((resData.fee_amount/decimalPoint).toFixed(2));	//手续费用
        obj.fee_symbol = resData.fee_symbol;	//手续费通证符号
        obj.payer_paid_amount = parseFloat((resData.payer_paid_amount/decimalPoint).toFixed(2));	//付款人实付金额
        obj.payee_id = resData.payee_id;	//收款用户id
        obj.subject = resData.subject;		//交易标题
        obj.body = resData.body;			//交易描述
        obj.status = resData.status;		//交易状态 WAIT_PAY待支付 PAID已支付 SUCCESS订单成功，收款人已收款 CLOSED订单关闭
        
        g_PayOrderData = obj;
        $("#half .cellWrap .cell1 .p1").text(dealNumber(obj.total_amount));
        $("#half .cellWrap .cell1 .p2").text(obj.symbol);
        $("#half .cellWrap .cell2 .orderInfo").text(obj.subject);
        $("#half .cellWrap .cell3 .orderDesc").text(obj.body);

        $("#half").popup();
    },headers,null,false,true,true);

}

//关闭钱包窗口
function closeWalletWindow(){
    EventDispatcher.dispatchEvent({type:"onCloseWindows",message:{code:"0",msg:""}});
}
