
const appId = "1561527878813";
const appSecret = "e31ac1bb84934aaa9e46d5daf08301d9";

var InteractEvent = (function () {
    function InteractEvent() {
    }
	
	InteractEvent.getAuthCode = function(data){
		var param = "";
		if(data.hasOwnProperty("type")&&data.hasOwnProperty("message"))
			param = data.message;

		var dataCode = {
			"client_id": appId,
			"client_secret": appSecret,
			"username": param.msg
		};
		let pUrl = serverURL+"/appauth/login/thirdAuthCode";
		HttpUtil.doPost(pUrl,dataCode,function(data){
			var authCode = data;
			// goLogin(authCode);
			EventDispatcher.dispatchEvent({type:"local_GoLogin",message:authCode});
		},null,null,false,true,true);
	}

	return InteractEvent;
}());

var TestEventClass = /** @class */ (function () {
	function TestEventClass() {
	}
	
	TestEventClass.getServerTimestamp = function(){
		var sendData={
			"version":"1.0",
			"timestamp":SignClass.getCurTimestamp(),
			"signFrom":"server",
			"nonce":SignClass.getNonce(),
			"clientId":appId
		};
		sendData = SignClass.signFunc(sendData); 
		let pUrl = serverURL+"/appauth/login/synSystemTime";
		HttpUtil.doPost(pUrl,sendData,function(data){
			var dateString=data+"";
			var pattern = /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/;
			var formatedDate = dateString.replace(pattern, '$1/$2/$3 $4:$5:$6');
			var ddate = new Date(formatedDate);

			var interactData = {appid:appId,curTimestamp:SignClass.getCurTimestamp(),timestamp:Math.floor(ddate/1000)}
			window.localStorage.setItem("interactData",JSON.stringify(interactData));
		},null,null,false,false,true);
	}
	return TestEventClass;
}());


!function () {
	let interactData = window.localStorage.getItem("interactData");
    if(interactData==null){
        TestEventClass.getServerTimestamp();
    }
	
	for(var name in InteractEvent){
		EventDispatcher.addEventListener(name,eval("InteractEvent." + name));
	}

}();