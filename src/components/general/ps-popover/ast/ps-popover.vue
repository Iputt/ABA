<template>
  <a-popover 
    :title="title" 
    :content="content"
    :trigger="trigger"
    :placement="placement"
    :visible="visible"
    :arrow-point-at-center="arrowPointAtCenter"
    @visibleChange="handleChange"
  >
  </a-popover>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: "ps-popover",
  components: {},
  props: {
    content: {
      type: String,
    },
    title: {
      type: String,
    },
    trigger: {
      type: String,
      default: "hover"//focus、click 
    },
    placement: {
      type: String,
    },
    visible: {
      type: Boolean,
    },
    arrowPointAtCenter: {
      type: Boolean,
      default: false
    }
  },
  setup(prop) {
    const handleChange = (visible: boolean) => {
      console.log(visible)
    };
    return {
      handleChange,
    }
  }
})
</script>

<style scoped>
#components-popover-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>>
