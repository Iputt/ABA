/*
 * @Author: your name
 * @Date: 2021-04-19 16:55:19
 * @LastEditTime: 2021-05-31 17:18:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\router\router.ts
 */
import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import routes from './router'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: routes
})

//路由导航守卫
// router.beforeEach((to, from, next) => {
// if (to.name !== 'login' && !store.state.user.isLogin) {
//     next({ name: 'login' })
// } else {
//     next()
// }
// })
//isAuthenticated
//router.beforeEach(() => store.state.user.isLogin);

export default router
//const route = useRoute();
