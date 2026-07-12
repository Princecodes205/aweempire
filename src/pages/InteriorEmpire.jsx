import { brands } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import ServicesGrid from "../components/brand/ServicesGrid.jsx";
import ProcessList from "../components/brand/ProcessList.jsx";
import { CurtainAccessories, DuvetSets, PopTvConsole } from "../components/brand/InteriorSubsections.jsx";
import GalleryStrip from "../components/brand/GalleryStrip.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";

const brand = brands.find((b) => b.slug === "interior");

export default function InteriorEmpire() {
  return (
    <>
      <BrandHero brand={brand} />
      <ServicesGrid brand={brand} />
      <ProcessList brand={brand} />
      <CurtainAccessories />
      <DuvetSets />
      <PopTvConsole />
      {/* <GalleryStrip brand={brand} /> */}
      <BrandQuote brand={brand} />
    </>
  );
}
