// lib/supabaseAdmin.ts
import { createClient } from '@supabase/supabase-js';

// Points to your Supabase project URL
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
// Service role key (for admin-like privileges)
const supabaseServiceKey = process.env.SUPABASE_SERVICE_KEY;

export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);