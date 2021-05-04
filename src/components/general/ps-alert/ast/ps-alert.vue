<template>
  <a-alert :message="message" 
    :type="type" 
    :closable="closable" 
    :description="description"
    :show-icon="showIcon"
    :banner="banner"
    @close="onClose" >
    <template #description>
      <p>
        {{description}}
        <!-- Success Description
        <span style="color: red">Success</span>
        Description Success Description -->
      </p>
    </template>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <!-- <a-alert
    v-if="visible"
    message="Alert Message Text"
    type="success"
    closable
    :after-close="handleClose"
  /> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue';

const enum type {
  success,
  info,
  warning,
  error
}

export default defineComponent({
  name: "ps-alert",
  components: {
    SmileOutlined
  },
  props: {
    afterClose: {
      type: Function,
      default():void {} 
    },
    closable: {
      type: Boolean,
      default: true
    },
    closeText: {
      type: String,
    },
    banner: {
      type: Boolean,
      default: false
    },
    description: {
      type: String,
    },
    message: {
      type: String,
    },
    type: {
      type: String
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const onClose = (e: MouseEvent) => {
      console.log(e, 'I was closed.');
    };
    const visible = ref<boolean>(true);
    const handleClose = () => {
      visible.value = false;
    };
    return {
      onClose,
      visible,
      handleClose
    }
  }
})
</script>

<style scoped>

</style>>
