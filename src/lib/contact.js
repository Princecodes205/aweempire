// Shared contact-link helpers used by Header, Footer, ContactBar, and BrandHero.
// Keeping this in one file ensures tel: and wa.me hrefs stay consistent.

import { contact } from "../data/content.js";

const PRIMARY_PHONE = contact.phones[0];

/** href for a regular phone call */
export const phoneHref = (index = 0) => contact.phones[index].href;

/** href for WhatsApp chat, with optional prefill message */
export const waLink = (context = "general", prefill) => {
  const base = PRIMARY_PHONE.wa;
  if (!prefill) return base;
  const message = prefill(context);
  return `${base}?text=${encodeURIComponent(message)}`;
};

/** default prefill for the floating WhatsApp button */
export const waPrefill = (context) =>
  `Hello Awk Empire, I'd like to enquire about ${context}.`;
