// Interior Empire — image-driven subsections.
//
// All three subsections (Curtain Accessories, Duvet Sets, POP & TV
// Console) render as a 4–5 col / 2 col responsive image grid using the
// shared `InteriorImageGrid` component below.
//
// Image source: Sanity (v7). Each subsection fetches via galleryQuery
// against its pinned section value. The section values must match the
// Studio dropdown — see studio/schemas/galleryImage.js.
//
// V5 PENDING (per the v5 brief, 2026-07-10):
//   1. The v2 open question of whether Clothing is still part of
//      Interior Empire is NOT resolved by this v6 work — Clothing
//      remains in the Interior services array per the 2026-07-10
//      client confirmation. Confirm again with Champ before launch.
import { useEffect, useState } from "react";
import {
  curtainAccessoriesWhatsAppHref,
  duvetSetsWhatsAppHref,
  popTvConsoleWhatsAppHref,
  accentMap,
} from "../../data/content.js";
import { client, urlFor } from "../../lib/sanity.js";
import { galleryQuery } from "../../lib/queries.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { Reveal, Stagger, StaggerChild } from "../motion/primitives.jsx";

const accent = accentMap.interior;

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

// Hook that fetches a Sanity gallery section once on mount and returns
// the resulting image list. Cancels the in-flight request on unmount so
// the page is safe to navigate away from while a slow CDN is in flight.
function useSanityGallery(section) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch(galleryQuery(section))
      .then((docs) => {
        if (cancelled) return;
        setImages(
          docs.map((d) => ({
            id: d._id,
            src: urlFor(d.image).url(),
            alt: d.alt || null,
          })),
        );
      })
      .catch((err) => {
        // Don't surface to the user — fall through to the same empty
        // state as a gallery with no documents.
        console.error(
          `InteriorSubsections (${section}): failed to fetch from Sanity`,
          err,
        );
      });
    return () => {
      cancelled = true;
    };
  }, [section]);

  return images;
}

// Shared grid shell. Used by all three subsections. Now takes
// `images` from a Sanity hook rather than a build-time glob.
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
            {images.map((img, i) => (
              <StaggerChild key={img.id}>
                <ImageTile
                  src={img.src}
                  alt={img.alt || `${title} — image ${i + 1}`}
                  index={i + 1}
                />
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
  const images = useSanityGallery("curtain-accessories");
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="Curtain Accessories"
      intro="The finishing pieces that make a window treatment feel complete — rods, tiebacks, hooks, rings, and trims. Pulled together for made-to-measure installs across Karu, Abuja, and beyond."
      images={images}
      whatsappHref={curtainAccessoriesWhatsAppHref}
    />
  );
}

export function DuvetSets() {
  const images = useSanityGallery("duvet-sets");
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="Duvet Sets"
      intro="Layered bedding in a range of designs and sizes, cut and sewn to your bed and your climate. Browse the set below and reach out on WhatsApp to check current stock."
      images={images}
      whatsappHref={duvetSetsWhatsAppHref}
    />
  );
}

export function PopTvConsole() {
  const images = useSanityGallery("pop-tv-console");
  return (
    <InteriorImageGrid
      eyebrow="Interior Empire"
      title="POP & TV Console Designs"
      intro="Plaster-of-Paris ceiling work and custom TV console units, built to fit the room and the brief. Each piece measured, finished, and installed by the same crew that handles our curtain work."
      images={images}
      whatsappHref={popTvConsoleWhatsAppHref}
    />
  );
}
