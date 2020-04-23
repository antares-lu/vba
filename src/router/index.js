import Vue from 'vue';
import VueRouter from 'vue-router';
import { LoadingBar } from 'view-design';
import indexRouter from './modules/indexRouter';
import authRouter from './modules/authRouter';
import backofficeRouter from './modules/backofficeRouter';

Vue.use(VueRouter);

const routes = [
  ...indexRouter,
  ...authRouter,
  ...backofficeRouter,
];

const router = new VueRouter({
  mode: 'history',

  base: process.env.BASE_URL,

  routes,
});

/**
 * 路由全局前置守卫
 */
router.beforeEach((to, from, next) => {
  LoadingBar.start();
  next();
});

/**
 * 路由全局后置钩子
 */
router.afterEach(() => {
  LoadingBar.finish();
});

export default router;
