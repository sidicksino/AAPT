/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

// Access environment variables efficiently
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Validate environment variables to fail fast if missing
if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
        'Missing Supabase environment variables. Please check your .env.local file.'
    );
}

// Create the Supabase client
export const supabase = createClient(
    supabaseUrl || '',
    supabaseAnonKey || ''
);
