import { brands } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import ServicesGrid from "../components/brand/ServicesGrid.jsx";
import ProcessList from "../components/brand/ProcessList.jsx";
import AgroGallery from "../components/brand/AgroGallery.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";

const brand = brands.find((b) => b.slug === "agro-allied");

export default function AgroAllied() {
  return (
    <>
      <BrandHero brand={brand} />
      <ServicesGrid brand={brand} />
      <ProcessList brand={brand} />
      <AgroGallery />
      <BrandQuote brand={brand} />
    </>
  );
}
