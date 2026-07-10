// Interior Empire — image-driven subsections added in v5.
//
// Both Curtain Accessories and Duvet Sets render as a 4-5 col / 2 col
// image grid. Image discovery is automatic: `import.meta.glob` walks
// src/assets/images/curtain-accessories/ and src/assets/images/duvet-sets/
// at build time, and the grid renders every .jpg/.jpeg/.png/.webp found
// in alphabetical order. Champ can add or remove images by dropping
// files into the folders — no code change required.
//
// Note on the location: image folders live under `src/assets/images/`
// rather than `public/images/` because Vite's `import.meta.glob` is
// scoped to the module graph, and `public/` is excluded from it (those
// files are served as static assets at runtime, not bundled). Placing
// the images under `src/assets/images/` lets the glob discover them
// and lets Vite emit hashed, cache-busted asset URLs.
//
// V5 PENDING (per the v5 brief, 2026-07-10):
//   1. The v2 open question of whether Clothing is still part of
//      Interior Empire is NOT resolved by this v5 work — Clothing
//      remains in the Interior services array per the 2026-07-10
//      client confirmation. Confirm again with Champ before launch.
import { useState } from "react";
import {
  curtainAccessoriesWhatsAppHref,
  duvetSetsWhatsAppHref,
} from "../../data/content.js";
import { accentMap } from "../../data/content.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";

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

// One tile in the image grid. Renders the image; on load error, swaps to
// a gray placeholder box with a TODO label so the page never breaks.
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
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setBroken(true)}
      className="aspect-square w-full rounded-card object-cover"
    />
  );
}

// Shared grid shell. Used by both subsections.
function InteriorImageGrid({ eyebrow, title, intro, images, whatsappHref }) {
  return (
    <Section>
      <Container>
        <div className="max-w-2xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            {title}
          </h2>
          {intro ? <p className="mt-3 text-ink/70">{intro}</p> : null}
        </div>

        {images.length === 0 ? (
          <p className="mt-10 text-sm text-ink/50">
            No images uploaded yet.
          </p>
        ) : (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
            {images.map((src, i) => (
              <ImageTile key={src} src={src} alt={`${title} — image ${i + 1}`} index={i + 1} />
            ))}
          </div>
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
      eyebrow="Curtain Accessories"
      title="Hardware, finishing, and detail."
      intro="Quality hardware and finishing pieces for curtain installations — rods, tiebacks, hooks, rings, and trims. Refine the wording once Champ has confirmed what's actually in the photo set."
      images={curtainImages}
      whatsappHref={curtainAccessoriesWhatsAppHref}
    />
  );
}

export function DuvetSets() {
  return (
    <InteriorImageGrid
      eyebrow="Duvet Sets"
      title="Bedding, layered."
      intro="Quality duvet sets in a range of designs and sizes."
      images={duvetImages}
      whatsappHref={duvetSetsWhatsAppHref}
    />
  );
}
