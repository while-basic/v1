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

const PUBLIC_PATHS = ["/login", "/sign-up", "/forgot-password"];

export async function middleware(request: NextRequest) {
  const { response, user } = await updateSession(
    request,
    I18nMiddleware(request),
  );

  // Get the pathname of the request (e.g. /, /about, /blog/first-post)
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
  if (isPublicPath && user) {
    return NextResponse.redirect(new URL(`/${locale}/dashboard`, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|api|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
