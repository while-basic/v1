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

export const setupAnalytics = () => {
  // Implement your analytics setup logic here
  console.log('Setting up analytics');
};
