/*
 * @Author: your name
 * @Date: 2021-04-19 16:55:19
 * @LastEditTime: 2021-05-31 16:54:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\shims-vue.d.ts
 */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'mockjs'
declare module 'swiper/vue'

