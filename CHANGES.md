# Portfolio refresh — summary

Branch `portfolio-refresh`, seven commits on top of `4fd3a80`.
Positioning: **full-stack engineer moving into DevOps**, with every claim
checkable against a public repo.

---

## What changed

### Content
| Section | Change |
|---|---|
| Hero | "Full-Stack Engineer / learning DevOps". One concrete line on what he builds and where he's heading. |
| Skills | Split into **Building with** (backed by shipped code) and **Learning** (the infra track). Go, Docker, CI/CD, Terraform, Kubernetes, Prometheus and Grafana sit in the second group. |
| Experience | Added VGen Studio, The Grit City and GirlScript Summer of Code; promoted Coders Club to Vice President. |
| Projects | Now driven by the GitHub data layer. Each card shows the problem, stack, role, live link, language breakdown and last-push date. |
| Infrastructure | New section. Beacon plus an honest "working through next" list. |
| About | Two paragraphs, no hardcoded age. |
| Contact | Internships and freelance, not "full-time opportunities". |
| Nav | Added Freelance and Infrastructure; reordered to match the page. |

### GitHub data layer
`scripts/fetch-github.mjs` runs as the npm `prebuild` step and writes the
committed `src/data/github-snapshot.json`. Nothing is fetched in the browser.

- **Curation:** `src/data/featured-repos.js`. Nothing is listed automatically —
  each repo is opted in by slug, with overrides for title, blurb, role, order,
  status and live URL. GitHub supplies stats; the file supplies the narrative.
- **Revalidation:** `.github/workflows/refresh-github-data.yml` re-runs the
  fetch every 12 hours and commits only when the output changes, which triggers
  a Vercel deploy. This is the ISR equivalent — Vite has no server runtime.
- **Failure policy:** `GITHUB_TOKEN` is optional. Without it the script runs
  unauthenticated; if the API is unreachable or rate-limited it keeps the
  committed snapshot and exits 0. A single repo going private is skipped rather
  than aborting the refresh. Verified against an invalid token, a real
  mid-build rate limit, and a repo actually going private.

### Technical
- Deleted `script.js` (13 dead links), root `index.css`, and two stale 2026 SEO
  reports — all tracked in git, none shipped.
- Removed 15 unused dependencies, 6 unused shadcn components, 2 unused hooks.
  318 → 227 packages.
- Fixed the favicon (was 404 at `/favicon.ico` in production) and its MIME type.
- Shipped a real OG image; the referenced file had never existed.
- Canonicalised on `https://www.jaredfurtado.tech`.
- Rewrote the JSON-LD, which described TechJeeva as a health-tech patient
  platform and GTC as a MERN itinerary builder. Neither was true.
- Removed a scaffolding comment that was shipping in production HTML.
- Mirrored the `@/*` alias into `vite.config.js`; it existed only in
  `jsconfig.json`, so any `@/` import would have broken the build.

### Lighthouse

| | Performance | Accessibility | Best practices | SEO |
|---|---|---|---|---|
| Desktop before | 94 | 96 | 100 | 100 |
| **Desktop after** | **100** | **100** | **100** | **100** |
| Mobile before | 72 | 96 | 100 | 100 |
| **Mobile after** | **93** | **100** | **100** | **100** |

Measured with Lighthouse against local production builds of `4fd3a80` and this
branch, so the comparison is like for like. Lighthouse is not a dependency; run
it with `npx lighthouse`.

Mobile FCP went 4.0s → 2.0s and LCP 4.4s → 3.0s. Three things got it there:
self-hosting the fonts (the Google Fonts stylesheet was render-blocking, worth
~1.2s), lazy-loading everything below the fold (initial JS 425 kB → 161 kB),
and prerendering the first screen at build time so paint no longer waits on
React. Console is clean on both profiles and CLS is 0.

**Prerendering.** `scripts/prerender.mjs` runs as `postbuild`, renders the app
once with `renderToString`, and writes the markup into `dist/index.html`; the
client hydrates it. Only the header and hero are prerendered — `renderToString`
emits the Suspense fallback for lazy components, which is the behaviour we
want. Prerendering the whole page was measurably worse (84 kB of markup put
mobile at 75), so the below-the-fold sections stay split and mount after
hydration.

---

## What I removed, and why

| Removed | Reason |
|---|---|
| **Nike Landing Page** | Repo and deployment both 404. |
| **Avyott sales internship** | Real, but a sales role pulls against the engineering positioning. Easy to restore. |
| **qBits** | Never on the site. Left off — it was a hackathon team, not a two-year full-time job. |
| **`script.js`, root `index.css`** | Dead files from the pre-React site. |
| **`FULL-AUDIT-REPORT.md`, `ACTION-PLAN.md`** | Superseded March 2026 SEO artifacts. |
| **15 dependencies** | Not imported anywhere. |
| **RideBuddy live link** | The repo's homepage field points at a deploy that 404s. Source link kept. |
| **Per-bot robots.txt rules** | `User-agent: * / Allow: /` already covers them. |

---

## What I need from you

1. **HeatWatch is credited as a four-person hackathon team** and the card says
   you did the data pipeline and mapping frontend. Correct that if it is wrong.
2. **Freelance end date.** LinkedIn end-dates the freelance role Aug 2026 but
   writes about it in the present tense. The site says "Present".
3. **Resume PDF** loads, but I have not read it. It should match the new
   positioning — particularly the VGen Studio and Grit City framing.
4. **The repo count is 58 public**, not the 127 you mentioned — the rest are
   presumably private.
5. **Below-the-fold sections could not be visually verified here.** They use
   framer-motion's `whileInView`, and the headless browser available in this
   environment does not fire IntersectionObserver reliably, so those sections
   photograph blank. The pre-existing build behaves identically, so this is not
   a regression — but please scroll the deployed site once to confirm.

---

## Verifying

```bash
npm run links          # link/asset/anchor audit
npm run github:refresh # refresh the GitHub snapshot by hand
npm run build          # prebuild fetch runs automatically
npm run lint
```
