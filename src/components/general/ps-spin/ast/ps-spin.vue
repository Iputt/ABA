<template>
  <a-spin 
    :size="size"
    :spinning="spinning"
    :tip="tip"
    :delay="delay"
    :indicator="indicator"
  >
    <slot />
  </a-spin>

  <a-spin :indicator="indicator" />
</template>

<script lang="ts">
import { defineComponent, ref, h } from 'vue'
import { LoadingOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "ps-spin",
  components: {},
  props: {
    delay: {
      type: Number,
    },
    size: {
      type: String,
      default: "default"
    },
    spinning: {
      type: Boolean,
      default: true
    },
    tip: {
      type: String,
    },
    wrapperClassName: {
      type: String,
    },
  },
  setup() {
    const spinning = ref<boolean>(false);

    const changeSpinning = () => {
      spinning.value = !spinning.value;
    };
    const delayTime = 500;

    const indicator = h(LoadingOutlined, {
      style: {
        fontSize: '24px',
      },
      spin: true,
    });
    return {
      spinning,
      changeSpinning,
      delayTime,
      indicator
    }
  }
})
</script>

<style scoped>
.spin-state {
  margin-top: 16px;
}
</style>>
