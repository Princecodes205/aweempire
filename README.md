# Awk Group

Five Nigerian businesses under one root — Interior, Immigration, Agro Allied, Real Estate, and the AWK Empire Foundation. Built with React + Vite.

## Sanity CMS

Gallery images (Curtain Accessories, Duvet Sets, POP & TV Console, Agro Allied) and Real Estate listings are managed through Sanity so the client can update them without code changes.

### First-time setup (one person, one time)

1. `cd studio && npm install`
2. `npx sanity login` — opens a browser; sign in with the Sanity account that owns project `797q20u1`
3. `npx sanity deploy` — gives a hosted Studio URL like `awk-empire.sanity.studio`
4. Invite the client: sanity.io/manage → project `797q20u1` → Members → invite with **Editor** role

### Running the Studio locally

```
cd studio
npm install
npm run dev
```

Studio runs on `http://localhost:3333` by default.

### Day-to-day client instructions

When adding a new gallery image, the **Section** dropdown must be set — if it's empty, the image won't show on the site. The four options are:

- `curtain-accessories`
- `duvet-sets`
- `pop-tv-console`
- `agro`

Property `description` is optional — leave it blank if there's nothing useful to say. Title, location, bedrooms, and image are required.

### Frontend env vars

None. `src/lib/sanity.js` hardcodes the project ID and dataset so the Vercel deploy doesn't need any env vars in the dashboard. If the project ever needs to point at a different Sanity project (staging, dev), move them back to env vars.

## Structure

- `src/` — the public site (React + Vite)
- `studio/` — Sanity Studio for content management
- `src/lib/sanity.js` — frontend Sanity client
- `src/lib/queries.js` — GROQ queries shared by the gallery and dashboard components
- `studio/schemas/` — Sanity document types (`galleryImage`, `property`)
