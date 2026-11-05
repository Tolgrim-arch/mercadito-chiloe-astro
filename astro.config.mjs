import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tolgrim-arch.github.io',
  base: '/mercadito-chiloe-astro',
  output: 'static',
  vite: { plugins: [tailwindcss()] }
});
