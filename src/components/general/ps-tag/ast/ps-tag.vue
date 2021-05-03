<template>
  <div>
    <a-tag v-if="type == 'standard'" v-model:visible="visible" :closable="closable" :color="color" @close="colseTag">
      Tag
    </a-tag>
    <a-checkable-tag v-else v-model:checked="checked" @change="checkChange">
      Tag Checkable
    </a-checkable-tag>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, toRefs, nextTick } from "vue";
import { PlusOutlined } from "@ant-design/icons-vue";

/**
 * prop: color
 */
const enum stateEnum {
  success,
  processing,
  error,
  warning,
  default
}

export default defineComponent({
  name: "ps-tag",
  components: {
    PlusOutlined
  },
  props: {
    type:{
      type: String,
      default: "standard"
    },
    /**
     * Whether the Tag can be closed
     */
    closable: {
      type: Boolean,
      default: false
    },
    // closeIcon:{
    //   type: VNode | #closeIcon
    // },
    color: {
      type: String,
      default: "orange" //#2db7f5
    },
    // icon:{
    //   type: VNode | #icon
    // },
    visible: {
      type: Boolean,
      default: true
    },
    checked:{
      type: Boolean,
      default: false
    }
  },
  setup() {
    const colseTag = (e: MouseEvent) => {
      console.log(e);
    };
    const checkChange = (checked: boolean) => {
      console.log(checked);
    };
    //const inputRef = ref();
    // const handleClose = (removedTag: string) => {
    //   const tags = state.tags.filter(tag => tag !== removedTag);
    //   console.log(tags);
    //   state.tags = tags;
    // };

    // const showInput = () => {
    //   state.inputVisible = true;
    //   nextTick(() => {
    //     inputRef.value.focus();
    //   });
    // };
    return {
      colseTag,
      checkChange,
      //...toRefs(state),
    };
  }
});
</script>

<style scoped></style>>
