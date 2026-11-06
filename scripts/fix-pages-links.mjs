import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const root = 'dist';
const base = '/mercadito-chiloe-astro';
const isVercel = process.env.VERCEL === '1';
const pages = await readdir(root, { recursive: true });
for (const file of pages.filter((item) => item.endsWith('.html'))) {
  const path = join(root, file);
  let html = await readFile(path, 'utf8');
  if (!isVercel) {
    for (const route of ['nosotros', 'carta', 'planifica-tu-visita', 'galeria', 'encuentranos', 'reservas']) {
      html = html.replaceAll(`href="/${route}`, `href="${base}/${route}`);
    }
    html = html.replaceAll('href="/"', `href="${base}/"`);
  }
  await writeFile(path, html);
}
