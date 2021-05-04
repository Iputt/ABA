<template>
  <a-progress 
    :type="type" 
    :percent="percent" 
    :status="status"
    :show-info="showInfo"
    :size="size"
    :format="format"
    :strokeLinecap="strokeLinecap"
    :strokeColor="strokeColor"
    :successPercent="successPercent"
    :strokeWidth="strokeWidth"
    :width="width"
    :gapDegree="gapDegree"
    :gapPosition="gapPosition"
  />

  <!-- <div>
    <a-progress :type="type" :percent="defaultPercent" />
    <a-button-group>
      <a-button @click="decline">
        <template #icon><minus-outlined /></template>
      </a-button>
      <a-button @click="increase">
        <template #icon><plus-outlined /></template>
      </a-button>
    </a-button-group>
  </div>

  <div>
    <a-progress type="circle" :percent="75" :format="percent => `${percent} Days`" />
    <a-progress type="circle" :percent="100" :format="() => 'Done'" />
    <a-progress type="circle" :percent="75">
      <template #format="percent">
        <span style="color: red">{{ percent }}</span>
      </template>
    </a-progress>
  </div> -->
  <!-- <div>
    <a-progress
      :stroke-color="{
        '0%': '#108ee9',
        '100%': '#87d068',
      }"
      :percent="99.9"
    />
    <a-progress
      :stroke-color="{
        from: '#108ee9',
        to: '#87d068',
      }"
      :percent="99.9"
      status="active"
    />
    
  </div> -->
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { MinusOutlined } from '@ant-design/icons-vue';
import { PlusOutlined } from '@ant-design/icons-vue';

const enum progressTypeEnum{
  line,
  circle,
  dashboard
}
const enum strokeEnum{
  round,
  square
}
const enum progressStatusEnum{
  success,
  exception,
  normal,
  /**
   * line only
   */
  active
}
export interface StrokeColor{
  from: string;
  to: string;
  direction: string;
}

export default defineComponent({
  name: "ps-progress",
  components: {
    MinusOutlined,
    PlusOutlined,
  },
  props: {
    type: {
      type: Object as PropType<progressTypeEnum>,
      default: progressTypeEnum.line
    },
    format: {
      type: Function,
      default(p: String): String {
        return p + "%";
      } 
    },
    percent: {
      type: Number,
      default: 0
    },
    showInfo: {
      type: Boolean,
      default: false
    },
    status: {
      type: Object as PropType<progressStatusEnum>
    },
    /**
     * small
     */
    size: {
      type: String,
    },
    strokeLinecap: {
      type: Object as PropType<strokeEnum>,
      default: strokeEnum.round
    },
    successPercent: {
      type: Number,
      default: 0
    },
    /**
     * circle|dashboard 6
     * line 10
     */
    strokeWidth: {
      type: Number,
      default: 10
    },
    strokeColor: {
      type: String || Object as PropType<StrokeColor>
    },
    /**
     * type == circle
     */
    width: {
      type: Number,
      default: 132
    },
    /**
     * dashboard
     */
    gapDegree: {
      type: Number,
      default: 0
    },
    /**
     * dashboard
     */
    gapPosition: {
      type: String,
      default: "top"
    },
  },
  setup() {
    const defaultPercent = ref<number>(0);

    const increase = () => {
      const percent = defaultPercent.value + 10;
      defaultPercent.value = percent > 100 ? 100 : percent;
    };

    const decline = () => {
      const percent = defaultPercent.value - 10;
      defaultPercent.value = percent < 0 ? 0 : percent;
    };

    return {
      defaultPercent,
      increase,
      decline,
    }
  }
})
</script>

<style scoped>

</style>>
