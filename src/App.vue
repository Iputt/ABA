<template>
  <div class="container">
    <router-view ref="global"></router-view> 
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue"
import api from './api/index'
import { providerEmitter } from './event'
import { provideStore, STOREMODULETAG } from './store'

export default {
  name: "App",
  setup() {
    providerEmitter();
    provideStore();
    provideStore(STOREMODULETAG.AUTHORITYSTORE);
    onMounted( async () => {
      let userInfo = await api.getUserInfo();
      console.log("获取数据：", userInfo);
    })

    const handleUserInfo = (val: number) => {
      console.log('处理用户信息', val);
    }
    return {
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
