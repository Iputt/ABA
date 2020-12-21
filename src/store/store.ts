/*
 * @Description: Helper function
 * @Author: lfy
 * @Date: 2020-12-09 17:23:59
 * @LastEditTime: 2020-12-18 17:21:24
 * @LastEditors: lfy
 */

 import { createStore } from 'vuex'

 interface UserProps{
     isLogin: boolean;
     name?: string;
     id?: number;
 }
 interface GlobalDataProps{
     columns: [];
     posts: [];
     user: UserProps;
 }

 const store = createStore<GlobalDataProps>({
     state: {
        columns: [],
        posts: [],
        user: { isLogin: false }
     },
     mutations: {
        login(state){
            state.user = { ...state.user, isLogin: true,name: 'lfy' }
        }
     },
     getters: {
         //Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
         getColumnsById: (state) => (id: number) => {
             return state.columns.find(c => c === id)
         }
     }
 })

 export default store