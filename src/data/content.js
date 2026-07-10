// Single source of truth for all site content.
// Edit this file to update copy, contact info, services, or social links
// without touching layout components.

export const contact = {
  phones: [
    {
      label: "Primary",
      display: "+234 706 795 4206",
      href: "tel:+2347067954206",
      wa: "https://wa.me/2347067954206",
    },
    {
      label: "Secondary",
      display: "0701 468 3496",
      href: "tel:+2347014683496",
    },
    {
      label: "Secondary",
      display: "0813 412 0067",
      href: "tel:+2348134120067",
    },
  ],
  emails: {
    general: "awkinvestmentltd@gmail.com",
    travel: "Awktravelandtour@gmail.com",
  },
  address: "Plot 191, Opposite Steps Pharmacy, Karu-Jikwoyi Road, Karu, Abuja",
  shortAddress: "Karu, Abuja",
  hours: "Open 24/7",
  est: "Est. 2020",
  estNote: "6+ years in business",
};

export const social = {
  facebookMain: "https://facebook.com/share/1KNxLaPbQV",
  instagramInterior: "https://instagram.com/awk_interior_empire",
  instagramTravel: "https://instagram.com/awktravelandtour",
  facebookAgro: "https://facebook.com/share/1CjmgEYuDJ",
  facebookRealEstate: "https://facebook.com/share/1ADuukYvLp",
  facebookFoundation: "https://www.facebook.com/share/1KvKt9kor2/?mibextid=wwXIfr",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Interior Empire", to: "/interior-empire" },
  { label: "Immigration", to: "/immigration-consultancy" },
  { label: "Awk Agro Allied", to: "/agro-allied" },
  { label: "Real Estate", to: "/real-estate" },
  { label: "Foundation", to: "/foundation" },
];

export const footer = {
  tagline: "One root, five houses — built on craft, papers, land, food, and civic voice.",
  legal: `© ${new Date().getFullYear()} Awk Empire. All rights reserved.`,
};

export const brands = [
  {
    slug: "interior",
    name: "Awk Interior Empire",
    to: "/interior-empire",
    accentClass: "interior",
    tagline: "Premium bedsheets, luxury duvets, and bespoke window treatments — made to order.",
    heroEyebrow: "House of craft",
    heroHeadline: "Rooms that hold a life, not just furniture.",
    lede: "From a single made-to-measure curtain to a full interior build-out, we work with homes, apartments, and small commercial spaces across Karu, Abuja, and beyond. Warm materials, exacting fit, and timelines we keep.",
    services: [
      {
        title: "Bedsheets",
        body: "Premium cotton, satin, and linen in standard and custom sizes, made to order in small batches.",
      },
      {
        title: "Luxury duvets",
        body: "Heavyweight comforters, duvet covers, and layered bedding sets tailored to your bed and your climate.",
      },
      {
        title: "Window treatments",
        body: "Made-to-measure curtains, sheers, and blinds. In-house measuring, hemming, and installation.",
      },
      // NOTE: Clothing is intentionally retained. The v2 pillar copy in the brand brief
      // (bedsheets / duvets / window treatments) does not mention clothing, but the
      // client confirmed on 2026-07-10 that clothing should remain in the Interior
      // offering. Remove only after the client confirms a narrower scope.
      {
        title: "Clothing",
        body: "Small-run tailored pieces and custom fabric orders through the same supply network we use for interiors.",
      },
    ],
    process: [
      {
        title: "Consult",
        body: "Site visit or video call to understand the brief, the space, and the budget.",
      },
      {
        title: "Sample",
        body: "Fabric swatches, sketches, and a fixed-price quote within 5–7 days.",
      },
      {
        title: "Make",
        body: "We cut, sew, source, and build — with weekly photo updates.",
      },
      {
        title: "Install",
        body: "In-home fitting, hanging, and styling. Snags cleared before handover.",
      },
    ],
    quote: {
      body: "They listened more than they pitched. The house finally feels like ours.",
      by: "— Awk client, Karu",
    },
    galleryCount: 8,
    ctaEmail: "awkinvestmentltd@gmail.com",
    socialHandle: "@awk_interior_empire",
    unsplashQuery: "interior-design",
  },
  {
    slug: "immigration",
    name: "Awk Immigration Consultancy",
    to: "/immigration-consultancy",
    accentClass: "immigration",
    tagline: "Visas, residency, expatriate quotas, flights, and full travel logistics.",
    heroEyebrow: "House of papers",
    heroHeadline: "Visas that move at the pace of your life, not the embassy queue.",
    lede: "Visas, study placements, work and relocation, flights, accommodation, and full travel logistics — for individuals, students, families, and corporate clients.",
    // NOTE — service structure: each service has a `features` array (rendered
    // as bullets) and a `whatsappHref` (rendered as a per-card CTA) so leads
    // arrive on WhatsApp already naming what they want. Corporate expatriate
    // quotas was previously its own top-level card in v2; in v3 it has been
    // folded into "Work & Relocation" as a feature bullet per the client
    // brief. Pull it back out into its own card if Champ wants it more
    // prominent.
    services: [
      {
        title: "Visa Assistance",
        body: "Helping clients navigate visa applications for major destinations — USA, Canada, UK, Australia, and the Schengen area — across tourism, study, work, and business categories.",
        features: [
          "Document review & compilation",
          "Application form completion",
          "Interview preparation",
          "Appointment / slot booking support",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Visa%20Assistance",
      },
      {
        title: "Study Abroad Support",
        body: "Guiding students toward admission at universities abroad and handling the student visa process from start to finish.",
        features: [
          "University / program matching",
          "Admission processing support",
          "Scholarship & funding guidance",
          "Student visa filing support",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Study%20Abroad%20Support",
      },
      {
        title: "Work & Relocation",
        body: "Connecting skilled professionals with opportunities abroad and managing the permit and residency side of relocating for work — including corporate expatriate quota applications for businesses bringing in foreign staff.",
        features: [
          "Overseas job-search assistance",
          "Work permit application",
          "Residency / permanent-stay applications",
          "Corporate expatriate quota processing",
          "Pre-departure orientation",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Work%20%26%20Relocation",
      },
      {
        title: "Flight & Accommodation Booking",
        body: "Securing flights and hotel stays at competitive rates, tailored to each traveler's budget and schedule.",
        features: [
          "Local & international flight booking",
          "Hotel reservations",
          "Travel insurance arrangement",
          "Airport pickup / transfer coordination",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20book%20a%20flight%20or%20hotel",
      },
      {
        title: "Travel Consultation",
        body: "One-on-one planning support for travelers who aren't sure where to start — helping avoid common pitfalls before a trip.",
        features: [
          "Itinerary building",
          "Budget planning",
          "Travel-requirements checklist review",
          "Customized travel packages",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20a%20travel%20consultation",
      },
      {
        title: "Tour Packages",
        body: "Curated group and personal trip packages for leisure travel — from romantic getaways to full cultural tours.",
        features: [
          "Group tours",
          "Honeymoon / romantic getaway packages",
          "Adventure travel packages",
          "Cultural tour experiences",
        ],
        whatsappHref:
          "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Tour%20Packages",
      },
    ],
    process: [
      {
        title: "Consult",
        body: "Free 20-minute call to understand your destination, timeline, and profile.",
      },
      {
        title: "Document",
        body: "We send a checklist and review every item before you pay any filing fee.",
      },
      {
        title: "File",
        body: "Application submitted on your behalf with full audit trail.",
      },
      {
        title: "Travel",
        body: "On approval, we book flights, hotels, and any onward travel in one bundle.",
      },
    ],
    quote: {
      body: "Clear, fast, and they actually picked up the phone when I had questions.",
      by: "— Awk client, post-approval",
    },
    galleryCount: 6,
    ctaEmail: "Awktravelandtour@gmail.com",
    socialHandle: "@awktravelandtour",
    unsplashQuery: "passport-travel",
  },
  {
    slug: "agro-allied",
    name: "Awk Agro Allied",
    to: "/agro-allied",
    accentClass: "agro",
    tagline: "Modern, sustainable livestock and agricultural practices, farm to table.",
    heroEyebrow: "House of harvest",
    heroHeadline: "Farms that feed the people, not just the balance sheet.",
    lede: "Driving modern, sustainable livestock and agricultural practices that strengthen local supply chains and deliver premium quality from farm to table.",
    services: [
      {
        title: "Livestock",
        body: "Modern, sustainable livestock production with strict animal-welfare and biosecurity standards.",
      },
      {
        title: "Crop production",
        body: "Crop cultivation, rotation planning, and harvest management built around local soil and climate.",
      },
      {
        title: "Supply chain & distribution",
        body: "Post-harvest handling, packaging, and last-mile distribution that protect quality from farm to table.",
      },
    ],
    process: [
      {
        title: "Scout",
        body: "Site visits, soil and water checks, and a shortlist of farm models that match your land and budget.",
      },
      {
        title: "Plan",
        body: "Cropping calendar, livestock plan, and a written capex / opex projection.",
      },
      {
        title: "Operate",
        body: "Plant, raise, and harvest — with weekly photo updates from the field.",
      },
      {
        title: "Distribute",
        body: "We aggregate, pack, and deliver to your off-takers or direct to market.",
      },
    ],
    quote: {
      body: "Honest about what the land can carry, and serious about what it actually produces.",
      by: "— Awk Agro partner, Abuja",
    },
    galleryCount: 6,
    ctaEmail: "awkinvestmentltd@gmail.com",
    socialHandle: null,
    facebookUrl: "https://facebook.com/share/1CjmgEYuDJ",
    unsplashQuery: "farm-land",
    placeholderFlag:
      "Service list (livestock, crop production, supply chain / distribution) was written from a one-line tagline. Please confirm the exact Agro Allied offering before client launch.",
  },
  {
    slug: "real-estate",
    name: "Awk Real Estate",
    to: "/real-estate",
    accentClass: "real-estate",
    tagline: "Property acquisitions, commercial real estate, and residential developments.",
    heroEyebrow: "House of land",
    heroHeadline: "Plots and buildings that hold value, not just a price tag.",
    lede: "Creating tangible assets and securing futures through transparent, high-yield property acquisitions, commercial real estate, and residential developments.",
    services: [
      {
        title: "Property acquisitions",
        body: "Sourcing, due diligence, and clean title transfer for residential and commercial acquisitions.",
      },
      {
        title: "Commercial real estate",
        body: "Office, retail, and mixed-use commercial assets with verified tenancy and yield history.",
      },
      {
        title: "Residential developments",
        body: "End-to-end residential development — from land assembly through to build, sell, or let.",
      },
    ],
    process: [
      {
        title: "Scout",
        body: "On-ground visits, title and encumbrance checks, and a shortlist matched to your budget.",
      },
      {
        title: "Acquire",
        body: "We negotiate, complete the paper trail, and hand over clean documents.",
      },
      {
        title: "Develop",
        body: "Build, subdivide, or refurbish — depending on the asset and your goals.",
      },
      {
        title: "Manage",
        body: "Tenant sourcing, rent collection, and quarterly statements for owners on or off-site.",
      },
    ],
    quote: {
      body: "From the first site visit to the first tenant, they were honest about every step.",
      by: "— Awk client, plot owner",
    },
    galleryCount: 6,
    ctaEmail: "awkinvestmentltd@gmail.com",
    socialHandle: null,
    unsplashQuery: "real-estate",
  },
  // NOTE — foundation name: the v2 brand copy in the brief labels this branch
  // "Awknanaw Foundation", but the original instruction (and the client
  // confirmation on 2026-07-10) is "AWK Empire Foundation". The landing pillar
  // card and this brand record use the latter, overriding the pillar copy.
  // Reconcile with the client before this name is used in any registered
  // legal / social account, since it affects page titles, nav, and printed
  // material.
  {
    slug: "foundation",
    name: "AWK Empire Foundation",
    to: "/foundation",
    accentClass: "foundation",
    tagline: "Our social heartbeat — institutional transparency, advocacy, healthcare, education, and electoral enlightenment.",
    heroEyebrow: "House of voice",
    heroHeadline: "Our social heartbeat.",
    lede: "We are deeply committed to driving institutional transparency, public policy advocacy, accessible healthcare, quality education, and robust electoral enlightenment.",
    services: [
      {
        title: "Institutional transparency",
        body: "Supporting open, accountable institutions through civic education and independent oversight.",
      },
      {
        title: "Public policy advocacy",
        body: "Research and campaigns that put evidence and citizen voice at the centre of policy design.",
      },
      {
        title: "Accessible healthcare",
        body: "Programs that bring quality, affordable care closer to under-served communities.",
      },
      {
        title: "Quality education",
        body: "Scholarships, materials, and partnerships that raise the floor on learning outcomes.",
      },
      {
        title: "Electoral enlightenment",
        body: "Non-partisan voter education, civic information, and engagement ahead of every election cycle.",
      },
    ],
    focusAreas: [
      {
        title: "Institutional transparency",
        body: "Open data, civic audits, and the patient work of making institutions answerable to the people they serve.",
      },
      {
        title: "Public policy advocacy",
        body: "Briefings, position papers, and quiet coalition work that move policy from announcement to outcome.",
      },
      {
        title: "Accessible healthcare",
        body: "Outreach, screening, and partnerships that bring quality care into communities that the system often misses.",
      },
      {
        title: "Quality education",
        body: "Scholarships, learning materials, and teacher support that improve what happens in the classroom.",
      },
      {
        title: "Electoral enlightenment",
        body: "Non-partisan voter guides, polling-station logistics support, and post-election accountability work.",
      },
    ],
    contact: {
      body: "Partner with us, write to us, or follow our work on Facebook.",
      cta: "Partner with us",
    },
    quote: {
      body: "An empire is measured by what it gives back, not by what it sells.",
      by: "— Awk Empire Foundation",
    },
    ctaEmail: "awkinvestmentltd@gmail.com",
    socialHandle: null,
    facebookUrl: "https://www.facebook.com/share/1KvKt9kor2/?mibextid=wwXIfr",
    unsplashQuery: "civic-community",
    heroVariant: "civic",
  },
];

// Accent → Tailwind utility map. Use the class strings directly in JSX:
//   <span className={accentMap[brand.slug].text}>...</span>
export const accentMap = {
  interior: {
    text: "text-interior",
    bg: "bg-interior",
    border: "border-interior",
    ring: "ring-interior",
    bgSoft: "bg-interior/8",
    bgSofter: "bg-interior/5",
    textOnAccent: "text-ivory",
  },
  immigration: {
    text: "text-immigration",
    bg: "bg-immigration",
    border: "border-immigration",
    ring: "ring-immigration",
    bgSoft: "bg-immigration/8",
    bgSofter: "bg-immigration/5",
    textOnAccent: "text-ivory",
  },
  "agro-allied": {
    text: "text-agro",
    bg: "bg-agro",
    border: "border-agro",
    ring: "ring-agro",
    bgSoft: "bg-agro/8",
    bgSofter: "bg-agro/5",
    textOnAccent: "text-ivory",
  },
  "real-estate": {
    text: "text-real-estate",
    bg: "bg-real-estate",
    border: "border-real-estate",
    ring: "ring-real-estate",
    bgSoft: "bg-real-estate/8",
    bgSofter: "bg-real-estate/5",
    textOnAccent: "text-ivory",
  },
  foundation: {
    text: "text-foundation",
    bg: "bg-foundation",
    border: "border-foundation",
    ring: "ring-foundation",
    bgSoft: "bg-foundation/8",
    bgSofter: "bg-foundation/5",
    textOnAccent: "text-ivory",
  },
};

export const landing = {
  eyebrow: "Awk Empire · One root, five houses",
  headline: "One Root. Endless Possibilities.",
  lede: "Welcome to the AWK Ecosystem. From transforming living spaces and facilitating global mobility to driving agricultural sustainability and advocating for a better society, we build solutions that empower lives and secure futures.",
  story: {
    eyebrow: "Our story",
    title: "The Genesis of AWK Empire.",
    paragraphs: [
      "Every great structure begins with a strong foundation. Like the resilient Oak tree, which stands firm through changing seasons while providing shade and shelter, The AWK Group was established to be a pillar of growth, security, and transformation across Africa and beyond.",
      "What began as a passion for exquisite lifestyle design has evolved into a dynamic, multi-faceted conglomerate. Today, our footprint spans five distinct sectors: Interior Architecture & Textiles, Global Mobility & Immigration, Sustainable Agribusiness, Real Estate Investment, and Civic Advocacy.",
      "We do not merely run businesses; we build interconnected ecosystems. By blending strategic foresight with absolute integrity, we ensure that every branch of our empire delivers world-class value to individuals, families, corporate organizations, and society at large.",
    ],
  },
  pillars: [
    {
      pillar: "Lifestyle & Comfort",
      subBrand: "AWK Interior Empire",
      copy: "Your home should be your sanctuary. AWK Interior Empire specializes in premium, custom-crafted bedsheets, luxury duvets, and bespoke window treatments designed to elevate your living spaces.",
      to: "/interior-empire",
      accentSlug: "interior",
      cta: "Visit the house",
    },
    {
      pillar: "Global Mobility",
      subBrand: "AWK Immigration Consultancy",
      copy: "Navigating the complexities of international borders. We provide seamless, compliant solutions for visas, residency permits, corporate expatriate quotas, flight bookings, and comprehensive travel logistics.",
      to: "/immigration-consultancy",
      accentSlug: "immigration",
      cta: "Visit the house",
    },
    {
      pillar: "Food Security & Sustainability",
      subBrand: "AWK Agro Allied",
      copy: "Driving modern, sustainable livestock and agricultural practices that strengthen local supply chains and deliver premium quality from farm to table.",
      to: "/agro-allied",
      accentSlug: "agro-allied",
      cta: "Visit the house",
    },
    {
      pillar: "Wealth & Infrastructure",
      subBrand: "AWK Real Estate",
      copy: "Creating tangible assets and securing futures through transparent, high-yield property acquisitions, commercial real estate, and residential developments.",
      to: "/real-estate",
      accentSlug: "real-estate",
      cta: "Visit the house",
    },
    {
      pillar: "Civic Impact & Governance",
      subBrand: "AWK Empire Foundation",
      copy: "Our social heartbeat. We are deeply committed to driving institutional transparency, public policy advocacy, accessible healthcare, quality education, and robust electoral enlightenment.",
      to: "/foundation",
      accentSlug: "foundation",
      cta: "Visit the house",
    },
  ],
  philosophy: {
    eyebrow: "Our philosophy",
    vision: {
      eyebrow: "Our Vision",
      body: "To be the foremost diversified conglomerate in the region, recognized for institutional excellence, sustainable development, and a borderless commitment to human progress.",
    },
    mission: {
      eyebrow: "Our Mission",
      body: "To deliver premium products and highly compliant, strategic services that empower our clients to live beautifully, travel freely, invest securely, and thrive in a more equitable society.",
    },
    values: [
      {
        title: "Ownership & Integrity",
        body: "We hold ourselves to the highest ethical standards, ensuring transparency, regulatory compliance, and accountability in everything we do.",
      },
      {
        title: "Adaptability & Innovation",
        body: "We possess the strategic foresight to navigate complex, evolving markets, delivering modern solutions tailored to a dynamic world.",
      },
      {
        title: "Kinship & Community",
        body: "Whether we are designing a bedroom, securing a visa, or advocating for policy reform, our ultimate focus is the safety, comfort, and advancement of the people we serve.",
      },
    ],
  },
  promise: [
    {
      title: "One phone line, five houses",
      body: "Call once. We will tell you which of the five houses can help, and refer you to the right one if it is not us.",
    },
    {
      title: "Fixed quotes, no surprises",
      body: "Every job, every visa file, every plot comes with a written quote before work starts. No moving goalposts.",
    },
    {
      title: "Built for Karu, open to Nigeria",
      body: "Walk into our Karu-Jikwoyi office any day of the week. We will pick up.",
    },
  ],
};

// Dev-only invariant: every brand.slug and every landing.pillar.accentSlug
// must have a matching entry in accentMap. If they don't, the first page
// render crashes with a generic "Cannot read properties of undefined
// (reading 'bg')" error that points at the consumer, not the data. This
// check fires at module load with a precise message naming the missing
// key and where it was referenced, so the data fix is one diff away.
if (import.meta.env.DEV) {
  const requiredKeys = new Set([
    ...brands.map((b) => b.slug),
    ...landing.pillars.map((p) => p.accentSlug),
  ]);
  for (const key of requiredKeys) {
    if (!accentMap[key]) {
      throw new Error(
        `[content.js] accentMap has no entry for "${key}". ` +
          `Referenced by ${brands.some((b) => b.slug === key) ? `brand slug` : `landing.pillar.accentSlug`}. ` +
          `Add a matching accentMap["${key}"] = { ... } block.`,
      );
    }
  }
}

// Live property listings for the /real-estate page dashboard.
// Kept as a separate top-level export (not a brand record field) so Champ
// can add/remove/update listings without touching the brand schema or any
// shared brand component. Pricing is in naira (whole units, no kobo).
// Image URLs point at the source site; replace with self-hosted assets
// before launch if the build pipeline requires it.
export const realEstateProperties = [
  {
    id: 1,
    title: "Skyline Exclusive City – Idu, 500sqm | 5-Bedroom Fully Detached Duplex",
    location: "Idu",
    price: 25000000,
    bedrooms: 5,
    badges: ["Verified", "Featured"],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/Enhance_this_real_estate_house_202604301147.jpeg",
  },
  {
    id: 2,
    title: "Skyline Exclusive City – Idu, 250sqm | 3-Bedroom Semi-Detached Duplex",
    location: "Idu",
    price: 12500000,
    bedrooms: 3,
    badges: ["Verified", "Featured"],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/Enhance_this_real_estate_house_202604301136.jpeg",
  },
  {
    id: 3,
    title: "Skyline Exclusive City – Idu, 150sqm | 3-Bedroom Terrace",
    location: "Idu",
    price: 7500000,
    bedrooms: 3,
    badges: ["Verified", "Featured"],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/Enhance_this_real_estate_house_202604301143.jpeg",
  },
  {
    id: 4,
    title: "Rockview Estate – Karshi, 450sqm | 3-Bedroom Bungalow with Attached BQ",
    location: "Karshi",
    price: 7000000,
    bedrooms: 3,
    badges: ["Verified", "Featured"],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/450SQM-BUNGALOW_Photo-5.jpg-scaled.jpeg",
  },
  {
    id: 5,
    title: "Rockview Estate – Karshi, 400sqm | 4-Bedroom Fully Detached Duplex with Attached BQ",
    location: "Karshi",
    price: 6500000,
    bedrooms: 4,
    badges: [],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/Duplex_Photo-2.jpg-scaled.jpeg",
  },
  {
    id: 6,
    title: "Rockview Estate – Karshi, 250sqm | 4-Bedroom Terraced Duplex with Attached BQ",
    location: "Karshi",
    price: 5000000,
    bedrooms: 4,
    badges: ["Verified", "Featured"],
    image:
      "https://nezonaproperties.com/wp-content/uploads/2026/06/TERRACE.jpg-scaled.jpeg",
  },
];

// Build a per-property WhatsApp enquiry link. Phone stays in sync with
// `contact.phones[0]` so a future number change is one edit.
export function getPropertyWhatsAppLink(property) {
  const phone = contact.phones[0].wa.replace(/^https:\/\/wa\.me\//, "");
  const message = `Hi, I'm interested in ${property.title} – ${property.location} – ₦${property.price.toLocaleString()}`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Price formatter used by the dashboard. Exposed so future surfaces
// (e.g. a Featured Listings footer) can format the same way without
// duplicating the naira + commas logic.
export const formatNaira = (n) => `₦${Number(n).toLocaleString()}`;

// Interior Empire — image-driven subsections (v5).
//
// The grids auto-discover images via `import.meta.glob` in the component
// file, so the filename convention is irrelevant — Champ can drop any
// `.jpg`/`.jpeg`/`.png`/`.webp` into either folder and it will appear.
// See InteriorSubsections.jsx for the glob patterns.
export const curtainAccessoriesFolder = "/images/curtain-accessories/";
export const duvetSetsFolder = "/images/duvet-sets/";

// Pre-filled WhatsApp enquiry links for the two new sections. Same phone
// number as the rest of the site (contact.phones[0]).
export const curtainAccessoriesWhatsAppHref =
  "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Curtain%20Accessories";
export const duvetSetsWhatsAppHref =
  "https://wa.me/2347067954206?text=Hi%2C%20I%27d%20like%20to%20know%20more%20about%20Duvet%20Sets";



