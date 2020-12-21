/*
 * @Description: vxe-table 全局配置
 * @Author: lfy
 * @Date: 2020-12-21 17:27:36
 * @LastEditTime: 2020-12-21 18:04:40
 * @LastEditors: lfy
 */
import XEUtils from 'xe-utils'
import VXETable from 'vxe-table'
import i18n from '@/assets/i18n'

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
VXETable.formats.add('myAmount', ({ cellValue }, digits = 2) => {
  return XEUtils.commafy(XEUtils.toNumber(cellValue), { digits })
})

export default VXETable;