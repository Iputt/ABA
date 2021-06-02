/*
 * @Author: your name
 * @Date: 2021-04-19 16:55:19
 * @LastEditTime: 2021-05-31 17:18:43
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\router\router.ts
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
          path: "/UserList",
          name: 'UserList',
          component: () => import("../views/UserList.vue"),
        },
        {
          path: "/ps-grid",
          name: 'ps-grid',
          component: () => import("../views/ps-grid.vue"),
        },
        {
          path: "/ps-avatar",
          name: 'ps-avatar',
          component: () => import("../components/general/ps-avatar/ast/ps-avatar.vue"),
        },
        {
          path: "/ps-badge",
          name: 'ps-badge',
          component: () => import("../components/general/ps-badge/ast/ps-badge.vue"),
        },
        {
          path: "/ps-calendar",
          name: 'ps-calendar',
          component: () => import("../components/general/ps-calendar/ast/ps-calendar.vue"),
        },
        {
          path: "/ps-layout",
          name: 'ps-layout',
          component: () => import("../components/general/ps-layout/ast/ps-layout.vue"),
        },
        {
          path: "/ps-picshow",
          name: 'ps-picshow',
          component: () => import("../components/general/ps-picshow/ast/ps-picshow.vue"),
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

