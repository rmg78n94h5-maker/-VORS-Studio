import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://vorsstudio.ru',
  output: 'static',
  build: {
    format: 'directory'
  }
});
