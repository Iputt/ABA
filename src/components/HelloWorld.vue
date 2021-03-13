<!--
 * @Description: 
 * @Author: lfy
 * @Date: 2020-12-09 15:10:23
 * @LastEditTime: 2020-12-18 18:18:25
 * @LastEditors: lfy 
-->
<template>
  <div class="hello">
    <div v-for="(item, index) in source" :key="index">
      <transition name = "fade">
        <div v-show = "show">
            <div v-for="sent in item.sentence" :key="sent" v-bind:style = "styleobj">{{sent}}</div>
        </div>
    </transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'HelloWorld', 
  props: {
    msg: String,
  },
  setup(props){
    const sources = [
      {
        age:'十九岁',
        sentence:[
          '我要做回那个美丽的姑娘',
          '要早早的睡',
          '爱自己七分爱他人三分',
          '变得更优秀',
          '遇见更好的他...'
        ],
     
      }
    ]
    const source = reactive(sources);
    const show = ref(true);
    const styleobj = ref({fontSize:'60px',color:'white'});
    setTimeout(() => {
      show.value = !show.value
    },2000)
    return {
      show,
      styleobj,
      source
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-leave-active {
    transition: opacity 3s
}
.fade-leave-to {
    opacity: 0
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
