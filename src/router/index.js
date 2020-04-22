import Vue from 'vue';
import VueRouter from 'vue-router';
import { LoadingBar } from 'view-design';
import authRouter from './modules/authRouter';

Vue.use(VueRouter);

const routes = [
  ...authRouter,
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
