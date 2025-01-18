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

const track = async (
  options: { event: string } & PostEventPayload["properties"],
) => {
  if (!validateConfig()) {
    return;
  }

  const { track: openTrack } = useOpenPanel();

  if (!isProd) {
    logger.info("Track (Development):", options);
    return;
  }

  let retries = 3;
  const retryDelay = 1000; // 1 second

  while (retries > 0) {
    try {
      const { event, ...rest } = options;
      await openTrack(event, rest);
      logger.info(`Successfully tracked event: ${event}`, { properties: rest });
      return;
    } catch (error: unknown) {
      retries--;
      if (retries === 0) {
        logger.error(
          "Failed to track event after all retries:",
          error instanceof Error ? error.message : String(error),
          { event: options.event },
        );
        return;
      }
      logger.warn(`Retrying event tracking... (${retries} attempts left)`);
      await new Promise((resolve) => setTimeout(resolve, retryDelay));
    }
  }
};

export { Provider, track };
