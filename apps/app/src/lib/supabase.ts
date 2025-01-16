import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

let supabase: ReturnType<typeof createClient> | undefined;

export function getSupabaseClient() {
  if (typeof window === "undefined") {
    // Server-side: Always create a new instance
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  // Client-side: Use singleton pattern
  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        storageKey: "app-auth",
      },
    });
  }

  return supabase;
}
