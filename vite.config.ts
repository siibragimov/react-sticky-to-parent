import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'ReactStickyToParent',
      fileName: 'react-sticky-to-parent'
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'jsxRuntime'
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'react-sticky-to-parent.css';
          return assetInfo.name ?? 'assets/[name]-[hash][extname]';
        }
      }
    }
  }
})
