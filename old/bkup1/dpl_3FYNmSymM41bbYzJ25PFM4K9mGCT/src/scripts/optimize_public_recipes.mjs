import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const publicDir = path.join(process.cwd(), 'public', 'recipes');

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) return;

  const dir = path.dirname(filePath);
  const base = path.basename(filePath, ext);
  const webpPath = path.join(dir, `${base}.webp`);

  if (fs.existsSync(webpPath)) {
    return;
  }

  const buffer = await fs.promises.readFile(filePath);

  await sharp(buffer)
    .resize(1200, 1200, {
      fit: 'inside',
      withoutEnlargement: true,
    })
    .webp({
      quality: 75,
      effort: 6,
      smartSubsample: true,
    })
    .toFile(webpPath);
}

async function run() {
  const entries = await fs.promises.readdir(publicDir);
  for (const entry of entries) {
    const fullPath = path.join(publicDir, entry);
    const stats = await fs.promises.stat(fullPath);
    if (stats.isFile()) {
      try {
        await optimizeFile(fullPath);
      } catch {
      }
    }
  }
}

run().catch(() => {
  process.exit(1);
});

