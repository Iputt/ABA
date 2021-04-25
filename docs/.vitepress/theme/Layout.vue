<!-- .vitepress/theme/Layout.vue -->
<template>
  <Layout>
    <template #sidebar-top>
      <!-- 搜索 -->
      <SearchBar @onEvent="SearchEvent"
                 :words="keywords" />
    </template>
  </Layout>
  <!-- <Content /> make sure to include markdown outlet -->
</template>
<script>
//import 'quick-plugin-md/dist/styles/index.css'
import 'quick-plugin-md/styles/index.css'
import { useRouter, useSiteData } from 'vitepress'
import theme from 'vitepress/dist/client/theme-default/index.js';
const Layout = theme.Layout
/**
 * 搜索根目下的全局数据
 */
import keywords from "../../keywords.json";

export default {
  components: { Layout },
  setup () {

    const siteData = useSiteData()
    /** 路由 */
    const router = useRouter();
    /** 搜索事件触发 */
    const SearchEvent = (data) => {
      // 发布根目录
      let _url = siteData.value.base + data.url.substr(1);
      // let _url = data.url;
      console.log('SearchEvent：' + siteData.value.base, _url);
      router.go(_url);
    };

    return { keywords, SearchEvent }
  }
}
</script>
