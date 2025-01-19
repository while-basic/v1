import * as Sentry from "@sentry/nextjs";
import { supabaseIntegration } from "@supabase/sentry-js-integration";
import { createClient } from "@v1/supabase/client";

const client = createClient();

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
  integrations: [
    supabaseIntegration(client, Sentry, {
      tracing: true,
      breadcrumbs: true,
      errors: true,
    }),
  ],
});
