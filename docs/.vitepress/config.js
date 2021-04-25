// vitepress/config.js
const { usePlus, root, nav, sidebar } = require('./plus');
const GuideSidebar = [
  { text: '介绍', link: '/guide/' }
]
const ComponentSidebar = [
  { text: 'Git', link: '/component/' }
]
const NoticeSidebar = [
  { text: 'Vue', link: '/notice/' }
]

module.exports = {
  title: "Prsis Docs",
  description: "The project of Prsis uses documentation.", 
  base: "/", 
  // lang: 'en-US', 
  alias: {
    '@': root.path,
    vue: 'vue/dist/vue.esm-bundler.js',
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/img/linktolink.png", //图片放在public文件夹下
      },
    ],
  ],
  markdown: {
    lineNumbers: true,
    // options for markdown-it-anchor
    //  anchor: { permalink: false },
    // options for markdown-it-toc
    // toc: { includeLevel: [1, 2] },

    config: usePlus
    //md => {
      // use more markdown-it plugins! quick-plugin-md/dist/plugin/mermaid.js
       //md.use(require('quick-plugin-md/language/'),{
    // 无需标签根据第一行代码自动转为图形组件
    // tags: ['gitGraph', 'classDiagram', 'sequenceDiagram', 'gantt'],
    // /** 默认标签*/
    // default: 'mermaid',
    // // 输出日志
    // log: true,
    // // 自定义markdown标签对应转换的模板组件名
    // template: {
    //   // mermaid 标签转为 组件定义
    //   // mermaid: '<mermaid code="{code}"></mermaid>',
    //   mermaid: '<mermaid>{code}</mermaid>',
    //   pie: '<PieCode>{code}</PieCode>',
    // },
     //  });
    //},
  },
  // 主题配置
  themeConfig: {
    repo: 'Iputt/ABA',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',
    algolia: {
      apiKey: 'your_api_key',
      indexName: 'index_name',
      searchParameters: {
        facetFilters: ['tags:guide,api']
      }
    },
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Component", link: "/component/" },
      { text: "Notice", link: "/notice/" },
    ],
    sidebar: {
      '/guide/': GuideSidebar,
      '/component/': ComponentSidebar, 
      '/notice/': NoticeSidebar,
    }
  },
};
