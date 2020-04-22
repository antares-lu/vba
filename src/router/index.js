import Vue from 'vue';
import VueRouter from 'vue-router';
import { LoadingBar } from 'view-design';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../views/auth/login/index.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "login" */'../views/auth/reset/index.vue'),
  },
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
