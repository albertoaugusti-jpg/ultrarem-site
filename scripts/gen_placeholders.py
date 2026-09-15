#!/usr/bin/env python3
"""Generates temporary placeholder images for every asset referenced by the
UltraRem site, matching exact filenames so Vite/browser imports resolve.
Replace these with real photography/logo assets before deploying to production.
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PALETTE = [
    "#3d7a6b", "#8b2e2e", "#c4522a", "#e8a820",
]
BG = "#ede5d4"
FG = "#1a1209"

def load_font(size):
    for path in [
        "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
    ]:
        if os.path.exists(path):
            return ImageFont.truetype(path, size)
    return ImageFont.load_default()

def make_image(path, w, h, label, color_index=0):
    img = Image.new("RGB", (w, h), BG)
    draw = ImageDraw.Draw(img)
    accent = PALETTE[color_index % len(PALETTE)]
    # diagonal accent stripe
    draw.rectangle([0, 0, w, 10], fill=accent)
    draw.rectangle([0, h - 10, w, h], fill=accent)
    # border
    draw.rectangle([0, 0, w - 1, h - 1], outline=FG, width=3)
    # label text, wrapped
    font = load_font(max(14, min(w, h) // 18))
    words = label.replace("_", " ").split()
    lines, cur = [], ""
    for word in words:
        test = (cur + " " + word).strip()
        bbox = draw.textbbox((0, 0), test, font=font)
        if bbox[2] - bbox[0] > w - 60 and cur:
            lines.append(cur)
            cur = word
        else:
            cur = test
    if cur:
        lines.append(cur)
    total_h = sum(draw.textbbox((0, 0), l, font=font)[3] for l in lines) + (len(lines) - 1) * 8
    y = (h - total_h) / 2
    for line in lines:
        bbox = draw.textbbox((0, 0), line, font=font)
        lw = bbox[2] - bbox[0]
        lh = bbox[3] - bbox[1]
        draw.text(((w - lw) / 2, y), line, fill=FG, font=font)
        y += lh + 8
    tag_font = load_font(12)
    draw.text((14, 14), "PLACEHOLDER", fill=accent, font=tag_font)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    img.save(path)
    print("wrote", path)

# --- src/assets (imported via @assets, browsed via bundler) ---
assets_dir = os.path.join(ROOT, "src", "assets")
assets = [
    ("Album_fotografico_vintage_su_legno_rustico_1775474333993.png", "Album fotografico vintage", 1200, 900, 0),
    ("Aula_Magna_dell'Università_di_Padova_1775509591808.png", "Aula Magna Università di Padova", 1400, 1000, 1),
    ("Conversazione_in_un_salotto_accogliente_1775567152215.png", "Conversazione in salotto", 1200, 900, 2),
    ("Eleganza_milanese_al_tramonto_1775476267981.png", "Eleganza milanese al tramonto", 1600, 1000, 3),
    ("Festa_di_compleanno_di_Antonio_1775587556936.png", "Festa di compleanno", 1200, 900, 0),
    ("King's_College_al_tramonto_1775509591809.png", "King's College Cambridge", 1400, 1000, 1),
    ("Logo_UltraRem-removebg-preview_1775473927277.png", "UltraRem LOGO", 600, 220, 2),
    ("Statua_di_donna_anziana_in_cimitero_1775510016767.png", "Statua donna anziana", 1200, 1200, 3),
    ("Un_momento_di_discussione_familiare_1775567169170.png", "Discussione familiare", 1200, 900, 0),
    ("Un_sorriso_italiano_a_tavola_1775474333994.png", "Sorriso italiano a tavola", 1200, 900, 1),
    ("Uomo_elegante_tra_luci_e_ombreggiature_1775476267982.png", "Uomo elegante", 1200, 1400, 2),
]
for i, (fname, label, w, h, ci) in enumerate(assets):
    make_image(os.path.join(assets_dir, fname), w, h, label, ci)

# --- public/img (referenced by public/presentazione.html as absolute paths) ---
img_dir = os.path.join(ROOT, "public", "img")
pres_images = [
    ("logo.png", "UltraRem LOGO", 600, 220, 2),
    ("logo-white.png", "UltraRem LOGO WHITE", 600, 220, 2),
    ("copertina80.png", "Copertina anni 80", 1600, 1000, 3),
    ("album.png", "Album fotografico", 1200, 900, 0),
    ("milano.png", "Milano", 1400, 1000, 1),
    ("luce_italiana.png", "Luce italiana", 1400, 1000, 2),
    ("anni80.png", "Anni 80 retro", 1400, 1000, 3),
    ("cortina.png", "Cortina", 1400, 1000, 0),
    ("cambridge.png", "Cambridge", 1400, 1000, 1),
    ("cambridge_foto.png", "Cambridge foto", 1400, 1000, 1),
    ("padova.png", "Padova", 1400, 1000, 2),
    ("padova_foto.png", "Padova foto", 1400, 1000, 2),
]
for fname, label, w, h, ci in pres_images:
    make_image(os.path.join(img_dir, fname), w, h, label, ci)

# --- favicon ---
make_image(os.path.join(ROOT, "public", "favicon.png"), 256, 256, "UR", 3)

print("Done.")
