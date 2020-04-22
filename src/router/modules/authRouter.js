const authRouter = [
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */'../../views/auth/login/index.vue'),
  },
  {
    path: '/reset',
    name: 'Reset',
    component: () => import(/* webpackChunkName: "login" */'../../views/auth/reset/index.vue'),
  },
];

export default authRouter;
