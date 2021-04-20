const path = require("path");
//path.join(__dirname)设置绝对路径
const resolve = dir => path.join(__dirname, dir);

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("components", resolve("./src/components"))
      .set("views", resolve("./src/views"))
      .set("assets", resolve("./src/assets"));
  },
  configureWebpack: {
    /*配置vue发行使用的版本*/
    resolve: {
      alias: {
        'vue$':'vue/dist/vue.esm-browser.js'
      }
    },
    plugins: [],
  },
};
