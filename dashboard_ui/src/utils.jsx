
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const TABLES = {
  quotes: "quotes",
  characters: "characters",
};


export const IMPORT_CHUNK = 500; 
export const PAGE_SIZE = 25;     

export const supabase = createClient(supabaseUrl, supabaseKey);
        