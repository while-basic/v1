import {
  OpenPanelComponent,
  type PostEventPayload,
  useOpenPanel,
} from "@openpanel/nextjs";
import { logger } from "@v1/logger";

declare global {
  interface Window {
    __ENV__?: Record<string, string>;
  }
}

const isProd = process.env.NODE_ENV === "production";

const getEnvVar = (key: string): string | undefined => {
  // For client-side public variables
  if (typeof window !== "undefined" && window.__ENV__?.[key]) {
    return window.__ENV__[key];
  }
  // Fallback to process.env for build-time values
  return process.env[key];
};

const validateConfig = () => {
  const clientId = getEnvVar("NEXT_PUBLIC_OPENPANEL_CLIENT_ID");
  if (!clientId) {
    logger.error("OpenPanel client ID is not configured", {
      env: process.env.NODE_ENV,
      window: typeof window !== "undefined" ? window.__ENV__ : undefined,
    });
    return false;
  }
  return true;
};

const Provider = () => {
  if (!validateConfig()) {
    return null;
  }

  return (
    <OpenPanelComponent
      clientId={getEnvVar("NEXT_PUBLIC_OPENPANEL_CLIENT_ID")!}
      trackAttributes={true}
      trackScreenViews={isProd}
      trackOutgoingLinks={isProd}
      apiUrl="https://app.openpanel.dev/api/v1"
    />
  );
};

export const track = (event: string, properties?: Record<string, any>) => {
  if (!validateConfig()) {
    return;
  }

  if (!isProd) {
    logger.info("Track (Development):", { event, properties });
    return;
  }

  console.log('Track event:', event, properties);
};

export { Provider };
