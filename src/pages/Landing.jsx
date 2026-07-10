// Landing page composition.
import Hero from "./landing/Hero.jsx";
import SubBrandCards from "./landing/SubBrandCards.jsx";
import Story from "./landing/Story.jsx";
import TrustStrip from "./landing/TrustStrip.jsx";
import Philosophy from "./landing/Philosophy.jsx";
import Promise from "./landing/Promise.jsx";

export default function Landing() {
  return (
    <>
      <Hero />
      <SubBrandCards />
      <Story />
      <TrustStrip />
      <Philosophy />
      <Promise />
    </>
  );
}
