<template>
  <teleport to="#modal">
    <div id = "center" v-if='isOpen'>
      <h2><slot>this is a modal</slot></h2>
      <button @click="btnClick">Close</button>
    </div>
  </teleport>  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Modal',
  props:{
    isOpen: Boolean,
  },
  emits:{
    // 'close-modal': (payload: any) => {
    //   return payload.type === 'close'
    // }
    'close-modal': null
  },
  setup(props, context){
    // context.emit('close-modal',{
    //   type: 'hello'
    // })
    const btnClick = () => {
      context.emit('close-modal')
    }

    return {btnClick}
  }
})
</script>

<style>
  #center {
    width: 200px;
    height: 200px;
    border: 2px solid black;
    background: white;
    position: fixed;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }
</style>