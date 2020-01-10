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

!function () {
  var curDevice = window.localStorage.getItem("curDevice");
  if(curDevice==null){
    bridge.register("init", eval("init"));
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
}();


function init(data,devId){
  window.localStorage.setItem("curDevice",devId);
  window.localStorage.setItem("interactData",JSON.stringify(data));
  bridge.call("onInit", {code:"0",msg:""});
}