<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar 
      v-model:value="value" 
      :fullscreen="false" 
      @panelChange="onPanelChange" />
  </div>

  <a-calendar v-model:value="value">
    <template #dateCellRender="{ current: value }">
      <ul class="events">
        <li v-for="item in getListData(value)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current: value }">
      <div v-if="getMonthData(value)" class="notes-month">
        <section>{{ getMonthData(value) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>

  <a-alert :message="`You selected date: ${selectedValue && selectedValue.format('YYYY-MM-DD')}`" />
  <div
    :style="{
      display: 'inline-block',
      width: '500px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
    }"
  >
    <a-calendar :value="date" @select="onSelect" @panelChange="onPanelChange" />
  </div>
  <div
    :style="{
      display: 'inline-block',
      width: '500px',
      marginLeft: '20px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
    }"
  >
    <a-calendar v-model:value="date1" />
  </div>

  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px">
    <a-calendar v-model:value="value" :fullscreen="false" @panelChange="onPanelChange">
      <template #headerRender="{ value, type, onChange, onTypeChange }">
        <div style="padding: 10px">
          <div style="margin-bottom: 10px">Custom header</div>
          <a-row type="flex" justify="space-between">
            <a-col>
              <a-radio-group size="small" :value="type" @change="e => onTypeChange(e.target.value)">
                <a-radio-button value="month">Month</a-radio-button>
                <a-radio-button value="year">Year</a-radio-button>
              </a-radio-group>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                class="my-year-select"
                :value="String(value.year())"
                @change="
                  newYear => {
                    onChange(value.clone().year(newYear));
                  }
                "
              >
                <a-select-option
                  v-for="val in getYears(value)"
                  :key="String(val)"
                  class="year-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                :value="String(value.month())"
                @change="
                  selectedMonth => {
                    onChange(value.clone().month(parseInt(selectedMonth, 10)));
                  }
                "
              >
                <a-select-option
                  v-for="(val, index) in getMonths(value)"
                  :key="String(index)"
                  class="month-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </div>
      </template>
    </a-calendar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import moment, { Moment } from 'moment';

export default defineComponent({
  name: "ps-calendar",
  components: {},
  props: {},
  setup() {
    const value = ref<Moment>();
    const getListData = (value: Moment) => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event。。....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }
      return listData || [];
    };

    const getMonthData = (value: Moment) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    const date = ref(moment('2017-01-25'));
    const selectedValue = ref(moment('2017-01-25'));
    const date1 = ref(moment('2017-01-25'));

    const onSelect = (value: Moment) => {
      date.value = value;
      selectedValue.value = value;
    };
    const onPanelChange = (value: Moment) => {
      date.value = value;
    };

    return {
      value,
      onPanelChange,
      getListData,
      getMonthData,
      date,
      selectedValue,
      date1,
      onSelect
    }
  }
})
</script>

<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>>
