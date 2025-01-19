import type { SupabaseClient } from "@supabase/supabase-js";
import type { Database } from "./db";

export type Client = SupabaseClient<Database>;

export * from "./db";

export type Database = {
  public: {
    Tables: {
      [key: string]: any;
    };
    Views: {
      [key: string]: any;
    };
    Functions: {
      [key: string]: any;
    };
  };
};
