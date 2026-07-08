// Services grid: 3–4 cards, each with 4px left-border in brand accent.
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { accentMap } from "../../data/content.js";

export default function ServicesGrid({ brand }) {
  const accent = accentMap[brand.slug];

  return (
    <Section>
      <Container>
        <Eyebrow>What we do</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
          Four things, done properly.
        </h2>
        <p className="mt-3 max-w-2xl text-ink/70">
          {brand.name} covers the full {brand.heroEyebrow.toLowerCase().replace("house of ", "")} —
          not as a side hustle, but as the only thing this house does.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
