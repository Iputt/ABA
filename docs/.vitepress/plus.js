/**
  * 全站路径配置
  */
const root = {
  /** 部署的二级地址 */
  base: '/docs',
  // 搜索的文件名地址，默认是根目录下,与Layout.vue 搜索数据源同步
  keyword: '\\keywords.json',
  /** 当前项目根目录地址 */
  path: '',
};

/**
 * 顶部导航
 */
const nav = [
  { text: '主页', link: '/' },
  {
    text: 'h5',
    link: '/h5/',
  },
  {
    text: 'plugin',
    link: '/plugin/',
  },
  {
    text: 'vue',
    link: '/vue/',
  },
  {
    text: 'Quick.Lib',
    link: '/lib/',
  },
  {
    text: 'QVE UI',
    link: '/ui/',
  },
  {
    text: 'QVE',
    link: '/qve/',
  },
  {
    text: '更多',
    link: '',
    items: [
      {
        text: 'IconFont 图标',
        link: 'https://qve.gitee.io/docs/fonts/demo_index.html',
      },
      { text: '码云', link: 'https://gitee.com/qve/docs' },
      { text: 'Github', link: 'https://github.com/appbest/' },
      { text: 'NPM lib', link: 'https://www.npmjs.com/package/quick.lib' },
    ],
  },
];

/**
 * 左侧导航分类
 */
let sidebar = {
  '/ui/': [
    {
      text: '安装使用',
      link: 'index',
    },
    {
      text: '全局配置',
      link: 'config',
    },
    {
      text: '全局接口',
      link: 'global',
    },
    {
      text: 'Icon 图标',
      link: 'icon',
    },
    {
      text: 'Grid 栅格',
      link: 'grid',
    },
    {
      text: 'Badge 徽标数',
      link: 'badge',
    },
    {
      text: 'Button 按钮',
      link: 'button',
    },
    {
      text: 'Tooltip 小提示',
      link: 'tooltip',
    },
    {
      text: 'Tag 标签',
      link: 'tag',
    },
    {
      text: 'Card 卡片',
      link: 'card',
    },
    {
      text: 'Tabs 标签页',
      link: 'tabs',
    },
    {
      text: 'Paged 分页',
      link: 'paged',
    },
    {
      text: 'Loading 加载',
      link: 'loading',
    },
    {
      text: 'Input 输入框',
      link: 'input',
    },
    {
      text: 'Switch 开关',
      link: 'switch',
    },
    {
      text: 'Radio 单选框',
      link: 'radio',
    },
    {
      text: 'Checkbox 多选框',
      link: 'checkbox',
    },
    {
      text: 'Table 表格',
      link: 'table',
    },
    {
      text: 'Select 选择器',
      link: 'select',
    },
    {
      text: 'Form 表单',
      link: 'form',
    },
    {
      text: 'DatePicker 时间日期',
      link: 'datePicker',
    },
    {
      text: 'TextJson ',
      link: 'textJson',
    },
    {
      text: 'TextUbb',
      link: 'textUbb',
    },
    {
      text: 'ImgGlass 图片背景',
      link: 'imgGlass',
    },
    {
      text: 'ImgLazy 图片懒加载',
      link: 'imgLazy',
    },
    {
      text: 'Tree 树形组件',
      link: 'tree',
    },
    {
      text: 'Menu 导航菜单',
      link: 'menu',
    },
    {
      text: 'Message 消息',
      link: 'message',
    },
    {
      text: 'Notice 通知提醒',
      link: 'notice',
    },
    {
      text: 'Frame 弹窗拖拽',
      link: 'frame',
    },
    {
      text: 'Drag 拖拽窗口',
      link: 'drag',
    },
    {
      text: 'Modal 对话框',
      link: 'modal',
    },
    {
      text: 'Poptip 气泡提示',
      link: 'poptip',
    },
    {
      text: 'Handle 拖把手',
      link: 'handle',
    },
    {
      text: 'Mask 遮罩',
      link: 'mask',
    },
  ],
  '/qve/': [
    {
      text: '快速上手',
      link: 'index',
    },
    {
      text: '组件模板',
      link: 'tpl',
    },
    {
      text: 'Http 请求',
      link: 'http',
    },
    {
      text: '全局状态',
      link: 'store',
    },
    {
      text: '动态列表',
      link: 'listor',
    },
    {
      text: '动态表单',
      link: 'editor',
    },
    {
      text: '查询面板',
      link: 'panelForm',
    },
    {
      text: '动态控件',
      link: 'control',
    },
    {
      text: '代码编辑器',
      link: 'CodeEditor',
    },
    {
      text: '异步动态组件',
      link: 'asyncModel',
    },
    {
      text: '及时通信',
      link: 'io',
    },
  ],
  // 必须放最后
  '/': [
    {
      text: '介绍',
      link: 'index',
    },
    {
      text: 'vue3.x 新手上路',
      link: 'vue/start',
    },
  ],
};

const path = require('path');
/**
 * 根目路径
 * @param {*} dir 指定的路径
 * @returns 返回完整路径
 */
const resolve = dir => {
  return path.resolve(__dirname, dir);
};

// 当前项目目录
root.path = resolve('../../');

/**
 * markdown-it 外挂
 * @param {*} md 对象
 */
const usePlus = md => {
  // use more markdown-it plugins!
  md.use(
    require('quick-plugin-md/language/'),
    {
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
    }
  );
};

/**
 * 路径补全处理
 * @param {*} data 侧边栏
 * @returns 
 */
const pathJoin = data => {
  let _sidebar = {};

  // 路径处理
  for (let k in data) {
    // let _key = k != '/' ? root.base + k : k;
    //console.log('sidebar', _key);

    data[k].forEach(e => {
      // 补充路径
      e.link = k + e.link;
      // console.log('sidebar.' + k, e);
      if (e.children) {
        // 有下级
        e.children.forEach(item => {
          // let _path=e.link||'';
          // 补充路径
          item.link = e.link + item.link;
        });
      }
    });

    _sidebar[k] = data[k];
  }

  return _sidebar;
};

sidebar = pathJoin(sidebar);

/**
 * 初始化页面的搜索数据
 */
const { KeywordInit } = require('quick-plugin-md/search/');
KeywordInit(sidebar, root.keyword, root.path);

//console.log(sidebar);

module.exports = { resolve, usePlus, root, nav, sidebar };
