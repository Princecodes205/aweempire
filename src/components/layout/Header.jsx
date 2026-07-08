// Sticky ivory header with wordmark, primary nav, phone, and mobile drawer toggle.
import { useState } from "react";
import { NavLink, Link } from "react-router";
import { nav, contact } from "../../data/content.js";
import Wordmark from "../brand/Wordmark.jsx";
import MobileNav from "./MobileNav.jsx";

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink/5 bg-ivory/85 backdrop-blur supports-[backdrop-filter]:bg-ivory/70">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
        <Link to="/" aria-label="Awk Empire home" className="shrink-0">
          <Wordmark size="sm" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={({ isActive }) =>
                    `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-brass/10 text-brass-dark"
                        : "text-ink/80 hover:bg-ink/5 hover:text-ink"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop phone */}
        <a
          href={contact.phones[0].href}
          className="hidden text-sm font-semibold text-ink hover:text-brass-dark md:inline-flex md:items-center md:gap-2"
        >
          <span aria-hidden="true">📞</span>
          <span>{contact.phones[0].display}</span>
        </a>

        {/* Mobile menu toggle */}
        <button
          id="mobile-nav-toggle"
          type="button"
          aria-label="Open menu"
          aria-expanded={navOpen}
          aria-controls="mobile-nav"
          onClick={() => setNavOpen(true)}
          className="rounded-full p-2 text-ink hover:bg-ink/5 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileNav open={navOpen} onClose={() => setNavOpen(false)} />
    </header>
  );
}
