// Persistent floating WhatsApp button, fixed bottom-right on every page.
// `main` has pb-24 in Layout so content clears this button on mobile.
import { contact } from "../../data/content.js";
import { waLink } from "../../lib/contact.js";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("general")}
      target="_blank"
      rel="noreferrer"
      aria-label={`WhatsApp ${contact.phones[0].display}`}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-agro text-ivory shadow-soft transition-transform hover:scale-105 focus-visible:outline-brass md:bottom-6 md:right-6 md:h-16 md:w-16"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        aria-hidden="true"
        fill="currentColor"
      >
        <path d="M16 .5C7.4.5.5 7.4.5 16c0 2.8.7 5.5 2.1 7.9L.5 31.5l7.7-2c2.3 1.3 5 2 7.8 2 8.6 0 15.5-6.9 15.5-15.5S24.6.5 16 .5zm0 28.3c-2.5 0-4.9-.7-7-1.9l-.5-.3-4.6 1.2 1.2-4.5-.3-.5C3.7 21 3 18.5 3 16 3 8.8 8.8 3 16 3s13 5.8 13 13-5.8 12.8-13 12.8zm7.4-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.1-.6-.2-.9.2s-1 1.3-1.3 1.6c-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.3-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.1-1.2-2.9-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.6.1-1 .5-.4.4-1.4 1.3-1.4 3.2s1.4 3.7 1.6 4c.2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.8 1 .3 1.8.3 2.5.2.8-.1 2.4-1 2.8-1.9.3-.9.3-1.7.2-1.9-.1-.1-.4-.2-.8-.4z" />
      </svg>
    </a>
  );
}
