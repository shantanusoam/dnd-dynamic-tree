import { defineConfig } from 'vite'
import { resolve } from 'path'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'
import { libInjectCss } from 'vite-plugin-lib-inject-css'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] }),  libInjectCss()],
    build: {
        copyPublicDir: false,
        rollupOptions: {
            external: ['react', 'react/jsx-runtime'],
        },
       lib: {
          entry: resolve(__dirname, 'lib/main.ts'),
          formats: ['es']
        }
}})
