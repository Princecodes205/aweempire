// Sanity Studio config for Awk Empire.
//
// Project ID and dataset are hardcoded here, matching the values in
// src/lib/sanity.js. The frontend client also hardcodes the same values
// (we deliberately skip the env-var indirection so the Vercel deploy
// doesn't need env vars in the dashboard). If the project ID or
// dataset ever changes, change it here and in src/lib/sanity.js —
// two places.

import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "awk-empire",
  title: "Awk Empire",
  projectId: "797q20u1",
  dataset: "production",
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
});
