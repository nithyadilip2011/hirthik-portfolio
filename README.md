# Hirthik Kumar G S: portfolio

Plain static site. No build step, no frameworks, no npm. Fonts (Bricolage Grotesque, JetBrains Mono, latin subset, SIL OFL) are self-hosted in `assets/fonts`.

## Files

- `index.html`, `assets/style.css`, `assets/app.js`: the site and the token bucket demo
- `Hirthik_Kumar_G_S_Resume.pdf`: resume download (phone number removed)
- `_headers`: security headers (CSP) and caching, read by Cloudflare Pages
- `favicon.svg`, `og-image.png`, `robots.txt`

## Run locally

    python3 -m http.server 8000

Open http://localhost:8000.

## Deploy on Cloudflare Pages (free tier)

1. Workers & Pages, Create, Pages, Connect to Git, pick this repo.
2. Framework preset: None. Build command: leave empty. Build output directory: `/` (repo root).
3. Save and deploy.

No environment variables, account IDs or config files are needed.

## Port to another Cloudflare/GitHub account

Nothing in the repo references an account, so moving it means re-pointing two things:

1. GitHub: create or fork the repo under the new account, then `git remote set-url origin https://github.com/<new-account>/hirthik-portfolio.git` and `git push -u origin main`.
2. Cloudflare: in the new account, create a Pages project from that repo with the settings above. Add the custom domain there if you have one.
3. The canonical and social-preview URLs in `index.html` point at `https://hirthik.pages.dev`. Change them if you move to another account or a custom domain.

## Content notes

The "Building next" cards are planned, not built. Move a card into Projects only when it is deployed.
