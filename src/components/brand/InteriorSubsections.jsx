// Interior Empire — image-driven subsections.
//
// All three subsections (Curtain Accessories, Duvet Sets, POP & TV
// Console) render as a 4–5 col / 2 col responsive image grid using the
// shared `InteriorImageGrid` component below.
//
// Image source: Vite's `import.meta.glob` walks the folders under
// `src/assets/images/` at build time and emits hashed, cache-busted
// asset URLs. To add a new image, drop the file in the matching folder
// and save — it appears in the grid on the next build. No code edit.
//
// V5 PENDING (per the v5 brief, 2026-07-10):
//   1. The v2 open question of whether Clothing is still part of
//      Interior Empire is NOT resolved by this v6 work — Clothing
//      remains in the Interior services array per the 2026-07-10
//      client confirmation. Confirm again with Champ before launch.
import { useState } from "react";
import {
  curtainAccessoriesWhatsAppHref,
  duvetSetsWhatsAppHref,
  popTvConsoleWhatsAppHref,
  accentMap,
} from "../../data/content.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { Reveal, Stagger, StaggerChild } from "../motion/primitives.jsx";

const accent = accentMap.interior;

// Build-time image discovery. `eager: true` returns the URLs at module
// load instead of producing lazy loaders, which is what we want for a
// static grid. `query: "?url"` makes Vite emit a URL string instead of
// a module wrapper, so the default export IS the URL. Sorting gives a
// stable order across machines (the glob itself doesn't guarantee one).
//
// Vite requires the glob pattern to be a string literal at the call
// site — patterns can't be passed through a helper — so each folder
// gets its own inline glob. The path is RELATIVE TO THIS FILE (Vite
// does not support absolute or `public/`-rooted patterns for globs).
const curtainImageMap = import.meta.glob(
  "../../assets/images/curtain-accessories/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);
const curtainImages = Object.keys(curtainImageMap)
  .sort()
  .map((key) => curtainImageMap[key]);

const duvetImageMap = import.meta.glob(
  "../../assets/images/duvet-sets/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);
const duvetImages = Object.keys(duvetImageMap)
  .sort()
  .map((key) => duvetImageMap[key]);

const popTvImageMap = import.meta.glob(
  "../../assets/images/pop-tv-console/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true, query: "?url", import: "default" },
);
const popTvImages = Object.keys(popTvImageMap)
  .sort()
  .map((key) => popTvImageMap[key]);

// One tile in the image grid. Renders the image; on load error, swaps to
// a gray placeholder box with a TODO label so the page never breaks.
// Image gets a tiny scale-up on hover (overflow-hidden parent clips it)
// — same pattern as the Agro gallery.
function ImageTile({ src, alt, index }) {
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className="flex aspect-square w-full flex-col items-center justify-center gap-1 rounded-card border border-dashed border-ink/20 bg-ink/5 p-2 text-center"
        aria-label={`Image ${index} not yet available`}
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-ink/50">
          Image {String(index).padStart(2, "0")}
        </span>
        <span className="text-[10px] text-ink/40">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className="aspect-square w-full overflow-hidden rounded-card">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onError={() => setBroken(true)}
        className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
      />
    </div>
  );
}

// Shared grid shell. Used by all three subsections.
function InteriorImageGrid({ eyebrow, title, intro, images, whatsappHref }) {
  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-3 text-ink/70">{intro}</p> : null}
        </Reveal>

        {images.length === 0 ? (
          <p className="mt-10 text-sm text-ink/50">
            No images uploaded yet.
          </p>
        ) : (
          <Stagger
            as="div"
            amount={0.05}
            className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4"
          >
            {images.map((src, i) => (
              <StaggerChild key={src}>
                <ImageTile src={src} alt={`${title} — image ${i + 1}`} index={i + 1} />
              </StaggerChild>
            ))}
          </Stagger>
        )}

        <div className="mt-10 flex">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-2 rounded-full ${accent.bg} px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-opacity hover:opacity-90 focus-visible:outline-ink`}
          >
            <Icon name="chat" size={20} />
            <span>Enquire on WhatsApp</span>
          </a>
        </div>
      </Container>
    </Section>
  );
}

export function CurtainAccessories() {
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="Curtain Accessories"
      intro="The finishing pieces that make a window treatment feel complete — rods, tiebacks, hooks, rings, and trims. Pulled together for made-to-measure installs across Karu, Abuja, and beyond."
      images={curtainImages}
      whatsappHref={curtainAccessoriesWhatsAppHref}
    />
  );
}

export function DuvetSets() {
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="Duvet Sets"
      intro="Layered bedding in a range of designs and sizes, cut and sewn to your bed and your climate. Browse the set below and reach out on WhatsApp to check current stock."
      images={duvetImages}
      whatsappHref={duvetSetsWhatsAppHref}
    />
  );
}

export function PopTvConsole() {
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="POP & TV Console Designs"
      intro="Plaster-of-Paris ceiling work and custom TV console units, built to fit the room and the brief. Each piece measured, finished, and installed by the same crew that handles our curtain work."
      images={popTvImages}
      whatsappHref={popTvConsoleWhatsAppHref}
    />
  );
}
