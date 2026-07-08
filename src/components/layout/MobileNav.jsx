// Slide-in mobile nav drawer. Opens via a toggle button rendered by Header.
// Closes on: route change, Escape key, or backdrop click.
import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router";
import { nav, contact } from "../../data/content.js";
import Wordmark from "../brand/Wordmark.jsx";

export default function MobileNav({ open, onClose }) {
  const location = useLocation();
  const drawerRef = useRef(null);
  const closeRef = useRef(null);

  // Close on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  // Esc to close + return focus to the toggle
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        onClose();
        document.getElementById("mobile-nav-toggle")?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true" aria-label="Navigation">
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />
      {/* Drawer */}
      <div
        ref={drawerRef}
        className="absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col gap-8 bg-ivory px-6 py-6 shadow-soft"
      >
        <div className="flex items-center justify-between">
          <Wordmark size="sm" />
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-ink hover:bg-ink/5"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 4 L16 16 M16 4 L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `rounded-lg px-3 py-3 text-lg font-medium transition-colors ${
                  isActive ? "bg-brass/10 text-brass-dark" : "text-ink hover:bg-ink/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-ink/10 pt-6 text-sm text-ink/70">
          <a href={contact.phones[0].href} className="block font-semibold text-ink">
            {contact.phones[0].display}
          </a>
          <p className="mt-1">{contact.hours}</p>
        </div>
      </div>
    </div>
  );
}
