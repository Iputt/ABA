<!--
 * @Author: your name
 * @Date: 2020-12-09 17:03:58
 * @LastEditTime: 2020-12-21 18:45:52
 * @LastEditors: lfy
 * @Description: In User Settings Edit
 * @FilePath: \ABA\src\components\basic\button.vue
-->
<template>
  <a-button type="primary">
    Primary
  </a-button>
  <a-button>Default</a-button>
  <a-button type="dashed">
    Dashed
  </a-button>
  <a-button type="danger">
    Danger
  </a-button>
  <a-config-provider :auto-insert-space-in-button="false">
    <a-button type="primary">
      按钮
    </a-button>
  </a-config-provider>
  <a-button type="primary">
    按钮
  </a-button>
  <a-button type="link">
    Link
  </a-button>
  <div id="components-button-demo-button-group">
    <h4>Basic</h4>
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary">
        OK
      </a-button>
    </a-button-group>
    <a-button-group>
      <a-button disabled>
        L
      </a-button>
      <a-button disabled>
        M
      </a-button>
      <a-button disabled>
        R
      </a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary">
        L
      </a-button>
      <a-button>M</a-button>
      <a-button>M</a-button>
      <a-button type="dashed">
        R
      </a-button>
    </a-button-group>

    <h4>With Icon</h4>
    <a-button-group>
      <a-button type="primary"> <LeftOutlined />Go back </a-button>
      <a-button type="primary"> Go forward<RightOutlined /> </a-button>
    </a-button-group>
    <a-button-group>
      <a-button type="primary">
        <template #icon><CloudOutlined /></template>
      </a-button>
      <a-button type="primary">
        <template #icon><CloudDownloadOutlined /></template>
      </a-button>
    </a-button-group>
  </div>
  <!-- 带图标按钮 -->
  <a-button type="primary" shape="circle">
    <template #icon><SearchOutlined /></template>
  </a-button>
  <!-- 幽灵按钮 -->
  <a-button type="primary" ghost>
      Primary
    </a-button>
    <!-- 加载中按钮 -->
      <a-button type="primary" loading>
    Loading
  </a-button>
  <!-- 下拉组合按钮 -->
  <a-dropdown>
    <template #overlay>
      <a-menu @click="handleMenuClick">
        <a-menu-item key="1">
          1st item
        </a-menu-item>
        <a-menu-item key="2">
          2nd item
        </a-menu-item>
        <a-menu-item key="3">
          3rd item
        </a-menu-item>
      </a-menu>
    </template>
    <a-button> Actions <DownOutlined /> </a-button>
  </a-dropdown>
  <!-- block按钮 -->
  <a-button type="primary" block>
    Primary
  </a-button>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: '', 
  props: {
  },
  setup(){
  }
})
</script>

<style scoped>

</style>
