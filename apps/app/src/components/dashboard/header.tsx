"use client";

import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardMobileNav } from "../dashboard-mobile-nav";

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = pathname.split("/")[1];
  const { user, signOut } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      await signOut();
      router.push(`/${locale}/sign-in`);
    } catch (error) {
      console.error("Sign out error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link
            href={`/${locale}/dashboard`}
            className="mr-6 flex items-center space-x-2"
          >
            <span className="font-bold">Dashboard</span>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {user && (
            <nav className="flex items-center space-x-2">
              <div className="flex items-center gap-4">
                <div className="text-sm text-muted-foreground">
                  {user.email}
                </div>
                <button
                  type="button"
                  onClick={handleSignOut}
                  disabled={isLoading}
                  className={cn(
                    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors",
                    "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                    "disabled:pointer-events-none disabled:opacity-50",
                    "hover:bg-accent hover:text-accent-foreground",
                    "h-9 px-4 py-2",
                  )}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  {isLoading ? "Signing out..." : "Sign out"}
                </button>
              </div>
            </nav>
          )}
          <div className="flex md:hidden">
            <DashboardMobileNav />
          </div>
        </div>
      </div>
    </header>
  );
}
