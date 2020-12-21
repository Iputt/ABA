/*
 * @Description: Helper function
 * @Author: lfy
 * @Date: 2020-12-09 17:23:59
 * @LastEditTime: 2020-12-21 18:05:15
 * @LastEditors: lfy
 */

import { createRouter, createWebHistory } from 'vue-router'
import store from '../store/store'
import HelloWorld from '../components/HelloWorld.vue'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
          path: '/',
          name: 'home',
          component: HelloWorld
        },
        {
          path: "/table",
          name: 'table',
          component: () => import("../views/a_table.vue"),
        },
        {
          path: "/ps-grid",
          name: 'ps-grid',
          component: () => import("../views/ps-grid.vue"),
        },
    ]
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


export default router;
//const route = useRoute();

