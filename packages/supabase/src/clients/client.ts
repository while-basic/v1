import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "../types";

export const createClient = () => {
  if (typeof window === "undefined") {
    throw new Error("createClient can only be used in the browser");
  }

  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
};
