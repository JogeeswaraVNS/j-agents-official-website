const sharp = require('sharp');
const fs = require('fs');

async function generate() {
  const input = 'public/JAgentsLabsLogo.jpeg';
  const img = sharp(input);
  const { width, height } = await img.metadata();
  const raw = await sharp(input).raw().toBuffer();

  // Create an RGBA buffer where black background is transparent and white logo mark is crisp
  const rgba = Buffer.alloc(width * height * 4);
  for (let i = 0; i < width * height; i++) {
    const r = raw[i * 3];
    const g = raw[i * 3 + 1];
    const b = raw[i * 3 + 2];
    const brightness = (r + g + b) / 3;

    let alpha = 0;
    if (brightness > 20) {
      alpha = Math.min(255, Math.round(((brightness - 20) / (200 - 20)) * 255));
    }
    rgba[i * 4] = 255;
    rgba[i * 4 + 1] = 255;
    rgba[i * 4 + 2] = 255;
    rgba[i * 4 + 3] = alpha;
  }

  // 1. Transparent full logo
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .png()
    .toFile('public/jagentslabs-logo.png');

  // 2. Tight cropped transparent logo mark
  // minX: 444, maxX: 1594, minY: 575, maxY: 1424
  await sharp(rgba, { raw: { width, height, channels: 4 } })
    .extract({ left: 440, top: 570, width: 1160, height: 860 })
    .png()
    .toFile('public/jagentslabs-mark.png');

  // 3. Apple Touch Icon (180x180) with brand background #0B0B0C
  const mark180 = await sharp('public/jagentslabs-mark.png')
    .resize(130, 130, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: { r: 11, g: 11, b: 12, alpha: 1 }
    }
  })
    .composite([{ input: mark180, gravity: 'center' }])
    .png()
    .toFile('public/apple-touch-icon.png');

  // 4. Favicon 64x64 & 32x32
  const markFavicon = await sharp('public/jagentslabs-mark.png')
    .resize(46, 46, { fit: 'inside' })
    .toBuffer();

  await sharp({
    create: {
      width: 64,
      height: 64,
      channels: 4,
      background: { r: 11, g: 11, b: 12, alpha: 1 }
    }
  })
    .composite([{ input: markFavicon, gravity: 'center' }])
    .png()
    .toFile('public/favicon.ico');

  await sharp({
    create: {
      width: 64,
      height: 64,
      channels: 4,
      background: { r: 11, g: 11, b: 12, alpha: 1 }
    }
  })
    .composite([{ input: markFavicon, gravity: 'center' }])
    .png()
    .toFile('public/favicon.png');

  // 5. OpenGraph Image (1200x630)
  const ogMark = await sharp('public/jagentslabs-mark.png')
    .resize(320, 240, { fit: 'inside' })
    .toBuffer();

  const ogSvg = Buffer.from(`
    <svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="glow" cx="20%" cy="50%" r="65%">
          <stop offset="0%" stop-color="#5B8BC4" stop-opacity="0.18" />
          <stop offset="100%" stop-color="#0B0B0C" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="630" fill="#0B0B0C"/>
      <rect width="1200" height="630" fill="url(#glow)"/>
      <rect x="36" y="36" width="1128" height="558" rx="24" fill="#141416" fill-opacity="0.7" stroke="rgba(255,255,255,0.08)" stroke-width="1.5"/>
      <text x="470" y="270" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="700" font-size="54" fill="#FFFFFF" letter-spacing="-1.5">JAgents Labs</text>
      <text x="470" y="326" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="26" fill="#5B8BC4">AI built for real estate</text>
      <text x="470" y="380" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="400" font-size="18" fill="#A1A1AA">Software built around how you actually work.</text>
      <text x="470" y="445" font-family="Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-weight="500" font-size="16" fill="rgba(255,255,255,0.45)">jagentslabs.com</text>
    </svg>
  `);

  await sharp(ogSvg)
    .composite([{
      input: ogMark,
      left: 100,
      top: 195
    }])
    .png()
    .toFile('public/og-image.png');

  console.log('Done generating all assets!');
}

generate().catch(console.error);
