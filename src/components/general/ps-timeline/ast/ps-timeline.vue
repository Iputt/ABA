<template>
  <a-timeline :pending="pending" :mode="mode" :reverse="reverse" :pendingDot="pendingDot">
    <a-timeline-item :position="position" :color="color" v-for="item,index in items" :key="index">
      <template v-if="item.dot" #dot><clock-circle-outlined style="font-size: 16px" /></template>
      {{ item.text }}
    </a-timeline-item>
  </a-timeline>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { ClockCircleOutlined } from '@ant-design/icons-vue';

const enum timelineModeEnum {
  "left",
  "alternate",
  "right"
}

export default defineComponent({
  name: "ps-timeline",
  components: {
    ClockCircleOutlined
  },
  props: {
    pending: {
      type: Boolean || String,
      default: false
    },
    pendingDot: {
      type: String,
    },
    reverse: {
      type: Boolean,
      default: false
    },
    mode: {
      type: Object as PropType<timelineModeEnum>,
      default: timelineModeEnum.left
    },
    color: {
      type: String,
      default: "blue"
    },
    dot: {
      type: String,
    },
    position: {
      type: String
    }
  },
  setup() {
    return {
    }
  }
})
</script>

<style scoped>

</style>>
