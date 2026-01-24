import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { spawn } from 'child_process'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: 'http://localhost:5173',
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
    middlewareMode: false,
    hmr: true
  }
})
