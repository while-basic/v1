"use client";

import "@v1/ui/globals.css";
import { CustomCursor } from "@/components/custom-cursor";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { JsonLd } from "@/components/json-ld";
import { cn } from "@v1/ui/cn";
import { Analytics } from "@vercel/analytics/react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import localFont from "next/font/local";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Toaster } from "sonner";

const DepartureMono = localFont({
  src: "../fonts/DepartureMono-Regular.woff2",
  variable: "--font-departure-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <JsonLd />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased dark",
          GeistSans.variable,
          GeistMono.variable,
          DepartureMono.variable,
        )}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <Toaster />
        <Analytics />
        {/* Scroll Progress Indicator */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-primary/20 z-50">
          <div
            className="h-full bg-primary transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
        {/* Custom Cursor */}
        <CustomCursor />
      </body>
    </html>
  );
}
