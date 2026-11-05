import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const sourceDir = resolve('public/images/mercadito');
const outputDir = join(sourceDir, 'responsive');
const images = ['exterior-01', 'ambiente-01', 'ambiente-03', 'plato-01', 'plato-02', 'plato-04'];
const widths = [480, 768, 1024];
await mkdir(outputDir, { recursive: true });
for (const name of images) {
  for (const width of widths) {
    const source = join(sourceDir, `${name}.jpg`);
    const pipeline = sharp(source).rotate().resize({ width, withoutEnlargement: true });
    await pipeline.clone().avif({ quality: 55 }).toFile(join(outputDir, `${name}-${width}.avif`));
    await pipeline.clone().webp({ quality: 76 }).toFile(join(outputDir, `${name}-${width}.webp`));
  }
}
console.log(`Generadas ${images.length * widths.length * 2} variantes responsivas.`);
