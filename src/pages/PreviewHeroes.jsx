// TEMP: hero image picker. Drop a file in src/assets/images/heroes/ and
// this page will show all six labels. Used during hero wiring — remove
// the route and this file when the headers are final.
import Container from "../components/ui/Container.jsx";
import Section from "../components/ui/Section.jsx";
import Eyebrow from "../components/ui/Eyebrow.jsx";

import landing from "../assets/images/heroes/landing.jpg";
import interior from "../assets/images/heroes/interior.jpg";
import immigration from "../assets/images/heroes/immigration.jpg";
import agro from "../assets/images/heroes/agro-allied.jpg";
import realEstate from "../assets/images/heroes/real-estate.jpg";
import foundation from "../assets/images/heroes/foundation.jpg";

const picks = [
  { slug: "landing", intended: "Landing (/) — Awk Group overview", src: landing },
  { slug: "interior", intended: "/interior-empire — Business of craft (curtains, duvets)", src: interior },
  { slug: "immigration", intended: "/immigration-consultancy — Business of papers (passport/travel)", src: immigration },
  { slug: "agro-allied", intended: "/agro-allied — Business of harvest (farmland)", src: agro },
  { slug: "real-estate", intended: "/real-estate — Business of land (modern home)", src: realEstate },
  { slug: "foundation", intended: "/foundation — Business of voice (community)", src: foundation },
];

export default function PreviewHeroes() {
  return (
    <Section>
      <Container>
        <Eyebrow>Hero image picker (temp)</Eyebrow>
        <h1 className="mt-3 font-display text-3xl font-medium leading-tight text-ink md:text-4xl">
          Confirm which photo goes where.
        </h1>
        <p className="mt-3 max-w-2xl text-ink/70">
          The hero is currently wired to a default mapping. If any of the photos below look
          wrong for their label, tell me which one to swap and I'll re-map. Once they all look
          right, I'll delete this route.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {picks.map((p) => (
            <figure
              key={p.slug}
              className="overflow-hidden rounded-card border border-ink/10 bg-ivory"
            >
              <img
                src={p.src}
                alt={p.intended}
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="p-4 text-sm">
                <p className="font-semibold text-ink">{p.slug}.jpg</p>
                <p className="mt-1 text-ink/70">{p.intended}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </Section>
  );
}
