// Landing page hero: wordmark, headline, lede, two CTAs.
// "Crest, not SaaS" — premium, warm, regal but grounded. Ivory base, brass accent.
//
// Two-column on md+: text on the left, full-bleed photo on the right
// (replaces the previous text-only hero with a stronger visual anchor).
// The image sits in `src/assets/images/heroes/landing.jpg` — swap the
// file and re-run `npm run dev` to see the change.
import { landing, contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";
import Container from "../../components/ui/Container.jsx";
import Eyebrow from "../../components/ui/Eyebrow.jsx";
import Icon from "../../components/ui/Icon.jsx";
import { Stagger, StaggerChild } from "../../components/motion/primitives.jsx";
import landingHero from "../../assets/images/heroes/landing.jpg";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ivory py-16 md:py-24">
      {/* Subtle brass corner mark — anchors the page visually without being a crest */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brass/8 blur-3xl md:h-96 md:w-96"
      />
      <Container className="relative">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <Stagger as="div" amount={0.05}>
            <StaggerChild as="div">
              <Eyebrow>{landing.eyebrow}</Eyebrow>
            </StaggerChild>
            <StaggerChild as="div">
              <h1 className="mt-5 max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-ink md:text-6xl lg:text-7xl">
                {landing.headline}
              </h1>
            </StaggerChild>
            <StaggerChild as="div">
              <p className="mt-6 max-w-2xl text-lg text-ink/75 md:text-xl">{landing.lede}</p>
            </StaggerChild>
            <StaggerChild as="div">
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={waLink("general")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-base font-semibold text-ivory shadow-soft transition-colors hover:bg-brass-dark focus-visible:outline-ink"
                >
                  <Icon name="chat" size={20} />
                  <span>WhatsApp us</span>
                </a>
                <a
                  href={contact.phones[0].href}
                  className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-base font-semibold text-ink transition-colors hover:bg-ink hover:text-ivory focus-visible:outline-brass"
                >
                  <Icon name="phone" size={20} />
                  <span>Call {contact.phones[0].display}</span>
                </a>
              </div>
            </StaggerChild>
            <StaggerChild as="div">
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.25em] text-ink/50">
                {contact.est} · {contact.hours} · {contact.shortAddress}
              </p>
            </StaggerChild>
          </Stagger>

          <figure className="relative aspect-[4/3] w-full overflow-hidden rounded-card shadow-soft md:aspect-[5/6]">
            <img
              src={landingHero}
              alt="Awk Empire — five houses under one root"
              loading="eager"
              fetchpriority="high"
              width="1600"
              height="2000"
              className="h-full w-full object-cover"
            />
          </figure>
        </div>
      </Container>
    </section>
  );
}
