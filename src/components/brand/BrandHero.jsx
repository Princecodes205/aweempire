// Sub-brand hero: accent-tinted background, brand-specific H1 + lede, two CTAs.
// The brand record is passed in as a prop — page passes its brand object.
import { contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";
import Container from "../ui/Container.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { accentMap } from "../../data/content.js";

export default function BrandHero({ brand }) {
  const accent = accentMap[brand.slug];

  return (
    <section
      className={`relative overflow-hidden ${accent.bgSofter} py-16 md:py-24`}
      aria-labelledby={`hero-${brand.slug}`}
    >
      {/* Faint accent blob top-right — same trick as landing hero */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full ${accent.bgSoft} blur-3xl md:h-96 md:w-96`}
      />
      <Container className="relative">
        <Eyebrow>{brand.heroEyebrow}</Eyebrow>
        <h1
          id={`hero-${brand.slug}`}
          className="mt-5 max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl"
        >
          {brand.heroHeadline}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-ink/75 md:text-xl">{brand.lede}</p>

        {brand.placeholderFlag && (
          <p className="mt-6 max-w-2xl rounded-card border border-brass/30 bg-brass/5 px-4 py-3 text-xs text-brass-dark">
            <strong className="font-semibold">Placeholder copy:</strong> {brand.placeholderFlag}
          </p>
        )}

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={waLink(brand.slug)}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full ${accent.bg} px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-colors hover:opacity-90 focus-visible:outline-ink`}
          >
            <span aria-hidden="true">💬</span>
            <span>WhatsApp us</span>
          </a>
          <a
            href={contact.phones[0].href}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory focus-visible:outline-brass"
          >
            <span aria-hidden="true">📞</span>
            <span>Call {contact.phones[0].display}</span>
          </a>
          <a
            href={`mailto:${brand.ctaEmail}`}
            className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm font-semibold text-ink/70 underline decoration-brass/40 underline-offset-4 hover:text-ink"
          >
            <span aria-hidden="true">✉</span>
            <span>{brand.ctaEmail}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
