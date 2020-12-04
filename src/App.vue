<template>
  <div class="container">
    <column-list :list="list"></column-list>
  </div>
</template>

<script lang="ts">
import { ref } from "vue"
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
const testData: ColumnProps[] = [
  {
    id:1,
    title: 'sdfsdf',
    description: 'sdfsddgalkdjlgsdlfsdfasdf',
    avatar: ''
  },
  {
    id:2,
    title: 'sdfsdf',
    description: 'sdfsddgalkdjlgsdlfsdfasdf',
    avatar: ''
  },
  {
    id:3,
    title: 'sdfsdf',
    description: 'sdfsddgalkdjlgsdlfsdfasdf',
    avatar: ''
  },
  {
    id:4,
    title: 'sdfsdf',
    description: 'sdfsddgalkdjlgsdlfsdfasdf',
    avatar: ''
  }
]

export default {
  components: {
    ColumnList
  },
  name: "App",
  setup() {
    return {
      list: testData
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
