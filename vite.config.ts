import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * `BASE_PATH` lets the same build target either a user site (`/`) or a
 * GitHub project page (`/repository-name/`).
 *
 *   npm run build
 *   BASE_PATH=/abnox-site/ npm run build
 */
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  build: {
    target: 'es2020',
    cssCodeSplit: true,
    sourcemap: false,
  },
  server: {
    host: true,
  },
})
