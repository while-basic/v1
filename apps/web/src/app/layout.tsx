import "@v1/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@v1/analytics/client";
import { cn } from "@v1/ui/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Toaster } from "sonner";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chriscelaya.com"),
  title:
    "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
  description:
    "Christopher Celaya - Leading AI, Machine Learning, and Industrial Automation expert in El Paso, Texas. Specializing in PLC/HMI programming, industrial maintenance, and data center operations. Serving El Paso, TX and Santa Teresa, NM.",
  keywords:
    "Christopher Celaya, Chris Celaya, El Paso AI, artificial intelligence El Paso, machine learning Texas, ChatGPT integration, GPT-4 development, OpenAI solutions, PLC programming, HMI integration, industrial maintenance El Paso, industrial mechanic Texas, industrial technician, automation expert, electrical systems, mechanical systems, preventative maintenance, data center technician, Santa Teresa New Mexico, industrial IoT",
  authors: [{ name: "Christopher Celaya" }],
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
    title:
      "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
    description:
      "Leading AI, Machine Learning, and Industrial Automation technician in El Paso, Texas. Specializing in PLC/HMI programming, industrial maintenance, and data center operations.",
    siteName: "Christopher Celaya",
    images: [
      {
        url: "https://chriscelaya.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Christopher Celaya - AI & Industrial Automation Expert",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
    description:
      "El Paso software developer and mechatronic technician. Expert in full-stack development, industrial automation, and system integration.",
    creator: "@christophercelaya",
    images: ["https://chriscelaya.com/og-image.jpg"],
  },
  alternates: {
    canonical: "https://chriscelaya.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          `${DepartureMono.variable} ${GeistSans.variable} ${GeistMono.variable}`,
          "antialiased dark",
        )}
      >
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
        <AnalyticsProvider />
      </body>
    </html>
  );
}
