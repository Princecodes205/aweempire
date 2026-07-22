// Property dashboard for the /real-estate page.
// Renders a card grid: 1 col mobile, 2 col tablet, 3 col desktop.
// Each card carries its own pre-filled WhatsApp enquiry link so leads
// arrive on WhatsApp already naming the property they're asking about
// (same pattern as the v3 immigration services page).
//
// Data source: Sanity (v7). The `propertiesQuery` in
// src/lib/queries.js returns the same shape the previous hardcoded
// array used, plus an optional `description`. The component renders
// `description` only when present — older properties without one
// continue to render fine.
//
// The previous hardcoded `realEstateProperties` array still lives in
// src/data/content.js for reference, but the dashboard no longer
// imports it. Once the client has seeded all 6 properties in Studio,
// the array in content.js can be deleted in a follow-up.
import { useEffect, useState } from "react";
import {
  getPropertyWhatsAppLink,
  formatNaira,
  accentMap,
} from "../../data/content.js";
import { client, urlFor } from "../../lib/sanity.js";
import { propertiesQuery } from "../../lib/queries.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { Reveal, Stagger, StaggerChild, HoverLift } from "../motion/primitives.jsx";

const accent = accentMap["real-estate"];

export default function PropertyDashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch(propertiesQuery)
      .then((docs) => {
        if (cancelled) return;
        setProperties(
          docs.map((d) => ({
            _id: d._id,
            title: d.title,
            description: d.description || null,
            location: d.location,
            bedrooms: d.bedrooms,
            price: d.price,
            image: d.image ? urlFor(d.image).url() : null,
            badges: d.badges || [],
          })),
        );
      })
      .catch((err) => {
        // Fall through to the empty state. Don't surface to the user.
        console.error("PropertyDashboard: failed to fetch from Sanity", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>Live listings</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Current properties.
          </h2>
          <p className="mt-3 text-ink/70">
            Verified and featured plots and houses from the Awk Real Estate desk. Enquire
            directly on WhatsApp — we will reply with full documentation and a viewing slot.
          </p>
        </Reveal>

        {properties.length === 0 ? (
          <p className="mt-12 text-sm text-ink/50">
            No properties listed yet.
          </p>
        ) : (
          <Stagger as="div" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {properties.map((p) => (
              <StaggerChild key={p._id}>
                <HoverLift intensity="lift" className="h-full">
                  <article
                    className="flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-ivory shadow-soft"
                  >
                    {/* Image with optional badge row in the top-left corner */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-ivory-2">
                      {p.image ? (
                        <img
                          src={p.image}
                          alt={p.title}
                          loading="lazy"
                          className="h-full w-full object-cover"
                        />
                      ) : null}
                      {p.badges && p.badges.length > 0 ? (
                        <ul className="absolute left-3 top-3 flex flex-wrap gap-2">
                          {p.badges.map((b) => (
                            <li
                              key={b}
                              className={`glass-soft inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-ink`}
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

                      {p.description ? (
                        <p className="mt-3 text-sm text-ink/70">
                          {p.description}
                        </p>
                      ) : null}

                      {p.price != null ? (
                        <p className="mt-4 font-display text-2xl font-medium text-ink">
                          {formatNaira(p.price)}
                        </p>
                      ) : null}

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
                </HoverLift>
              </StaggerChild>
            ))}
          </Stagger>
        )}
      </Container>
    </Section>
  );
}
