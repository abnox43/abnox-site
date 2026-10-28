#!/usr/bin/env python3
"""Generate the site-owned raster assets.

The real project screenshots/logos are copied in by hand (they belong to the
individual project repositories). Everything here — the three meme loops,
the icons and the social card — is drawn locally so the site never depends on
a third-party image host.

Usage:
    python3 scripts/generate-assets.py

Requires Pillow (PIL). Tested with Pillow 11.
"""
from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
MEDIA = PUBLIC / "media"
MEMES = MEDIA / "memes"

FONT_DIR = Path("/usr/share/fonts/truetype/dejavu")
MONO = str(FONT_DIR / "DejaVuSansMono.ttf")
MONO_BOLD = str(FONT_DIR / "DejaVuSansMono-Bold.ttf")
SANS = str(FONT_DIR / "DejaVuSans.ttf")
SANS_BOLD = str(FONT_DIR / "DejaVuSans-Bold.ttf")

INK = (20, 21, 23)
PAPER = (231, 231, 226)
SILVER = (237, 237, 232)
MUTED = (142, 144, 150)
LINE = (52, 54, 59)
PANEL = (26, 27, 30)
SCREEN = (17, 18, 20)


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size)


def spaced_text(
    draw: ImageDraw.ImageDraw,
    xy: tuple[int, int],
    text: str,
    face: ImageFont.FreeTypeFont,
    fill: tuple[int, int, int],
    spacing: int = 3,
) -> None:
    x, y = xy
    for char in text:
        draw.text((x, y), char, font=face, fill=fill)
        x += int(draw.textlength(char, font=face)) + spacing


def scanlines(image: Image.Image, alpha: int = 26, step: int = 3) -> Image.Image:
    overlay = Image.new("RGBA", image.size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    for y in range(0, image.height, step):
        draw.line((0, y, image.width, y), fill=(0, 0, 0, alpha))
    return Image.alpha_composite(image.convert("RGBA"), overlay).convert("RGB")


def meme_window(title: str) -> tuple[Image.Image, ImageDraw.ImageDraw]:
    image = Image.new("RGB", (360, 220), SCREEN)
    draw = ImageDraw.Draw(image)
    draw.rectangle((10, 10, 349, 209), fill=PANEL, outline=LINE)
    draw.rectangle((10, 10, 349, 35), fill=(31, 33, 37))
    for index, x in enumerate((24, 38, 52)):
        draw.ellipse((x, 18, x + 8, 26), outline=(120, 122, 128), width=1)
        if index == 0:
            draw.ellipse((x + 2, 20, x + 6, 24), fill=(210, 211, 206))
    draw.text((72, 16), title, font=font(MONO, 10), fill=MUTED)
    draw.text((310, 16), "TTY 01", font=font(MONO, 8), fill=MUTED)
    draw.line((10, 35, 349, 35), fill=LINE)
    return image, draw


def compiles_frames() -> list[Image.Image]:
    progress_values = (0.16, 0.44, 0.73, 1.0, 1.0)
    frames: list[Image.Image] = []
    for step, progress in enumerate(progress_values):
        image, draw = meme_window("abnox@terminal: ~/abnox")
        draw.text((24, 49), "$ cargo build --release", font=font(MONO_BOLD, 11), fill=SILVER)
        draw.text((24, 70), "Compiling abnox v0.1.0", font=font(MONO, 10), fill=MUTED)
        draw.text((24, 84), "Building [===================>  ]", font=font(MONO, 10), fill=(140, 142, 148))

        draw.rounded_rectangle((24, 104, 336, 114), radius=3, outline=LINE)
        filled = int(310 * progress)
        for block in range(0, filled, 10):
            draw.rectangle((26 + block, 106, min(26 + block + 6, 26 + filled), 112), fill=SILVER)

        if progress < 1:
            status = "status: compiling"
            detail = "please do not touch the keyboard"
        else:
            status = "Finished dev [unoptimized] in 0.42s"
            detail = "warning: unused variable: `sleep`"
        draw.text((24, 126), status, font=font(MONO_BOLD, 10), fill=SILVER)

        if progress >= 0.73:
            draw.text((24, 147), detail, font=font(MONO, 9), fill=MUTED)

        if progress >= 1:
            draw.text((24, 171), "it compiles. ship it before it changes its mind.", font=font(MONO, 9), fill=(196, 197, 192))

        cursor_on = step % 2 == 0
        draw.text((24, 190), "~", font=font(MONO_BOLD, 10), fill=MUTED)
        if cursor_on:
            draw.rectangle((36, 190, 44, 202), fill=SILVER)
        frames.append(scanlines(image))
    return frames


def draw_penguin(draw: ImageDraw.ImageDraw, x: int, y: int, blink: bool, steam_phase: int) -> None:
    outline = (232, 233, 228)
    belly = (196, 198, 193)
    dark = (24, 25, 28)

    # Feet
    draw.ellipse((x + 18, y + 112, x + 54, y + 126), fill=outline)
    draw.ellipse((x + 58, y + 112, x + 94, y + 126), fill=outline)
    # Body and head silhouette
    draw.ellipse((x + 10, y + 18, x + 105, y + 124), fill=dark, outline=outline, width=2)
    draw.ellipse((x + 2, y + 4, x + 113, y + 84), fill=dark, outline=outline, width=2)
    # Belly
    draw.ellipse((x + 32, y + 56, x + 84, y + 118), fill=belly)
    # Flippers
    draw.arc((x - 4, y + 38, x + 38, y + 100), 100, 260, fill=outline, width=2)
    draw.arc((x + 80, y + 38, x + 120, y + 100), 280, 80, fill=outline, width=2)
    # Eyes
    if blink:
        draw.line((x + 34, y + 36, x + 50, y + 36), fill=outline, width=2)
        draw.line((x + 68, y + 36, x + 84, y + 36), fill=outline, width=2)
    else:
        draw.ellipse((x + 35, y + 28, x + 49, y + 42), fill=outline)
        draw.ellipse((x + 40, y + 32, x + 46, y + 39), fill=dark)
        draw.ellipse((x + 69, y + 28, x + 83, y + 42), fill=outline)
        draw.ellipse((x + 74, y + 32, x + 80, y + 39), fill=dark)
    # Beak
    draw.polygon([(x + 54, y + 46), (x + 72, y + 46), (x + 63, y + 56)], fill=outline)

    # Coffee mug in front of the belly
    mug_x, mug_y = x + 50, y + 74
    draw.rounded_rectangle((mug_x, mug_y, mug_x + 34, mug_y + 26), radius=4, fill=dark, outline=outline, width=2)
    draw.arc((mug_x + 30, mug_y + 5, mug_x + 44, mug_y + 21), 270, 90, fill=outline, width=2)
    for index in range(2):
        drift = (steam_phase + index) % 2
        sx = mug_x + 10 + index * 11 + drift
        draw.arc((sx - 3, mug_y - 13, sx + 5, mug_y - 1), 90, 270, fill=MUTED, width=1)


def arch_frames() -> list[Image.Image]:
    progress_values = (0.22, 0.49, 0.78, 1.0)
    frames: list[Image.Image] = []
    for step, progress in enumerate(progress_values):
        image = Image.new("RGB", (360, 220), SCREEN)
        draw = ImageDraw.Draw(image)
        draw.rectangle((10, 10, 349, 209), fill=PANEL, outline=LINE)
        draw.line((10, 36, 349, 36), fill=LINE)
        draw.text((22, 17), "$ sudo pacman -Syu", font=font(MONO_BOLD, 11), fill=SILVER)
        draw.text((292, 19), "arch", font=font(MONO, 9), fill=MUTED)

        draw_penguin(draw, 28, 55, blink=step == 2, steam_phase=step)

        draw.text((186, 58), ":: Synchronising...", font=font(MONO, 9), fill=MUTED)
        draw.text((186, 76), "updating 1248 packages", font=font(MONO, 9), fill=(174, 176, 171))
        draw.text((186, 100), f"{int(progress * 100):>3d}%", font=font(MONO_BOLD, 20), fill=SILVER)

        draw.rounded_rectangle((186, 132, 334, 142), radius=3, outline=LINE)
        filled = int(146 * progress)
        for block in range(0, filled, 9):
            draw.rectangle((188 + block, 134, min(188 + block + 6, 188 + filled), 140), fill=SILVER)

        if progress < 1:
            draw.text((186, 154), "downloading...", font=font(MONO, 9), fill=MUTED)
            draw.text((186, 170), "do not close the lid", font=font(MONO, 9), fill=(150, 152, 148))
        else:
            draw.text((186, 154), "[ok] updated", font=font(MONO_BOLD, 10), fill=SILVER)
            draw.text((186, 170), "reboot? maybe tomorrow.", font=font(MONO, 9), fill=(174, 176, 171))

        draw.text((22, 190), "coffee: essential dependency", font=font(MONO, 8), fill=MUTED)
        frames.append(scanlines(image))
    return frames


def robot_face(draw: ImageDraw.ImageDraw, eyes: str, dots: int) -> None:
    light = (232, 233, 228)
    dim = (94, 96, 101)

    # Antenna
    draw.line((180, 30, 180, 48), fill=dim, width=2)
    draw.ellipse((174, 22, 186, 34), fill=light)

    # Device shell + OLED screen
    draw.rounded_rectangle((38, 50, 322, 198), radius=18, outline=LINE, width=2, fill=(22, 23, 26))
    draw.rounded_rectangle((54, 62, 306, 186), radius=10, outline=(52, 54, 59), width=1, fill=SCREEN)
    draw.text((64, 68), "ATOM / OLED", font=font(MONO, 8), fill=dim)
    draw.text((262, 68), "LIVE", font=font(MONO, 8), fill=dim)

    # Eyes
    if eyes == "open":
        draw.rounded_rectangle((104, 92, 148, 146), radius=10, fill=light)
        draw.rounded_rectangle((212, 92, 256, 146), radius=10, fill=light)
        draw.rectangle((108, 104, 144, 134), fill=SCREEN)
        draw.rectangle((216, 104, 252, 134), fill=SCREEN)
    elif eyes == "blink":
        draw.line((104, 120, 148, 120), fill=light, width=5)
        draw.line((212, 120, 256, 120), fill=light, width=5)
    else:
        draw.arc((104, 102, 148, 146), 200, 340, fill=light, width=5)
        draw.arc((212, 102, 256, 146), 200, 340, fill=light, width=5)

    # Mouth
    draw.line((154, 165, 206, 165), fill=light, width=4)

    # Thinking bubble
    if dots:
        draw.ellipse((248, 22, 338, 74), fill=PANEL, outline=LINE)
        draw.polygon([(258, 68), (276, 68), (246, 88)], fill=PANEL, outline=LINE)
        for index in range(3):
            cx = 270 + index * 23
            if index < dots:
                draw.ellipse((cx - 5, 43, cx + 5, 53), fill=light)
            else:
                draw.ellipse((cx - 5, 43, cx + 5, 53), outline=dim)


def atom_frames() -> list[Image.Image]:
    states = (
        ("open", 0),
        ("blink", 0),
        ("open", 1),
        ("thinking", 2),
        ("thinking", 3),
    )
    frames = []
    for eyes, dots in states:
        image = Image.new("RGB", (360, 220), SCREEN)
        draw = ImageDraw.Draw(image)
        robot_face(draw, eyes, dots)
        if eyes == "thinking":
            draw.text((64, 178), "status: thinking about wires", font=font(MONO, 8), fill=MUTED)
        else:
            draw.text((64, 178), "status: pretending to listen", font=font(MONO, 8), fill=MUTED)
        frames.append(scanlines(image, alpha=20))
    return frames


def save_gif(frames: list[Image.Image], path: Path, durations: list[int]) -> None:
    palette = [frame.convert("P", palette=Image.ADAPTIVE, colors=32) for frame in frames]
    palette[0].save(
        path,
        save_all=True,
        append_images=palette[1:],
        duration=durations,
        loop=2,  # plays three times, then rests
        optimize=True,
        disposal=2,
    )


def make_icon(size: int) -> Image.Image:
    scale = 4
    canvas = Image.new("RGB", (size * scale, size * scale), (19, 20, 22))
    draw = ImageDraw.Draw(canvas)
    s = size * scale
    margin = max(2, s // 34)
    draw.rounded_rectangle(
        (margin, margin, s - margin, s - margin),
        radius=s // 7,
        fill=(23, 24, 26),
        outline=(58, 60, 65),
        width=max(1, s // 120),
    )
    light = (237, 237, 232)
    stroke = max(2, s // 18)
    left = (s * 0.3, s * 0.71)
    apex = (s * 0.5, s * 0.27)
    right = (s * 0.7, s * 0.71)
    draw.line((left, apex, right), fill=light, width=stroke, joint="curve")
    draw.line((s * 0.385, s * 0.56, s * 0.615, s * 0.56), fill=light, width=stroke)
    radius = max(2, s // 42)
    cx, cy = s * 0.735, s * 0.27
    draw.ellipse((cx - radius, cy - radius, cx + radius, cy + radius), fill=light)
    return canvas.resize((size, size), Image.Resampling.LANCZOS)


def make_og() -> Image.Image:
    width, height = 1200, 630
    base = Image.new("RGB", (width, height), PAPER)
    draw = ImageDraw.Draw(base)

    # Fine grid
    grid = Image.new("RGBA", base.size, (0, 0, 0, 0))
    gd = ImageDraw.Draw(grid)
    for x in range(0, width, 56):
        gd.line((x, 0, x, height), fill=(20, 21, 23, 10))
    for y in range(0, height, 56):
        gd.line((0, y, width, y), fill=(20, 21, 23, 10))
    base = Image.alpha_composite(base.convert("RGBA"), grid)

    # Decorative rings
    ring = Image.new("RGBA", base.size, (0, 0, 0, 0))
    rd = ImageDraw.Draw(ring)
    rd.ellipse((760, -110, 1320, 450), outline=(20, 21, 23, 34), width=2)
    rd.ellipse((850, -20, 1230, 360), outline=(20, 21, 23, 26), width=1)
    base = Image.alpha_composite(base, ring)

    # Neumorphic card: dark shadow bottom-right, light glow top-left
    shadow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(shadow).rounded_rectangle((80, 82, 1124, 552), radius=38, fill=(150, 150, 142, 160))
    shadow = shadow.filter(ImageFilter.GaussianBlur(26))
    base = Image.alpha_composite(base, shadow)

    glow = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(glow).rounded_rectangle((56, 58, 1100, 528), radius=38, fill=(255, 255, 255, 220))
    glow = glow.filter(ImageFilter.GaussianBlur(22))
    base = Image.alpha_composite(base, glow)

    card = Image.new("RGBA", base.size, (0, 0, 0, 0))
    cd = ImageDraw.Draw(card)
    cd.rounded_rectangle((70, 70, 1130, 545), radius=34, fill=(235, 235, 229, 255), outline=(200, 200, 193, 255), width=2)
    base = Image.alpha_composite(base, card)
    draw = ImageDraw.Draw(base)

    spaced_text(draw, (112, 112), "MOROCCO / TINKERER / OPEN SOURCE", font(MONO, 19), (100, 102, 108), 4)
    draw.text((108, 158), "ABNOX.", font=font(SANS_BOLD, 154), fill=INK)
    draw.text((112, 344), "Linux, Rust, robots & other experiments.", font=font(SANS, 35), fill=(36, 38, 42))
    draw.text((112, 398), "Monochrome. Local-first. Occasionally funny.", font=font(SANS, 25), fill=(78, 80, 86))

    tags = ("LINUX", "RUST", "ROBOTS", "NO TRACKERS")
    x = 112
    for tag in tags:
        face = font(MONO_BOLD, 15)
        tag_width = int(draw.textlength(tag, font=face)) + 26
        draw.rounded_rectangle((x, 457, x + tag_width, 495), radius=19, outline=(150, 151, 145), width=1, fill=(232, 232, 226))
        draw.text((x + 13, 468), tag, font=face, fill=(48, 50, 55))
        x += tag_width + 10

    # Small identification barcode
    bx, by = 946, 470
    bars = (2, 1, 3, 1, 2, 4, 1, 1, 3, 2, 1, 4, 2, 1, 1, 3, 1, 2)
    cursor = bx
    for index, bar in enumerate(bars):
        draw.rectangle((cursor, by, cursor + bar, by + (28 if index % 3 == 0 else 20)), fill=INK)
        cursor += bar + 2
    draw.text((bx, by + 36), "ABNOX · 001", font=font(MONO, 11), fill=(88, 90, 96))

    # Corner ticks
    draw.line((1074, 112, 1098, 112), fill=(120, 121, 116), width=2)
    draw.line((1098, 112, 1098, 136), fill=(120, 121, 116), width=2)
    draw.text((1040, 156), "01 / 09", font=font(MONO, 15), fill=(120, 121, 116))

    return base.convert("RGB")


def main() -> None:
    MEMES.mkdir(parents=True, exist_ok=True)
    MEDIA.mkdir(parents=True, exist_ok=True)

    compiles = compiles_frames()
    save_gif(compiles, MEMES / "compiles.gif", [620, 620, 620, 900, 1900])
    compiles[-2].save(MEMES / "compiles.png", optimize=True)

    arch = arch_frames()
    save_gif(arch, MEMES / "arch.gif", [900, 900, 900, 2100])
    arch[-2].save(MEMES / "arch.png", optimize=True)

    atom = atom_frames()
    save_gif(atom, MEMES / "atom.gif", [780, 220, 780, 700, 1500])
    atom[-2].save(MEMES / "atom.png", optimize=True)

    for size in (180, 192, 512):
        name = "apple-touch-icon.png" if size == 180 else f"icon-{size}.png"
        make_icon(size).save(PUBLIC / name, optimize=True)

    make_og().save(PUBLIC / "og.png", optimize=True)
    print("Generated meme loops, icons and og.png in public/.")


if __name__ == "__main__":
    main()
