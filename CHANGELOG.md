# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.8] - 2026-03-21

- Remove sliding-scale / Vermont programs paragraphs from the “How We'll Build This Together” section

## [1.6.7] - 2026-03-07

- Link hero lead to `#wishlist-land`; retitle wishlist eyebrow to “How you can help” and refresh intro copy about helping before land is found
- Place “And above all: land” block directly under “What We Need Right Now”; add `scroll-margin-top` for the land anchor and hero lead link styling

## [1.6.6] - 2026-03-07

- On viewports under 768px, set `.hero__bg img` `object-position` to `87.5% top` (three-quarters of the way from centered to right-aligned under `object-fit: cover`)

## [1.6.5] - 2026-03-07

- On viewports under 768px, set `.hero__bg img` `object-position` to `right top` so the frame aligns to the top and right under `object-fit: cover`

## [1.6.4] - 2026-03-07

- Use `object-fit: cover` and centered positioning for `.hero__bg img` below 768px so the top photo fills vertical space on mobile; keep `contain` + top alignment from 768px up

## [1.6.3] - 2026-03-07

- Clip `.food-forest__photo` with `overflow: hidden` and round `herbs-garden` image corners via `border-radius` on the `img` (parent radius alone does not round a centered, intrinsic-width photo)
- Remove footer photo-credits paragraph from `index.html`
- Start nonprofit disclosure with "Vermont Green Mountain Sanctuary" in `index.html`
- Drop outdated footer credit note from `README.md` License section

## [1.6.1] - 2026-03-21

- Add `AGENTS.md` documenting submodule workflow with `my-webserver-setup`; link it from `README.md`

## [1.6.0] - 2026-03-21

- Merge copy and UI from server deploy work: Gateway food-shelf and Hearth intergenerational lines, ideal land list, nonprofit footer line, Legal/Finance form options, materials CTA on pole-barn build card, permaculture diagram and `food-forest__photo` frame, remove financial role-card emoji
- Fix duplicated `</html>` fragment at end of `index.html`
- Sync `images/` and `.well-known/acme-challenge/` with production assets; keep covenant, zones gallery, build, funding, and wishlist photos in page markup

## [1.5.13] - 2026-03-21

- Remove Front Porch Forum copy-ready block from Get Involved; keep text in `docs/front-porch-forum-post.txt`
- Document `docs/` and optional server `private/` copy in README

## [1.5.12] - 2026-03-21

- Show `funding-gathering.jpg` at natural aspect ratio in `.funding-photo` (“How We'll Build This Together”); remove max-height crop

## [1.5.11] - 2026-03-21

- Use a square `aspect-ratio` frame for `.covenant-photo` in the Stewardship Agreement section instead of a short max-height strip

## [1.5.10] - 2026-03-21

- Show `build-salvage.jpg` at natural aspect ratio in `.build-photo` (drop fixed max-height and `object-fit: cover`)

## [1.5.9] - 2026-03-21

- Remove `zones-gallery-2.jpg` from the zones gallery markup; keep the file in `images/` for possible future use
- Lay out the zones gallery in two columns on medium+ viewports

## [1.5.8] - 2026-03-21

- Align hero background still (`object-fit: contain`) to the top of the viewport so letterboxing does not appear above the image

## [1.5.7] - 2026-03-21

- Restore `moss-canopy.jpg` full-bleed image above “An open platform for healing”; remove inline healing-section video player
- Set hero background to a mid-video still frame (`hero-video-frame.jpg`); scale with `object-fit: contain` on a dark field so the full frame fits horizontally without side crop
- Ignore `images/_backup_photos_2026-03-21/` in git (local backup of prior JPEGs only)

## [1.5.6] - 2026-03-21

- Use static `moss-canopy.jpg` as the hero background; remove scroll parallax on hero and delete looping hero video assets
- Place `sanctuary-walkthrough.mp4` (with audio) in the healing section with native video controls above “An open platform for healing”
- Add seven gallery placements from the remaining batch photos (`zones-gallery-*`, `build-salvage`, `covenant-texture`, `funding-gathering`, `wishlist-landscape`)

## [1.5.5] - 2026-03-21

- Add looping muted hero background video (`hero-background.webm` / `.mp4`) with `hero-poster.jpg` fallback and `prefers-reduced-motion` static image
- Replace section photography with VTGMS photo set; remove unused `hero-mist.jpg` and `healing-mountains.jpg` (copies remain under `images/_backup_photos_2026-03-21/`)
- Deploy updated assets to `public_html`; ignore `images/_new_batch/` (unzipped source photos)
- Document hero video assets in README

## [1.5.4] - 2026-03-21

- Sync `public_html` with repo (`script.js`, `index.html`, `styles.css`) so desktop header scroll fade runs on the live site
- Add `resize` listener and legacy `MediaQueryList#addListener` fallback; drop desktop `opacity` transition so scroll-linked opacity updates immediately

## [1.5.3] - 2026-03-21

- Remove header badge/logo from the fixed bar; align nav and menu control to the right; move `#top` anchor to the hero section
- Keep mobile header fully visible on scroll (no badge to fade)
- Update README and `images/branding/README.md` to describe the badge asset as optional for the header

## [1.5.2] - 2026-03-21

- On viewports ≥1024px, fade the entire fixed header with scroll (same distance as badge fade) and hide it from interaction when fully faded; restore at scroll top
- Leave mobile scroll behavior unchanged (badge fades; hamburger remains)

## [1.5.1] - 2026-03-21

- Keep header background transparent at all scroll positions; remove frosted `site-header--solid` styling
- Fade header badge out with scroll and collapse its width; leave nav + hamburger (mobile shows hamburger alone after fade)

## [1.5.0] - 2026-03-21

- Move full wordmark into hero (centered above location line); use compact `vtgms-badge.png` in header (`VTGMS_BADGE.png` in branding, 96px-tall export)
- Restore modest `--header-h`; add `hero__logo` / `hero__logo-wrap` styles; replace header `.logo__img` with `.logo__badge`

## [1.4.1] - 2026-03-21

- Enlarge header logo (~3× prior `max-height` / `max-width` clamp); increase `--header-h` to fit

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
