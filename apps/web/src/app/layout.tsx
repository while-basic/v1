import type { Metadata } from "next";
import "./research-lab.css";

export const metadata: Metadata = {
  title: "Christopher Celaya — Research Lab",
  description:
    "Cross-domain synthesis: Industrial Systems, AI Architecture, Consciousness Research. Christopher Celaya / Celaya Solutions — El Paso, TX.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Courier+Prime:ital,wght@0,400;0,700;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,600;1,300&family=DM+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
