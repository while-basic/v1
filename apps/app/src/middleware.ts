import { updateSession } from "@v1/supabase/middleware";
import { createI18nMiddleware } from "next-international/middleware";
import { type NextRequest, NextResponse } from "next/server";

const LOCALES = ["en", "fr"] as const;
const DEFAULT_LOCALE = "en";

const I18nMiddleware = createI18nMiddleware({
  locales: LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: "rewrite",
});

const PUBLIC_PATHS = [
  "/login",
  "/sign-up",
  "/forgot-password",
  "/analytics-test",
];

const getPublicEnvVars = () => {
  const vars = {
    NEXT_PUBLIC_OPENPANEL_CLIENT_ID:
      process.env.NEXT_PUBLIC_OPENPANEL_CLIENT_ID?.trim(),
    OPENPANEL_SECRET_KEY: process.env.OPENPANEL_SECRET_KEY?.trim(),
  };

  // Log missing environment variables in development
  if (process.env.NODE_ENV === "development") {
    for (const [key, value] of Object.entries(vars)) {
      if (!value) {
        console.warn(`Missing required environment variable: ${key}`);
      }
    }
  }

  return vars;
};

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(
    request,
    I18nMiddleware(request),
  );

  // Get the pathname of the request
  const { pathname } = request.nextUrl;
  const locale = pathname.split("/")[1] || DEFAULT_LOCALE;

  // Check if the pathname is missing a locale
  if (!LOCALES.includes(locale as (typeof LOCALES)[number])) {
    // Redirect to the default locale
    return NextResponse.redirect(
      new URL(`/${DEFAULT_LOCALE}${pathname}`, request.url),
    );
  }

  // Get the pathname without the locale prefix
  const pathnameWithoutLocale = pathname.replace(`/${locale}`, "");

  // Check if the path is public
  const isPublicPath = PUBLIC_PATHS.some((path) =>
    pathnameWithoutLocale.startsWith(path),
  );

  // If the path is not public and user is not authenticated,
  // redirect to sign-in page
  if (!isPublicPath && !user) {
    return NextResponse.redirect(new URL(`/${locale}/login`, request.url));
  }

  // If the user is authenticated and trying to access auth pages,
  // redirect to dashboard
  if (
    isPublicPath &&
    user &&
    !pathnameWithoutLocale.startsWith("/analytics-test")
  ) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  // Inject public environment variables
  const publicEnvVars = getPublicEnvVars();
  response.headers.set("x-next-env", JSON.stringify(publicEnvVars));

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
