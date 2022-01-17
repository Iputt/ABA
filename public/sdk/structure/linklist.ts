/*
 * @Description: 链表
 * @Author: lfy
 * @Date: 2021-12-10 11:48:34
 * @LastEditTime: 2021-12-10 11:48:34
 * @LastEditors: lfy
 */


/**
 * 链表节点
 */
class LinkNode {
  data: unknown; //数据域
  prev: LinkNode; //指针域
  next: LinkNode; //指针域

  constructor(data: unknown) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

/**
 * 单链表
 */
class SingleList {
  size: number; //链表长度
  head: LinkNode; //头节点
  currNode: LinkNode; //当前指针指向的节点
  
  constructor() {
    this.size = 0;
    this.head = new LinkNode('head');
    this.currNode = null;
  }

  /**
   * 查找元素
   * @param item 
   * @returns 
   */
  find(item: unknown) {
    let currNode: LinkNode = this.head;
    
    while(currNode && (currNode.data !== item)){
      currNode = currNode.next;
    }

    return currNode;
  }

  /**
   * 插入元素
   * @param ele 
   * @param item 
   * @returns 
   */
  insert(ele: unknown, item: unknown) {
    let currNode = this.find(item);
    if(!currNode) return;

    let newNode = new LinkNode(ele);

    newNode.next = currNode.next;
    currNode.next = newNode;
    this.size ++;
  }

  /**
   * 删除元素
   * @param item 
   * @returns 
   */
  remove(item: unknown) {
    if(this.isEmpty() || item == 'head' || !this.find(item)) return;

    let currNode = this.head;

    while(currNode.next && currNode.next.data !== item){
      currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    this.size --;
  }

  /**
   * 添加元素
   * @param ele 
   */
  append(ele: unknown) {
    let newNode = new LinkNode(ele)
    let currNode = this.findLast();

    currNode.next = newNode;
    this.size ++;
  }

  /**
   * 获取最后一个元素
   * @returns 
   */
  findLast() {
    let currNode: LinkNode = this.head;

    while(currNode.next){
      currNode = currNode.next;
    }

    return currNode;
  }

  /**
   * 链表是否为空
   * @returns 
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * 显示当前节点
   * @returns 
   */
  show() {
    return this.currNode.data;
  }

  /**
   * 获取链表长度
   * @returns 
   */
  getLength() {
    return this.size;
  }

  /**
   * 向后移动n个节点
   * - 向后移动超过单链表长度时，返回单链表最后一个节点
   * @param n 
   * @param currNode 
   * @returns 
   */
  advance(n: number, currNode = this.head) {
    this.currNode = currNode;

    while((n--) && this.currNode.next) {
      this.currNode = this.currNode.next;
    }

    return this.currNode;
  }

  /**
   * 遍历输出链表数据
   * @returns 
   */
  display() {
    let result = '';
    let currNode = this.head;

    while(currNode){
      result += ' ' + currNode.data;
      currNode = currNode.next;
      if(currNode) result += ' ';
    }

    return result;
  }

  /**
   * 清空链表数据
   */
  clear() {
    this.head.next = null;
    this.size = 0;
  }
}
