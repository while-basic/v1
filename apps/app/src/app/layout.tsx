import { Provider as AnalyticsProvider } from "@v1/analytics/client";
import type { Metadata } from "next";
import { headers } from "next/headers";
import Script from "next/script";
import { AuthProvider } from "../lib/auth-context";

interface CustomMetadata extends Metadata {
  env?: Record<string, string>;
}

// Create a script element with environment variables
const EnvScript = ({ env }: { env: Record<string, string> }) => {
  const envString = JSON.stringify(env);
  // Safely encode the JSON string to prevent XSS
  const encodedEnv = Buffer.from(envString).toString("base64");
  return (
    <>
      <script
        id="env-script-data"
        type="application/json"
        data-env={encodedEnv}
      />
      <Script id="env-script-init" strategy="beforeInteractive">{`
        try {
          const envScript = document.getElementById('env-script-data');
          if (envScript) {
            const encodedData = envScript.getAttribute('data-env');
            const decodedData = atob(encodedData);
            window.__ENV__ = JSON.parse(decodedData);
          }
        } catch (error) {
          console.error('Failed to initialize environment variables:', error);
        }
      `}</Script>
    </>
  );
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Get environment variables from headers
  const headersList = headers();
  const envVars = headersList.get("x-next-env");
  const env = envVars ? JSON.parse(envVars) : {};

  return (
    <html lang="en">
      <head>
        <EnvScript env={env} />
      </head>
      <body className="min-h-screen bg-background">
        <AuthProvider>
          <AnalyticsProvider />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}

// Inject environment variables into page props
export async function generateMetadata(): Promise<CustomMetadata> {
  const headersList = headers();
  const envVars = headersList.get("x-next-env");
  const env = envVars ? JSON.parse(envVars) : {};

  return {
    title: "App",
    description: "Your app description",
    env,
  };
}
