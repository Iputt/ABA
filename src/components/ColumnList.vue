<template>
  <div class="row">
    <div v-for="column in ColumnList" :key="column.id" class="col-4">
      <div class="card">
        <img :src="column.avatar" :alt="column.title">
        <div class="card-body">
          <h5 class="card-title">{{column.title}}</h5>
          <p class="card-text">{{column.description}}</p>
          <a class="btn btn-primary" href="#">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export interface ColumnProps {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

export default defineComponent({
  name: 'ColumnList',
  props:{
    list:{
      type: Array as PropType<ColumnProps[]>,
      required: true
    }
  },
  setup(props){
    const ColumnList = computed(() => {
      return props.list.map(coloum => {
        if(!coloum.avatar){
          coloum.avatar = require("@/assets/logo.png")
        }
        return coloum
      })
    })
    return {
      ColumnList
    }
  }
})
</script>

<style>

</style>