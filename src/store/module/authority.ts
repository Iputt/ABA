/*
 * @Description: 权限状态管理
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import { reactive, readonly } from 'vue';

const state = reactive({
  canEdit: false, //是否能编辑
})

const getters = reactive({
  //获取当前编辑权限
  get getCanEdit() {
    return state.canEdit;
  },
})

const mutations = {
  //改变编辑权限
  changeCanEdit: (_val: boolean) => {
    state.canEdit = _val;
  }
}

export const authorityStore = readonly({
  state,
  getters,
  ...mutations
})