import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // 👇 Important if deploying to GitHub Pages
  base: '/NFT-app/',

  plugins: [react()],

  define: {
    global: 'globalThis', // ✅ Fixes "global is not defined"
    'process.env': {},    // Polyfill process.env
  },

  resolve: {
    alias: {
      process: 'process/browser',
      stream: 'stream-browserify',
      util: 'util',
      assert: 'assert',
      buffer: 'buffer', // ✅ Add this line
    },
  },
})
