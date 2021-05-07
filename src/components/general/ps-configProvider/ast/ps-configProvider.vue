<template>
  <a-config-provider :getPopupContainer="getPopupContainer">
    <app />
  </a-config-provider>
  <div class="change-locale">
    <span style="margin-right: 16px">Change locale of components:</span>
    <a-radio-group v-model:value="locale">
      <a-radio-button key="en" :value="enUS.locale">English</a-radio-button>
      <a-radio-button key="cn" :value="zhCN.locale">中文</a-radio-button>
    </a-radio-group>
  </div>
  <a-config-provider :locale="locale === 'en' ? enUS : zhCN">
    <div class="locale-components">
      <div class="example">
        <a-pagination :total="50" show-size-changer />
      </div>
      <div class="example">
        <a-select show-search style="width: 200px">
          <a-select-option value="jack">jack</a-select-option>
          <a-select-option value="lucy">lucy</a-select-option>
        </a-select>
        <a-date-picker />
        <a-time-picker />
        <a-range-picker style="width: 200px" />
      </div>
      <div class="example">
        <a-button type="primary" @click="visible = true">Show Modal</a-button>
        <a-button @click="info">Show info</a-button>
        <a-button @click="confirm">Show confirm</a-button>
        <a-popconfirm title="Question?">
          <a href="#">Click to confirm</a>
        </a-popconfirm>
      </div>
      <div class="example">
        <a-transfer :data-source="[]" show-search :target-keys="[]" :render="item => item.title" />
      </div>
      <div class="site-config-provider-calendar-wrapper">
        <a-calendar :fullscreen="false" :value="moment()" />
      </div>
      <div class="example">
        <a-table :data-source="[]" :columns="columns" />
      </div>
      <a-modal v-model:visible="visible" title="Locale Modal">
        <p>Locale Modal</p>
      </a-modal>
    </div>
  </a-config-provider>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { Modal } from 'ant-design-vue';
import enUS from 'ant-design-vue/es/locale/en_US';
import zhCN from 'ant-design-vue/es/locale/zh_CN';
import moment from 'moment';
import 'moment/dist/locale/zh-cn';

moment.locale('en');

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    filters: [
      {
        text: 'filter1',
        value: 'filter1',
      },
    ],
  },
  {
    title: 'Age',
    dataIndex: 'age',
  },
];

export default defineComponent({
  name: "ps-configProvider",
  components: {},
  props: {
    autoInsertSpaceInButton: {
      type: Boolean,
      default: true
    },
    csp: {
      type: String,
    },
    renderEmpty: {
      type: String,
    },
    locale: {
      type: Object,
    },
    prefixCls: {
      type: String,
    },
    pageHeader: {
      type: String,
    },
    transformCellText: {
      type: String
    }
  },
  setup() {
    const visible = ref(false);
    const locale = ref(enUS.locale);
    watch(locale, val => {
      moment.locale(val);
    });
    const info = () => {
      Modal.info({
        title: 'some info',
        content: 'some info',
      });
    };
    const confirm = () => {
      Modal.confirm({
        title: 'some info',
        content: 'some info',
      });
    };
    return {
      columns,
      visible,
      locale,
      moment,
      enUS,
      zhCN,
      info,
      confirm,
    }
  }
})
</script>

<style scoped>
.site-config-provider-calendar-wrapper {
  width: 319px;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
}
.locale-components {
  border-top: 1px solid #d9d9d9;
  padding-top: 16px;
}

.example {
  margin: 16px 0;
}

.example > * {
  margin-right: 8px;
}

.change-locale {
  margin-bottom: 16px;
}
[data-theme='dark'] .locale-components {
  border-top: 1px solid #303030;
}
[data-theme='dark'] .site-config-provider-calendar-wrapper {
  border: 1px solid #303030;
}
</style>>
