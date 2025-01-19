import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://chriscelaya.com"),
  title: {
    default:
      "Christopher Celaya | Data Center & Mechatronics Technician in El Paso & Santa Teresa",
    template: "%s | Christopher Celaya - El Paso Maintenance Professional",
  },
  description:
    "Christopher Celaya - Expert Data Center Technician & Mechatronics Specialist serving El Paso, TX and Santa Teresa, NM. Specializing in industrial maintenance, automation systems, and preventative maintenance solutions.",
  keywords:
    "Christopher Celaya El Paso, Data Center Technician El Paso, Mechatronics Specialist Santa Teresa, Industrial Maintenance El Paso, Preventative Maintenance Texas, Data Center Maintenance New Mexico, Christopher Celaya Santa Teresa, Industrial Technician El Paso, Automation Maintenance Texas, Manufacturing Maintenance El Paso",
  authors: [
    { name: "Christopher Celaya", url: "https://github.com/while-basic" },
  ],
  creator: "Christopher Celaya",
  publisher: "Christopher Celaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chriscelaya.com",
    siteName:
      "Christopher Celaya - El Paso Data Center & Maintenance Professional",
    title:
      "Christopher Celaya | Data Center & Mechatronics Technician in El Paso & Santa Teresa",
    description:
      "Professional Data Center Technician & Mechatronics Specialist serving El Paso, TX and Santa Teresa, NM. Specializing in industrial maintenance and automation systems.",
    images: [
      {
        url: "https://chriscelaya.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Celaya - Data Center & Maintenance Professional in El Paso",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Christopher Celaya | Data Center & Mechatronics Professional - El Paso & Santa Teresa",
    description:
      "El Paso's leading Data Center Technician & Mechatronics Specialist. Expert in industrial maintenance and automation systems.",
    creator: "@christophercelaya",
    images: ["https://chriscelaya.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chriscelaya.com",
    languages: {
      "en-US": "https://chriscelaya.com",
    },
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
    other: {
      me: [
        "https://github.com/while-basic",
        "https://linkedin.com/in/chriscelaya",
      ],
    },
  },
  category: "Technology",
};

// JSON-LD structured data
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Christopher Celaya",
  url: "https://chriscelaya.com",
  sameAs: [
    "https://github.com/while-basic",
    "https://linkedin.com/in/chriscelaya",
    "https://www.youtube.com/@christophercelaya",
    "https://instagram.com/chriscelaya",
  ],
  jobTitle: "Data Center & Mechatronics Technician",
  description:
    "Professional Data Center Technician & Mechatronics Specialist serving El Paso, TX and Santa Teresa, NM",
  areaServed: [
    {
      "@type": "City",
      name: "El Paso",
      "@id": "https://www.wikidata.org/wiki/Q134034",
    },
    {
      "@type": "City",
      name: "Santa Teresa",
      "@id": "https://www.wikidata.org/wiki/Q7419231",
    },
  ],
  worksFor: {
    "@type": "Organization",
    name: "Self-Employed",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "El Paso",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
  },
  knowsAbout: [
    "Data Center Maintenance",
    "Mechatronics",
    "Industrial Maintenance",
    "Preventative Maintenance",
    "Automation Systems",
    "Manufacturing Systems",
    "PLC Programming",
    "Industrial Controls",
  ],
  hasOccupation: {
    "@type": "Occupation",
    name: "Data Center Technician",
    occupationLocation: {
      "@type": "City",
      name: "El Paso",
      "@id": "https://www.wikidata.org/wiki/Q134034",
    },
    skills: [
      "Data Center Maintenance",
      "Mechatronics",
      "Industrial Automation",
      "Preventative Maintenance",
      "System Integration",
    ],
  },
};
