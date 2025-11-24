import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/v1/',      // repo name
  plugins: [react()]
})
