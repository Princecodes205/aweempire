// Landing page composition.
import Hero from "./landing/Hero.jsx";
import SubBrandCards from "./landing/SubBrandCards.jsx";
import Promise from "./landing/Promise.jsx";
import TrustStrip from "./landing/TrustStrip.jsx";

export default function Landing() {
  return (
    <>
      <Hero />
      <SubBrandCards />
      <TrustStrip />
      <Promise />
    </>
  );
}
