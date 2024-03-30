/** @type {import('vite').UserConfig} */
import path from "path"
import react from "@vitejs/plugin-react-swc"
import { defineConfig } from "vite"
import tailwindcss from 'tailwindcss'

export default defineConfig({
  build: {
    outDir: 'public',
  },
  publicDir: 'public',
  plugins: [react()],
  resolve: {
    alias: {
      '@/': './',
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  }
})
