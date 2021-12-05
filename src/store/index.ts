/*
 * @Description: 全局状态
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import { store } from './store'
import { authorityStore } from './module/authority'
import { provide, inject } from '@vue/runtime-core';


const STOREMODULE: any = {
  store,
  authorityStore
}

/**
 * 模块名常量定义
 */
export const STOREMODULETAG = {
  STORE: 'store',
  AUTHORITYSTORE: 'authorityStore'
}

/**
 * 全局状态提供者
 */
export const provideStore = (key = STOREMODULETAG.STORE) => {
  provide(key, STOREMODULE[key]);
} 

/**
 * 注入全局状态
 * @returns 
 */
export const useStore = (key = STOREMODULETAG.STORE) => {
  return inject(key);
}