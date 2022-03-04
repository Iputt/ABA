/*
 * @Description: api
 * @Author: lfy
 * @Date: 2021-12-05 17:27:36
 * @LastEditTime: 2021-12-05 17:27:36
 * @LastEditors: Please set LastEditors
 */
import { Get, Post, Put, Patch, Delete } from './request'

export default {
  /**
   * 获取用户信息
   * @param params
   * @returns
   */
  getUserInfo: () => {
    return Get('../../mock/static/user.json', null)
  },

  /**
   * 上传文件
   * @param form 数据
   * @returns
   */
  uploadFile: (form: FormData, option: object) => {
    return Post('./upload', form)
  }
}
