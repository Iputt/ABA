<template>
  <div class="container">
    <router-view ref="global"></router-view> 
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue"
import api from './api/index'
export default {
  name: "App",
  setup() {
    onMounted( async () => {
      let userInfo = await api.getUserInfo();
      console.log("获取数据：", userInfo);
    })
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
}
</style>
