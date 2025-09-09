import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    base: '/developing-front-end-apps-with-react',
  plugins: [react()],
})
