// Builds the logo files from the handoff PNG. Crop, resize and pad with the
// logo's own black only: no recolouring, lossless PNG output.
// Run: npm run logos
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('..', import.meta.url));
const SOURCE = `${root}klinfits-handoff/public/images/klinfits-logo.png`;
const BRIGHT = 60; // a pixel brighter than this in any channel is part of the artwork
const PNG = { compressionLevel: 9, adaptiveFiltering: true, palette: false };

// Bounding box of the KF mark: the first run of bright rows from the top.
// The KLINFITS lettering and the chevron sit below a gap, so they're excluded.
async function findMark() {
  const { data, info } = await sharp(SOURCE).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const isBright = (x, y) => {
    const i = (y * width + x) * channels;
    return data[i] > BRIGHT || data[i + 1] > BRIGHT || data[i + 2] > BRIGHT;
  };

  let top = -1;
  let bottom = -1;
  let left = width;
  let right = -1;
  for (let y = 0; y < height; y++) {
    let rowHasArt = false;
    for (let x = 0; x < width; x++) {
      if (!isBright(x, y)) continue;
      rowHasArt = true;
      if (x < left) left = x;
      if (x > right) right = x;
    }
    if (rowHasArt && top === -1) top = y;
    if (!rowHasArt && top !== -1) {
      bottom = y - 1;
      break;
    }
  }
  if (top === -1 || bottom === -1) throw new Error('Could not find the KF mark');
  return { left, top, width: right - left + 1, height: bottom - top + 1 };
}

async function main() {
  const mark = await findMark();
  const margin = Math.round(mark.height * 0.04);
  const crop = {
    left: mark.left - margin,
    top: mark.top - margin,
    width: mark.width + margin * 2,
    height: mark.height + margin * 2,
  };
  const markBuffer = await sharp(SOURCE).extract(crop).toBuffer();

  // 32px tall in the global bar, so 96px covers 3x screens.
  await sharp(markBuffer).resize({ height: 96 }).png(PNG).toFile(`${root}public/images/kf-mark.png`);

  // Square icons: the mark centred on the logo's own black.
  const black = { r: 0, g: 0, b: 0, alpha: 1 };
  for (const [file, size] of [
    ['app/icon.png', 192],
    ['app/apple-icon.png', 180],
  ]) {
    const inner = Math.round(size * 0.8);
    const fitted = await sharp(markBuffer).resize({ width: inner, height: inner, fit: 'inside' }).toBuffer();
    await sharp({ create: { width: size, height: size, channels: 3, background: black } })
      .composite([{ input: fitted, gravity: 'center' }])
      .png(PNG)
      .toFile(`${root}${file}`);
  }

  // Full lockup for the footer: 120px, so 360px covers 3x screens.
  await sharp(SOURCE).resize({ width: 360 }).png(PNG).toFile(`${root}public/images/klinfits-lockup.png`);

  console.log('Mark found at', mark);
}

main();
