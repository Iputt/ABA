import * as path from 'path';
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
        // 配置别名
        '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true
  }
})
