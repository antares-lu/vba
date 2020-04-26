import Vue from 'vue';
import VueI18n from 'vue-i18n';
import iviewZh from 'view-design/dist/locale/zh-CN';
import iviewEn from 'view-design/dist/locale/en-US';
import store from '../store';
import zh from './config/zh';
import en from './config/en';

Vue.use(VueI18n);

let language = store.getters['langStore/language'];
const setLanguage = () => {
  if (localStorage.getItem('language')) {
    language = localStorage.getItem('language');
  } else if (navigator.language.includes('en')) {
    language = 'en';
  }
};

setLanguage();

const i18n = new VueI18n({
  locale: language,
  messages: {
    zh: Object.assign(zh, iviewZh),
    en: Object.assign(en, iviewEn),
  },
});

export default i18n;
