// Trust strip — Est. 2020, Karu-Jikwoyi location, 24/7 availability, three numbers.
// Kept as a quiet horizontal bar, not a headline.
import { contact } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import { Stagger, StaggerChild } from "../../components/motion/primitives.jsx";

const facts = [
  { label: "Established", value: contact.est },
  { label: "Hours", value: contact.hours },
  { label: "Address", value: "Karu-Jikwoyi Road" },
  { label: "Years in business", value: "6+" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-ink/10 bg-ivory py-8">
      <Container>
        <Stagger as="ul" className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {facts.map((f) => (
            <StaggerChild key={f.label} as="li" className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-ink/50">
                {f.label}
              </span>
              <span className="mt-1 font-display text-lg font-medium text-ink md:text-xl">
                {f.value}
              </span>
            </StaggerChild>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
