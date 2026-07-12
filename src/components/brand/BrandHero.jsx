// Sub-brand hero: accent-tinted background, brand-specific H1 + lede, two CTAs.
// The brand record is passed in as a prop — page passes its brand object.
//
// heroVariant:
//   "commercial" (default) — WhatsApp / Call / Email CTA row.
//   "civic"                — Partner with us (mailto) + Learn more (anchor),
//                            for non-commercial / advocacy pages like the
//                            Foundation. Replaces the sales CTAs with a
//                            tone that reads as outreach, not commerce.
//
// `image` (optional):
//   { src, alt, position? } — when supplied, the hero renders as a 2-col
//   grid with text on the left and a full-bleed photo on the right. On
//   screens < md, the image collapses below the text. Pass a curated,
//   no-watermark Unsplash photo at 1600px wide. Replace by swapping the
//   file in `src/assets/images/heroes/{slug}.jpg` and the import below.
import { contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";
import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { accentMap } from "../../data/content.js";
import { Stagger, StaggerChild } from "../motion/primitives.jsx";

import interiorHero from "../../assets/images/heroes/interior.jpg";
import immigrationHero from "../../assets/images/heroes/immigration.jpg";
import agroHero from "../../assets/images/heroes/agro-allied.jpg";
import realEstateHero from "../../assets/images/heroes/real-estate.jpg";
import foundationHero from "../../assets/images/heroes/foundation.jpg";

// Per-brand hero photos. Edit a brand's slug here (or replace the file)
// to swap its hero image. Pages can also pass `image` directly to
// override the default for that page.
const heroImageMap = {
  interior: { src: interiorHero, alt: "Warm interior with soft linen curtains" },
  immigration: { src: immigrationHero, alt: "Passport and travel essentials on a desk" },
  "agro-allied": { src: agroHero, alt: "Sunlit farmland at golden hour" },
  "real-estate": { src: realEstateHero, alt: "Modern villa with manicured lawn" },
  foundation: { src: foundationHero, alt: "A community working together" },
};

export default function BrandHero({ brand, image }) {
  const accent = accentMap[brand.slug];
  const variant = brand.heroVariant ?? "commercial";
  const heroImage = image ?? heroImageMap[brand.slug];

  return (
    <section
      className={`relative overflow-hidden ${accent.bgSofter} py-16 md:py-24`}
      aria-labelledby={`hero-${brand.slug}`}
    >
      {/* Faint accent blob — same trick as landing hero */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${accent.bgSoft} blur-3xl md:h-96 md:w-96`}
      />
      <Container className="relative">
        <div
          className={
            heroImage
              ? "grid items-center gap-10 md:grid-cols-2 md:gap-12"
              : undefined
          }
        >
          <Stagger as="div">
            <StaggerChild as="div">
              <Eyebrow>{brand.heroEyebrow}</Eyebrow>
            </StaggerChild>
            <StaggerChild as="div">
              <h1
                id={`hero-${brand.slug}`}
                className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl"
              >
                {brand.heroHeadline}
              </h1>
            </StaggerChild>
            <StaggerChild as="div">
              <p className="mt-6 max-w-2xl text-lg text-ink/75 md:text-xl">{brand.lede}</p>
            </StaggerChild>
            <StaggerChild as="div">
              {variant === "civic" ? (
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={`mailto:${brand.ctaEmail}?subject=${encodeURIComponent("Foundation enquiry")}`}
                    className={`inline-flex items-center gap-2 rounded-full ${accent.bg} px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-colors hover:opacity-90 focus-visible:outline-ink`}
                  >
                    <Icon name="mail" size={20} />
                    <span>Partner with us</span>
                  </a>
                  <a
                    href="#focus-areas"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory focus-visible:outline-brass"
                  >
                    <span>Learn more</span>
                    <span aria-hidden="true">↓</span>
                  </a>
                </div>
              ) : (
                <div className="mt-10 flex flex-wrap gap-3">
                  <a
                    href={waLink(brand.slug)}
                    target="_blank"
                    rel="noreferrer"
                    className={`inline-flex items-center gap-2 rounded-full ${accent.bg} px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-colors hover:opacity-90 focus-visible:outline-ink`}
                  >
                    <Icon name="chat" size={20} />
                    <span>WhatsApp us</span>
                  </a>
                  <a
                    href={contact.phones[0].href}
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory focus-visible:outline-brass"
                  >
                    <Icon name="phone" size={20} />
                    <span>Call {contact.phones[0].display}</span>
                  </a>
                  <a
                    href={`mailto:${brand.ctaEmail}`}
                    className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-ink/70 underline decoration-brass/40 underline-offset-4 hover:text-ink"
                  >
                    <Icon name="mail" size={18} />
                    <span>{brand.ctaEmail}</span>
                  </a>
                </div>
              )}
            </StaggerChild>
          </Stagger>

          {heroImage ? (
            <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-soft md:aspect-[5/6]">
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                loading="eager"
                fetchpriority="high"
                width="1600"
                height="2000"
                className="h-full w-full object-cover"
              />
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
