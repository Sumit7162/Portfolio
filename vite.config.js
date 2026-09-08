import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Base stays "/" for root-domain hosts (Vercel, Netlify, Firebase).
// The gh-pages deploy passes --base=/Portfolio/ on the CLI instead.
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
