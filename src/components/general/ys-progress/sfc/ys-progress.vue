<template>
  <div class="progress">
    <div class="rate" :style="rateStyle"></div>
  </div>
</template>

<script lang="ts" setup>
// expect props options
// let { rate } = defineProps({
//   rate:{
//     type: Number,
//     default: 0
//   }
// });
let rate: any = ref(-64);
let timer: any = null;
let rateStyle = ref({
  "transform": `translate(${-64}px)`
});
watch(rate, (val) => {
  console.log(val)
  rateStyle.value = {
    "transform": `translate(${rate.value}px)`
  }
})


onMounted(() => {
  timer = setInterval(()=>{
    rate.value++
    if (rate.value >= 0) {
        clearInterval(timer)
    }
  }, 150)
})

console.log


</script>

<style scoped>
  /* div {
    font-size: v-bind(fontSize);
  } */
  .progress {
    width: 64px;
    background-color: rgba(0,0,0,0.6);
    border-radius: 1.5px;
    height: 2px;
    border: none;
    padding: 0;
    cursor: none;
    overflow: hidden;
    position: relative;
  }
  .rate {
    width: 64px;
    position: absolute;
    height: 100%;
    background: linear-gradient(to right,#666,#fff);
    border-radius: 1.5px;
  }
  .nums {
      font-size: 16px;
      width: 200px;
      height: 30px;
      line-height: 30px;
      overflow: hidden;
      box-sizing: border-box;
      padding: 0 5px;
  }
  .nums div:first-child {
      float: left;
  }
  .nums div:last-child {
      float: right;
  }
</style>>
