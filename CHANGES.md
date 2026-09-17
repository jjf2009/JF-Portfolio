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
| Experience | Added The Grit City and GirlScript Summer of Code; promoted Coders Club to Vice President. |
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
| **Desktop after** | **99** | **100** | **100** | **100** |
| Mobile before | 72 | 96 | 100 | 100 |
| **Mobile after** | **80** | **100** | **100** | **100** |

Measured with Lighthouse against local production builds of `4fd3a80` and this
branch, so the comparison is like for like. Lighthouse is not a dependency; run
it with `npx lighthouse`.

Mobile FCP went 4.0s → 2.9s and initial JS 425 kB → 161 kB, mainly by
self-hosting the fonts (the Google Fonts stylesheet was render-blocking) and
lazy-loading everything below the fold. Console is clean, CLS is 0, and the
layout was checked at 375, 768 and 1440px.

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

1. **Beacon went private partway through this work.** It was public in the
   morning and 404s now, and it is the only project in the Infrastructure
   section. The card currently says so and renders without a code link. Make it
   public again and it will link itself on the next refresh — otherwise the
   section rests on a project nobody can inspect.
2. **LinkedIn is unverified.** This sandbox cannot reach LinkedIn at the network
   layer. Please confirm `https://www.linkedin.com/in/jared-furtado/` resolves —
   it is in the footer, the schema and llms.txt.
3. **Mobile Lighthouse is 80, not 90+.** The remaining cost is React booting
   under 4× CPU throttling. The real fix for a Vite SPA is prerendering the
   first paint, which is a structural change I did not want to make without
   asking. Say the word and I will.
4. **The Grit City bullets came from your LinkedIn.** "200+ backlink
   opportunities" is your number, not mine — confirm you can defend it.
5. **HeatWatch is credited as a four-person hackathon team** and the card says
   you did the data pipeline and mapping frontend. Correct that if it is wrong.
6. **Freelance end date.** LinkedIn end-dates the freelance role Aug 2026 but
   writes about it in the present tense. The site says "Present".
7. **VGen Studio** is on your LinkedIn but not the site. Add it, or leave it off?
8. **Resume PDF** loads, but I have not read it. It should match the new
   positioning.
9. **The repo count is 57 public**, not the 127 you mentioned — the rest are
   presumably private.

---

## Verifying

```bash
npm run links          # link/asset/anchor audit
npm run github:refresh # refresh the GitHub snapshot by hand
npm run build          # prebuild fetch runs automatically
npm run lint
```
