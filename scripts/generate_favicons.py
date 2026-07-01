"""Generate favicon sizes from Nyuwani.jpeg"""
import shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "images" / "Nyuwani.jpeg"
FAVICON_DIR = ROOT / "public" / "favicon"
APP_DIR = ROOT / "src" / "app"

SIZES = [16, 32, 48, 180, 192, 512]

def square_icon(img: Image.Image, size: int) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    ratio = min(size / img.width, size / img.height)
    new_w = max(1, int(img.width * ratio))
    new_h = max(1, int(img.height * ratio))
    resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
    offset = ((size - new_w) // 2, (size - new_h) // 2)
    if resized.mode != "RGBA":
        resized = resized.convert("RGBA")
    canvas.paste(resized, offset, resized)
    return canvas.convert("RGB")

def main() -> None:
    FAVICON_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")

    for size in SIZES:
        icon = square_icon(source, size)
        icon.save(FAVICON_DIR / f"icon-{size}x{size}.png", optimize=True)

    source_rgb = Image.open(SOURCE).convert("RGB")
    source_rgb.save(ROOT / "public" / "logo.jpeg", quality=92)

    shutil.copy2(FAVICON_DIR / "icon-32x32.png", APP_DIR / "icon.png")
    shutil.copy2(FAVICON_DIR / "icon-180x180.png", APP_DIR / "apple-icon.png")
    shutil.copy2(FAVICON_DIR / "icon-32x32.png", ROOT / "public" / "favicon.ico")

    old_icon = APP_DIR / "icon.jpg"
    old_apple = APP_DIR / "apple-icon.jpg"
    if old_icon.exists():
        old_icon.unlink()
    if old_apple.exists():
        old_apple.unlink()

    print("Generated:", ", ".join(f"{s}x{s}" for s in SIZES))

if __name__ == "__main__":
    main()
