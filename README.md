# Delegate website

The marketing site for Delegate, at getdelegateapp.com. It's built with Astro and Tailwind CSS from the [AstroWind](https://github.com/arthelokyo/astrowind) template (MIT licence, see `LICENSE.md`).

## Editing content

Text pages and store links are edited in [Pages CMS](https://pagescms.org) (config in `.pages.yml`):

- **Pages:** `src/data/pages/*.md`, each published at `/<file name>` (`privacy.md` → `/privacy`).
- **Store links:** `src/data/stores.json`. Until a link is set, the site shows "Coming soon" for that store.

The home page is `src/pages/index.astro`; screenshots come from the app repo's `store/screenshots` and live in `src/assets/images/screens`.

## Commands

```bash
npm run dev      # localhost:4321
npm run build    # static build to dist/
npm run check    # astro check, ESLint, and Prettier
```
