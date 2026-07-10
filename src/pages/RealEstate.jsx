import { brands } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import PropertyDashboard from "../components/brand/PropertyDashboard.jsx";
import ServicesGrid from "../components/brand/ServicesGrid.jsx";
import ProcessList from "../components/brand/ProcessList.jsx";
import GalleryStrip from "../components/brand/GalleryStrip.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";

const brand = brands.find((b) => b.slug === "real-estate");

export default function RealEstate() {
  return (
    <>
      <BrandHero brand={brand} />
      <PropertyDashboard />
      <ServicesGrid brand={brand} />
      <ProcessList brand={brand} />
      {/* <GalleryStrip brand={brand} /> */}
      <BrandQuote brand={brand} />
    </>
  );
}
