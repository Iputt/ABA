<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Basic Drawer"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>

  <a-radio-group style="margin-right: 8px" v-model:value="placement">
    <a-radio value="top">top</a-radio>
    <a-radio value="right">right</a-radio>
    <a-radio value="bottom">bottom</a-radio>
    <a-radio value="left">left</a-radio>
  </a-radio-group>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>

  <div
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #ebedf0',
      borderRadius: '2px',
      padding: '48px',
      textAlign: 'center',
      background: '#fafafa',
      width: '100%',
    }"
  >
    Render in this
    <div style="margin-top: 16px">
      <a-button type="primary" @click="showDrawer">Open</a-button>
    </div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <p>Some contents...</p>
    </a-drawer>
  </div>

  <a-button type="primary" @click="showDrawer">
    <PlusOutlined />
    New account
  </a-button>
  <a-drawer
    title="Create a new account"
    :width="720"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Name" name="name">
            <a-input v-model:value="form.name" placeholder="Please enter user name" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Url" name="url">
            <a-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Owner" name="owner">
            <a-select placeholder="Please a-s an owner" v-model:value="form.owner">
              <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
              <a-select-option value="mao">Maomao Zhou</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Type" name="type">
            <a-select placeholder="Please choose the type" v-model:value="form.type">
              <a-select-option value="private">Private</a-select-option>
              <a-select-option value="public">Public</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Approver" name="approver">
            <a-select placeholder="Please choose the approver" v-model:value="form.approver">
              <a-select-option value="jack">Jack Ma</a-select-option>
              <a-select-option value="tom">Tom Liu</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="DateTime" name="dateTime">
            <a-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentNode"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Description" name="description">
            <a-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>

  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Multi-level drawer"
    width="520"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <a-button type="primary" @click="showChildrenDrawer">Two-level drawer</a-button>
    <a-drawer
      title="Two-level Drawer"
      width="320"
      :closable="false"
      :visible="childrenDrawer"
      @close="onChildrenDrawerClose"
    >
      <a-button type="primary" @click="showChildrenDrawer">This is two-level drawer</a-button>
    </a-drawer>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>

  <a-list
    :data-source="[
      {
        name: 'Lily',
      },
      {
        name: 'Lily',
      },
    ]"
    bordered
  >
    <template #renderItem="{ item }">
      <a-list-item :key="`a-${item.id}`">
        <template #actions><a @click="showDrawer">View Profile</a></template>
        <a-list-item-meta description="Progresser XTech">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose">
    <p :style="[pStyle, pStyle2]">User Profile</p>
    <p :style="pStyle">Personal</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Full Name" content="Lily" />
      </a-col>
      <a-col :span="12">
        <description-item title="Account" content="AntDesign@example.com" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="City" content="HangZhou" />
      </a-col>
      <a-col :span="12">
        <description-item title="Country" content="China🇨🇳" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="Birthday" content="February 2,1900" />
      </a-col>
      <a-col :span="12">
        <description-item title="Website" content="-" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item
          title="Message"
          content="Make things as simple as possible but no simpler."
        />
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">Company</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Position" content="Programmer" />
      </a-col>
      <a-col :span="12">
        <description-item title="Responsibilities" content="Coding" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="Department" content="XTech" />
      </a-col>
      <a-col :span="12">
        <description-item title="Supervisor">
          <template #content><a>Lin</a></template>
        </description-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <description-item
          title="Skills"
          content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
        />
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">Contacts</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Email" content="ant-design-vue@example.com" />
      </a-col>
      <a-col :span="12">
        <description-item title="Phone Number" content="+86 181 0000 0000" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <description-item title="Github">
          <template #content>
            <a href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </template>
        </description-item>
      </a-col>
    </a-row>
  </a-drawer>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive, PropType } from 'vue'
import { PlusOutlined } from '@ant-design/icons-vue';
import descriptionItem from './descriptionItem/index.vue';

const enum placementEnum {
  "top",
  "right",
  "bottom",
  "left"
}

export default defineComponent({
  name: "ps-drawer",
  components: {
    PlusOutlined,
    descriptionItem
  },
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    destroyOnClose: {
      type: Boolean,
      default: false
    },
    mask: {
      type: Boolean,
      default: true
    },
    maskCloaable: {
      type: Boolean,
      default: true
    },
    maskStyle: {
      type: Object,
      default: () => {}
    },
    title: {
      type: String,
    },
    visible: {
      type: Boolean,
      default: false
    },
    wrapStyle: {
      type: Object,
    },
    wrapClassName: {
      type: String,
    },
    drawerStyle: {
      type: Object,
    },
    headerStyle: {
      type: Object,
    },
    bodyStyle: {
      type: Object,
    },
    width: {
      type: String || Number,
      default: 256
    },
    height: {
      type: String || Number,
    },
    zIndex: {
      type: Number,
      default: 1000
    },
    placement: {
      type: Object as PropType<placementEnum>,
      default: placementEnum.right
    },
    afterVisibleChange: {
      type: Function,
    },
    keyboard: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };

    const placement = ref<string>('left');

    const onClose = () => {
      visible.value = false;
    };

    onMounted(() => {
      visible.value = false;
    });

    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: '',
      description: '',
    });

    const rules = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const childrenDrawer = ref<boolean>(false);
    const showChildrenDrawer = () => {
      childrenDrawer.value = true;
    };
    const onChildrenDrawerClose = () => {
      childrenDrawer.value = false;
    };
    const pStyle = {
      fontSize: '16px',
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: '16px',
    };
    const pStyle2 = {
      marginBottom: '24px',
    };
    return {
      visible,
      afterVisibleChange,
      showDrawer,
      placement,
      onClose,
      form,
      rules,
      childrenDrawer,
      showChildrenDrawer,
      onChildrenDrawerClose,
      pStyle,
      pStyle2,
    }
  }
})
</script>

<style scoped>

</style>>
