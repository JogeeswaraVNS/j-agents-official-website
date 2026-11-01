import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputDir = './public/contact';
const outputDir = './public/contact';

fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f => f.match(/\.(jpg|jpeg|png)$/i));

console.log(`Found ${files.length} images...`);

for (const file of files) {
  const inputPath = path.join(inputDir, file);
  const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const outputPath = path.join(outputDir, outputFile);

  await sharp(inputPath)
    .resize(1920, null, { withoutEnlargement: true })
    .webp({ quality: 70 })
    .toFile(outputPath);

  const originalSize = fs.statSync(inputPath).size;
  const newSize = fs.statSync(outputPath).size;
  const saving = Math.round((1 - newSize/originalSize) * 100);
  
  console.log(`✅ ${file} → ${outputFile} | ${Math.round(originalSize/1024)}kb → ${Math.round(newSize/1024)}kb (${saving}% saved)`);
}

console.log('🎉 Done!');