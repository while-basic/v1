import Script from "next/script";
import { jsonLd } from "../app/metadata";

export function JsonLd() {
  const jsonLdString = JSON.stringify(jsonLd);

  return (
    <Script id="json-ld" type="application/ld+json" strategy="worker">
      {jsonLdString}
    </Script>
  );
}
