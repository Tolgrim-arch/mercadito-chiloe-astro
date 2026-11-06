import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

const isVercel = process.env.VERCEL === '1';
const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || 'mercadito-chiloe-astro.vercel.app';

export default defineConfig({
  site: isVercel ? `https://${productionHost}` : 'https://tolgrim-arch.github.io',
  base: isVercel ? '/' : '/mercadito-chiloe-astro',
  output: 'static',
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },
  vite: { plugins: [tailwindcss()] }
});
