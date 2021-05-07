<template>
  <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>

  <a-timeline>
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="green">Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="red">
      <p>Solve initial network problems 1</p>
      <p>Solve initial network problems 2</p>
      <p>Solve initial network problems 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item>
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
    <a-timeline-item color="gray">
      <p>Technical testing 1</p>
      <p>Technical testing 2</p>
      <p>Technical testing 3 2015-09-01</p>
    </a-timeline-item>
  </a-timeline>

  <div>
    <a-timeline pending="Recording..." :reverse="reverse">
      <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
      <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
      <a-timeline-item>Technical testing 2015-09-01</a-timeline-item>
    </a-timeline>
    <a-button type="primary" style="margin-top: 16px" @click="handleClick">Toggle Reverse</a-button>
  </div>
  <a-timeline>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item color="red">
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
  </a-timeline>
  <a-timeline mode="alternate">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item color="green">Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
      laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
      beatae vitae dicta sunt explicabo.
    </a-timeline-item>
    <a-timeline-item color="red">Network problems being solved 2015-09-01</a-timeline-item>
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><ClockCircleOutlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
  </a-timeline>
  <a-timeline mode="right">
    <a-timeline-item>Create a services site 2015-09-01</a-timeline-item>
    <a-timeline-item>Solve initial network problems 2015-09-01</a-timeline-item>
    <a-timeline-item>
      <template #dot><clock-circle-outlined style="font-size: 16px" /></template>
      Technical testing 2015-09-01
    </a-timeline-item>
    <a-timeline-item>Network problems being solved 2015-09-01</a-timeline-item>
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
    const reverse = ref<boolean>(false);

    const handleClick = () => {
      reverse.value = !reverse.value;
    };
    return {
      reverse,
      handleClick,
    }
  }
})
</script>

<style scoped>

</style>>
