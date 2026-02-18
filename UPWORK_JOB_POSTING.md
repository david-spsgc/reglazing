# Upwork Job Posting: Web Designer for Static Marketing Site (Decap CMS)

## Title
Web Designer Needed: Refine Existing Bathroom Reglazing Marketing Site (Static HTML/CSS/JS + Decap CMS)

## Project Overview
We have an existing marketing website for a local home improvement contractor specializing in epoxy coating for bathroom surfaces (tubs, tile, sinks, enclosures). The site is already built and deployed as a **static site** with a simple content workflow via **Decap CMS** (`/admin`).

We are looking for a strong **web designer (with front-end styling skills)** to upgrade the visual design, polish UX, and improve conversion-focused presentation while preserving current content architecture and CMS editing workflow.

## Current Stack / Workflow
- Static HTML site (no framework)
- CSS + vanilla JavaScript
- Content loaded from JSON files:
  - `content/site.json` (business copy, SEO fields, script injection)
  - `content/gallery.json` (before/after gallery items)
- Decap CMS admin at `/admin/`:
  - `admin/index.html`
  - `admin/config.yml`
- CMS writes content updates back to Git (Git Gateway workflow)
- Deployment target: static hosting (currently documented for Netlify)

## Scope of Work
1. **Design refresh**
   - Apply a cleaner, more premium visual identity (colors, typography, spacing, hierarchy).
   - Improve consistency across homepage and internal pages.
2. **Conversion optimization (visual/UX)**
   - Improve CTA prominence (call button / quote request).
   - Refine form visual treatment and section flow.
3. **Gallery presentation improvements**
   - Keep before/after compare concept, but elevate layout and polish.
   - Ensure social sharing controls remain clear and usable.
4. **Mobile-first quality**
   - Ensure excellent layout and readability on small screens.
5. **Do not break CMS workflow**
   - Keep JSON-driven structure and editable fields intact.
   - Any new editable fields must be added intentionally in `admin/config.yml` and matching JSON files.

## Important Technical Requirements
- Do **not** migrate to a heavy framework unless explicitly discussed.
- Preserve static-site deployability.
- Keep existing section architecture and required business sections:
  - About, FAQ, Testimonials/Reviews, Service Areas
  - Services pages: residential bathrooms, rental units, commercial bathrooms
  - Product pages: ceramic sinks/tubs, fiberglass tubs/enclosures, ceramic wall tile & backsplashes
- Maintain/extend SEO and script-injection editability in CMS.
- Keep code organized and readable; avoid unnecessary complexity.

## Files You Will Primarily Touch
- `index.html`
- `assets/css/styles.css`
- `assets/js/site.js` (only if UI behavior changes require it)
- `pages/services/*.html`
- `pages/products/*.html`
- Optionally `content/*.json` and `admin/config.yml` if adding editable design-driven content blocks

## Deliverables
- Updated visual design implemented in code.
- Mobile-responsive QA pass.
- Brief implementation notes (what changed, what is editable in CMS, any setup impacts).
- Screenshot set of key pages (desktop + mobile).

## Proposal Request (what to include)
Please include:
1. 2–4 relevant portfolio links (service-business or local-business websites preferred).
2. Short explanation of your approach to improving conversions through design.
3. Confirmation you can work within a static HTML/CSS/JS codebase and preserve Decap CMS compatibility.
4. Estimated timeline and fixed-price or hourly estimate.

## Nice to Have
- Experience designing for home services/local contractor businesses.
- Familiarity with Decap CMS / Netlify CMS workflows.
- Basic accessibility best practices (contrast, focus states, semantic structure).

## Engagement Notes
We are specifically hiring for **design + front-end styling polish** on top of an existing implementation, not a full rebuild from scratch.
