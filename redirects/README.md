# 301 Redirect — bmbspace.id → berkahmeetingbareg.id

`berkahmeetingbareg.id` is now the canonical domain everywhere in this
codebase (canonical tags, Open Graph, sitemap.xml, robots.txt, email
addresses, JSON-LD). This folder holds redirect config so visitors and
search engines hitting the **old** domain land on the new site instead
of a dead page.

## Important: this can't be "installed" from inside this repo

A 301 redirect for `bmbspace.id` has to run on whatever server / hosting
account / DNS that domain is currently pointed at — which is separate
infrastructure from wherever this codebase (the new site) gets deployed.
I don't have visibility into that hosting setup, so pick the file that
matches it and deploy it there:

| If `bmbspace.id` is hosted on...      | Use                  |
|----------------------------------------|-----------------------|
| Shared hosting / cPanel (Apache)       | `.htaccess`          |
| A VPS / self-managed server            | `nginx.conf`         |
| Netlify                                | `_redirects`         |
| Vercel                                 | `vercel.json`        |

## Checklist

1. Confirm where `bmbspace.id` (and `www.bmbspace.id`) currently
   resolves — that's where the redirect must be deployed, not here.
2. Keep the old domain's DNS and SSL certificate active until the
   redirect has been live for a while; killing DNS/SSL before the
   redirect is in place means visitors hit a broken connection instead
   of being forwarded.
3. Deploy the matching config file above on that host.
4. Test with a few real indexed URLs, not just the homepage, e.g.:
   - `https://www.bmbspace.id/pages/contact.html`
   - `https://www.bmbspace.id/pages/services/virtual-office.html`
   Each should 301 to the equivalent `berkahmeetingbareg.id` URL,
   preserving the path.
5. In Google Search Console, submit a change-of-address from the old
   property to the new one once the redirect is confirmed working, and
   submit the updated `sitemap.xml` under the new domain's property.
