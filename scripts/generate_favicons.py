"""Generate favicon sizes from public/images/logo.png"""
import shutil
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public" / "images" / "logo.png"
FAVICON_DIR = ROOT / "public" / "favicon"
APP_DIR = ROOT / "src" / "app"

SIZES = [16, 32, 48, 180, 192, 512]
SMALL_SIZES = {16, 32, 48}


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


def icon_crop(img: Image.Image) -> Image.Image:
    """Square crop of the brain mark — reads clearly at favicon sizes."""
    w, h = img.size
    side = min(w, int(h * 0.42))
    left = (w - side) // 2
    return img.crop((left, 0, left + side, side))


def main() -> None:
    if not SOURCE.exists():
        raise FileNotFoundError(f"Logo not found: {SOURCE}")

    FAVICON_DIR.mkdir(parents=True, exist_ok=True)
    source = Image.open(SOURCE).convert("RGBA")
    mark = icon_crop(source)

    for size in SIZES:
        src = mark if size in SMALL_SIZES else source
        icon = square_icon(src, size)
        icon.save(FAVICON_DIR / f"icon-{size}x{size}.png", optimize=True)

    # Remove deprecated logo files
    for deprecated in (
        ROOT / "public" / "logo.jpeg",
        ROOT / "public" / "images" / "Nyuwani.jpeg",
        ROOT / "new logo.png",
    ):
        if deprecated.exists():
            deprecated.unlink()

    shutil.copy2(FAVICON_DIR / "icon-32x32.png", APP_DIR / "icon.png")
    shutil.copy2(FAVICON_DIR / "icon-180x180.png", APP_DIR / "apple-icon.png")
    shutil.copy2(FAVICON_DIR / "icon-32x32.png", ROOT / "public" / "favicon.ico")

    for old in (APP_DIR / "icon.jpg", APP_DIR / "apple-icon.jpg"):
        if old.exists():
            old.unlink()

    print("Generated favicons from:", SOURCE.name)


if __name__ == "__main__":
    main()
