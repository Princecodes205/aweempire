// "How we work" numbered list. 3–4 steps with brass numerals.
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { Reveal, Stagger, StaggerChild } from "../motion/primitives.jsx";

export default function ProcessList({ brand }) {
  return (
    <Section className="bg-ivory-2">
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>How it works</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Four steps, no surprises.
          </h2>
          <p className="mt-3 text-ink/70">
            Every {brand.heroEyebrow.toLowerCase().replace(/house of |business of /, "")} job follows the same
            shape. The timeline changes; the steps do not.
          </p>
        </Reveal>
        <Stagger as="ol" className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {brand.process.map((step, i) => (
            <StaggerChild key={step.title} as="li" className="flex flex-col">
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-brass/10 font-display text-xl font-semibold text-brass-dark"
              >
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-medium text-ink">{step.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{step.body}</p>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
