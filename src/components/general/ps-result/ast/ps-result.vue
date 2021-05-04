<template>
  <a-result
    :status="status"
    :title="title"
    :sub-title="subTitle"
  >
    <template #icon>
      <smile-twoTone />
    </template>
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>
  </a-result>

  <!-- <a-result
    status="error"
    title="Submission Failed"
    sub-title="Please check and modify the following information before resubmitting."
  >
    <template #extra>
      <a-button key="console" type="primary">Go Console</a-button>
      <a-button key="buy">Buy Again</a-button>
    </template>

    <div class="desc">
      <p style="font-size: 16px">
        <strong>The content you submitted has the following error:</strong>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account has been frozen
        <a>Thaw immediately &gt;</a>
      </p>
      <p>
        <close-circle-outlined :style="{ color: 'red' }" />
        Your account is not yet eligible to apply
        <a>Apply Unlock &gt;</a>
      </p>
    </div>
  </a-result> -->
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { CloseCircleOutlined, SmileTwoTone } from '@ant-design/icons-vue';

const enum resultStatusEnum {
  "success",
  "error",
  "info",
  "warning"
}

export default defineComponent({
  name: "ps-result",
  components: {
    CloseCircleOutlined,
    SmileTwoTone
  },
  props: {
    title: {
      type: String,
    },
    subTitle: {
      type: String,
    },
    /**
     * 404、403、500
     */
    status: {
      type: String || Object as PropType<resultStatusEnum>,
      default: resultStatusEnum.info
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>>
