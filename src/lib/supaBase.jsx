import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://YOUR_PROJECT_ID.supabase.co"; // 🔁 Replace with your Supabase URL
const supabaseKey = "YOUR_PUBLIC_ANON_KEY"; // 🔁 Replace with your anon/public key

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
