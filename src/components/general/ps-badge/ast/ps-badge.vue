<template>
  <div>
    <a-badge :count="count" :show-zero="showZero" :overflow-count="overCount" :color="color" :text="text" title="title" >
      <a v-if="type" href="#" class="head-example" />
    </a-badge>
    <a-badge 
      :number-style="{
        backgroundColor: '#fff',
        color: '#999',
        boxShadow: '0 0 0 1px #d9d9d9 inset',
      }"
      >
      <template v-if="type" #count>
        <clock-circle-outlined style="color: #f5222d" />
      </template>
      <slot/>
    </a-badge>

    <div id="components-badge-demo-dot">
      <a-badge :count="0" dot>
        <notification-outlined />
      </a-badge>
      <a-badge dot>
        <a href="#">Link something</a>
      </a-badge>
    </div>
    <a-badge-ribbon v-if="type" :text="text">
      <a-card>And raises the spyglass.</a-card>
    </a-badge-ribbon>

    <!-- clickable -->
    <!-- <a href="#">
      <a-badge count="5">
        <span class="head-example" />
      </a-badge>
    </a> -->

    <!-- count decline/increase -->
    <!-- <div>
    <a-button-group>
      <a-button @click="decline">
        <minus-outlined />
      </a-button>
      <a-button @click="increase">
        <plus-outlined />
      </a-button>
    </a-button-group>
  </div> -->

  <!-- dot show status -->
  <!-- <div style="margin-top: 10px">
    <a-badge :dot="show">
      <a href="#" class="head-example" />
    </a-badge>
    <a-switch v-model:checked="show" />
  </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { ClockCircleOutlined, NotificationOutlined } from '@ant-design/icons-vue';

// const colors = [
//   'pink',
//   'red',
//   'yellow',
//   'orange',
//   'cyan',
//   'green',
//   'blue',
//   'purple',
//   'geekblue',
//   'magenta',
//   'volcano',
//   'gold',
//   'lime',
// ];

const enum PlacementType {
  start,
  end = 0
}
const enum BadgeStatus {
  success,
  processing,
  default,
  error,
  warning
}

export default defineComponent({
  name: "ps-badge",
  components: {
    ClockCircleOutlined,
    NotificationOutlined,
  },
  props: {
    /**
     * Badge Title
     * string: Custom hover text
     * default: 'count'
     */
    title: {
      type: String,
      default: 'count'
    },
    // count: {
    //   type: Number || String
    // },
    dot: {
      type: Boolean,
      default: false
    },
    /**
     * Badge Offset
     * [number|string,number|string]: set offset of the badge dot, like [x, y]
     * default: -
     */
    offset: {
      type: Array
    },
    /**
     * Badge Overflow Count
     * number: Max count to show
     * default: 99
     */
    overflowCount: {
      type: Number,
      default: 99
    },
    /**
     * Badge Show Zero
     * boolean: Whether to show badge when count is zero
     * default: false
     */
    showZero: {
      type: Boolean,
      default: false
    },
    /**
     * Badge Status
     * BadgeStatus - enum: Set Badge as a status dot
     * default: ''
     */
    status: {
      type: Object as PropType<BadgeStatus>,
      default: ''
    },
    /**
     * Badge Number Style
     * object: sets the display style of the status dot
     * default: ''
     */
    numberStyle: {
      type: Object,
      default: () => {
        return {}
      }
    },
    /**
     * Badge/Ribbon Color
     * string: Customize Badge dot/Ribbon color
     * default: -
     */
    color: {
      type: String,
    },
    /**
     * Badge/Ribbon Text
     * Badge - string: If status is set, text sets the display text of the status dot
     * Ribbon - string | VNode | slot: Content inside the Ribbon
     * default: ''
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * Ribbon Placement
     * PlacementType - enum: The placement of the Ribbon, start and end follow text direction (RTL or LTR) 
     * default: end
     */
    placement: {
      type: Object as PropType<PlacementType>,
      default: PlacementType.end
    }
  },
  setup(props) {
    const count = ref<number>(5);
    const decline = () => {
      if (count.value >= 1) {
        count.value--;
      }
    };

    const increase = () => {
      count.value++;
    };
    return {
      // count,
      show: ref<boolean>(true),
      decline,
      increase,
    };
  }
})
</script>

<style scoped>
  #components-badge-demo-dot .anticon-notification {
    width: 16px;
    height: 16px;
    line-height: 16px;
    font-size: 16px;
  }
  #components-badge-demo-title .ant-badge:not(.ant-badge-status) {
    margin-right: 20px;
  }
  .head-example {
    width: 42px;
    height: 42px;
    border-radius: 4px;
    background: #eee;
    display: inline-block;
  }
</style>>
