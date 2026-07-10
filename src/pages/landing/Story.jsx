// Landing page "Our Story" section — the brand's founding narrative.
// Pulled from landing.story. Treated as a dedicated full-width section
// (wider, more prominent than a regular text block) per the v2 brief.
import { landing } from "../../data/content.js";
import Container from "../../components/ui/Container.jsx";
import Section from "../../components/ui/Section.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";

export default function Story() {
  const { story } = landing;

  return (
    <Section className="bg-ivory-2">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>{story.eyebrow}</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl lg:text-5xl">
            {story.title}
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-3xl space-y-6 text-base leading-relaxed text-ink/80 md:text-lg">
          {story.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
