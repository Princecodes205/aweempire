// Three branch cards — one per sub-brand. Each card has a 4px accent strip,
// Fraunces name, one-line description, and a Link to the sub-brand page.
import { Link } from "react-router";
import { brands, accentMap } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import Section from "../../components/ui/Section.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";

export default function SubBrandCards() {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>Three houses</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Pick a door. The other two are still there.
          </h2>
          <p className="mt-3 text-ink/70">
            Each Awk house is its own business with its own phone line, its own quote, and its own team.
            Call one and the other two are a referral away.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {brands.map((brand) => {
            const accent = accentMap[brand.slug];
            return (
              <Link
                key={brand.slug}
                to={brand.to}
                className="group relative flex flex-col overflow-hidden rounded-card border border-ink/10 bg-ivory p-6 transition-all hover:border-ink/20 hover:shadow-soft focus-visible:outline-brass"
              >
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${accent.bg}`}
                />
                <Eyebrow className="text-ink/60">{brand.heroEyebrow}</Eyebrow>
                <h3 className={`mt-3 font-display text-2xl font-medium tracking-tight ${accent.text}`}>
                  {brand.name.replace(/^Awk /, "Awk ")}
                </h3>
                <p className="mt-3 flex-1 text-sm text-ink/70">{brand.tagline}</p>
                <span className={`mt-6 inline-flex items-center gap-1 text-sm font-semibold ${accent.text}`}>
                  Visit the house
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
