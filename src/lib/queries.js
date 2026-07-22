// GROQ queries for Sanity-backed content.
//
// Gallery sections match the values in `studio/schemas/galleryImage.js`:
//   curtain-accessories, duvet-sets (note: plural), pop-tv-console, agro
// The section values must stay in sync with the Studio dropdown — if you
// rename one, rename the other.

export const galleryQuery = (section) => `
  *[_type == "galleryImage" && section == "${section}"] | order(order asc) {
    _id, image, alt
  }
`;

export const propertiesQuery = `
  *[_type == "property"] | order(_createdAt desc) {
    _id, title, description, location, bedrooms, price, image, badges
  }
`;
