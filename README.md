# BMB Space

Static website for BMB Space — professional virtual office services in Bogor.

Plain HTML + Tailwind CSS (compiled via CLI, no CDN, no framework, no build-time templating). Built to be easy for a single developer to maintain.

## Project structure

```
bmb-space/
├── index.html              Homepage
├── pages/                  Additional pages (about, services, pricing, faq, contact)
│   └── services/            Individual service detail pages
├── css/
│   ├── input.css            Tailwind source (edit this)
│   └── style.css            Compiled output (generated — do not hand-edit)
├── js/
│   ├── script.js            Shared/global JS
│   ├── nav.js                Mobile navigation toggle
│   └── reveal.js              Scroll-reveal animation
├── images/                  Self-hosted image assets, grouped by section
├── favicon.ico
├── robots.txt
├── sitemap.xml
├── tailwind.config.js       Design tokens (colors, spacing, type scale)
├── postcss.config.js
└── package.json
```

## Getting started

The site works by simply opening `index.html` in a browser — `css/style.css` is already committed and built.

To make style changes:

```bash
# 1. Install dependencies (one time)
npm install

# 2. Edit css/input.css and/or class names in the HTML files

# 3. Rebuild the compiled CSS
npm run build

# — or, while actively working, auto-rebuild on save:
npm run watch
```

Commit the updated `css/style.css` along with your HTML/CSS changes so the site stays viewable without a build step for anyone who clones it.

## Notes for future maintenance

- No template engine, no data files, no JS framework — every page is a plain, self-contained HTML file. Shared sections (nav, footer) are currently duplicated per page by design, to keep this simple; if the number of pages grows significantly, revisit this.
- Tailwind's `content` glob in `tailwind.config.js` scans `index.html`, everything in `pages/`, and `js/**/*.js` — new pages need to sit inside `pages/` (or be added to the glob) to have their classes picked up by the build.
- Design tokens (brand colors, spacing scale, type scale) live in `tailwind.config.js` only — do not redefine colors ad hoc in markup.

## Before going live — action items

1. ~~**Confirm the real domain.**~~ **Done.** Production domain is now `https://www.berkahmeetingbareg.id` — updated in `sitemap.xml`, `robots.txt`, every page's canonical URL, Open Graph tags, the `info@` email address, and the LocalBusiness JSON-LD in `index.html`. If the old `bmbspace.id` domain was ever live/indexed, set up a 301 redirect from it to the new domain — see `redirects/README.md` for platform-specific config (the redirect itself has to be configured wherever `bmbspace.id` is actually hosted/DNS-pointed, which isn't part of this codebase).
2. **Replace the placeholder favicon.** `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` are a generated placeholder (a plain teal square with a "B" monogram in the site's existing primary color), not derived from the real BMB Space logo. Swap these once a real logomark file is available.
3. **Self-host images — partially done.** Logo and the 3 testimonial avatars now self-hosted as local SVGs (`images/logo/logo-mark.svg`, `images/testimonials/*.svg`) — simple initials/monogram placeholders in the site's brand colors, since I couldn't fetch the real photos (no network path to `lh3.googleusercontent.com` from the build environment, and no image-download capability at all). Real hero photo (`images/hero/office-hero.jpeg`) and gallery photos were already self-hosted from Phase 13. **Swap the 4 placeholder SVGs for real files whenever they're available — no HTML/CSS changes needed, just replace the file contents at the same paths.** Still outstanding: explicit `width`/`height` on every `<img>` to prevent layout shift, and WebP/AVIF conversion where practical.
4. **Content gaps — filled with Lorem Ipsum for preview purposes, not final copy:**
   - `pages/about.html`'s company history/mission box, all 4 service-card blurbs on the homepage/`services.html`, the 4 full service detail pages (`accounting-tax`, `legal-setup`, `workspace`, `digital-end-to-end` — including their pricing package cards), and the article teaser cards on the homepage/`articles.html` now show Lorem Ipsum instead of "content needed" notices, so pages can be previewed with copy in place. Every one of these still needs real copy before going live — search for "Lorem ipsum" to find every spot.
   - `pages/services/event-space.html` was deliberately left as its original "content needed" stub (not lorem-ipsum'd) — it's a business decision, not a copy gap: confirm whether it should represent an existing service (Business Address / Mail Handling / Business Consultation) or is a genuinely new offering needing full content. It's marked `noindex` until resolved.
5. **Genuinely missing pages**, still linked as `#` (not fabricated): Karir (careers), Blog & News, Privacy Policy, Terms of Service, Cookie Policy, Sitemap (HTML), Security.

