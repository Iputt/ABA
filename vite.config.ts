import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const isProd = process.env.NODE_ENV

// https://vitejs.dev/config/
export default defineConfig({
  base: isProd ? './' : '',
  root: process.cwd(),
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      input: './index.html'
    }
  }
})
