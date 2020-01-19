const serverURL = "http://192.168.1.121:8888";

// 全局加载时，请先引入loading.js 
function loading1() {
  $('body').loading({
    loadingWidth:240,
    title:'请稍等!',
    name:'test',
    discription:'加载中 . . . .',
    direction:'column',
    type:'origin',
    // originBg:'#71EA71',
    originDivWidth:40,
    originDivHeight:40,
    originWidth:6,
    originHeight:6,
    smallLoading:false,
    loadingMaskBg:'rgba(0,0,0,0.2)'
  });
}