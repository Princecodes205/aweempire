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
  hours: "Open 24/7",
  est: "Est. 2020",
  estNote: "6+ years in business",
};

export const social = {
  facebookMain: "https://facebook.com/share/1KNxLaPbQV",
  instagramInterior: "https://instagram.com/awk_interior_empire",
  instagramTravel: "https://instagram.com/awktravelandtour",
  facebookAgro: "https://facebook.com/share/1CjmgEYuDJ",
  // Unlabeled in the brief — assumed to be Immigration/Travel. Please confirm.
  facebookUnconfirmed: "https://facebook.com/share/1ADuukYvLp",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Interior Empire", to: "/interior-empire" },
  { label: "Immigration", to: "/immigration-consultancy" },
  { label: "Agro & Real Estate", to: "/agro-real-estate" },
];

export const footer = {
  tagline: "Three houses under one roof — built on craft, papers, and land.",
  legal: `© ${new Date().getFullYear()} Awk Empire. All rights reserved.`,
};

export const brands = [
  {
    slug: "interior",
    name: "Awk Interior Empire",
    to: "/interior-empire",
    accentClass: "interior",
    tagline: "Bedsheets, curtains, interior design & clothing — made and sourced to order.",
    heroEyebrow: "House of craft",
    heroHeadline: "Rooms that hold a life, not just furniture.",
    lede: "From a single made-to-measure curtain to a full interior build-out, we work with homes, apartments, and small commercial spaces across Karu, Abuja, and beyond. Warm materials, exacting fit, and timelines we keep.",
    services: [
      {
        title: "Bedsheets",
        body: "Premium cotton, satin, and linen in standard and custom sizes, made to order in small batches.",
      },
      {
        title: "Curtains",
        body: "Made-to-measure curtains, sheers, and blinds. In-house measuring, hemming, and installation.",
      },
      {
        title: "Interior Design",
        body: "Concept, layout, finishes, and styling for full rooms or whole homes — including 3D previews.",
      },
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
    tagline: "Visa & travel services for Nigerians going further.",
    heroEyebrow: "House of papers",
    heroHeadline: "Visas that move at the pace of your life, not the embassy queue.",
    lede: "We handle study, work, tourist, and family visa applications, plus flight booking and full travel arrangement. Clear advice, real timelines, and a single point of contact from first call to landing.",
    services: [
      {
        title: "Visa consultation",
        body: "Free initial assessment, eligibility check, and a written route map for your destination.",
      },
      {
        title: "Documentation support",
        body: "We collect, certify, translate, and review every supporting document before submission.",
      },
      {
        title: "Travel booking & arrangement",
        body: "Flight search, fare comparison, hotel booking, and full itinerary planning.",
      },
      {
        title: "End-to-end filing",
        body: "Application submitted and tracked through to decision — including responses to additional-document requests.",
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
    placeholderFlag:
      "Service list and destination coverage are based on a typical Nigerian visa consultancy. Please confirm with the real Awk Immigration Consultancy offer.",
  },
  {
    slug: "agro",
    name: "Awk Agro-Allied and Real Estate",
    to: "/agro-real-estate",
    accentClass: "agro",
    tagline: "Agriculture and real estate, on solid title.",
    heroEyebrow: "House of land",
    heroHeadline: "Plots and farms that work while you are not there.",
    lede: "Verified farmland and residential plots in and around Abuja, with end-to-end support from scouting and acquisition to development and ongoing management.",
    services: [
      {
        title: "Agriculture",
        body: "Farmland acquisition, soil assessment, planting, and ongoing farm management with quarterly reports.",
      },
      {
        title: "Real Estate",
        body: "Residential and commercial plot sales, joint ventures with landowners, and build-and-sell.",
      },
      {
        title: "Property Management",
        body: "Tenant sourcing, rent collection, and maintenance for owners who live outside Abuja or abroad.",
      },
    ],
    process: [
      {
        title: "Scout",
        body: "On-ground visits, soil and title checks, and a shortlist of options that match your budget.",
      },
      {
        title: "Acquire",
        body: "We negotiate, complete the paper trail, and hand over clean documents.",
      },
      {
        title: "Develop",
        body: "Plant, build, or subdivide — depending on the asset and your goals.",
      },
      {
        title: "Manage",
        body: "Monthly photo updates, quarterly statements, and dividend or rent remittance.",
      },
    ],
    quote: {
      body: "From the first site visit to the first harvest, they were honest about every step.",
      by: "— Awk client, plot owner",
    },
    galleryCount: 6,
    ctaEmail: "awkinvestmentltd@gmail.com",
    socialHandle: null,
    unsplashQuery: "farm-land",
    placeholderFlag:
      "Agriculture offering (produce? livestock? consultancy?) and real estate scope (land sales? rentals? management?) were not specified in the brief. Please confirm.",
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
  agro: {
    text: "text-agro",
    bg: "bg-agro",
    border: "border-agro",
    ring: "ring-agro",
    bgSoft: "bg-agro/8",
    bgSofter: "bg-agro/5",
    textOnAccent: "text-ivory",
  },
};

export const landing = {
  eyebrow: "Awk Empire · Three houses under one roof",
  headline: "Three houses under one roof — built on craft, papers, and land.",
  lede: "We are a family of three small Nigerian businesses that share one address, one phone line, and one standard of trust. Whatever you need from us, you will talk to a person who has been doing it for years.",
  promise: [
    {
      title: "One phone line, three trades",
      body: "Call once. We will tell you which of the three houses can help, and refer you to the right one if it is not us.",
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
