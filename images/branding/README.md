# Logo source files

Full-resolution exports for **Vermont Green Mountain Sanctuary** branding. The live site uses a smaller derivative at `../vtgms-logo.png` (720px wide, generated from `VTGMS_STICKER_COLOR.png`).

| File | Role |
|------|------|
| `VTGMS_LOGO_FULL_SIZE.png` | Full-size logo (opaque background) |
| `VTGMS_LOGO_FULL_SIZE_TRANSPARENT.png` | Full-size logo, transparent background |
| `VTGMS_STICKER_COLOR.png` | Sticker art — **source for `vtgms-logo.png` on the site** |
| `VTGMS_STICKER.png` | Alternate sticker variant |

Regenerate the web logo after changing the sticker color source:

```bash
convert VTGMS_STICKER_COLOR.png -resize 720x -strip ../vtgms-logo.png
```
