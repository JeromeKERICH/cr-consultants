// src/library/supabaseClient.jsx
import { createClient } from '@supabase/supabase-js';

// These should be in your .env (Vite requires the VITE_ prefix for client-side vars)
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  console.warn('Supabase environment variables are missing. Check .env');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
