import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Project Gallery | Christopher Celaya - Industrial & Technical Portfolio",
  description:
    "Explore Christopher Celaya's portfolio of industrial automation, mechanical systems, and electrical engineering projects. Featuring PLC implementations, control systems, and technical installations in El Paso, TX.",
  keywords:
    "industrial automation portfolio, mechanical systems gallery, electrical engineering projects, PLC implementations, control systems, technical installations El Paso, industrial maintenance portfolio, Christopher Celaya projects",
  openGraph: {
    title:
      "Project Gallery | Christopher Celaya - Industrial & Technical Portfolio",
    description:
      "View my portfolio of industrial automation, mechanical systems, and electrical engineering projects in El Paso.",
    type: "website",
    images: [
      {
        url: "https://chriscelaya.com/og-image-gallery.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Celaya's Technical Project Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Project Gallery | Christopher Celaya",
    description:
      "Industrial automation and technical project portfolio showcasing work in El Paso, TX.",
    images: ["https://chriscelaya.com/og-image-gallery.jpg"],
  },
  alternates: {
    canonical: "https://chriscelaya.com/gallery",
  },
};
