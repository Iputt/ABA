<template>
  <a-tree
    checkable
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
  >
    <template #title0010><span style="color: #1890ff">sss</span></template>
  </a-tree>

   <a-tree
    class="draggable-tree"
    v-model:expandedKeys="expandedKeys"
    draggable
    :tree-data="gData"
    @dragenter="onDragEnter"
    @drop="onDrop"
  />

 <a-tree
    :load-data="onLoadData"
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
  />
  <a-tree :tree-data="treeData" show-icon default-expand-all v-model:selectedKeys="selectedKeys">
    <template #switcherIcon>
      <down-outlined />
    </template>
    <template #smile>
      <smile-outlined />
    </template>
    <template #meh>
      <smile-outlined />
    </template>
    <template #custom="{ selected }">
      <frown-filled v-if="selected" />
      <frown-outlined v-else />
    </template>
  </a-tree>

  <div>
    <a-input-search v-model:value="searchValue" style="margin-bottom: 8px" placeholder="Search" />
    <a-tree
      :expandedKeys="expandedKeys"
      :auto-expand-parent="autoExpandParent"
      :tree-data="gData"
      @expand="onExpand"
    >
      <template #title="{ title }">
        <span v-if="title.indexOf(searchValue) > -1">
          {{ title.substr(0, title.indexOf(searchValue)) }}
          <span style="color: #f50">{{ searchValue }}</span>
          {{ title.substr(title.indexOf(searchValue) + searchValue.length) }}
        </span>
        <span v-else>{{ title }}</span>
      </template>
    </a-tree>
  </div>

   <div>
    <div style="margin-bottom: 16px">
      showLine:
      <a-switch v-model:checked="showLine" />
      <br />
      <br />
      showIcon:
      <a-switch v-model:checked="showIcon" />
    </div>
    <a-tree
      :show-line="showLine"
      :show-icon="showIcon"
      :default-expanded-keys="['0-0-0', '0-0-1', '0-0-2']"
      @select="onSelect"
    >
      <template #icon><carry-out-outlined /></template>
      <a-tree-node key="0-0">
        <template #icon><carry-out-outlined /></template>
        <template #title><span style="color: #1890ff">parent 1</span></template>
        <a-tree-node title="parent 1-0" key="0-0-0">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-0-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-1">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-0-2">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-1" key="0-0-1">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-1-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
        </a-tree-node>
        <a-tree-node title="parent 1-2" key="0-0-2">
          <template #icon><carry-out-outlined /></template>
          <a-tree-node title="leaf" key="0-0-2-0">
            <template #icon><carry-out-outlined /></template>
          </a-tree-node>
          <a-tree-node title="leaf" key="0-0-2-1">
            <template #icon><carry-out-outlined /></template>
            <template #switcherIcon><form-outlined /></template>
          </a-tree-node>
        </a-tree-node>
      </a-tree-node>
    </a-tree>
  </div>
   <a-tree
    checkable
    :tree-data="treeData"
    v-model:expandedKeys="expandedKeys"
    v-model:selectedKeys="selectedKeys"
    v-model:checkedKeys="checkedKeys"
    :replace-fields="replaceFields"
  />

   <a-tree showLine v-model:expandedKeys="expandedKeys" v-model:selectedKeys="selectedKeys">
    <template #switcherIcon><down-outlined /></template>
    <a-tree-node title="parent 1" key="0-0">
      <a-tree-node title="parent 1-0" key="0-0-0">
        <a-tree-node title="leaf" key="0-0-0-0" />
        <a-tree-node title="leaf" key="0-0-0-1" />
        <a-tree-node title="leaf" key="0-0-0-2" />
      </a-tree-node>
      <a-tree-node key="0-0-1" title="parent 1-1">
        <a-tree-node key="0-0-1-0" title="leaf" />
      </a-tree-node>
      <a-tree-node key="0-0-2" title="parent 1-2">
        <a-tree-node key="0-0-2-0" title="leaf" />
        <a-tree-node key="0-0-2-1" title="leaf" />
      </a-tree-node>
    </a-tree-node>
  </a-tree>

  <a-tree :tree-data="treeData" v-model:expandedKeys="expandedKeys">
    <template #title="{ key: treeKey, title }">
      <a-dropdown :trigger="['contextmenu']">
        <span>{{ title }}</span>
        <template #overlay>
          <a-menu @click="({ key: menuKey }) => onContextMenuClick(treeKey, menuKey)">
            <a-menu-item key="1">1st menu item</a-menu-item>
            <a-menu-item key="2">2nd menu item</a-menu-item>
            <a-menu-item key="3">3rd menu item</a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>
  </a-tree>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { TreeDataItem, TreeDragEvent, DropEvent, SelectEvent  } from 'ant-design-vue/es/tree/Tree';
import { DownOutlined, SmileOutlined, FrownOutlined, FrownFilled, CarryOutOutlined, FormOutlined } from '@ant-design/icons-vue';
const x = 3;
const y = 2;
const z = 1;
const genData: TreeDataItem[] = [];

const generateData = (_level: number, _preKey?: string, _tns?: TreeDataItem[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || genData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);
const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        disabled: true,
        children: [
          { title: 'leaf', key: '0-0-0-0', disableCheckbox: true },
          { title: 'leaf', key: '0-0-0-1' },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ key: '0-0-1-0', slots: { title: 'title0010' } }],
      },
    ],
  },
];
const treeData: TreeDataItem[] = [
  {
    title: 'parent 1',
    key: '0-0',
    slots: {
      icon: 'smile',
    },
    children: [
      { title: 'leaf', key: '0-0-0', slots: { icon: 'meh' } },
      { title: 'leaf', key: '0-0-1', slots: { icon: 'custom' } },
    ],
  },
];
const x = 3;
const y = 2;
const z = 1;
const genData: TreeDataItem[] = [];

const generateData = (_level: number, _preKey?: string, _tns?: TreeDataItem[]) => {
  const preKey = _preKey || '0';
  const tns = _tns || genData;

  const children = [];
  for (let i = 0; i < x; i++) {
    const key = `${preKey}-${i}`;
    tns.push({ title: key, key });
    if (i < y) {
      children.push(key);
    }
  }
  if (_level < 0) {
    return tns;
  }
  const level = _level - 1;
  children.forEach((key, index) => {
    tns[index].children = [];
    return generateData(level, key, tns[index].children);
  });
};
generateData(z);

const dataList: TreeDataItem[] = [];
const generateList = (data: TreeDataItem[]) => {
  for (let i = 0; i < data.length; i++) {
    const node = data[i];
    const key = node.key;
    dataList.push({ key, title: key as string });
    if (node.children) {
      generateList(node.children);
    }
  }
};
generateList(genData);

const getParentKey = (key: string, tree: TreeDataItem[]): string | number | undefined => {
  let parentKey;
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    if (node.children) {
      if (node.children.some(item => item.key === key)) {
        parentKey = node.key;
      } else if (getParentKey(key, node.children)) {
        parentKey = getParentKey(key, node.children);
      }
    }
  }
  return parentKey;
};
const treeData = [
  {
    title: '0-0',
    key: '0-0',
    children: [
      {
        title: '0-0-0',
        key: '0-0-0',
        children: [
          { title: '0-0-0-0', key: '0-0-0-0' },
          { title: '0-0-0-1', key: '0-0-0-1' },
          { title: '0-0-0-2', key: '0-0-0-2' },
        ],
      },
      {
        title: '0-0-1',
        key: '0-0-1',
        children: [
          { title: '0-0-1-0', key: '0-0-1-0' },
          { title: '0-0-1-1', key: '0-0-1-1' },
          { title: '0-0-1-2', key: '0-0-1-2' },
        ],
      },
    ],
  },
];  


export default defineComponent({
  name: "ps-tree",
  components: {
    DownOutlined,
    SmileOutlined,
    FrownOutlined,
    FrownFilled,
    CarryOutOutlined,
    FormOutlined,
  },
  props: {
    treeData: {
      type: Array,
    },
    replaceFields: {
      type: Object,
      default: ()=>{
        return { children:'children', title:'title', key:'key' }
      }
    },
    autoExpandParent: {
      type: Boolean,
      default: true
    },
    blockNode: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checkedKeys: {
      type: Array,
      default: ()=>[]
    },
    checkStrictly: {
      type: Boolean,
      default: false
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    expandedKeys: {
      type: Array,
      default:() => []
    },
    filterTreeNode: {
      type: Function
    },
    loadData: {
      type: Function
    },
    loadedKeys: {
      type: Array,
      default: () => []
    },
    multiple: {
      type: Boolean,
      default: false
    },
    selectable: {
      type: Boolean,
      default: true
    },
    selectedKeys: {
      type: Array
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showLine: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });

    const expandedKeys = ref<string[]>(['0-0', '0-0-0', '0-0-0-0']);
    const gData = ref<TreeDataItem[]>(genData);
    const onDragEnter = (info: TreeDragEvent) => {
      console.log(info);
      // expandedKeys 需要展开时
      // expandedKeys.value = info.expandedKeys
    };

    const onDrop = (info: DropEvent) => {
      console.log(info);
      const dropKey = info.node.eventKey;
      const dragKey = info.dragNode.eventKey;
      const dropPos = info.node.pos.split('-');
      const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);
      const loop = (data: TreeDataItem[], key: string, callback: any) => {
        data.forEach((item, index, arr) => {
          if (item.key === key) {
            return callback(item, index, arr);
          }
          if (item.children) {
            return loop(item.children, key, callback);
          }
        });
      };
      const data = [...gData.value];

      // Find dragObject
      let dragObj: TreeDataItem = {};
      loop(data, dragKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
        arr.splice(index, 1);
        dragObj = item;
      });
      if (!info.dropToGap) {
        // Drop on the content
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.push(dragObj);
        });
      } else if (
        (info.node.children || []).length > 0 && // Has children
        info.node.expanded && // Is expanded
        dropPosition === 1 // On the bottom gap
      ) {
        loop(data, dropKey, (item: TreeDataItem) => {
          item.children = item.children || [];
          // where to insert 示例添加到尾部，可以是随意位置
          item.children.unshift(dragObj);
        });
      } else {
        let ar: TreeDataItem[] = [];
        let i = 0;
        loop(data, dropKey, (item: TreeDataItem, index: number, arr: TreeDataItem[]) => {
          ar = arr;
          i = index;
        });
        if (dropPosition === -1) {
          ar.splice(i, 0, dragObj);
        } else {
          ar.splice(i + 1, 0, dragObj);
        }
      }
      gData.value = data;
    };

    const expandedKeys = ref<string[]>([]);
    const selectedKeys = ref<string[]>([]);
    const treeData = ref<TreeDataItem[]>([
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ]);
    const onLoadData = (treeNode: any) => {
      return new Promise((resolve: (value?: unknown) => void) => {
        if (treeNode.dataRef.children) {
          resolve();
          return;
        }
        setTimeout(() => {
          treeNode.dataRef.children = [
            { title: 'Child Node', key: `${treeNode.eventKey}-0` },
            { title: 'Child Node', key: `${treeNode.eventKey}-1` },
          ];
          treeData.value = [...treeData.value];
          resolve();
        }, 1000);
      });
    };

    const expandedKeys = ref<string[]>([]);
    const searchValue = ref<string>('');
    const autoExpandParent = ref<boolean>(true);
    const gData = ref<TreeDataItem[]>(genData);

    const onExpand = (keys: string[]) => {
      expandedKeys.value = keys;
      autoExpandParent.value = false;
    };

    watch(searchValue, value => {
      const expanded = dataList
        .map((item: TreeDataItem) => {
          if ((item.title as string).indexOf(value) > -1) {
            return getParentKey(item.key as string, gData.value);
          }
          return null;
        })
        .filter((item, i, self) => item && self.indexOf(item) === i);
      expandedKeys.value = expanded as string[];
      searchValue.value = value;
      autoExpandParent.value = true;
    });
    
    const showLine = ref<boolean>(true);
    const showIcon = ref<boolean>(false);

    const onSelect = (selectedKeys: string[], info: SelectEvent) => {
      console.log('selected', selectedKeys, info);
    };

    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const selectedKeys = ref<string[]>(['0-0-0', '0-0-1']);
    const checkedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    const replaceFields = {
      children: 'child',
      title: 'name',
    };

    const treeData: TreeDataItem[] = [
      {
        name: 'parent 1',
        key: '0-0',
        child: [
          {
            name: '张晨成',
            key: '0-0-0',
            disabled: true,
            child: [
              { name: 'leaf', key: '0-0-0-0', disableCheckbox: true },
              { name: 'leaf', key: '0-0-0-1' },
            ],
          },
          {
            name: 'parent 1-1',
            key: '0-0-1',
            child: [{ key: '0-0-1-0', name: 'zcvc' }],
          },
        ],
      },
    ];
    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    watch(selectedKeys, () => {
      console.log('selectedKeys', selectedKeys);
    });
    watch(checkedKeys, () => {
      console.log('checkedKeys', checkedKeys);
    });

    const expandedKeys = ref<string[]>(['0-0-0']);
    const selectedKeys = ref<string[]>([]);

    
    const onContextMenuClick = (treeKey: string, menuKey: string) => {
      console.log(`treeKey: ${treeKey}, menuKey: ${menuKey}`);
    };
    const expandedKeys = ref<string[]>(['0-0-0', '0-0-1']);

    watch(expandedKeys, () => {
      console.log('expandedKeys', expandedKeys);
    });
    return {
      treeData,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      gData,
      onDragEnter,
      onDrop,
      onLoadData,
      selectedKeys: ref(['0-0-0']),
      expandedKeys,
      searchValue,
      autoExpandParent,
      gData,
      onExpand,
      showLine,
      showIcon,
      onSelect,
      expandedKeys,
      selectedKeys,
      checkedKeys,
      replaceFields,
      treeData: ref(treeData),
      treeData,
      onContextMenuClick,
      expandedKeys,
    }
  }
})
</script>

<style scoped>

</style>>
