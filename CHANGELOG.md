# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.4.0] - 2026-03-21

- Add `images/branding/` with full-resolution logo sources (`VTGMS_LOGO_FULL_SIZE.png`, `VTGMS_LOGO_FULL_SIZE_TRANSPARENT.png`, `VTGMS_STICKER_COLOR.png`, `VTGMS_STICKER.png`) and a short README
- Generate `images/vtgms-logo.png` for the site from `VTGMS_STICKER_COLOR.png` (720px wide export)

## [1.3.2] - 2026-03-21

- Regenerate `images/vtgms-logo.png` from updated `VTGMS_LOGO_FULL_SIZE_TRANSPARENT.png` source in `/home/henry`

## [1.3.1] - 2026-03-21

- Replace logo asset with transparent-background PNG; regenerate web export at 720px wide from `VTGMS_LOGO_FULL_SIZE_TRANSPARENT.png`
- Enlarge header and footer logo display (`clamp` heights, wider max-width); raise `--header-h` so the bar fits the taller mark

## [1.3.0] - 2026-03-21

- Add raster logo (`images/vtgms-logo.png`) in header and footer; replace SVG mark and wordmark
- Size logo with CSS (`logo__img`); web-optimized export at 480px wide (~455KB) from full-size source

## [1.2.0] - 2026-03-21

- Tighten site-wide copy: shorten zones intro and cards, healing cards, build sourcing lines, hub, partners, funding, wishlist intros and land block, get-involved and FPF text
- Reduce food-forest plant table to four example rows; remove redundant italic note under food forest
- Remove repeated phrasing (sourcing philosophy, pole barn story, sliding-scale stack, long stone-and-clay explanations) in favor of single mentions per topic

## [1.1.0] - 2026-03-21

- Remove Reiki from all on-page copy
- Tie medicine wheel and earth altar descriptions to forest bathing and earthing across zones, healing, build, covenant, open-platform, and FPF snippet
- Revise Silence zone and healing medicine-wheel paragraphs; drop redundant barefoot-only phrasing where earthing paths already apply

## [1.0.0] - 2026-03-21

- Extract site from webserver monorepo into dedicated repository `vtgms`
- Rename public-facing identity from Vermont Sanctuary Forest to Vermont Green Mountain Sanctuary (title, meta, header, footer, mailto subject, FPF snippet, admin title)
- Replace partners section named-organization lists with a single open-invitation paragraph
- Adjust header logo text sizing for the longer organization name
