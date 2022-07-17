import { defineConfig, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

const libConfig: UserConfig = {
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: ['vue', 'vue-router', 'axios'],
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    plugins: [vue(), vueJsx()],
    alias: {
      '@': 'src',
    },
    ...mode === 'lib' ? libConfig : {},
  }
})
