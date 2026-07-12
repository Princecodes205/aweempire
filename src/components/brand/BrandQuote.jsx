// Single Fraunces blockquote in the brand accent color.
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import { accentMap } from "../../data/content.js";
import { Reveal } from "../motion/primitives.jsx";

export default function BrandQuote({ brand }) {
  const accent = accentMap[brand.slug];

  return (
    <Section className={accent.bgSofter}>
      <Container>
        <Reveal as="figure" className="mx-auto max-w-3xl text-center">
          <blockquote cite={brand.quote.by}>
            <p className="font-display text-2xl font-medium leading-snug text-ink md:text-3xl lg:text-4xl">
              <span aria-hidden="true" className={`mr-1 ${accent.text}`}>“</span>
              {brand.quote.body}
              <span aria-hidden="true" className={`ml-1 ${accent.text}`}>”</span>
            </p>
          </blockquote>
          <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-ink/60">
            {brand.quote.by}
          </figcaption>
        </Reveal>
      </Container>
    </Section>
  );
}
