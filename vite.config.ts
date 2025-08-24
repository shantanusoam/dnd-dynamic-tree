import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
import { libInjectCss } from 'vite-plugin-lib-inject-css'

// Check if we're building the library or running in dev mode
const isLibBuild = process.env.NODE_ENV === 'lib' || process.argv.includes('--mode') && process.argv.includes('lib')

export default defineConfig({
  plugins: [
    react(),
    // Only use dts and libInjectCss when building the library
    ...(isLibBuild ? [
      dts({
        include: ['lib'],
        exclude: ['lib/**/*.test.*', 'lib/**/*.stories.*']
      }),
      libInjectCss()
    ] : [])
  ],
  build: isLibBuild ? {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'dnd-dynamic-tree',
      formats: ['es', 'umd'],
      fileName: (format) => `lib/main.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', '@dnd-kit/core', '@dnd-kit/sortable', '@dnd-kit/utilities', 'clsx'],
      output: {
        globals: {
          'react': 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          '@dnd-kit/core': 'DndKitCore',
          '@dnd-kit/sortable': 'DndKitSortable',
          '@dnd-kit/utilities': 'DndKitUtilities',
          'clsx': 'clsx'
        }
      }
    }
  } : {
    // Regular build for the demo app
    outDir: 'dist-demo'
  }
})
