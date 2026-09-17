import { defineConfig } from 'astro/config';

const githubPages = process.env.GITHUB_PAGES === 'true';

export default defineConfig({
  site: githubPages
    ? 'https://rmg78n94h5-maker.github.io'
    : 'https://vorsstudio.ru',
  base: githubPages ? '/-VORS-Studio/' : '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
