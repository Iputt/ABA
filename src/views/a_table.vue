<!--
 * @Description: 
 * @Author: lfy
 * @Date: 2020-12-21 10:19:13
 * @LastEditTime: 2020-12-21 16:01:56
 * @LastEditors: lfy
-->
<template>
  <vxe-toolbar>
    <template #buttons>
      <vxe-button @click="allAlign = 'left'">居左</vxe-button>
      <vxe-button @click="allAlign = 'center'">居中</vxe-button>
      <vxe-button @click="allAlign = 'right'">居右</vxe-button>
      <!-- <vxe-button @click="$refs.xTable.setCurrentRow(tableData[1])">设置第二行选中</vxe-button> -->
      <vxe-button @click="$refs.xTable.clearCurrentRow()">取消选中</vxe-button>
      <vxe-button @click="getCurrentEvent">获取高亮行</vxe-button>
    </template>
  </vxe-toolbar>

  <vxe-table 
  empty-text="没有更多数据了！"
  ref="xTable"
  resizable
  height="400"
  round
  border
  stripe
  show-header-overflow
  show-overflow
  highlight-hover-row
  highlight-current-row
  highlight-hover-column
  highlight-current-column
  class="mytable-style mytable-scrollbar"
  :cell-class-name="cellClassName2"
  :align="allAlign" 
  :data="demo2.tableData"
  @cell-click="CellClickEvent2"
  @current-change="currentChangeEvent">>
    <vxe-table-column type="seq" width="60" title="Seq" fixed="left"></vxe-table-column>
    <vxe-table-column field="name" title="Name" min-width="100" width="300"></vxe-table-column>
    <vxe-table-column field="sex" title="Sex" width="300"></vxe-table-column>
    <vxe-table-column field="age" title="Age" width="300"></vxe-table-column>
          <vxe-table-column field="role" title="Role" width="300"></vxe-table-column>
          <vxe-table-column field="address" title="Address" width="350" show-overflow></vxe-table-column>
  </vxe-table>
</template>

<script lang='ts'>
import { defineComponent, ref, reactive } from "vue";
import VXETable, { VxeTableEvents, VxeTableInstance, VxeTablePropTypes } from "vxe-table";

export default defineComponent({
  name: "AbTable",
  props: {},
  setup() {
    const allAlign = ref(null)
            
    const demo2 = reactive({
      tableData: [
        { id: 10001, name: 'Test1', role: 'Develop', sex: 'Man', age: 28, address: 'vxe-table 从入门到放弃' },
        { id: 10002, name: 'Test2', role: 'Test', sex: 'Women', age: 22, address: 'Guangzhou' },
        { id: 10003, name: 'Test3', role: 'PM', sex: 'Man', age: 32, address: 'Shanghai' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'vxe-table 从入门到放弃' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'vxe-table 从入门到放弃' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'vxe-table 从入门到放弃' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'vxe-table 从入门到放弃' },
        { id: 10004, name: 'Test4', role: 'Designer', sex: 'Women ', age: 23, address: 'vxe-table 从入门到放弃' },
        { id: 10005, name: 'Test5', role: 'Develop', sex: 'Women ', age: 30, address: 'Shanghai' },
        { id: 10006, name: 'Test6', role: 'Designer', sex: 'Women ', age: 21, address: 'vxe-table 从入门到放弃' },
        { id: 10007, name: 'Test7', role: 'Test', sex: 'Man ', age: 29, address: 'vxe-table 从入门到放弃' },
        { id: 10008, name: 'Test8', role: 'Develop', sex: 'Man ', age: 35, address: 'vxe-table 从入门到放弃' }
      ],
      selectRow: null as any,
      selectColumn: null as any
    })

    const cellClassName2: VxeTablePropTypes.CellClassName = ({row, column}) => {
      if(row === demo2.selectRow && column === demo2.selectColumn){
        return 'col-orange'
      }
      return null;
    }

    const CellClickEvent2: VxeTableEvents.CellClick = ({row, column}) => {
      demo2.selectRow = row
      demo2.selectColumn = column
    }

    const xTable = ref({} as VxeTableInstance)

    const currentChangeEvent: VxeTableEvents.CurrentChange = ({ rowIndex }: any) => {
      console.log(`行选中事件 ${rowIndex}`)
    }

    const getCurrentEvent = () => {
      console.log(`getCurrentEvent`)
      const $table = xTable.value
      VXETable.modal.alert(JSON.stringify($table.getCurrentRecord()))
    }

    return {
      allAlign,
      demo2,
      xTable,
      cellClassName2,
      CellClickEvent2,
      currentChangeEvent,
      getCurrentEvent
    }
  },
});
</script>

<style scoped>
.mytable-style.vxe-table .vxe-body--row.row-green {
  background-color: #187;
  color: #fff;
}
.mytable-style.vxe-table .vxe-header--column.col-blue {
  background-color: #2db7f5;
  color: #fff;
}
.mytable-style.vxe-table .vxe-body--column.col-red {
  background-color: red;
  color: #fff;
}
.mytable-style.vxe-table .vxe-body--column.col-orange {
  background-color: #f60;
  color: #fff;
}
/*滚动条整体部分*/
.mytable-scrollbar ::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
/*滚动条的轨道*/
.mytable-scrollbar ::-webkit-scrollbar-track {
  background-color: #FFFFFF;
}
/*滚动条里面的小方块，能向上向下移动*/
.mytable-scrollbar ::-webkit-scrollbar-thumb {
  background-color: #bfbfbf;
  border-radius: 5px;
  border: 1px solid #F1F1F1;
  box-shadow: inset 0 0 6px rgba(0,0,0,.3);
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:hover {
  background-color: #A8A8A8;
}
.mytable-scrollbar ::-webkit-scrollbar-thumb:active {
  background-color: #787878;
}
/*边角，即两个滚动条的交汇处*/
.mytable-scrollbar ::-webkit-scrollbar-corner {
  background-color: #FFFFFF;
}
</style>
