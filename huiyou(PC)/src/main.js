import 'babel-polyfill';
import Vue from 'vue';
import VueResource from 'vue-resource';
import ElementUI from 'element-ui';
import Router from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import 'lib-flexible';
import 'jquery';
import App from './App';
import router from './router';
// 引入store
import store from './store';

Vue.use(Router);
Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(ElementUI);
const originalPush = Router.prototype.push;
// 路由检测
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
