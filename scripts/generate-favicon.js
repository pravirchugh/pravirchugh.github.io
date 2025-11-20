const path = require('path');
const fs = require('fs/promises');
const sharp = require('sharp');
const pngToIco = require('png-to-ico');

const sizes = [16, 32, 48];
const rootDir = path.resolve(__dirname, '..');
const svgPath = path.join(rootDir, 'public', 'favicon.svg');
const outputPath = path.join(rootDir, 'public', 'favicon.ico');

async function createFavicon() {
  const svgExists = await fs
    .access(svgPath)
    .then(() => true)
    .catch(() => false);

  if (!svgExists) {
    throw new Error('favicon.svg not found. Please create it before generating the ICO.');
  }

  const pngBuffers = await Promise.all(
    sizes.map((size) =>
      sharp(svgPath)
        .resize(size, size, { fit: 'contain' })
        .png()
        .toBuffer()
    )
  );

  const icoBuffer = await pngToIco(pngBuffers);
  await fs.writeFile(outputPath, icoBuffer);
  console.log(`Generated favicon.ico with sizes: ${sizes.join(', ')}`);
}

createFavicon().catch((error) => {
  console.error(error);
  process.exit(1);
});

