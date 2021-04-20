## VUE

#### Props

#####  默认值写法

```js
//函数
{
   type: Function,
   default: function() {}
}
//字符串类型
{
  type: String,
  default: "" 
}
//数字类型
{
  type: Number,
  default: 4
}
//数组类型
{
  type: Array,
  default() {
    return [];
}
//对象类型
{
  type: Object,
  default() {
    return {};
  }
}
//布尔类型
{
  type: Boolean,
   default: true
}
//布尔类型
{
  type: Boolean,
  default() {
  	return true;
  }
}
```

