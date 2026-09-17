import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react()],
  resolve: {
    // Mirrors the "@/*" path mapping in jsconfig.json. Without this the alias
    // resolves in the editor but fails at build time.
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        // React is external in the SSR build, so it cannot be chunked there.
        manualChunks: isSsrBuild ? undefined : { vendor: ['react', 'react-dom'] },
      },
    },
  },
}))
