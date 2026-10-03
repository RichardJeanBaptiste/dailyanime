import { useCallback, useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { TABLES } from "./config";

export const charKey = (name = "", anime = "") =>
  `${name.trim().toLowerCase()}|${anime.trim().toLowerCase()}`;

// Supabase caps responses at 1000 rows, so page through everything.
export async function fetchAll(buildQuery, step = 1000) {
  let out = [];
  for (let from = 0; ; from += step) {
    const { data, error } = await buildQuery().range(from, from + step - 1);
    if (error) throw error;
    out = out.concat(data);
    if (data.length < step) return out;
  }
}

export function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const reload = useCallback(async () => {
    setLoading(true);
    try {
      const rows = await fetchAll(() =>
        supabase
          .from(TABLES.characters)
          .select(`id, name, anime, image_url, description, ${TABLES.quotes}(count)`)
          .order("anime")
          .order("name")
      );
      setCharacters(
        rows.map((c) => ({ ...c, quoteCount: c[TABLES.quotes]?.[0]?.count ?? 0 }))
      );
      setError(null);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { reload(); }, [reload]);
  return { characters, loading, error, reload };
}

// ---- Bulk parsing: CSV, TSV, or JSON array ----
const HEADER_ALIASES = {
  quote: ["quote", "text", "line", "quote_text"],
  character: ["character", "character_name", "name", "speaker"],
  anime: ["anime", "series", "show", "title"],
  episode: ["episode", "ep"],
};

function normalise(obj) {
  const lower = Object.fromEntries(
    Object.entries(obj).map(([k, v]) => [k.trim().toLowerCase(), v])
  );
  const pick = (field) => {
    const k = HEADER_ALIASES[field].find((a) => lower[a] != null);
    return k ? String(lower[k]).trim() : "";
  };
  return { quote: pick("quote"), character: pick("character"), anime: pick("anime"), episode: pick("episode") };
}

export function parseCSV(text) {
  const firstLine = text.split(/\r?\n/)[0] ?? "";
  const delim = firstLine.includes("\t") && !firstLine.includes(",") ? "\t" : ",";
  const rows = [];
  let row = [], field = "", inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"' && text[i + 1] === '"') { field += '"'; i++; }
      else if (c === '"') inQuotes = false;
      else field += c;
    } else if (c === '"') inQuotes = true;
    else if (c === delim) { row.push(field); field = ""; }
    else if (c === "\n" || c === "\r") {
      if (c === "\r" && text[i + 1] === "\n") i++;
      row.push(field); rows.push(row); row = []; field = "";
    } else field += c;
  }
  if (field || row.length) { row.push(field); rows.push(row); }
  return rows.filter((r) => r.some((v) => v.trim()));
}

export function parseBulk(text) {
  const trimmed = text.trim();
  if (!trimmed) return [];
  if (trimmed.startsWith("[") || trimmed.startsWith("{")) {
    const parsed = JSON.parse(trimmed);
    return (Array.isArray(parsed) ? parsed : [parsed]).map(normalise);
  }
  const [header, ...body] = parseCSV(trimmed);
  return body.map((cells) =>
    normalise(Object.fromEntries(header.map((h, i) => [h, cells[i] ?? ""])))
  );
}
