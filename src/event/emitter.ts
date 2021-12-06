/*
 * @Description: 事件中心
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 * // 可以通过引入reactive, ref帮助我们的事件中心内部维护一个响应式的数据，实现当事件中心进行一定通信行为时，去更新对应的视图。
 * // 可以引入computed实现计算属性的功能。
 * // 可以加入watch,watchEffect实现数据监听做出一定逻辑行为的功能。
 */
export default class Emitter {
    /**
     * 事件集合
     */
    events: Map<any, any>;

    constructor() {
      /**
       * @type {Map<Symbol, function[]>}
       */
      this.events = new Map();
    }
    /**
     * 触发事件
     * @param {Symbol} eventName 事件名称
     * @param args 参数
     */
    emit(eventName: string, ...args: any) {
      if (this.events.has(eventName)) {
        this.events.get(eventName).forEach(function (fn: any) {
          fn(...args);
        });
      }
    }
    /**
     * 注册事件
     * @param {Symbol} eventName 事件名称
     * @param {function} fn 回调函数
     */
    on(eventName: string, fn: any) {
      const events = this.events.get(eventName) || [];
      events.push(fn);
      this.events.set(eventName, events);
    }
  
    /**
     * 删除事件
     * @param {Symbol} eventName 事件名称
     * @param {function} fn 回调函数
     */
    off(eventName: string, fn: any) {
      if (this.events.has(eventName)) {
        const events = this.events.get(eventName);
        const index = events.findIndex((func: any) => func === fn);
        events.splice(index, 1);
      }
    }
  }
  