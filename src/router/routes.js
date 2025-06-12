;

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Home.vue'),
  },
  {
    path: '/play',
    name: 'Game',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Game.vue'),
  },
  {
    path: '/rules',
    name: 'Rules',
    component: () => import(/* webpackChunkName: "Home" */ '@/pages/Rules.vue'),
  },
];

export default routes;
