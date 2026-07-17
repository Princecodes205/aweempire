// Gallery strip using Unsplash placeholder photos.
// Each tile is {rounded-2xl, lazy-loaded, explicit width/height for CLS}.
// TODO: replace with real product photos per brand (interior = bedsheets/curtains/interiors,
// immigration = documents/passports/travel, agro = farmland/real estate).
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import { Reveal, Stagger, StaggerChild } from "../motion/primitives.jsx";

// Unsplash source URL pattern. We size via ?w= and ?h= so Vercel can serve
// the photos efficiently. The query parameter is the brand's `unsplashQuery`.
const unsplashUrl = (query, w, h, i) =>
  `https://source.unsplash.com/${w}x${h}/?${query}&sig=${i}`;

const gridLayouts = [
  "md:col-span-2 md:row-span-2", // big tile
  "",
  "",
  "md:col-span-2",
  "",
  "",
];

export default function GalleryStrip({ brand }) {
  const tiles = Array.from({ length: brand.galleryCount }, (_, i) => i);

  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>Gallery</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            A few things we have made.
          </h2>
          <p className="mt-3 text-ink/70">
            {/* TODO: replace with real Awk Group product photography */}
            These are placeholder photos from Unsplash to give the layout its real shape. Swap them
            out for actual product shots before launch.
          </p>
        </Reveal>
        <Stagger as="div" amount={0.1} className="mt-10 grid auto-rows-[180px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-4 md:auto-rows-[200px]">
          {tiles.map((i) => {
            const layout = gridLayouts[i] ?? "";
            const w = i === 0 ? 800 : 400;
            const h = i === 0 ? 800 : 400;
            return (
              <StaggerChild
                key={i}
                as="figure"
                className={`relative overflow-hidden rounded-2xl bg-ivory-2 ${layout}`}
              >
                {/* TODO: replace with real product photo */}
                <img
                  src={unsplashUrl(brand.unsplashQuery, w, h, i + 1)}
                  alt={`${brand.name} — placeholder photo ${i + 1}`}
                  loading="lazy"
                  width={w}
                  height={h}
                  className="h-full w-full object-cover"
                />
              </StaggerChild>
            );
          })}
        </Stagger>
      </Container>
    </Section>
  );
}
