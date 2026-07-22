// Agro Allied — image-driven gallery.
//
// Now backed by Sanity (v7). The four section values — curtain-
// accessories, duvet-sets, pop-tv-console, agro — are pinned in the
// Studio schema dropdown. The frontend query in src/lib/queries.js
// filters strictly by these values, so the client can't accidentally
// push an image to the wrong section by mistyping a name.
//
// Accent is olive (`bg-agro`) per the v6 brief, separate from the
// Interior page's brick accent.
import { useEffect, useState } from "react";
import { agroAlliedWhatsAppHref, accentMap } from "../../data/content.js";
import { client } from "../../lib/sanity.js";
import { galleryQuery } from "../../lib/queries.js";
import { urlFor } from "../../lib/sanity.js";
import Container from "../ui/Container.jsx";
import Section from "../ui/Section.jsx";
import Eyebrow from "../ui/Eyebrow.jsx";
import Icon from "../ui/Icon.jsx";
import { Reveal, Stagger, StaggerChild } from "../motion/primitives.jsx";

const accent = accentMap["agro-allied"];

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

export default function AgroGallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    let cancelled = false;
    client
      .fetch(galleryQuery("agro"))
      .then((docs) => {
        if (cancelled) return;
        setImages(
          docs.map((d) => ({
            id: d._id,
            src: urlFor(d.image).url(),
            alt: d.alt || `Awk Agro Allied — image`,
          })),
        );
      })
      .catch((err) => {
        // Don't surface to the user — fall through to the same empty
        // state as a gallery with no documents, so the page never breaks.
        console.error("AgroGallery: failed to fetch from Sanity", err);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Section>
      <Container>
        <Reveal as="div" className="max-w-2xl">
          <Eyebrow>Awk Agro Allied</Eyebrow>
          <h2 className="mt-3 font-display text-3xl font-medium leading-tight tracking-tight text-ink md:text-4xl">
            Our Farms &amp; Produce
          </h2>
          <p className="mt-3 text-ink/70">
            From our fields and pens to your table — livestock, crops, and
            packed produce grown and raised on Awk Agro Allied land, then
            handled through our own supply chain.
          </p>
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
                  alt={`${img.alt} ${i + 1}`}
                  index={i + 1}
                />
              </StaggerChild>
            ))}
          </Stagger>
        )}

        <div className="mt-10 flex">
          <a
            href={agroAlliedWhatsAppHref}
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
