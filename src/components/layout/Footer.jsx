// Site footer with full contact block, social links, business hours, address.
// "Est. 2020" appears here as a trust marker per the brief.
import { Link } from "react-router";
import { contact, social, footer, nav } from "../../data/content.js";
import Wordmark from "../brand/Wordmark.jsx";

const socialEntries = [
  { label: "Facebook (main)", href: social.facebookMain },
  { label: "Instagram — Interior", href: social.instagramInterior },
  { label: "Instagram — Travel", href: social.instagramTravel },
  { label: "Facebook — Agro", href: social.facebookAgro },
  { label: "Facebook — Travel (unconfirmed)", href: social.facebookUnconfirmed },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ivory-2">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand block */}
          <div className="md:col-span-1">
            <Wordmark size="md" />
            <p className="mt-4 text-sm text-ink/70">{footer.tagline}</p>
            <p className="mt-4 inline-block rounded-full bg-brass/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-brass-dark">
              {contact.est}
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Houses</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-ink hover:text-brass-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Contact</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {contact.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-ink hover:text-brass-dark">
                    {p.display}
                    {p.label === "Primary" && (
                      <span className="ml-2 text-xs text-ink/50">WhatsApp</span>
                    )}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${contact.emails.general}`} className="text-ink hover:text-brass-dark">
                  {contact.emails.general}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.emails.travel}`} className="text-ink hover:text-brass-dark">
                  {contact.emails.travel}
                </a>
              </li>
            </ul>
            <p className="mt-4 text-sm text-ink/70">{contact.hours}</p>
            <p className="mt-2 text-sm text-ink/70">{contact.address}</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/60">Find us</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {socialEntries.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-ink hover:text-brass-dark"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/60 md:flex-row md:items-center md:justify-between">
          <p>{footer.legal}</p>
          <p>Three houses under one roof · {contact.estNote}</p>
        </div>
      </div>
    </footer>
  );
}
