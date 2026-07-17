// Landing page "Our Philosophy" section — vision, mission, and 3 core values.
// Values are presented as 3 cards; vision and mission sit above as a pair
// in a 2-column grid on desktop, stacked on mobile.
import { landing } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import Section from "../../components/ui/Section.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import { Reveal, Stagger, StaggerChild, HoverLift } from "../../components/motion/primitives.jsx";

export default function Philosophy() {
  const { philosophy } = landing;

  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>{philosophy.eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            One standard across all five businesses.
          </h2>
        </Reveal>

        <Stagger as="div" className="mt-12 grid gap-6 md:grid-cols-2">
          <StaggerChild>
            <HoverLift intensity="subtle" className="h-full">
              <article className="h-full rounded-card border border-ink/10 bg-ivory p-8">
                <Eyebrow>{philosophy.vision.eyebrow}</Eyebrow>
                <p className="mt-4 text-lg leading-relaxed text-ink/80 md:text-xl">
                  {philosophy.vision.body}
                </p>
              </article>
            </HoverLift>
          </StaggerChild>
          <StaggerChild>
            <HoverLift intensity="subtle" className="h-full">
              <article className="h-full rounded-card border border-ink/10 bg-ivory p-8">
                <Eyebrow>{philosophy.mission.eyebrow}</Eyebrow>
                <p className="mt-4 text-lg leading-relaxed text-ink/80 md:text-xl">
                  {philosophy.mission.body}
                </p>
              </article>
            </HoverLift>
          </StaggerChild>
        </Stagger>

        <Stagger as="div" amount={0.15} className="mt-10 grid gap-6 md:grid-cols-3">
          {philosophy.values.map((v, i) => (
            <StaggerChild key={v.title}>
              <HoverLift intensity="subtle" className="h-full">
                <article
                  className="h-full rounded-card border border-ink/10 bg-ivory-2 p-6"
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-sm font-semibold text-brass-dark"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-medium text-ink">{v.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{v.body}</p>
                </article>
              </HoverLift>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </Section>
  );
}
