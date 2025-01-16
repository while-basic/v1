import "@v1/ui/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Provider as AnalyticsProvider } from "@v1/analytics/client";
import { cn } from "@v1/ui/cn";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import localFont from "next/font/local";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://chriscelaya.com"),
  title: "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
  description: "El Paso's leading software developer and mechatronic technician. Expert in full-stack development, industrial automation, and system integration serving El Paso, Texas and surrounding areas.",
  keywords: "Christopher Celaya, Software Developer El Paso, Mechatronic Technician El Paso, Full-Stack Developer El Paso, Industrial Automation Texas, React Developer El Paso, Node.js Developer El Paso, El Paso Tech, El Paso Software Engineer, El Paso Web Developer",
  authors: [{ name: "Christopher Celaya" }],
  creator: "Christopher Celaya",
  publisher: "Christopher Celaya",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://chriscelaya.com",
    title: "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
    description: "El Paso's leading software developer and mechatronic technician. Expert in full-stack development, industrial automation, and system integration serving El Paso, Texas and surrounding areas.",
    siteName: "Christopher Celaya",
  },
  twitter: {
    card: "summary_large_image",
    title: "Christopher Celaya | Software Developer & Mechatronic Technician in El Paso, TX",
    description: "El Paso's leading software developer and mechatronic technician. Expert in full-stack development, industrial automation, and system integration.",
    creator: "@christophercelaya",
  },
  alternates: {
    canonical: "https://chriscelaya.com",
  },
  verification: {
    google: "YOUR_GOOGLE_VERIFICATION_ID", // You'll need to add your Google Search Console verification ID here
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

        <AnalyticsProvider />
      </body>
    </html>
  );
}
