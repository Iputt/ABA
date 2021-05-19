/*
 * @Description: vxe-table 全局配置
 * @Author: lfy
 * @Date: 2020-12-21 17:27:36
 * @LastEditTime: 2021-05-19 17:40:04
 * @LastEditors: Please set LastEditors
 */
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import i18n from '../assets/i18n'

VXETable.setup({
  // 对组件内置的提示语进行国际化翻译
  i18n: (key, args) => i18n.global.t(key, args)
})

//指令注册
VXETable.commands.add('exportBtn', (params) => {
  const { $table } = params
  $table.exportData()
})

//快捷菜单
VXETable.menus.add('exportData', (params) => {
  const { $table } = params
  $table.exportData()
})

// 格式金额，默认2位数
// VXETable.formats.add('myAmount', ({ cellValue }, digits = 2) => {
//   return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
// })

 // 自定义全局的格式化处理函数
VXETable.formats.mixin({
  // 格式化性别
  formatSex ({ cellValue }) {
    return cellValue ? (cellValue === '1' ? '男' : '女') : ''
  },
  // 格式化下拉选项
  // formatSelect ({ cellValue }, list) {
  //   const item = list.find(item => item.value === cellValue)
  //   return item ? item.label : ''
  // },
  // 格式化日期，默认 yyyy-MM-dd HH:mm:ss
  formatDate ({ cellValue }, format) {
    return XEUtils.toDateString(cellValue, format || 'yyyy-MM-dd HH:mm:ss')
  },
  // 四舍五入金额，每隔3位逗号分隔，默认2位数
  formatAmount ({ cellValue }, digits = 2) {
    return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
  },
  // 格式化银行卡，默认每4位空格隔开
  formatBankcard ({ cellValue }) {
    return XEUtils.commafy(XEUtils.toString(cellValue), { spaceNumber: 4, separator: ' ' })
  },
  // 四舍五入,默认两位数
  formatFixedNumber ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.round(cellValue, digits), digits)
  },
  // 向下舍入,默认两位数
  formatCutNumber ({ cellValue }, digits = 2) {
    return XEUtils.toFixed(XEUtils.floor(cellValue, digits), digits)
  },
  // 转换 moment 类型为字符串
  toMomentString ({ cellValue }, format) {
    return cellValue ? cellValue.format(format) : ''
  }
})

export default VXETable;
