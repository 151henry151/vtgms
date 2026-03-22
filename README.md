# Vermont Green Mountain Sanctuary (vtgms.org)

Static site source for **Vermont Green Mountain Sanctuary** — a community-led food forest, healing sanctuary, and living classroom in Addison County, Vermont.

Deploy the contents of this repository (or build output) to the web root for [vtgms.org](https://vtgms.org/).

**Development workflow:** this repo is the canonical site source; production is often wired via the **`my-webserver-setup`** submodule at `domains/org/vtgms.org/public_html`. See **[AGENTS.md](AGENTS.md)** for day-to-day Git steps (edit here → bump submodule → `git submodule update` on the host).

## Contents

- `index.html` — main page
- `styles.css`, `script.js` — assets
- `images/` — photography and media (hero uses `hero-video-frame.jpg`, a still from the walkthrough video; healing section uses `moss-canopy.jpg`); `images/branding/` holds full-resolution logo sources (`vtgms-logo.png` = hero/footer wordmark from sticker art; `vtgms-badge.png` = optional horizontal compact mark, not used in the fixed header)
- `docs/` — internal reference only (e.g. `front-porch-forum-post.txt` — FPF-style outreach copy not shown on the public site)
- `admin/`, `api/`, `editor.js` — optional CMS-style helpers (if enabled on the server)

Note: on the production host, a copy of `docs/front-porch-forum-post.txt` may also live under `private/` beside `public_html` (not web-accessible).

## License

Site text and structure: project stewards.
