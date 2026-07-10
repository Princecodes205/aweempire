// Foundation landing page — civic / advocacy tone, distinct from the
// commercial brand pages. Uses BrandHero in its "civic" variant (Partner
// with us / Learn more CTAs) plus a custom 5-block focus-areas grid and a
// dedicated contact strip. No process / gallery / quote — the brief
// specifies "Partner with us" outreach, not sales.
import { brands, contact, accentMap } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";
import Icon from "../components/ui/Icon.jsx";

const brand = brands.find((b) => b.slug === "foundation");
const accent = accentMap.foundation;

export default function Foundation() {
  return (
    <>
      <BrandHero brand={brand} />

      <Section id="focus-areas">
        <Container>
          <div className="max-w-2xl">
            <Eyebrow>What we work on</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              Five focus areas. One civic duty.
            </h2>
            <p className="mt-3 text-ink/70">
              The Foundation channels our commercial success into the work of building a more
              transparent, healthier, better-educated society. These are the five areas we are
              currently active in.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brand.focusAreas.map((area, i) => (
              <article
                key={area.title}
                className="relative flex flex-col rounded-card border border-ink/10 bg-ivory p-6 pl-7"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-y-0 left-0 w-1 rounded-l-card ${accent.bg}`}
                />
                <span
                  aria-hidden="true"
                  className={`font-display text-sm font-semibold ${accent.text}`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-xl font-medium text-ink">{area.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{area.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <BrandQuote brand={brand} />

      <Section className="bg-ivory-2">
        <Container>
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <Eyebrow>Reach the Foundation</Eyebrow>
              <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
                {brand.contact.body}
              </h2>
              <p className="mt-3 max-w-prose text-ink/70">
                Whether you want to partner on a programme, volunteer, or simply follow our work,
                the line below goes to a real person on the Foundation desk.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={`mailto:${brand.ctaEmail}?subject=${encodeURIComponent("Foundation enquiry")}`}
                  className={`inline-flex items-center gap-2 rounded-full ${accent.bg} px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-colors hover:opacity-90 focus-visible:outline-ink`}
                >
                  <Icon name="mail" size={20} />
                  <span>{brand.ctaEmail}</span>
                </a>
                {brand.facebookUrl ? (
                  <a
                    href={brand.facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory focus-visible:outline-brass"
                  >
                    <span>Follow on Facebook</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </div>
            </div>

            <div className="rounded-card border border-ink/10 bg-ivory p-6">
              <Eyebrow>Empire contact</Eyebrow>
              <p className="mt-3 text-sm text-ink/70">
                Same address, same hours, same phone lines as the rest of the empire.
              </p>
              <ul className="mt-4 space-y-2 text-sm">
                {contact.phones.map((p) => (
                  <li key={p.href}>
                    <a href={p.href} className="text-ink hover:text-brass-dark">
                      {p.display}
                      {p.label === "Primary" && (
                        <span className="ml-2 text-xs text-ink/50">WhatsApp</span>
                      )}
                    </a>
                  </li>
                ))}
                <li>
                  <a href={`mailto:${contact.emails.general}`} className="text-ink hover:text-brass-dark">
                    {contact.emails.general}
                  </a>
                </li>
              </ul>
              <p className="mt-4 text-sm text-ink/70">{contact.hours}</p>
              <p className="mt-2 text-sm text-ink/70">{contact.address}</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
