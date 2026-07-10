// Persistent floating WhatsApp button, fixed bottom-right on every page.
// `main` has pb-24 in Layout so content clears this button on mobile.
import { contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";
import Icon from "../ui/Icon.jsx";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("general")}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp ${contact.phones[0].display}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-agro text-ivory shadow-soft transition-transform hover:scale-105 focus-visible:outline-brass md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <Icon name="whatsapp-glyph" size={28} />
    </a>
  );
}
