import { defineConfig, PluginOption } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import civetPlugin from 'vite-plugin-civet'

export default defineConfig({
  plugins: [
    solidPlugin(),
    civetPlugin({
      stripTypes: false,
      outputExtension: 'tsx',
      outputTransformerPlugin: 'solid',
    }) as PluginOption,
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
