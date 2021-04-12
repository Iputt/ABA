<!--
 * @Author: your name
 * @Date: 2020-12-09 17:07:14
 * @LastEditTime: 2020-12-09 17:07:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\components\data\ps-avatar.vue
-->
<template>
  <div>
  <a-avatar :size="size" :shape="shape" :src="src">
    <template v-if="type" #icon><UserOutlined /></template>
  </a-avatar>
  <a-avatar :style="{ backgroundColor: color, verticalAlign: 'middle' }" :size="size" :shape="shape" :src="src">
    {{aValue}}
  </a-avatar>
  <!-- <span style="margin-right: 24px">
    <a-badge :count="1">
      <a-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>
  </span>
  <span>
    <a-badge dot>
      <a-avatar shape="square">
        <template #icon><UserOutlined /></template>
      </a-avatar>
    </a-badge>
  </span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue';

const UserList = ['U', 'Lucy', 'Tom', 'Edward'];
const colorList = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

export default defineComponent({
  name: "ps-avatar",
  components: {
    UserOutlined,
  },
  props: {
    /**
     * Avatar Size
     * number | string: large small default
     */
    size: {
      type: String || Number,
      default: "default"
    },
    /**
     * Avatar Shape
     * string: square circle
     */
    shape: {
      type: String,
      default: "circle"
    },
    /**
     * Avatar Address
     * string: url
     */
    src: {
      type: String,
    },
    /**
     * Avatar Srcset
     * string: 
     */
    srcset: {
      type: String,
    },
    /**
     * Avatar Alt
     * string: text describing for the image
     */
    alt: {
      type: String,
    },
    /**
     * Avatar Error Message
     * string: handler when img load error, return false to prevent default fallback behavior
     */
    loadError: {
      type: Boolean,
      default: () => false
    }
  },
  setup(){
    const avatarValue = ref(UserList[0]);
    const color = ref(colorList[0]);
    // const changeValue = () => {
    //   const index = UserList.indexOf(avatarValue.value);
    //   avatarValue.value = index < UserList.length - 1 ? UserList[index + 1] : UserList[0];
    //   color.value = index < colorList.length - 1 ? colorList[index + 1] : colorList[0];
    // };
    return {
      avatarValue,
      color,
      // changeValue,
    };
  }
})
</script>

<style scoped>

#components-avatar-demo-badge .ant-avatar {
  margin-top: 0;
  margin-right: 0;
}

</style>>
