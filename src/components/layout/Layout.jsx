// Root layout — wraps every page with Header, main outlet, ContactBar, Footer, and FAB.
// <ScrollRestoration /> from react-router resets scroll on route change.
// <DocumentTitle /> keeps the browser tab title in sync with the active route.
// <AnimatePresence> + <PageTransition> handle the cross-fade between routes.
import { useEffect } from "react";
import { Outlet, ScrollRestoration, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhatsAppFab from "./WhatsAppFab.jsx";
import ContactBar from "../ui/ContactBar.jsx";
import { PageTransition } from "../motion/primitives.jsx";

// Static map from pathname → tab title. Unknown routes get the 404 title.
const TITLES = {
  "/": "Awk Group",
  "/interior-empire": "Interior Empire · Awk Group",
  "/immigration-consultancy": "Immigration · Awk Group",
  "/agro-allied": "Agro Allied · Awk Group",
  "/real-estate": "Real Estate · Awk Group",
  "/foundation": "AWK Empire Foundation · Awk Group",
};

const SUFFIX = "Awk Group";
const titleFor = (pathname) =>
  TITLES[pathname] ?? `Page not found · ${SUFFIX}`;

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titleFor(pathname);
  }, [pathname]);
  return null;
}

export default function Layout() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollRestoration />
      <DocumentTitle />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-[60svh] pb-24 md:pb-16">
        <AnimatePresence mode="wait" initial={false}>
          <PageTransition key={pathname}>
            <Outlet />
          </PageTransition>
        </AnimatePresence>
      </main>
      <ContactBar />
      <Footer />
      <WhatsAppFab />
    </>
  );
}
