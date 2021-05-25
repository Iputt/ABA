/*
 * @Author: your name
 * @Date: 2021-04-19 16:55:19
 * @LastEditTime: 2021-05-21 12:52:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\main.ts
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'

import Antd from 'ant-design-vue'
import VXETable from './table/table'
import i18n from './assets/i18n'

import './api/mock'
//使用--import { getUrl } from '../api/index'

import 'ant-design-vue/dist/antd.css'
import 'vxe-table/lib/style.css'

const app = createApp(App)
app.config.performance = false;

//使用路由插件
app.use(router)
//使用i18n
app.use(i18n)
//使用vxe-table
app.use(VXETable)
//使用ant-design-vue
app.use(Antd);

//挂载内部对象 vxe-table
// app.config.globalProperties.$XModal = VXETable.modal
// app.config.globalProperties.$XPrint = VXETable.print
// app.config.globalProperties.$XSaveFile = VXETable.saveFile
// app.config.globalProperties.$XReadFile = VXETable.readFile

app.mount('#app')
