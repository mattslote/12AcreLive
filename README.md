# 12 Acre Live

Astro static site served by a Cloudflare Worker (static assets + `/api/contact`). Same stack as 12acrefilms.

    npm install && npm run dev
    npm run deploy        # needs `npx wrangler login`

Content lives in `src/data/services.ts` and `src/data/areas.ts`. City pages and service pages are generated from them.

Cutover: deploy, then in Cloudflare add 12acrelive.com as a zone (nameservers at Name.com), and add `12acrelive.com` + `www` as custom domains on the `12acrelive` Worker.
