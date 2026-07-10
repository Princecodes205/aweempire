// Services grid: cards with a 4px left-border in the brand accent.
// Each card may carry an optional `features` array (rendered as a bullet
// list) and an optional `whatsappHref` (rendered as a per-card WhatsApp
// CTA). Cards without these fields render as the simple title + body
// layout used by the other brand pages — keeps Interior / Agro / Real
// Estate / Foundation on the same component without visual regressions.
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { accentMap } from "../../data/content.js";

export default function ServicesGrid({ brand }) {
  const accent = accentMap[brand.slug];
  const count = brand.services.length;
  const countWord =
    { 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six" }[count] ??
    `${count}`;

  return (
    <Section>
      <Container>
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          {countWord} {count === 1 ? "thing" : "things"}, done properly.
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          {brand.name} covers the full {brand.heroEyebrow.toLowerCase().replace("house of ", "")} —
          not as a side hustle, but as the only thing this house does.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {brand.services.map((s, i) => (
            <article
              key={s.title}
              className={`relative flex flex-col rounded-card border border-ink/10 bg-ivory p-6 pl-7`}
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
              <h3 className="mt-2 font-display text-xl font-medium text-ink">{s.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{s.body}</p>

              {s.features && s.features.length > 0 ? (
                <ul className="mt-4 space-y-2 text-sm text-ink/75">
                  {s.features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span
                        aria-hidden="true"
                        className={`mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full ${accent.bg}`}
                      />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {s.whatsappHref ? (
                <a
                  href={s.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex w-fit items-center gap-2 rounded-full ${accent.bg} px-5 py-2.5 text-sm font-semibold text-ivory shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-ink`}
                >
                  <Icon name="chat" size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
