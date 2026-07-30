# Articles folder

This folder holds individual article pages, following the same pattern as `pages/services/` — one plain, self-contained `.html` file per article, no template engine.

## Adding a new article

1. Copy the structure of any `pages/services/*.html` file as a starting point (same `head`/`nav`/`footer`/script includes, adjusted relative paths — files here sit one level under `pages/`, same depth as `pages/services/`, so use `../` for root assets and `../css/style.css`, `../js/*.js`, etc.)
2. Suggested sections: hero (title + category + publish date), article body, author/CTA block linking to `../contact.html`.
3. Give the file a descriptive slug, e.g. `panduan-mendirikan-pt-di-bogor.html`.
4. Add a real card for it in `pages/articles.html` (replacing one of the current placeholder cards) and to the homepage's Articles teaser section in `index.html`.
5. Add the new URL to `sitemap.xml`.

## Current status

No real articles have been written yet — `pages/articles.html` currently shows structural placeholder cards only (clearly marked "Konten Diperlukan"). This folder is intentionally empty until real content is provided.
