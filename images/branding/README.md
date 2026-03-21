# Logo source files

Full-resolution exports for **Vermont Green Mountain Sanctuary** branding.

| File | Role |
|------|------|
| `VTGMS_LOGO_FULL_SIZE.png` | Full-size logo (opaque background) |
| `VTGMS_LOGO_FULL_SIZE_TRANSPARENT.png` | Full-size logo, transparent background |
| `VTGMS_STICKER_COLOR.png` | Sticker art — **source for `../vtgms-logo.png`** (hero + footer wordmark) |
| `VTGMS_STICKER.png` | Alternate sticker variant |
| `VTGMS_BADGE.png` | Horizontal badge — **source for `../vtgms-badge.png`** (optional web asset; header bar has no logo) |

Regenerate web derivatives:

```bash
cd images/branding
convert VTGMS_STICKER_COLOR.png -resize 720x -strip ../vtgms-logo.png
convert VTGMS_BADGE.png -resize x96 -strip ../vtgms-badge.png
```
