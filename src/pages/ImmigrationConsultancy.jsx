import { brands } from "../data/content.js";
import BrandHero from "../components/brand/BrandHero.jsx";
import ServicesGrid from "../components/brand/ServicesGrid.jsx";
import HowWeAssist from "../components/brand/HowWeAssist.jsx";
import ProcessList from "../components/brand/ProcessList.jsx";
import GalleryStrip from "../components/brand/GalleryStrip.jsx";
import BrandQuote from "../components/brand/BrandQuote.jsx";
import howWeAssistImage from "../assets/images/immigration/section-how-we-assist.jpg";

const brand = brands.find((b) => b.slug === "immigration");

export default function ImmigrationConsultancy() {
  return (
    <>
      <BrandHero brand={brand} />
      <ServicesGrid brand={brand} />
      <HowWeAssist
        brand={brand}
        image={{
          src: howWeAssistImage,
          alt: "Travel documents and a passport laid out on a desk — visas, residency permits, and cross-border paperwork, made simple.",
        }}
      />
      <ProcessList brand={brand} />
      {/* <GalleryStrip brand={brand} /> */}
      <BrandQuote brand={brand} />
    </>
  );
}
