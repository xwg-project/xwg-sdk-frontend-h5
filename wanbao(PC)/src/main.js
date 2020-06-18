import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import Router from 'vue-router';
import Echarts from 'echarts';
import 'element-ui/lib/theme-chalk/index.css';
import 'jquery';
import 'lib-flexible';
// import './../rem';
import App from './App';
import router from './router';
// 引入store
import store from './store';

Vue.use(Router);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);
Vue.prototype.echarts = Echarts;
Vue.use(Echarts);
const originalPush = Router.prototype.push;
// Router.prototype.push = function push(location) {
//   return originalPush.call(this, location).catch(err => err);
// };
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject);
  } else {
    return originalPush.call(this, location).catch(err => err);
  }
};
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});
