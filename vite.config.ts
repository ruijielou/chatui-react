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
        modifyVars: {
        	"brand-1": "#26890d",
        	"brand-2": "#86bc25",
        	"brand-3": "#f7ffe9",
        	"red": "#046a38",
          "bubble-left-border-radius": "4px 20px 20px 20px",
          "bubble-right-border-radius": "20px 4px 20px 20px",
          "bubble-text-padding": "5px 12px",
        },
        javascriptEnabled: true,
        additionalData: `@import "@/styles/var.less";`
      }
    }
  },
})
