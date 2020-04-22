import Vue from 'vue';
import router from './router';
import store from './store';
import i18n from './language/i18n';
import iView from './plugins/iview';
import lottie from './plugins/lottie';
import Vba from './Vba.vue';

Vue.config.productionTip = false;

Vue.use(iView);
Vue.use(lottie);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(Vba),
}).$mount('#app');
