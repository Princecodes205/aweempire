// Real Estate property — one listing for the /real-estate dashboard.
//
// `description` is optional. The v7 prompt originally marked it
// required, but no migration is running to seed descriptions, and the
// existing hardcoded property array in src/data/content.js doesn't
// have any — making it required would break the dashboard on first
// load. Client can fill it in over time through the Studio.
//
// `badges` is a fixed dropdown of allowed values. Verified and Featured
// are the only two the dashboard currently renders.

import { defineType, defineField } from "sanity";

export default defineType({
  name: "property",
  title: "Property",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Name / Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Optional. 1–2 sentences shown on the property card.",
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "bedrooms",
      title: "Number of Bedrooms",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "price",
      title: "Price (₦)",
      type: "number",
    }),
    defineField({
      name: "image",
      title: "Property Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "badges",
      title: "Badges",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Verified", value: "Verified" },
          { title: "Featured", value: "Featured" },
        ],
      },
    }),
  ],
});
