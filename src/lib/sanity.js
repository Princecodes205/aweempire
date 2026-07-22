// Sanity client + image URL builder.
//
// Project ID and dataset are hardcoded here (and mirrored in
// studio/sanity.config.js / studio/sanity.cli.js) so the site builds
// without any env vars — keeps the Vercel deploy flow simple. If you
// ever need to point at a different Sanity project (staging, dev, etc.)
// for a single environment, move these back to import.meta.env reads and
// add the env vars in that environment's settings.
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "797q20u1";
const dataset = "production";

export const client = createClient({
  projectId,
  dataset,
  apiVersion: "2026-01-01",
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
