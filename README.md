# jaredfurtado.tech

Personal site of Jared Furtado, a full stack developer in Goa, India.

Built with React 18, Vite and Tailwind CSS. The page is prerendered to static HTML at build time, so search engines and AI assistants that don't run JavaScript still see the full content.

## Editing content

All copy lives in `src/lib/`. You rarely need to touch the components.

| File | What it controls |
| --- | --- |
| `site-data.js` | Name, summary, availability, email, social links, services, the "Now" list |
| `freelance-data.js` | Client work |
| `projects-data.js` | Personal projects. Add `devops: { status, summary, stack }` to mark DevOps work in progress. |
| `experience-data.js` | Experience (one-line `summary` per role) |
| `gallery-data.js` | Event photos and captions. Images go in `public/images/gallery/` as `name.webp` + `name.jpg`. |

When you change facts, also update `public/llms.txt` (the plain-text summary AI assistants read) so the two stay consistent.

## Commands

```bash
npm install
npm run dev      # local dev server
npm run build    # client build + server render + prerender into dist/index.html
npm run preview  # serve the production build
npm run lint
```

## SEO / GEO

- **Prerendering:** `src/entry-server.jsx` + `scripts/prerender.mjs` inject the rendered HTML into `dist/index.html`; `src/main.jsx` hydrates it.
- **Structured data:** `src/components/seo/SchemaMarkup.jsx` builds one JSON-LD `@graph` (ProfilePage, Person, WebSite, ProfessionalService, projects, ImageGallery) from the data files above.
- **Crawler files:** `public/robots.txt` (explicitly allows AI search crawlers), `public/sitemap.xml` (with image entries), `public/llms.txt`.
- **Meta:** title, description, Open Graph/Twitter cards and the 1200×630 share image (`public/images/jared-furtado-og-image.jpg`) are in `index.html`.

## Deployment

Deployed on Vercel. `vercel.json` sets a strict Content Security Policy (no inline scripts or styles, no third-party origins), security headers and long-lived caching for hashed assets. Fonts are self-hosted via Fontsource.
