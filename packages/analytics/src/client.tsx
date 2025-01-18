import {
  OpenPanelComponent,
  type PostEventPayload,
  useOpenPanel,
} from "@openpanel/nextjs";
import { logger } from "@v1/logger";

const isProd = process.env.NODE_ENV === "production";

const Provider = () => {
  if (!process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID) {
    logger.warn("OpenPanel client ID is not configured");
    return null;
  }

  return (
    <OpenPanelComponent
      clientId={process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID}
      trackAttributes={true}
      trackScreenViews={isProd}
      trackOutgoingLinks={isProd}
    />
  );
};

const track = async (
  options: { event: string } & PostEventPayload["properties"],
) => {
  const { track: openTrack } = useOpenPanel();

  if (!isProd) {
    logger.info("Track (Development):", options);
    return;
  }

  try {
    const { event, ...rest } = options;
    await openTrack(event, rest);
    logger.info(`Successfully tracked event: ${event}`);
  } catch (error: unknown) {
    logger.error(
      "Failed to track event:",
      error instanceof Error ? error.message : String(error),
    );
  }
};

export { Provider, track };
