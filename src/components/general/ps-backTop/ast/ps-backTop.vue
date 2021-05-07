<template>
   <a-back-top />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "ps-backTop",
  components: {},
  props: {
    target: {
      type: Function,
    },
    visibilityHeight: {
      type: Number,
      default: 400
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
#components-back-top-demo-custom .ant-back-top {
  bottom: 100px;
}
#components-back-top-demo-custom .ant-back-top-inner {
  height: 40px;
  width: 40px;
  line-height: 40px;
  border-radius: 4px;
  background-color: #1088e9;
  color: #fff;
  text-align: center;
  font-size: 20px;
}
</style>>
