import { createClient } from '@supabase/supabase-js';
import { env } from '@v1/env';

export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.SUPABASE_SERVICE_KEY,
  {
    auth: {
      persistSession: false,
    },
  }
);
