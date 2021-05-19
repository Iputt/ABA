<template>
<!-- default-active-key -->
  <a-collapse 
    v-model:activeKey="activeKey"
    :accordion="accordion"
    :bordered="bordered"
    :expandIconPosition="expandIconPosition"
    :destroyInactivePanel="destroyInactivePanel"
    @change="changeActivekey"
  >
    <a-collapse-panel 
      v-for="item,index in items"
      :disabled="disabled"
      :forceRender="forceRender"
      :key="index" 
      :header="header"
      :show-arrow="showArrow"
    >
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse>
  <!-- <a-collapse v-model:activeKey="activeKey" :bordered="false">
    <template #expandIcon="{ isActive }">
      <caret-right-outlined :rotate="isActive ? 90 : 0" />
    </template>
    <a-collapse-panel key="1" header="This is panel header 1" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="2" header="This is panel header 2" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
    <a-collapse-panel key="3" header="This is panel header 3" :style="customStyle">
      <p>{{ text }}</p>
    </a-collapse-panel>
  </a-collapse> -->
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: "ps-collapse",
  components: {},
  props: {
    activeKey: {
      type: String || Array
    },
    bordered: {
      type: Boolean,
      default: true
    },
    accordion: {
      type: Boolean,
      default: false
    },
    expandIconPosition: {
      type: String,
      default: "left"//right
    },
    destroyInactivePanel: {
      type: Boolean,
      default: false
    },
    /**
     * panel
     */
    disabled: {
      type: Boolean,
      default: false
    },
    forceRender: {
      type: Boolean,
      default: false
    },
    header: {
      type: String,
    },
    key: {
      type: String,
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const activeKey = ref([]);
    const text = `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`;
     const changeActivekey = (key: string) => {
      console.log(key);
    };
     watch(activeKey, val => {
      console.log(val);
    });
    const customStyle =
      'background: #f7f7f7;border-radius: 4px;margin-bottom: 24px;border: 0;overflow: hidden';

      const expandIconPosition = 'left';

    const handleClick = (event: MouseEvent) => {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    };
    return {
      activeKey,
      text,
      changeActivekey,
      customStyle,
      expandIconPosition,
      handleClick
    };
  },
});
</script>

<style scoped>

</style>>
