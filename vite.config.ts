// const path = require("path");
// //path.join(__dirname)设置绝对路径
// const resolve = dir => path.join(__dirname, dir);

// module.exports = {
//   chainWebpack: config => {
//     config.resolve.alias
//       .set("@", resolve("./src"))
//       .set("components", resolve("./src/components"))
//       .set("views", resolve("./src/views"))
//       .set("assets", resolve("./src/assets"));
//   },
//   configureWebpack: {
//     /*配置vue发行使用的版本*/
//     resolve: {
//       alias: {
//         'vue$':'vue/dist/vue.esm-browser.js'
//       }
//     },
//     plugins: [],
//   },
//   devServer: {
//     port: 9000,
//     open: true,
//     // 设置代理，使客户端通过服务器的方式与服务器通信，解决跨域问题
//     proxy: {
//       "/prsis2021": {
//         target: "http://localhost:2021", //源地址
//         changeOrigin: true, //改变源
//         pathRewrite: {
//           "^/prsis2021": "http://localhost:2021" //路径重写
//         }
//       },
//       "/mock": {
//         //prsis mockserver
//         target: "http://localhost:3000", //源地址
//         changeOrigin: true, //改变源
//         pathRewrite: {
//           "^/mock": "http://localhost:3000" //路径重写
//         }
//       }
//     }
//   },
// };
// "serve": "vue-cli-service serve",
    // "build": "vue-cli-service build",
    // "lint": "vue-cli-service lint",
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()]
})
