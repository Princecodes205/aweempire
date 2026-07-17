// "How we can assist" section — a short intro, an optional hero image, a
// 3-up pillar grid, and a closing line. Rendered on brand pages that opt
// in by adding a `howWeAssist` field to their brand record; other brand
// pages are unaffected. Pattern matches the other brand components:
// brand-accent background, Container/Section layout, Reveal/Stagger motion.
//
// `image` (optional): { src, alt } — when supplied, renders as a wide
// photo between the intro and the pillar grid. Pass the imported asset
// from the page so Vite can fingerprint it.
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { accentMap } from "../../data/content.js";
import { Reveal, Stagger, StaggerChild, HoverLift } from "../motion/primitives.jsx";

export default function HowWeAssist({ brand, image }) {
  if (import.meta.env.DEV && (!brand || !brand.howWeAssist)) {
    throw new Error(
      `[HowWeAssist] brand.howWeAssist is missing for slug "${brand?.slug ?? "unknown"}" — add the field in src/data/content.js or remove the <HowWeAssist> from the page.`
    );
  }

  const { eyebrow, title, intro, pillars, closing } = brand.howWeAssist;
  const accent = accentMap[brand.slug];

  return (
    <Section accent={brand.accentClass} className={accent.bgSofter}>
      <Container>
        <Reveal as="div" className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base text-ink/75 md:text-lg">{intro}</p>
        </Reveal>

        {image ? (
          <Reveal as="figure" className="mt-10 overflow-hidden rounded-card shadow-soft">
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              width="1600"
              height="1067"
              className="h-full w-full object-cover"
            />
          </Reveal>
        ) : null}

        <Stagger as="ul" className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => (
            <StaggerChild as="li" key={p.title}>
              <HoverLift intensity="subtle" className="h-full">
                <article className="h-full rounded-card border border-ink/10 bg-ivory p-6">
                  <span
                    aria-hidden="true"
                    className={`font-display text-sm font-semibold ${accent.text}`}
                  >
                    {p.title}
                  </span>
                  <p className="mt-3 text-sm text-ink/75 md:text-base">{p.body}</p>
                </article>
              </HoverLift>
            </StaggerChild>
          ))}
        </Stagger>

        <Reveal as="p" className="mx-auto mt-12 max-w-3xl text-center text-base text-ink/75 md:text-lg">
          {closing}
        </Reveal>
      </Container>
    </Section>
  );
}
