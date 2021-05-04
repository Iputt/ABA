<template>
  <a-popconfirm
    :title="title"
    :ok-text="okText"
    :cancel-text="cancelText"
    :visible="visible"
    @confirm="confirm"
    @cancel="cancel"
    @visibleChange="handleVisibleChange"
  >
    <template #icon><question-circle-outlined style="color: red" /></template>
    <template #title>
          <p>{{ text }}</p>
    </template>
    <a href="#">Delete</a>
    <!-- <a-button>TL</a-button> -->
  </a-popconfirm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { message } from 'ant-design-vue';
import { QuestionCircleOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  name: "ps-popconfirm",
  components: {
    QuestionCircleOutlined
  },
  props: {
    cancelText: {
      type: String,
      default: "Cancel"
    },
    okText: {
      type: String,
      default: "Confirm"
    },
    okType: {
      type: String,
      default: "primary"
    },
    title: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const confirm = () => {
      message.success('Click on Yes');
    };

    const buttonWidth = 70;

    const text = 'Are you sure to delete this task?';
    const visible = ref<boolean>(false);
    const condition = ref<boolean>(true);

    const cancel = () => {
      visible.value = false;
      message.error('Click on cancel.');
    };

    const handleVisibleChange = (bool: boolean) => {
      if (!bool) {
        visible.value = false;
        return;
      }
      // Determining condition before show the popconfirm.
      console.log(condition.value);
      if (condition.value) {
        confirm(); // next step
      } else {
        visible.value = true;
      }
    };
    return {
      confirm,
      cancel,
      buttonWidth,
      text,
      visible,
      condition,
      handleVisibleChange,
    }
  }
})
</script>

<style scoped>
#components-a-popconfirm-demo-placement .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>>
