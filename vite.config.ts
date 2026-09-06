import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'remove-crossorigin',
      transformIndexHtml(html) {
        return html
          .replace(/<script type="module" crossorigin /g, '<script type="module" ')
          .replace(/<link rel="stylesheet" crossorigin /g, '<link rel="stylesheet" ')
      },
    },
  ],
  base: '/portfolio-fresh/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'es2020',
    modulePreload: {
      polyfill: true,
    },
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})