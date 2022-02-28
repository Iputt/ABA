import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite'
import styleImport, { AndDesignVueResolve } from 'vite-plugin-style-import'

const isProd = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? './' : '',
  root: process.cwd(),
  plugins: [
    vue(),
    vueJsx(),
    Components({
      resolvers: [AntDesignVueResolver()],
      dts: 'src/components.d.ts'
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'vue-i18n',
        '@vueuse/core',
        '@vueuse/head'
      ],
      dts: 'src/auto-import.d.ts'
    }),
    styleImport({
      resolves: [AndDesignVueResolve()],
      libs: [
        {
          libraryName: 'ant-design-vue',
          esModule: true,
          resolveStyle: name => {
            return `ant-design-vue/es/${name}/style/index`
          }
        }
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: '@import "@/assets/scss/global.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    port: 2022,
    host: '0.0.0.0',
    open: '/index.html?you=good'
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: './index.html'
    }
  }
})
