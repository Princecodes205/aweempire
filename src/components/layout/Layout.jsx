// Root layout — wraps every page with Header, main outlet, ContactBar, Footer, and FAB.
// <ScrollRestoration /> from react-router resets scroll on route change.
import { Outlet, ScrollRestoration } from "react-router";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import WhatsAppFab from "./WhatsAppFab.jsx";
import ContactBar from "../ui/ContactBar.jsx";

export default function Layout() {
  return (
    <>
      <ScrollRestoration />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brass focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-ivory"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="min-h-[60svh] pb-24 md:pb-16">
        <Outlet />
      </main>
      <ContactBar />
      <Footer />
      <WhatsAppFab />
    </>
  );
}
