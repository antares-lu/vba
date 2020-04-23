import Vue from 'vue';
import Vuex from 'vuex';
import authStore from './modules/authStore';
import siderStore from './modules/siderStore';

Vue.use(Vuex);

export default new Vuex.Store({
  // 设置严格模式
  strict: process.env.NODE_ENV !== 'production',

  modules: {
    authStore,
    siderStore,
  },
});
