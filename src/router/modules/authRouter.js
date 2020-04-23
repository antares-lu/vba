import { Notice } from 'view-design';

const authRouter = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */'../../views/auth/login/Index.vue'),
    beforeEnter: (to, from, next) => {
      Notice.info({
        title: '你好！',
        desc: '😮 感谢使用 vba。',
        duration: 6,
      });

      next();
    },
  },
  {
    path: '/reset',
    name: 'reset',
    component: () => import(/* webpackChunkName: "login" */'../../views/auth/reset/Index.vue'),
  },
];

export default authRouter;
