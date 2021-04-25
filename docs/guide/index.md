# 文档使用介绍

## 基础使用

## 文档语法

#### 标签

::: tip
这是一条提示信息
:::

::: warning
这是一条警告信息
:::

::: danger
这是一条错误信息
:::

###### 自定义提示

::: danger Stop
类型 + 提示标题
提示内容
:::

#### 高亮代码

```js{3-5}
//```js{3-5}
export default {
  data () {
    return {
      msg: ''
    }
  }
}
```

#### 表格

| head1    |   head2   | head3 |
| ---------- | :---------: | ----: |
| book   | 2-sdf | $12 |
| 2 apple   |  test  |  ￥ef |
| car |  new  |  *1 |

#### 表情

* :tada: :100:

## 代码运行

- 使用CodeRun标签
  - editable： 可编辑

<CodeRun  lang="js" editable>
```js
// js语言类别 在线测试执行代码
return 1 + 1;
```
</CodeRun>

<a-button type="primary" >Display normal message</a-button>

<CodeRun auto editable>
```vue
<template>
  <a-button type="primary" @click="info">Display normal message</a-button>
</template>
<script type="module">
// import { message } from 'ant-design-vue';
// import { defineComponent } from 'vue';
//const defineComponent = $plus.vue.defineComponent;
// const AButton = $plus.antd.AButton
export default({
  setup() {
    // 使用外挂方式引入，具体查看demo
    // const $plus = window.$plus;
    // const message = $plus.antd.message;
    const info = () => {
      //message.info('This is a normal message');
      alert("This is a normal message")
    };
    return {
      info
    };
  },
});
</script>
```
</CodeRun>
