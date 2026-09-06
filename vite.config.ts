import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-fresh/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})