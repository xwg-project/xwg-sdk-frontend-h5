var HttpUtil = /** @class */ (function () {
	function HttpUtil() {
	}

    HttpUtil.doGet = function(pUrl,pData,callBack,headers,contentType,loadShow,addSign,checkError){
        if(headers==null)
            headers = {};
        if(loadShow){
            //这里写打开loading的接口
        }
        if(addSign)
            pData = SignClass.addSignParam(pData);
        
        if(contentType==null)
            contentType = "application/x-www-form-urlencoded";
        
        $.ajax({
            method: "get",
            url:  pUrl,
            data: pData,
            async: true,
            dataType: "json",
            contentType: contentType,
            headers:headers,
            success: function (data) {
                if(loadShow){
                    //这里写关闭loading的接口
                }
                if(checkError&&RequestError.checkError(data)){
					return;
				}
                if(callBack)
                    callBack.call(this,data.data);
            },
            error: function (data) {
                if(loadShow){
                    //这里写关闭loading的接口
                }
                let urlArr = pUrl.split('/');
				let reqPath = "";
				for(let i=3,lengthI=urlArr.length;i<lengthI;i++){
					reqPath+=(urlArr[i]+"/");
				}
				alert(reqPath+" 请求错误!");
            }
        });
    }

    HttpUtil.doPost = function(pUrl,pData,callBack,headers,contentType,loadShow,addSign,checkError){
        if(headers==null)
            headers = {};
        if(loadShow){
            //这里写打开loading的接口
        }
        if(addSign)
            pData = SignClass.addSignParam(pData);

        if(contentType==null)
            contentType = "application/x-www-form-urlencoded";
        
        $.ajax({
			method: "post",
			url:  pUrl,
            data: pData,
            async: true,
            dataType: "json",
            contentType: contentType,
            headers:headers,
			success: function (data) {
                if(loadShow){
                    //这里写关闭loading的接口
                }
				if(checkError&&RequestError.checkError(data)){
					return;
				}
                if(callBack)
                    callBack.call(this,data.data);
			},
			error: function (data) {
                if(loadShow){
                    //这里写关闭loading的接口
                }
				let urlArr = pUrl.split('/');
				let reqPath = "";
				for(let i=3,lengthI=urlArr.length;i<lengthI;i++){
					reqPath+=(urlArr[i]+"/");
				}
				alert(reqPath+" 请求错误!");
			}
		});
    }

    
    return HttpUtil;
}());

var RequestError = /** @class */ (function () {
	function RequestError() {
	}

    RequestError.checkError = function(data){
        let resultCode = data.code;
        if(resultCode=="0")
            return false;
        
        if(typeof(data.message)=="string"){
            alert(data.message);
		}else if(typeof(data.error)=="string"){
            alert(data.error);
		}
        return true;
    }

    return RequestError;
}());