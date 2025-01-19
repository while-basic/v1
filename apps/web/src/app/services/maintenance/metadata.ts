import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Center & Industrial Maintenance Services | Christopher Celaya",
  description:
    "Expert data center maintenance, mechatronics, and industrial equipment services in El Paso, TX and Santa Teresa, NM. Specializing in preventative maintenance, system optimization, and 24/7 support.",
  keywords:
    "data center maintenance El Paso, industrial maintenance Santa Teresa, mechatronics technician Texas, preventative maintenance New Mexico, Christopher Celaya maintenance, industrial equipment service El Paso, data center technician Santa Teresa, system maintenance Texas",
  openGraph: {
    title: "Data Center & Industrial Maintenance Services | Christopher Celaya",
    description:
      "Professional maintenance services for data centers, industrial equipment, and mechatronic systems in El Paso and Santa Teresa regions.",
    type: "website",
    images: [
      {
        url: "https://chriscelaya.com/og-image-maintenance.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Celaya Maintenance Services - El Paso & Santa Teresa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Center & Maintenance Services | Christopher Celaya",
    description:
      "Expert maintenance solutions for data centers and industrial equipment in El Paso, TX and Santa Teresa, NM.",
    images: ["https://chriscelaya.com/og-image-maintenance.jpg"],
  },
  alternates: {
    canonical: "https://chriscelaya.com/services/maintenance",
  },
};
