import { OpenPanel, type PostEventPayload } from "@openpanel/nextjs";
import { logger } from "@v1/logger";
import { waitUntil } from "@vercel/functions";

type Props = {
  userId?: string;
  fullName?: string | null;
};

const getEnvVar = (key: string): string | undefined => {
  // For server-side environment variables
  if (typeof process !== "undefined" && process.env) {
    return process.env[key];
  }
  // Fallback for client-side
  return undefined;
};

const validateConfig = () => {
  const clientId = getEnvVar("NEXT_PUBLIC_OPENPANEL_CLIENT_ID");
  const secretKey = getEnvVar("OPENPANEL_SECRET_KEY");

  if (!clientId || !secretKey) {
    logger.error("OpenPanel credentials are not configured", {
      missingClientId: !clientId,
      missingSecretKey: !secretKey,
      env: process.env.NODE_ENV,
    });
    return false;
  }
  return true;
};

export const setupAnalytics = async (options?: Props) => {
  const { userId, fullName } = options ?? {};

  if (!validateConfig()) {
    return {
      track: () => {
        logger.warn("OpenPanel tracking disabled: missing credentials");
      },
    };
  }

  const client = new OpenPanel({
    clientId: getEnvVar("NEXT_PUBLIC_OPENPANEL_CLIENT_ID")!,
    clientSecret: getEnvVar("OPENPANEL_SECRET_KEY")!,
    apiUrl: "https://app.openpanel.dev/api/v1",
  });

  if (userId && fullName) {
    const [firstName, lastName] = fullName.split(" ");
    let retries = 3;
    const retryDelay = 1000; // 1 second

    while (retries > 0) {
      try {
        await waitUntil(
          client.identify({
            profileId: userId,
            firstName: firstName ?? undefined,
            lastName: lastName ?? undefined,
          }),
        );
        logger.info(`Successfully identified user: ${userId}`, {
          firstName,
          lastName,
        });
        break;
      } catch (error: unknown) {
        retries--;
        if (retries === 0) {
          logger.error(
            "Failed to identify user after all retries:",
            error instanceof Error ? error.message : String(error),
            { userId, firstName, lastName },
          );
          break;
        }
        logger.warn(
          `Retrying user identification... (${retries} attempts left)`,
        );
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
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

      let retries = 3;
      const retryDelay = 1000; // 1 second

      while (retries > 0) {
        try {
          const { event, ...rest } = options;
          await waitUntil(client.track(event, rest));
          logger.info(`Successfully tracked server event: ${event}`, {
            properties: rest,
          });
          break;
        } catch (error: unknown) {
          retries--;
          if (retries === 0) {
            logger.error(
              "Failed to track server event after all retries:",
              error instanceof Error ? error.message : String(error),
              { event: options.event },
            );
            break;
          }
          logger.warn(`Retrying event tracking... (${retries} attempts left)`);
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
      }
    },
  };
};
