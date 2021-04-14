<!--
 * @Description: 
 * @Author: lfy
 * @Date: 2020-12-09 15:10:23
 * @LastEditTime: 2020-12-21 13:28:05
 * @LastEditors: lfy
-->
<template>
  <div class="container">
    <router-view ref="global"></router-view>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
// import ColumnList, { ColumnProps } from './components/ColumnList.vue'


export default {
  components: {
  },
  name: "App",
  setup() {
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
