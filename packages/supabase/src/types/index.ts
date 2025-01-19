import type { SupabaseClient } from "@supabase/supabase-js";

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

export type Client = SupabaseClient<Database>;

export * from "./db";
