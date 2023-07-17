import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from "path";
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [UnoCSS(), react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src")
    }
  },
  // global css
  css: {
    preprocessorOptions: {
      less: {
        // modifyVars: {
        // 	"primary-color": "#1DA57A",
        // },
        javascriptEnabled: true,
        additionalData: `@import "@/styles/var.less";`
      }
    }
  },
})
