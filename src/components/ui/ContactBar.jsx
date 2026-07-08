// Repeated CTA bar shown above the footer on every page.
// Drives phone + WhatsApp + email links from the contact data object.
import { contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";

export default function ContactBar({ context = "general" }) {
  const phone = contact.phones[0]; // Primary
  const email = context === "travel" ? contact.emails.travel : contact.emails.general;

  return (
    <div className="bg-ink text-ivory">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-4 px-5 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-2xl md:text-3xl">Talk to a real person.</p>
          <p className="mt-1 text-sm text-ivory/70">{contact.estNote} · {contact.hours}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href={phone.href}
            className="inline-flex items-center gap-2 rounded-full bg-brass px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-brass-dark focus-visible:outline-ivory"
          >
            <span aria-hidden="true">📞</span>
            <span>Call {phone.display}</span>
          </a>
          <a
            href={waLink("general")}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-ink focus-visible:outline-ivory"
          >
            <span aria-hidden="true">💬</span>
            <span>WhatsApp</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 rounded-full border border-ivory/30 px-5 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory hover:text-ink focus-visible:outline-ivory"
          >
            <span aria-hidden="true">✉</span>
            <span>Email us</span>
          </a>
        </div>
      </div>
    </div>
  );
}
