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

1. **Confirm the real domain.** `https://www.bmbspace.id` is a placeholder (inferred from the `info@bmbspace.id` email address) used in `sitemap.xml`, every page's canonical URL, and Open Graph tags. Update all of these once the real production domain is confirmed — search and replace `https://www.bmbspace.id`.
2. **Replace the placeholder favicon.** `favicon.svg` / `favicon.ico` / `apple-touch-icon.png` are a generated placeholder (a plain teal square with a "B" monogram in the site's existing primary color), not derived from the real BMB Space logo. Swap these once a real logomark file is available.
3. **Self-host images.** All images (logo, hero, testimonial avatars, map) are still hotlinked from a Google-hosted URL (`lh3.googleusercontent.com/aida-public/...`) left over from the original AI-generated draft. Download the real assets into `images/{hero,logo,services,gallery,testimonials}/` and update every `src=`/`background-image:url(...)` reference. Once self-hosted, also add explicit `width`/`height` attributes to every `<img>` (skipped so far — see Phase 4/6 notes) to prevent layout shift, and convert to WebP/AVIF where practical.
4. **Resolve two flagged content gaps:**
   - `pages/about.html` has a visible placeholder box where real company history/mission content needs to go.
   - `pages/services/event-space.html` is a placeholder — confirm whether it should represent an existing service (Business Address / Mail Handling / Business Consultation) or is a genuinely new offering needing full content. It's marked `noindex` until resolved.
5. **Genuinely missing pages**, still linked as `#` (not fabricated): Karir (careers), Blog & News, Privacy Policy, Terms of Service, Cookie Policy, Sitemap (HTML), Security.

