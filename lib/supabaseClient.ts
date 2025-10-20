// lib/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

// ====== Client-side Supabase (safe to expose in browser) ======
// Dùng trong React components, fetch data client-side
export const supabaseClient = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!, // phải có NEXT_PUBLIC_ để browser truy cập
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ====== Server-side Supabase (use in API routes / server functions) ======
// Dùng trong API routes, Next.js server functions
export const supabaseServer = createClient(
  process.env.SUPABASE_URL!, // không có NEXT_PUBLIC_ prefix
  process.env.SUPABASE_SERVICE_ROLE_KEY! // full access, chỉ dùng server
);
