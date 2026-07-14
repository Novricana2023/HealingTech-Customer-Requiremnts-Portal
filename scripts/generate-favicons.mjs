import sharp from "sharp";
import { mkdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const source = join(root, "public/images/logo.png");
const faviconDir = join(root, "public/favicon");
const appDir = join(root, "src/app");

const sizes = [16, 32, 48, 180, 192, 512];

await mkdir(faviconDir, { recursive: true });

for (const size of sizes) {
  await sharp(source)
    .resize(size, size, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .png()
    .toFile(join(faviconDir, `icon-${size}x${size}.png`));
}

await copyFile(join(faviconDir, "icon-32x32.png"), join(appDir, "icon.png"));
await copyFile(join(faviconDir, "icon-180x180.png"), join(appDir, "apple-icon.png"));
await copyFile(join(faviconDir, "icon-32x32.png"), join(root, "public/favicon.ico"));

console.log("Favicons generated from logo.png:", sizes.map((s) => `${s}x${s}`).join(", "));
