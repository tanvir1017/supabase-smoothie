import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_PBULIC_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_SUPABASE_ANON_PUBLIC_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
