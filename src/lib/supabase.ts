import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://dmkxiaphkvmmnzdgviro.supabase.co";
const supabase_anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRta3hpYXBoa3ZtbW56ZGd2aXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1NDk0NDYsImV4cCI6MjA2MjEyNTQ0Nn0.2FdiOAccMkeJKDCc36hwHNxXDKu93jYyr03tOYrCjB4";

export const supabase = createClient(supabase_url, supabase_anonKey);
