import { createClient } from "@supabase/supabase-js";

const supabase_url = "https://dmkxiaphkvmmnzdgviro.supabase.co";
const supabase_anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRta3hpYXBoa3ZtbW56ZGd2aXJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY3MTk2MjYsImV4cCI6MjA2MjI5NTYyNn0.gOPYCNwkPu4CEgUEk9mfoUVYLZsMcNXQJbfVU2GkENk";

export const supabase = createClient(supabase_url, supabase_anonKey);
