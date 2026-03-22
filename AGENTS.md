# Agent and contributor notes — VTGMS (`vtgms`)

This repository is the **source of truth** for the public static site served at **vtgms.org** (Vermont Green Mountain Sanctuary).

## Relationship to `my-webserver-setup`

On the production server layout, this repo is **not** edited in place under the web root as a loose tree. It is included as a **Git submodule**:

| Item | Value |
|------|--------|
| Parent repo | `my-webserver-setup` (or your local clone of it) |
| Submodule path | `domains/org/vtgms.org/public_html` |
| Remote | `https://github.com/151henry151/vtgms.git` |

The parent repo records **which commit** of this repo is deployed by updating the submodule pointer.

## Day-to-day workflow

### 1. Change the site (here, in `vtgms`)

- Edit `index.html`, `styles.css`, `script.js`, `images/`, etc.
- Follow [Keep a Changelog](https://keepachangelog.com/) and bump `VERSION` when you cut a release.
- Commit and push to **`vtgms`** `main`:

  ```bash
  git add -A
  git commit -m "Describe change imperatively"
  git push origin main
  ```

### 2. Point the server repo at the new commit

In a clone of **`my-webserver-setup`**:

```bash
cd domains/org/vtgms.org/public_html
git fetch origin
git checkout main
git pull origin main
cd ../../..
git add domains/org/vtgms.org/public_html
git commit -m "Bump vtgms submodule to <short-hash or version>"
git push origin main
```

### 3. On the production host (after pulling the server repo)

After `git pull` in **`my-webserver-setup`**, initialize or update submodules:

```bash
git submodule update --init --recursive
```

(First-time clone of the server repo: use `git clone --recurse-submodules <url>` or run `git submodule update --init --recursive` once.)

## What not to do

- Do **not** treat `domains/org/vtgms.org/public_html` inside **`my-webserver-setup`** as a second independent codebase: submodule changes made only on the server without committing in **`vtgms`** will be lost or overwritten on the next submodule update.
- Optional server-only paths (e.g. `private/` beside `public_html` on disk) are **outside** this repo; keep secrets and non-web copies there, not in `vtgms`.

## Quick reference

| Task | Where |
|------|--------|
| Site copy, layout, images | This repo (`vtgms`) |
| Nginx, TLS, other vhosts | `my-webserver-setup` |
| Bump deployed revision | Submodule pointer in `my-webserver-setup` |
