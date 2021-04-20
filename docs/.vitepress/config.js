// vitepress/config.js
const ComponentSidebar = [
  { text: 'Git', link: '/component/' }
]
const noticeSidebar = [
  { text: 'Vue', link: '/notice/' }
]

module.exports = {
  title: "Prsis Docs",
  description: "The project of Prsis uses documentation.", 
  base: "/", 
  // lang: 'en-US', 
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/linktolink.png", //图片放在public文件夹下
      },
    ],
  ],
  // 主题配置
  themeConfig: {
    repo: 'Iputt/ABA',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    carbonAds: {
      carbon: 'CEBDT27Y',
      custom: 'CKYD62QM',
      placement: 'vuejsorg'
    },
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
      searchParameters: {
        facetFilters: ['tags:guide,api']
      }
    },
    nav: [
      { text: "Guide", link: "/" },
      { text: "Component", link: "/component/" },
      { text: "Notice", link: "/notice/" },
    ],
    // sidebar: [
    //  { text: 'Our Story', link: '/about/our-story' }
    // ],
    sidebar: {
      '/component/': ComponentSidebar, 
      '/notice/': noticeSidebar,
    }
  },
};
