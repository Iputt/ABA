/*
 * @Description: 全局状态管理
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import { reactive, readonly } from 'vue';

const state = reactive({
  currentStatus: 'login', //当前状态
})

const getters = reactive({
  //获取当前状态
  get getCurrentStatus() {
    return state.currentStatus;
  },
})

const mutations = {
  //改变当前状态
  changeCurrentStatus: (_val: string) => {
    state.currentStatus = _val;
  }
}

export const store = readonly({
  state,
  getters,
  ...mutations
})