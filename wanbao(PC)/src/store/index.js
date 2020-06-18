import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state = {
  // 要设置的全局访问的state对象
  // id: '001',
  // name: 'hello',
};
// 实时监听state值的变化(最新状态)类似于计算属性computed
const getters = {
  isOk() {
    return state.id;
  },
  noOk() {
    return state.name;
  },
};
const mutations = {};
const actions = {};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});
export default store;
