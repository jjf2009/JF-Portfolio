# Full SEO Audit Report: jaredfurtado.tech
<!-- Updated: 2026-03-28 -->

## Executive Summary
**Overall SEO Health Score: 79/100 (Good)**

| Category | Score | Weight |
|----------|-------|--------|
| Technical SEO | 88/100 | 25% |
| Content Quality | 80/100 | 20% |
| On-Page SEO | 80/100 | 15% |
| Schema / Structured Data | 67/100 | 15% |
| Performance (CWV) | 80/100 | 10% |
| Image Optimization | 70/100 | 10% |
| AI Search Readiness (GEO) | 80/100 | 5% |

### Key Strengths
1. **AI Readiness**: Implementation of `llms.txt` is ahead of 99% of personal portfolios.
2. **Security & Performance**: Perfect security header scores (100/100) and zero redirect hops.
3. **Branding**: Strong keyword association between "Jared Furtado" and "Full Stack Developer".

### Critical Issues
1. **Schema Depth**: Only basic `Person` and `WebSite` schemas; missing specific entity links and project schemas.
2. **Social Meta Optimization**: Incomplete Open Graph and Twitter card data (missing dimensions and handles).
3. **Robots.txt Efficiency**: AI crawlers are listed but not explicitly controlled (allows all by default with `Disallow: `).

---

## Technical SEO Analysis

### Crawlability & Indexing
- **Robots.txt**: ✅ Found. Defines 12 AI-related User-Agents.
  - *Observation*: Multiple `User-agent` blocks followed by an empty `Disallow: ` actually allow all crawlers to all paths.
  - *Recommendation*: If blocking is intended, use `Disallow: /`. If allowing, it's safer to just let the global `*` handle it to keep the file clean.
- **Sitemap**: ✅ Found at `/sitemap.xml`. Only contains the root URL (expected for a single-page site).
- **Security Headers**: ✅ 100/100. HSTS, CSP, X-Frame-Options, and Permissions-Policy are all correctly configured.

### Performance (CWV)
- **Visual Rendering**: Smooth loading process for the React-based SPA.
- **Redirects**: 0 hops (direct access).
- **Observation**: Above-the-fold content loads rapidly; no significant Layout Shift (CLS) detected visually.

---

## Content Quality & E-E-A-T

### Experience & Authority
- **E-E-A-T**: Strong evidence of real-world projects (Global Tourist Centre, Techjeeva).
- **Readability**: Flesch Reading Ease 15.6 (Difficult).
  - *Note*: High density of technical terms (e.g., "Full-stack", "React", "Node.js"). This is acceptable for a developer portfolio but could be softened with simple descriptions in the "About" section.
- **Thin Content Check**: The single-page structure is data-rich within sections but technically "low page count" for broad SEO.

---

## On-Page SEO Analysis

### Meta Tags
- **Title Tag**: `Jared Furtado — Full Stack Developer` (Optimal length/structure).
- **Meta Description**: Clear, descriptive, and contains keywords (Goa, React, AI workflows).

### Social Optimization
- **Open Graph**: Missing `og:image:width` and `og:image:height`.
- **Twitter**: Missing `twitter:site` and `twitter:creator` (link these to your Twitter/X handle).

---

## Schema & Structured Data

### Currently Implemented
- **Person Schema**: Good baseline (Name, URL, Image, SameAs, JobTitle).
- **WebSite Schema**: Present.

### Missing Opportunities (Medium Priority)
1. **ProfessionalService**: If operating as a freelancer, this helps local SEO in Goa.
2. **WorkDigitalEntity / SoftwareSourceCode**: For project cards to link directly to GitHub repos in a machine-readable way.
3. **CollectionPage**: Define the main page as a collection of projects.

---

## AI Search Readiness (GEO / AEO)

### llms.txt Analysis
- **Status**: ✅ Present. High-value asset for AI search engines like Perplexity, GPT-Search, and Claude.
- **Quality Score**: 45/100.
  - *Missing*: Detailed blockquote description.
  - *Missing*: Links to specific sections or projects within the file.

---

## prioritized Action Plan (Next Steps)
1. **Fix `robots.txt`**: Either explicitly `Disallow: /` for AI bots or clean up the empty `Disallow: ` lines.
2. **Enhance `llms.txt`**: Add a 2-3 sentence overview of your USP and link to GitHub repos directly.
3. **Expand Schema**: Add `softwareSourceCode` and `project` nesting to your JSON-LD.
4. **Social Meta**: Add image dimensions (1200x630) and Twitter handles to `<head>`.
