import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  //To handle CORS proxy error
  server:{
    proxy:{
'/api': 'http://localhost:3000'
    }
  },
  plugins: [react()],
})
