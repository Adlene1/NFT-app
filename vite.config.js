import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 this is critical for GitHub Pages
  base: '/NFT-app/',

  plugins: [react()],

  // Polyfills for Node.js built-ins
  define: {
    'process.env': {}, // Polyfill process.env
  },
  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util',
      assert: 'assert',
    },
  },
})
