// Gallery image — one uploaded image, pinned to one of the four
// image-driven sections on the Awk Empire site.
//
// `section` is a fixed dropdown (not free text) so the client can't
// accidentally break the site by mistyping a section name — the
// frontend query in src/lib/queries.js filters strictly by these
// values. If you add a new section, add it here AND to the galleryQuery
// call site in the matching brand component.

import { defineType, defineField } from "sanity";

export default defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "section",
      title: "Section",
      type: "string",
      options: {
        list: [
          { title: "Curtain Accessories", value: "curtain-accessories" },
          { title: "Duvet Sets", value: "duvet-sets" },
          { title: "POP & TV Console", value: "pop-tv-console" },
          { title: "Agro Allied", value: "agro" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt text",
      type: "string",
      description:
        "Short description for accessibility — optional but recommended",
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
      description: "Lower numbers show first. Optional.",
    }),
  ],
});
