# Awk Empire — Sanity Studio

Hosted Studio for the Awk Empire site. Manages:

- **Gallery images** — pinned to one of four sections: Curtain Accessories, Duvet Sets, POP & TV Console, Agro Allied.
- **Real Estate properties** — listings for the `/real-estate` page dashboard.

## Local development

```
npm install
npm run dev
```

Studio runs on `http://localhost:3333` by default. Login is required on first run (`npx sanity login`).

## Deploy

```
npm run deploy
```

This publishes the Studio to a hosted URL like `awk-empire.sanity.studio`. Run it once after the first install, and again whenever a new schema is added.

## Files

- `sanity.config.js` — Studio config (projectId, dataset, plugin list, schema registry).
- `sanity.cli.js` — CLI config; required for `sanity deploy` and other CLI subcommands.
- `schemas/galleryImage.js` — one image pinned to one of four section values.
- `schemas/property.js` — one real estate listing.
- `schemas/index.js` — schema registry; imported by `sanity.config.js`.

## Section values

The four `galleryImage.section` values (`curtain-accessories`, `duvet-sets`, `pop-tv-console`, `agro`) are pinned in `schemas/galleryImage.js`. The frontend query in `src/lib/queries.js` filters strictly by these values. **If you rename one, rename it in both places** — otherwise the frontend will show the empty state for that section.
