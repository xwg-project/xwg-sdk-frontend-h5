function loadJs(url,callback){
 var script=document.createElement('script');
 script.type="text/javascript";
 if(typeof(callback)!="undefined"){
  if(script.readyState){
      script.onreadystatechange=function(){
        if(script.readyState == "loaded" || script.readyState == "complete"){
          script.onreadystatechange=null;
          callback();
        }
      }
  }else{
      script.onload=function(){
        callback();
      }
  }
 }
 script.src=url;
 document.body.appendChild(script);
}

//第一次初始化
var InteractEventClass = /** @class */ (function () {
	function InteractEventClass() {
	}

  InteractEventClass.init = function(data,devId){
    window.localStorage.setItem("curDevice",devId);
    data.curTimestamp = new Date().getTime()/1000;
    window.localStorage.setItem("interactData",JSON.stringify(data));

    var pData = {code:"0",msg:""};
    bridge.call("onInit", pData);

    parent.postMessage({method: "onInit",data:pData}, "*");
    window.removeEventListener("message", onReceiveMessage, false);

    loadInteractJs();
  }

  return InteractEventClass;
}());


function onReceiveMessage(event){
    let paramData = event.data;
    if(paramData==null)
      return;
    let pData = paramData.data;
    let pMethod = paramData.method;
    let pDevId = paramData.devId;
    if(pMethod!="init"){
      return;
    }
    InteractEventClass.init(pData,pDevId);
}

function loadInteractJs(){
  var curDevice = window.localStorage.getItem("curDevice");
  if(curDevice==null||curDevice==undefined||curDevice=="undefined"){
    bridge.register("init", eval("InteractEventClass.init"));
    window.addEventListener("message", onReceiveMessage, false);
    return;
  }
  var path = "";
  switch(Number(curDevice)){
    case 1: //如果是安卓的则去加载安卓需要的脚本
      path = "js/store/android/interact.js"
    break;
    case 2:
      path = "js/store/h5/interact.js";
    break;
  }
  loadJs(path);
}

const isTest = true;

!function () {
  //这段是测试环境 发布时候需要删除
  //-------
  if(isTest){
    loadJs("js/store/test/interact.js");
    // loadJs("js/store/h5/interact.js");
    return;
  }
  //-------

  loadInteractJs();
}();