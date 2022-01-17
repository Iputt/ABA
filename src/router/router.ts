import HelloWorld from '../components/HelloWorld.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },
  {
    path: '/ys-alert',
    name: 'ys-alert',
    component: () => import('../components/general/ys-alert/sfc/ys-alert.vue')
  }
]

export default routes
