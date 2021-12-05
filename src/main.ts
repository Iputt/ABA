import { Mock } from 'mockjs';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './assets/i18n'

import '../mock/mock'
//使用--import { getUrl } from '../api/index'

const app = createApp(App)
app.config.performance = false;

//使用路由插件
app.use(router)
//使用i18n
app.use(i18n)

app.mount('#app')
