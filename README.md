# Kim de Cuba — From Idea to Action

Website for Kim de Cuba: 1:1 Idea-to-Action sessions for aspiring and emerging entrepreneurs (English / Español).

Built with [Next.js](https://nextjs.org) and exported as a static site, hosted on GitHub Pages.

## Editing the site

| What | Where |
| --- | --- |
| All text (English and Spanish) | `content/copy.js` |
| Booking link, contact email, scrolling band on/off | `site.config.js` |
| Photos and logo | `assets/images/` |
| Page sections (layout and styling) | `components/sections/` |
| Language switch, menu, FAQ and other behaviour | `components/Site.jsx` |
| Page title, description, fonts | `app/layout.jsx` |
| Global styles and animations | `app/globals.css` |
| Browser tab icon | `app/icon.png` |

To send the **Book** buttons to an online booking page (e.g. Calendly), set `bookingUrl` in `site.config.js`. When it is empty, the buttons open an email to `contactEmail`.

## Running it locally

Requires [Node.js](https://nodejs.org) 20 or newer.

```sh
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run build    # writes the static site to out/
```

## Publishing (GitHub Pages)

The workflow in `.github/workflows/deploy.yml` builds and publishes the site on every push to `main` or `claude/vibrant-brown-gmtzd9`.

One-time setup: in the repository go to **Settings → Pages** and under **Build and deployment → Source** choose **GitHub Actions**. Then re-run the workflow from the **Actions** tab (or push a change).

The site is served at `https://kimdecuba.github.io/Kimdecuba/`. If you later add a custom domain (e.g. `www.kimdecuba.com`) in **Settings → Pages**, the workflow adjusts the paths automatically.
