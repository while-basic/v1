"use client";

import { Card } from "@/components/ui/card";
import { useAuth } from "@/lib/auth-context";
import { cn } from "@/lib/utils";
import { AuthError } from "@supabase/supabase-js";
import { Lock, Mail } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const { signIn, user, isLoading: isAuthLoading } = useAuth();

  // Redirect if user is already signed in
  useEffect(() => {
    console.log("Auth state in sign-in page:", { user, isAuthLoading });

    if (user && !isAuthLoading) {
      console.log("User is signed in, redirecting to dashboard");
      const dashboardUrl = `/${locale}/dashboard`;
      console.log("Redirecting to:", dashboardUrl);
      router.replace(dashboardUrl);
    }
  }, [user, isAuthLoading, locale, router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { email, password } = formData;
      if (!email || !password) {
        throw new Error("Please fill in all fields");
      }

      console.log("Starting sign in process");
      await signIn(email, password);
      console.log("Sign in successful, waiting for auth state update");

      // The useEffect hook will handle redirection once the user state updates
    } catch (err) {
      console.error("Sign in error:", err);
      if (err instanceof AuthError) {
        switch (err.message) {
          case "Invalid login credentials":
            setError("Invalid email or password");
            break;
          case "Email not confirmed":
            setError("Please verify your email address");
            break;
          default:
            setError(err.message);
        }
      } else if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unexpected error occurred");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container relative flex h-[calc(100vh-4rem)] flex-col items-center justify-center">
      <Card className="w-full max-w-[350px] p-8">
        <div className="flex flex-col space-y-2 text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
          <p className="text-sm text-muted-foreground">
            Enter your email to sign in to your account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 text-sm text-red-500 bg-red-50 dark:bg-red-950/50 rounded-md text-center">
              {error}
            </div>
          )}
          <div>
            <div className="relative">
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className={cn(
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
                  "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                  "placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  "pl-8", // Space for icon
                )}
                disabled={isLoading}
                required
              />
              <Mail className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <div>
            <div className="relative">
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={cn(
                  "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors",
                  "file:border-0 file:bg-transparent file:text-sm file:font-medium",
                  "placeholder:text-muted-foreground",
                  "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
                  "disabled:cursor-not-allowed disabled:opacity-50",
                  "pl-8", // Space for icon
                )}
                disabled={isLoading}
                required
              />
              <Lock className="absolute left-2.5 top-2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>
          <button
            type="submit"
            className={cn(
              "inline-flex w-full items-center justify-center rounded-md text-sm font-medium transition-colors",
              "focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
              "disabled:pointer-events-none disabled:opacity-50",
              "bg-primary text-primary-foreground shadow hover:bg-primary/90",
              "h-9 px-4 py-2",
            )}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </button>
        </form>
      </Card>
    </div>
  );
}
