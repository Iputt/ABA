<template>
  <!-- <div class="container">
    <router-view ref="global"></router-view> 
  </div> -->
  <!-- <ys-progress></ys-progress> -->
  <!-- <ys-upload></ys-upload> -->
  <ys-message></ys-message>
</template>

<script lang="ts" setup>
import api from './api/index'
import { providerEmitter } from './event'
import { provideStore, STOREMODULETAG } from './store'
import YsUpload from './components/general/ys-upload/sfc/ys-upload.vue';

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

</script>

<style lang="scss">
@import url('./main.scss');
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  display: flex;
  justify-content: center;
  align-content: center;
}
</style>
