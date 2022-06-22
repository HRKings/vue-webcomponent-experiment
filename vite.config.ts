import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry: './src/main.ts',
      name: 'Vue-WC',
    }
  },
  plugins: [vue({
    customElement: true
  })]
})
