/*
 * @Description: 事件中心注册
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import Emitter from './emitter'
import { inject, provide } from '@vue/runtime-core'

/**
 * 全局key
 */
const globalKey = Symbol();
/**
 * 全局实例
 */
let instance = new Emitter();

/**
 * 事件中心提供者
 * @param key 事件key值 默认为全局key
 */
export const providerEmitter = (key = globalKey) => {
  if(key !== globalKey) {
    provide(key, new Emitter());
  }else {
    provide(key, instance);
  }
}

/**
 * 注入事件中心
 * @param key 事件key值 默认为全局key
 */
export const useEmitter = (key = globalKey) => {
  return inject(key);
}
