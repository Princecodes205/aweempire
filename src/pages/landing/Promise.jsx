// "One empire, three disciplines" value-prop section.
import { landing } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import Section from "../../components/ui/Section.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import { Reveal, Stagger, StaggerChild } from "../../components/motion/primitives.jsx";

export default function Promise() {
  return (
    <Section className="bg-ivory-2">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <Reveal as="div">
            <Eyebrow>What you can expect</Eyebrow>
            <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
              One standard across all five Businesses.
            </h2>
          </Reveal>
          <Stagger as="ol" amount={0.15} className="space-y-6">
            {landing.promise.map((item, i) => (
              <StaggerChild key={item.title} as="li" className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-brass font-display text-base font-semibold text-brass-dark"
                >
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl font-medium text-ink">{item.title}</h3>
                  <p className="mt-1 text-sm text-ink/70">{item.body}</p>
                </div>
              </StaggerChild>
            ))}
          </Stagger>
        </div>
      </Container>
    </Section>
  );
}
