"use client";

import { getSupabaseClient } from "@/lib/supabase";
import type { User } from "@supabase/supabase-js";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: User | null;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = getSupabaseClient();

  useEffect(() => {
    console.log("Setting up auth state listener");

    // Check active sessions and sets the user
    const initializeAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();
        console.log(
          "Initial session check:",
          session ? "Session found" : "No session",
        );
        setUser(session?.user ?? null);
      } catch (error) {
        console.error("Error getting session:", error);
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();

    // Listen for changes on auth state (signed in, signed out, etc.)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log(
        "Auth state changed:",
        event,
        session ? "Session exists" : "No session",
      );
      setUser(session?.user ?? null);

      // Ensure we're not in a loading state after auth changes
      setIsLoading(false);
    });

    return () => {
      console.log("Cleaning up auth listener");
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    setIsLoading(true);
    console.log("Signing in with email:", email);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        console.error("Sign in error:", error);
        throw error;
      }

      console.log("Sign in successful:", data.user?.email);
      setUser(data.user);
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    setIsLoading(true);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
        throw error;
      }
      console.log("Sign out successful");
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    user,
    isLoading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
