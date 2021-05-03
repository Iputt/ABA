<template>
  <div>
    <a-alert message="Success Text" type="success" />
     <a-alert message="Success Text" type="success" />
  <a-alert message="Info Text" type="info" />
  <a-alert message="Warning Text" type="warning" />
  <a-alert message="Error Text" type="error" />
  <a-alert
    message="Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text"
    type="warning"
    closable
    @close="onClose"
  />
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description Error Description Error Description"
    type="error"
    closable
    @close="onClose"
  />
  <a-alert message="Success Text" type="success">
    <template #description>
      <p>
        Success Description
        <span style="color: red">Success</span>
        Description Success Description
      </p>
    </template>
  </a-alert>
  <a-alert
    message="Info Text"
    description="Info Description Info Description Info Description Info Description"
    type="info"
  />
  <a-alert
    message="Warning Text"
    description="Warning Description Warning Description Warning Description Warning Description"
    type="warning"
  />
  <a-alert
    message="Error Text"
    description="Error Description Error Description Error Description Error Description"
    type="error"
  />
  <a-alert message="Success Tips" type="success" show-icon />
  <a-alert message="Informational Notes" type="info" show-icon />
  <a-alert message="Warning" type="warning" show-icon />
  <a-alert message="Error" type="error" show-icon />
  <a-alert
    message="Success Tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    show-icon
  />
  <a-alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  />
  <a-alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    show-icon
  />
  <a-alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    show-icon
  />  
  <a-alert message="Warning text" banner />
  <br />
  <a-alert
    message="Very long warning text warning text text text text text text text"
    banner
    closable
  />
  <br />
  <a-alert :show-icon="false" message="Warning text without icon" banner />
  <br />
  <a-alert type="error" message="Error text" banner />
  <a-alert message="showIcon = false" type="success">
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Success Tips" type="success" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Informational Notes" type="info" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Warning" type="warning" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert message="Error" type="error" showIcon>
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Success Tips"
    description="Detailed description and advices about successful copywriting."
    type="success"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Informational Notes"
    description="Additional description and informations about copywriting."
    type="info"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Warning"
    description="This is a warning notice about copywriting."
    type="warning"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  <a-alert
    message="Error"
    description="This is an error message about copywriting."
    type="error"
    show-icon
  >
    <template #icon><smile-outlined /></template>
  </a-alert>
  </div>
  <a-alert
    v-if="visible"
    message="Alert Message Text"
    type="success"
    closable
    :after-close="handleClose"
  />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { SmileOutlined } from '@ant-design/icons-vue';

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
