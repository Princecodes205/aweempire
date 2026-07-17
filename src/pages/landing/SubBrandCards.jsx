// Five pillar cards — one per branch. Driven by `landing.pillars` rather than
// `brands`, because each pillar pairs a brand record with the landing copy
// (pillar name, card body, accent slug) for this page only.
import { Link } from "react-router";
import { landing, accentMap } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import Section from "../../components/ui/Section.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import {
  Reveal,
  Stagger,
  StaggerChild,
  HoverLift,
} from "../../components/motion/primitives.jsx";

export default function SubBrandCards() {
  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>Five businesses</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Five doors. One root.
          </h2>
          <p className="mt-3 text-ink/70">
            Each Awk business has its own phone line, its own quote, and its own team.
            Call one and the other four are a referral away.
          </p>
        </Reveal>
        <Stagger as="div" className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {landing.pillars.map((pillar) => {
            const accent = accentMap[pillar.accentSlug];
            return (
              <StaggerChild key={pillar.to}>
                <HoverLift intensity="subtle" className="h-full">
                  <Link
                    to={pillar.to}
                    className="group relative flex h-full flex-col overflow-hidden rounded-card border border-ink/10 bg-ivory p-6 transition-colors hover:border-ink/20 hover:shadow-soft focus-visible:outline-brass"
                  >
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-0 top-0 h-1 ${accent.bg}`}
                    />
                    <Eyebrow className="text-ink/60">{pillar.pillar}</Eyebrow>
                    <h3 className={`mt-3 font-display text-2xl font-medium tracking-tight ${accent.text}`}>
                      {pillar.subBrand}
                    </h3>
                    <p className="mt-3 flex-1 text-sm text-ink/70">{pillar.copy}</p>
                    <span className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
                      {pillar.cta}
                      <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </span>
                  </Link>
                </HoverLift>
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
