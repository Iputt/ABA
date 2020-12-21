/*
 * @Description: 
 * @Author: lfy
 * @Date: 2020-12-21 11:54:45
 * @LastEditTime: 2020-12-21 13:20:12
 * @LastEditors: lfy
 */
import { createI18n } from 'vue-i18n'
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'
import enUS from 'vxe-table/lib/locale/lang/en-US'

const messages = {
    zh: {
        ...zhCN
    },
    en: {
        ...enUS
    }
}

const i18n = createI18n({
    locale: 'zh',
    messages,
})

export default i18n