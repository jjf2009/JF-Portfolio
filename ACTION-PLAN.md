# SEO Action Plan: jaredfurtado.tech
<!-- Updated: 2026-03-28 -->

This plan outlines prioritized steps to improve search visibility, AI search presence (GEO), and technical health.

## 🔴 Critical Priority (Must Fix Immediately)

### 1. Fix robots.txt AI Bot Declarations
- **Issue**: Listing User-Agents followed by an empty `Disallow: ` actually allows all bots to crawl everything. If the intention was to block AI bots to save resources/bandwidth, this is not working.
- **Fix**: Change `Disallow: ` to `Disallow: /` for AI bots (GPTBot, ClaudeBot, etc.) OR simplify by removing the specific bot blocks to keep the file lean.

### 2. Social Meta Completion
- **Issue**: Missing `og:image:width`, `og:image:height`, and `twitter:site`. This can cause poor previews on Slack, LinkedIn, and X.
- **Fix**: Add the following to your `<head>`:
  ```html
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:site" content="@your_handle" />
  <meta name="twitter:creator" content="@your_handle" />
  ```

---

## 🟡 High Priority (Implement within 1 week)

### 1. Enhance llms.txt (AI Search Optimization)
- **Issue**: Current `llms.txt` is missing a core description and structured links.
- **Fix**: Update `public/llms.txt` with:
  - A `> blockquote` describing who you are and what you do.
  - A list of direct links to project GitHub repositories or specific site sections.

### 2. Deepen Schema.org Structured Data
- **Issue**: Basic `Person` schema is fine but doesn't capture projects or professional status.
- **Fix**: Wrap your project cards in `CreativeWork` or `SoftwareSourceCode` schema. Add `knowsAbout` fields to the `Person` schema for skills like "Full-Stack Development", "AI Workflows".

---

## 🟢 Medium Priority (Implement within 1 month)

### 1. Accessibility & E-E-A-T
- **Issue**: Readability score is very low (technical jargon).
- **Fix**: Add a 1-2 sentence "plain English" summary of your goal in the "About" section to offset the dense tech stack listing.

### 2. Image Optimization (AVIF)
- **Issue**: High-quality Profile image is likely a heavy JPEG/PNG.
- **Fix**: Serve images in modern formats like `.avif` or `.webp` for faster mobile LCP.

---

## ℹ️ Maintenance
- Re-check `sitemap.xml` after adding a blog or new major sections.
- Keep the `llms.txt` updated as you add new core capabilities.
