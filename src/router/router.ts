import HelloWorld from '../components/HelloWorld.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld,
  },
  {
    path: '/ys-alert',
    name: 'ys-alert',
    component: () => import('../components/general/ys-alert/sfc/ys-alert.vue'),
  },
  {
    path: '/ys-upload',
    component: () =>
      import('../components/general/ys-upload/sfc/ys-upload.vue'),
    name: 'upload',
  },
  {
    path: '/ys-message',
    component: () => import('../components'),
  },
];

export default routes;
