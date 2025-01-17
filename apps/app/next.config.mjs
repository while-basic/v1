import "./src/env.mjs";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: process.env.NODE_ENV === "production",
  },
  onDemandEntries: {
    // This will suppress the punycode warning
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

// This will suppress Node.js warnings including punycode
process.env.NODE_NO_WARNINGS = '1';

export default withSentryConfig(nextConfig, {
  silent: !process.env.CI,
  telemetry: false,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  tunnelRoute: "/monitoring",
});
