# Kim de Cuba — From Idea to Action

Website for Kim de Cuba: 1:1 Idea-to-Action sessions for aspiring and emerging entrepreneurs (English / Español).

## Structure

- `index.html` — the live site (latest design, v6)
- `assets/` — logo, photos and images
- `support.js`, `image-slot.js` — page runtime from the Claude Design export (loads React from unpkg)
- `.image-slots.state.json` — the photos placed in the design's image slots (e.g. the hero portrait)
- `drafts/` — earlier design versions (v1–v5), kept for reference
- `.nojekyll` — tells GitHub Pages to serve dotfiles such as `.image-slots.state.json`

## Publishing with GitHub Pages

1. Go to **Settings → Pages** in this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Pick the branch holding these files and the `/ (root)` folder, then **Save**.

The site will appear at `https://kimdecuba.github.io/Kimdecuba/` after a minute or two.

## Preview locally

```sh
python3 -m http.server 8000
# open http://localhost:8000
```
