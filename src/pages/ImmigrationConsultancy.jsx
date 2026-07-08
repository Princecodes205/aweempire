import { brands } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import ServicesGrid from "../components/brand/ServicesGrid.jsx";
import ProcessList from "../components/brand/ProcessList.jsx";
import GalleryStrip from "../components/brand/GalleryStrip.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";

const brand = brands.find((b) => b.slug === "immigration");

export default function ImmigrationConsultancy() {
  return (
    <>
      <BrandHero brand={brand} />
      <ServicesGrid brand={brand} />
      <ProcessList brand={brand} />
      <GalleryStrip brand={brand} />
      <BrandQuote brand={brand} />
    </>
  );
}
