import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://dmkxiaphkvmmnzdgviro.supabase.co";

export const supabase = createClient(supabase_url, supabase_anonKey);
