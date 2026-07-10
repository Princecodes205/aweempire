// Property dashboard for the /real-estate page.
// Renders `realEstateProperties` as a card grid: 1 col mobile, 2 col tablet,
// 3 col desktop. Each card carries its own pre-filled WhatsApp enquiry
// link so leads arrive on WhatsApp already naming the property they're
// asking about (same pattern as the v3 immigration services page).
//
// Data lives in `src/data/content.js` (realEstateProperties +
// getPropertyWhatsAppLink) so Champ can add/remove/update listings
// without touching this file. The component is purely presentational
// and has no opinions about which listings exist.
import {
  realEstateProperties,
  getPropertyWhatsAppLink,
  formatNaira,
} from "../../data/content.js";
import { accentMap } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";

const accent = accentMap["real-estate"];

export default function PropertyDashboard() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Live listings</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Current properties.
          </h2>
          <p className="mt-3 text-ink/70">
            Verified and featured plots and houses from the Awk Real Estate desk. Enquire
            directly on WhatsApp — we will reply with full documentation and a viewing slot.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {realEstateProperties.map((p) => (
            <article
              key={p.id}
              className="flex flex-col overflow-hidden rounded-card border border-ink/10 bg-ivory shadow-soft"
            >
              {/* Image with optional badge row in the top-left corner */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-2">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
                {p.badges && p.badges.length > 0 ? (
                  <ul className="absolute left-3 top-3 flex flex-wrap gap-2">
                    {p.badges.map((b) => (
                      <li
                        key={b}
                        className={`inline-flex items-center rounded-full ${accent.bg} px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ivory`}
                      >
                        {b}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-medium leading-snug text-ink">
                  {p.title}
                </h3>

                <p className="mt-3 inline-flex items-center gap-1.5 text-sm text-ink/70">
                  <Icon name="pin" size={16} />
                  <span>{p.location}</span>
                </p>

                <p className="mt-4 font-display text-2xl font-medium text-ink">
                  {formatNaira(p.price)}
                </p>

                <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-ink/70">
                  <Icon name="bed" size={16} />
                  <span>
                    {p.bedrooms} {p.bedrooms === 1 ? "bedroom" : "bedrooms"}
                  </span>
                </p>

                <a
                  href={getPropertyWhatsAppLink(p)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full ${accent.bg} px-5 py-2.5 text-sm font-semibold text-ivory transition-opacity hover:opacity-90 focus-visible:outline-ink`}
                >
                  <Icon name="chat" size={18} />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
