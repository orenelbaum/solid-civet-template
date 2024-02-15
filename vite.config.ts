import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from '@danielx/civet/vite'

export default defineConfig({
  plugins: [
    civetPlugin({
      ts: "preserve",
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
