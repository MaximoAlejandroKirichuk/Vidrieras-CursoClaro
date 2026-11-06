import { defineConfig } from 'astro/config';

export default defineConfig({
  build: { format: 'directory', inlineStylesheets: 'never' },
  vite: { build: { assetsInlineLimit: 0 } },
});
