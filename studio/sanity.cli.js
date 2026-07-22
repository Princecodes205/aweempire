// Sanity CLI config. Required for `npx sanity deploy`, `sanity dataset
// ...`, and other CLI subcommands to know which project to talk to.
// See sanity.config.js for the matching projectId/dataset.

import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: "797q20u1",
    dataset: "production",
  },
});
