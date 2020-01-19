var IframeEventClass = /** @class */ (function () {
	function IframeEventClass() {
	}
	
	IframeEventClass.init = function(data,devId){
		window.localStorage.setItem("curDevice",data.devId);
		data.curTimestamp = new Date().getTime()/1000;
		window.localStorage.setItem("interactData",JSON.stringify(data));
		ParentEventClass.onInit({code:"0",msg:""});
	}
	
	IframeEventClass.login = function(){
        // var data = ParentEventClass.onGetKV({key:"wallet_access_token",defaultObject:""});
		let data  = window.localStorage.getItem("walletToken");
		if(data!=null&&data!=""){
			EventDispatcher.dispatchEvent({type:"local_OnGoHomePage",message:""});
			ParentEventClass.onLogin({code:"0",msg:""});
		}else{
			EventDispatcher.dispatchEvent({type:"local_OnGoLoginPage",message:""});
		}
	}
	
	IframeEventClass.goLogin = function(authCode){
		EventDispatcher.dispatchEvent({type:"local_GoLogin",message:authCode});
	}
	
	IframeEventClass.logout = function(){
		EventDispatcher.dispatchEvent({type:"local_OnLogout",message:""});
		ParentEventClass.onLogout({code:"0",msg:""});
	}
	
	IframeEventClass.pay = function(orderId){
		// var data = ParentEventClass.onGetKV({key:"wallet_access_token",defaultObject:""});
		let data  = window.localStorage.getItem("walletToken");
		if(data!=null&&data!=""){
			EventDispatcher.dispatchEvent({type:"local_OnGoHomePage",message:"orderId="+orderId});
		}else{
			EventDispatcher.dispatchEvent({type:"local_OnGoLoginPage",message:""});
		}
	}
	
	IframeEventClass.openWindow = function(){
		// var data = ParentEventClass.onGetKV({key:"wallet_access_token",defaultObject:""});
		let data  = window.localStorage.getItem("walletToken");
		if(data!=null&&data!=""){
			EventDispatcher.dispatchEvent({type:"local_OnGoHomePage",message:""});
		}else{
			EventDispatcher.dispatchEvent({type:"local_OnGoLoginPage",message:""});
		}
	}
	
	return IframeEventClass;
}());

var InteractEvent = (function () {
    function InteractEvent() {
    }

	InteractEvent.onLogin = function(data){
		var result = {code:"0",msg:""};
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			result = data.message;

		ParentEventClass.onLogin(result);
	}
	
	InteractEvent.getAuthCode = function(data){
		var result = {code:"0",msg:""};
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			result = data.message;

		ParentEventClass.getAuthCode(result);
	}

	InteractEvent.onPay = function(data){
		var reqData = {};
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			reqData = data.message;
			
		ParentEventClass.onPay(reqData);
	}

	InteractEvent.onSetKV = function(data){
		var reqData = {};
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			reqData = data.message;
			
		ParentEventClass.onSetKV(reqData);
	}

	InteractEvent.onCloseWindows = function(data){
		var reqData = {};
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			reqData = data.message;
			
		ParentEventClass.onCloseWindows(reqData);
	}
	

	return InteractEvent;
}());

!function () {
	window.addEventListener("message", receiveMessage, false);
	function receiveMessage(event){
		// let curUrl=window.location.href;
		// let urlStrArr = curUrl.split('/');
		// let indexHtml = "index.html";
		// let newUrl = "";
		// for(let i=0,lengthI=urlStrArr.length;i<lengthI;i++){
		// 	if(i==lengthI-1){
		// 		newUrl+=indexHtml;
		// 		break;
		// 	}
		// 	newUrl+=(urlStrArr[i]+"/");
		// }
		// if (event.origin !== newUrl){
		// 	return;
		// }
        // if(event.source!=parent){
        //     return;
        // }
        // console.log("event.source:"+event.source +" parent:"+parent);
		// console.log("event.origin:"+event.origin);


		let paramData = event.data;
		if(paramData==null)
			return;
		let pData = paramData.data;
		let pMethod = paramData.method;
		let pDevId = paramData.devId;
		let func =eval("IframeEventClass." + pMethod);
		if(func){
            func.call(this,pData,pDevId);
        }
			
	}
	
	 
	for(var name in InteractEvent){
		EventDispatcher.addEventListener(name,eval("InteractEvent." + name));
	}

}();



var ParentEventClass = (function () {
    function ParentEventClass() {
    }
	
	ParentEventClass.onInit = function(data){
		parent.postMessage({method: "onInit",data:data}, "*");
	}
	
	ParentEventClass.onLogin = function(data){
        // parent.onLogin(data);
		parent.postMessage({method: "onLogin",data:data}, "*");
	}
	
	ParentEventClass.onLogout = function(data){
        // parent.onLogout(data);
		parent.postMessage({method: "onLogout",data:data}, "*");
	}
	
	ParentEventClass.onPay = function(data){
        // parent.onPay(data);
		parent.postMessage({method: "onPay",data:data}, "*");
	}
	
	ParentEventClass.onSetKV = function(data){
        // parent.onSetKV(data);
		// parent.postMessage({method: "onInit",data:data}, "*");
	}
	
	ParentEventClass.onGetKV = function(data){
		// var result = parent.onGetKV(data);
		// return result;
        parent.postMessage({method: "onGetKV",data:data}, "*");
		return"";
	}
	
	ParentEventClass.onCloseWindows = function(data){
        // parent.onCloseWindows(data);
		parent.postMessage({method: "onCloseWindows",data:data}, "*");
	}
	
	ParentEventClass.onGetLoginCode = function(data){
        // parent.onGetLoginCode(data);
		parent.postMessage({method: "onGetLoginCode",data:data}, "*");
	}
	
	ParentEventClass.getAuthCode = function(data){
        // parent.getAuthCode(data);
		parent.postMessage({method: "getAuthCode",data:data}, "*");
	}
	
	return ParentEventClass;
}());