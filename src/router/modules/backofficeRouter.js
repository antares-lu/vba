const backofficeRouter = [
  {
    path: '/backoffice',
    component: () => import(/* webpackChunkName: "backoffice" */'../../layouts/BackOffice.vue'),
    redirect: '/backoffice/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */'../../views/Dashboard.vue'),
      },
    ],
  },
];

export default backofficeRouter;
