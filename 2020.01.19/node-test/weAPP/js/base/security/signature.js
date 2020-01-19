var SignClass = /** @class */ (function () {
	function SignClass() {
	}

    SignClass.getCustomTimestamp = function(timestamp){
        var date = new Date(timestamp);
        return date.getFullYear().toString() + SignClass.pad2(date.getMonth() + 1) + SignClass.pad2(date.getDate()) + SignClass.pad2(date.getHours()) + SignClass.pad2(date.getMinutes()) + SignClass.pad2(date.getSeconds());
    }

    SignClass.pad2= function(n) { 
        return n < 10 ? '0' + n : n;
    }

    SignClass.getCurTimestamp = function(){
		var date = new Date().getTime()/1000;
		return Math.floor(date);
	}

    SignClass.getAppId = function(){
        let interactData = window.localStorage.getItem("interactData");
        if(interactData==null){
            return "";
        }

        let interactJsonData = JSON.parse(interactData);
        let appId = interactJsonData.appid;
        return appId;
    }

    SignClass.getNonce = function(){
        var nonce = SignClass.getAppId()+"_123456_"+SignClass.randomString(6);
		nonce = hex_md5(nonce);
		return nonce;
	}

	SignClass.randomString = function(len){
		//默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1
		var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
		var tempLen = chars.length, tempStr='';
		for(var i=0; i<len; ++i){
			tempStr += chars.charAt(Math.floor(Math.random() * tempLen ));
		}
		return tempStr;
	}

	SignClass.abcAppKey = function(){
        var secret = "XWG_"+SignClass.getAppId();
        return hex_md5(secret);
    }

	SignClass.signFunc = function(params){
		if (typeof params == "string") {
			var signStr = params.split("&").sort().join("&")+"&clientSecret="+SignClass.abcAppKey();
			var signMD5Str = hex_md5(signStr);
			var newUrl = params + '&sign=' + signMD5Str;
			return newUrl;
		} else if (typeof params == "object") {
			var arr = [];
			for (var i in params) {
				arr.push((i + "=" + params[i]));
			}
				var paramStr = arr.join("&");
			var signStr = arr.sort().join("&")+"&clientSecret="+SignClass.abcAppKey();
			var signMD5Str = hex_md5(signStr);
			var newUrl = paramStr + '&sign=' + signMD5Str;
			return newUrl;
		}
	}

	SignClass.addSignParam = function(data){
    if(data==null)
        return data;
    
    let interactData = window.localStorage.getItem("interactData");
    if(interactData==null){
        return data;
    }

    let interactJsonData = JSON.parse(interactData);
    let appId = interactJsonData.appid;

    var newData = data;
    if(!newData.hasOwnProperty("clientId")){
        newData.clientId = appId;
    }

    let nonce = SignClass.getNonce();
    if(!newData.hasOwnProperty("nonce")){
        newData.nonce = nonce;
    }


    let curTimestamp = SignClass.getCurTimestamp();
    let sTimestamp = interactJsonData.timestamp;
    let cTimestamp = interactJsonData.curTimestamp;
    let serTimestamp = sTimestamp-cTimestamp+curTimestamp;
    let timestamp = SignClass.getCustomTimestamp(serTimestamp*1000);

    if(!newData.hasOwnProperty("timestamp")){
        newData.timestamp = timestamp;
    }

    if(!newData.hasOwnProperty("sign")){
        var signData={
			"version":"1.0",
			"timestamp":timestamp,
			"nonce":nonce,
			"clientId":appId
		};

        newData.sign = SignClass.signFunc(signData);
    }

    if(!newData.hasOwnProperty("version")){
        newData.version = "1.0";
    }

    if(!newData.hasOwnProperty("signFrom")){
        newData.signFrom = "client";
    }

    return newData;
}

	return SignClass;
}());