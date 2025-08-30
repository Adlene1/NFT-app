import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NFT-Application/',
  plugins: [react()],
  define: {
    'process.env': {},   // polyfill process.env
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
