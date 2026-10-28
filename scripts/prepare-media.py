#!/usr/bin/env python3
"""Prepare the real project artwork for the monochrome site.

The original files live in their own repositories. This script copies them
into `public/media` as optimised, grayscale derivatives so the site's palette
stays black / white / silver even when a project's own branding uses colour.

Run after the source repositories exist locally:

    python3 scripts/prepare-media.py
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
MEDIA = ROOT / "public" / "media"
MEDIA.mkdir(parents=True, exist_ok=True)

SOURCES = {
    "abnora-classic.png": Path("/home/abnox/abnora/docs/screenshots/classic-book.png"),
    "abnora-logo.png": Path("/home/abnox/abnora/docs/brand/abnora-logo.png"),
    "atom.png": Path("/home/abnox/ATOM/atom.png"),
}


def grayscale(path: Path) -> Image.Image:
    image = Image.open(path)
    if image.mode in {"RGBA", "LA"}:
        alpha = image.getchannel("A")
        gray = ImageOps.grayscale(image.convert("RGB")).convert("RGBA")
        gray.putalpha(alpha)
        return gray
    return ImageOps.grayscale(image.convert("RGB"))


def main() -> None:
    for name, source in SOURCES.items():
        if not source.exists():
            raise SystemExit(f"Missing source image: {source}")
        image = grayscale(source)
        image.save(MEDIA / name, optimize=True)
        print(f"{source.name} -> public/media/{name} ({image.width}x{image.height})")


if __name__ == "__main__":
    main()
