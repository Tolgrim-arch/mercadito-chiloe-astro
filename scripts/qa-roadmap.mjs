import { readFile, readdir, access } from 'node:fs/promises';
import { join, dirname, resolve } from 'node:path';

const root = resolve('dist');
const primary = ['', 'nosotros', 'carta', 'planifica-tu-visita', 'encuentranos', 'reservas'];
const expected = [...primary, 'galeria'];
const responsiveImages = ['exterior-01', 'ambiente-01', 'ambiente-03', 'plato-01', 'plato-02', 'plato-04'];
const failures = [];
const descriptions = new Map();
const fail = (message) => failures.push(message);
const read = (path) => readFile(path, 'utf8');

const htmlFor = (route) => join(root, route, route ? 'index.html' : 'index.html');
for (const route of expected) {
  const file = htmlFor(route);
  try { await access(file); } catch { fail(`Falta la ruta /${route}`); continue; }
  const html = await read(file);
  const label = route || 'inicio';
  if ((html.match(/<main(?:\s|>)/g) || []).length !== 1) fail(`${label}: debe tener exactamente un <main>`);
  if ((html.match(/<h1(?:\s|>)/g) || []).length !== 1) fail(`${label}: debe tener exactamente un <h1>`);
  for (const marker of ['<title>', 'name="description"', 'rel="canonical"', 'property="og:title"', 'property="og:description"']) if (!html.includes(marker)) fail(`${label}: falta ${marker}`);
  const description = html.match(/<meta name="description" content="([^"]+)"/)?.[1];
  if (!description) fail(`${label}: descripción vacía`);
  else if (primary.includes(route)) {
    if (descriptions.has(description)) fail(`${label}: repite descripción de ${descriptions.get(description)}`);
    descriptions.set(description, label);
  }
}

const notFound = await read(join(root, '404.html'));
if (!notFound.includes('noindex')) fail('404: falta noindex');
for (const target of ['/carta/', '/encuentranos/']) if (!notFound.includes(target)) fail(`404: falta recuperación a ${target}`);

const sitemap = await read(resolve('public/sitemap.xml'));
for (const route of primary) if (!sitemap.includes(route ? `/${route}/` : '/mercadito-chiloe-astro/')) fail(`sitemap: falta ${route || 'inicio'}`);
for (const excluded of ['/galeria/', '/404']) if (sitemap.includes(excluded)) fail(`sitemap: no debe incluir ${excluded}`);
for (const name of responsiveImages) for (const width of [480,768,1024]) for (const extension of ['avif','webp']) {
  try { await access(resolve(`public/images/mercadito/responsive/${name}-${width}.${extension}`)); }
  catch { fail(`imagen responsiva ausente: ${name}-${width}.${extension}`); }
}

const sourceChecks = [
  ['src/pages/index.astro', ['<SectionNav', 'id="preguntas"', 'description=']],
  ['src/pages/carta.astro', ['<SectionNav', 'data-dish-dialog', 'dialog.addEventListener(\'close\'', '<img class="aspect-[16/8]']],
  ['src/pages/planifica-tu-visita.astro', ['<SectionNav', 'id="preguntas"']],
  ['src/pages/nosotros.astro', ['/encuentranos/', 'description=']],
  ['src/pages/reservas.astro', ['data-field-error', 'aria-invalid', 'replaceChildren']],
  ['src/components/MobileQuickActions.astro', ['safe-area-inset-bottom']],
  ['src/layouts/BaseLayout.astro', ['initResponsiveImages', '/fonts/dm-400.ttf', '/fonts/playfair-500.ttf']],
];
for (const [file, markers] of sourceChecks) {
  const source = await read(resolve(file));
  for (const marker of markers) if (!source.includes(marker)) fail(`${file}: falta evidencia ${marker}`);
}

const cssFiles = (await readdir(join(root, '_astro'))).filter((name) => name.endsWith('.css'));
if (!cssFiles.length) fail('build: no se generó CSS');
for (const name of cssFiles) {
  const css = await read(join(root, '_astro', name));
  if (css.includes("url('/fonts/")) fail(`${name}: ruta absoluta de fuente rompe GitHub Pages`);
}

const htmlFiles = [];
const collect = async (directory) => { for (const entry of await readdir(directory, { withFileTypes: true })) { const path=join(directory,entry.name); if(entry.isDirectory()) await collect(path); else if(entry.name.endsWith('.html')) htmlFiles.push(path); } };
await collect(root);
for (const file of htmlFiles) {
  const html = await read(file);
  for (const match of html.matchAll(/href="([^"#]+)"/g)) {
    const href = match[1];
    if (/^(https?:|tel:|mailto:)/.test(href) || href.includes('/_astro/') || /\.[a-z0-9]+$/i.test(href.split(/[?#]/)[0])) continue;
    if (!href.startsWith('/mercadito-chiloe-astro/')) continue;
    const relative = href.replace('/mercadito-chiloe-astro/', '').split(/[?#]/)[0].replace(/\/$/, '');
    const target = relative ? join(root, relative, 'index.html') : join(root, 'index.html');
    try { await access(target); } catch { fail(`${file}: enlace interno roto ${href}`); }
  }
}

if (failures.length) {
  console.error(`QA roadmap falló con ${failures.length} problema(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}
console.log(`QA roadmap correcto: ${expected.length + 1} rutas, metadatos únicos, landmarks, sitemap, fuentes y enlaces internos.`);
