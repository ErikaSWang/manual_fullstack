import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../public'  // Output to public instead of dist (the vite default)
  },
  server: {
    host: '0.0.0.0',
    port: 5000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    },
    allowedHosts: 'all',
    allowedHosts: ['3d004aea-abb2-427b-a163-7776ac9407e7-00-2gfl6an6ztmvd.kirk.replit.dev', '3d004aea-abb2-427b-a163-7776ac9407e7-00-2gfl6an6ztmvd.kirk.replit.dev:3000/']
  }
})
