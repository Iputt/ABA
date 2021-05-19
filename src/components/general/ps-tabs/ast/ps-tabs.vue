<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>

  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Tab 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2" disabled>Tab 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Tab 3</a-tab-pane>
  </a-tabs>

  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1">
      <template #tab>
        <span>
          <apple-outlined />
          Tab 1
        </span>
      </template>
      Tab 1
    </a-tab-pane>
    <a-tab-pane key="2">
      <template #tab>
        <span>
          <android-outlined />
          Tab 2
        </span>
      </template>
      Tab 2
    </a-tab-pane>
  </a-tabs>
  <div style="width: 500px">
    <a-radio-group v-model:value="mode" :style="{ marginBottom: '8px' }">
      <a-radio-button value="top">Horizontal</a-radio-button>
      <a-radio-button value="left">Vertical</a-radio-button>
    </a-radio-group>
    <a-tabs
      :tab-position="mode"
      :style="{ height: '200px' }"
      @prevClick="callback"
      @nextClick="callback"
      v-model:activeKey="activeKey"
    >
      <a-tab-pane v-for="i in 30" :key="i" :tab="`Tab-${i}`">Content of tab {{ i }}</a-tab-pane>
    </a-tabs>
  </div>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of tab 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">Content of tab 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of tab 3</a-tab-pane>
    <template #tabBarExtraContent>
      <a-button>Extra Action</a-button>
    </template>
  </a-tabs>
  <div>
    <a-radio-group v-model:value="size" style="margin-bottom: 16px">
      <a-radio-button value="small">Small</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="large">Large</a-radio-button>
    </a-radio-group>
    <a-tabs v-model:activeKey="activeKey" :size="size">
      <a-tab-pane key="1" tab="Tab 1">Content of tab 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">Content of tab 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of tab 3</a-tab-pane>
    </a-tabs>
  </div>
  <div style="width: 500px">
    <a-radio-group v-model:value="tabPosition" style="margin: 8px">
      <a-radio-button value="top">top</a-radio-button>
      <a-radio-button value="bottom">bottom</a-radio-button>
      <a-radio-button value="left">left</a-radio-button>
      <a-radio-button value="right">right</a-radio-button>
    </a-radio-group>
    <a-tabs v-model:activeKey="activeKey" :tab-position="tabPosition">
      <a-tab-pane key="1" tab="Tab 1">Content of Tab 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2">Content of Tab 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab 3</a-tab-pane>
    </a-tabs>
  </div>
  <a-tabs type="card" v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="Tab 1">Content of Tab Pane 1</a-tab-pane>
    <a-tab-pane key="2" tab="Tab 2">Content of Tab Pane 2</a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>

  <a-tabs v-model:activeKey="activeKey" type="editable-card" @edit="onEdit">
    <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
      {{ pane.content }}
    </a-tab-pane>
  </a-tabs>

  <div class="card-container">
    <a-tabs v-model:activeKey="activeKey" type="card">
      <a-tab-pane key="1" tab="Tab Title 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab Title 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab Title 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </a-tab-pane>
    </a-tabs>
  </div>

  <div>
    <div :style="{ marginBottom: '16px' }">
      <a-button @click="add">ADD</a-button>
    </div>
    <a-tabs v-model:activeKey="activeKey" hide-add type="editable-card" @edit="onEdit">
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable">
        {{ pane.content }}
      </a-tab-pane>
    </a-tabs>
  </div>
  <div>
    <a-tabs v-model:activeKey="activeKey">
      <a-tab-pane key="1" tab="Tab 1" style="height: 200px">Content of Tab Pane 1</a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>Content of Tab Pane 2</a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
      <template #renderTabBar="{ DefaultTabBar, ...props }">
        <component
          :is="DefaultTabBar"
          v-bind="props"
          :style="{ zIndex: 1, background: '#fff', textAlign: 'right' }"
        />
      </template>
    </a-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons-vue';

export interface tabsAnimated{
  inkBar: boolean;
  tabPane: boolean;
}

const enum tabsSizeEnum{
  "large",
  "default",
  "small"
}
const enum tabsPositionEnum{
  "top",
  "right",
  "bottom",
  "left"
}
const enum tabstypeEnum{
  "line",
  "card",
  "editable-card"
}

export default defineComponent({
  name: "ps-tabs",
  components: {
    AppleOutlined,
    AndroidOutlined,
  },
  props: {
    activeKey: {
      type: String,
    },
    animated: {
      type: Boolean || Object as PropType<tabsAnimated>,
      default: true
    },
    defaultActiveKey: {
      type: String,
    },
    hideAdd: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "default"
    },
    tabBarStyle: {
      type: Object,
    },
    tabPosition: {
      type: String,
      default: "top"
    },
    type: {
      type: String,
      default: "line"
    },
    tabBarGutter: {
      type: Number,
    },
    forceRender: {
      type: Boolean,
      default: false
    },
    key: {
      type: String,
    },
    tab: {
      type: String,
    },
  },
  setup() {
    const mode = ref('top');
    const activeKey = ref('1');
    const callback = (val: string) => {
      console.log(val);
    };
    const size = ref('small');
    const tabPosition = ref('top');

    const panes = ref([
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
      { title: 'Tab 3', content: 'Content of Tab 3', key: '3', closable: false },
    ]);

    const activeKey = ref(panes.value[0].key);

    const newTabIndex = ref(0);

    const callback = (key: string) => {
      console.log(key);
    };

    const add = () => {
      activeKey.value = `newTab${++newTabIndex.value}`;
      panes.value.push({ title: 'New Tab', content: 'Content of new Tab', key: activeKey.value });
    };

    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string | MouseEvent, action: string) => {
      if (action === 'add') {
        add();
      } else {
        remove(targetKey as string);
      }
    };

    const panes = ref([
      { title: 'Tab 1', content: 'Content of Tab 1', key: '1' },
      { title: 'Tab 2', content: 'Content of Tab 2', key: '2' },
    ]);
    const activeKey = ref(panes.value[0].key);
    const newTabIndex = ref(0);

    const add = () => {
      activeKey.value = `newTab${newTabIndex.value++}`;
      panes.value.push({
        title: `New Tab ${activeKey.value}`,
        content: `Content of new Tab ${activeKey.value}`,
        key: activeKey.value,
      });
    };

    const remove = (targetKey: string) => {
      let lastIndex = 0;
      panes.value.forEach((pane, i) => {
        if (pane.key === targetKey) {
          lastIndex = i - 1;
        }
      });
      panes.value = panes.value.filter(pane => pane.key !== targetKey);
      if (panes.value.length && activeKey.value === targetKey) {
        if (lastIndex >= 0) {
          activeKey.value = panes.value[lastIndex].key;
        } else {
          activeKey.value = panes.value[0].key;
        }
      }
    };

    const onEdit = (targetKey: string) => {
      remove(targetKey);
    };
    return {
      activeKey: ref('1'),
      mode,
      callback,
      size,
      tabPosition,
      panes,
      onEdit,
      add,
    }
  }
})
</script>

<style scoped>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .ant-tabs-card > .ant-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .ant-tabs-card > .ant-tabs-content > .ant-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .ant-tabs-card > .ant-tabs-bar {
  border-color: #fff;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .ant-tabs-card > .ant-tabs-bar .ant-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>>
