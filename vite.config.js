import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        cardapio: resolve(import.meta.dirname, 'cardapio.html')
      }
    }
  }
});
