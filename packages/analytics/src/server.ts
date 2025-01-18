import { OpenPanel, type PostEventPayload } from "@openpanel/nextjs";
import { logger } from "@v1/logger";
import { waitUntil } from "@vercel/functions";

type Props = {
  userId?: string;
  fullName?: string | null;
};

export const setupAnalytics = async (options?: Props) => {
  const { userId, fullName } = options ?? {};

  if (
    !process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID ||
    !process.env.OPENPANEL_SECRET_KEY
  ) {
    logger.warn("OpenPanel credentials are not configured");
    return {
      track: () => {
        logger.warn("OpenPanel tracking disabled: missing credentials");
      },
    };
  }

  const client = new OpenPanel({
    clientId: process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID,
    clientSecret: process.env.OPENPANEL_SECRET_KEY,
  });

  if (userId && fullName) {
    const [firstName, lastName] = fullName.split(" ");
    try {
      await waitUntil(
        client.identify({
          profileId: userId,
          firstName,
          lastName,
        }),
      );
      logger.info(`Successfully identified user: ${userId}`);
    } catch (error: unknown) {
      logger.error(
        "Failed to identify user:",
        error instanceof Error ? error.message : String(error),
      );
    }
  }

  return {
    track: async (
      options: { event: string } & PostEventPayload["properties"],
    ) => {
      if (process.env.NODE_ENV !== "production") {
        logger.info("Track (Development):", options);
        return;
      }

      try {
        const { event, ...rest } = options;
        await waitUntil(client.track(event, rest));
        logger.info(`Successfully tracked server event: ${event}`);
      } catch (error: unknown) {
        logger.error(
          "Failed to track server event:",
          error instanceof Error ? error.message : String(error),
        );
      }
    },
  };
};
