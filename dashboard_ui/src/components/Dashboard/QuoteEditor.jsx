import { useCallback, useEffect, useMemo, useState } from "react";
import { supabase } from "./supabaseClient";
import { TABLES, PAGE_SIZE } from "./config";

export default function QuoteEditor({ characters }) {
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  const [animeFilter, setAnimeFilter] = useState("");
  const [dirty, setDirty] = useState({});       // { id: { field: value } }
  const [selected, setSelected] = useState(new Set());
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);

  const charById = useMemo(() => new Map(characters.map((c) => [c.id, c])), [characters]);
  const byAnime = useMemo(() => {
    const g = {};
    characters.forEach((c) => (g[c.anime] ||= []).push(c));
    return g;
  }, [characters]);

  const dirtyCount = Object.keys(dirty).length;
  const pages = Math.max(1, Math.ceil(count / PAGE_SIZE));

  const load = useCallback(async () => {
    let q = supabase
      .from(TABLES.quotes)
      .select("id, quote, anime, episode, character_id", { count: "exact" })
      .order("id", { ascending: false })
      .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1);
    if (search.trim()) q = q.ilike("quote", `%${search.trim()}%`);
    if (animeFilter.trim()) q = q.ilike("anime", `%${animeFilter.trim()}%`);
    const { data, count, error } = await q;
    if (error) return setNotice({ kind: "error", text: error.message });
    setRows(data);
    setCount(count ?? 0);
    setSelected(new Set());
  }, [page, search, animeFilter]);

  useEffect(() => {
    const t = setTimeout(load, 250); // debounce typing in filters
    return () => clearTimeout(t);
  }, [load]);

  const value = (row, field) => dirty[row.id]?.[field] ?? row[field] ?? "";
  function edit(row, field, v) {
    setDirty((d) => {
      const next = { ...d, [row.id]: { ...d[row.id], [field]: v } };
      if ((row[field] ?? "") === v) delete next[row.id][field];
      if (!Object.keys(next[row.id]).length) delete next[row.id];
      return next;
    });
  }

  async function save() {
    setBusy(true);
    const results = await Promise.all(
      Object.entries(dirty).map(([id, changes]) => {
        const clean = { ...changes };
        if ("character_id" in clean) clean.character_id = clean.character_id ? Number(clean.character_id) : null;
        if ("episode" in clean) clean.episode = clean.episode.trim() || null;
        return supabase.from(TABLES.quotes).update(clean).eq("id", id);
      })
    );
    const failed = results.filter((r) => r.error);
    setBusy(false);
    if (failed.length) return setNotice({ kind: "error", text: `${failed.length} rows didn't save: ${failed[0].error.message}` });
    setNotice({ kind: "success", text: `Saved ${results.length} quotes.` });
    setDirty({});
    load();
  }

  async function removeSelected() {
    if (!confirm(`Delete ${selected.size} quotes? This can't be undone.`)) return;
    setBusy(true);
    const { error } = await supabase.from(TABLES.quotes).delete().in("id", [...selected]);
    setBusy(false);
    if (error) return setNotice({ kind: "error", text: error.message });
    setNotice({ kind: "success", text: `Deleted ${selected.size} quotes.` });
    load();
  }

  const toggle = (id) => setSelected((s) => { const n = new Set(s); n.has(id) ? n.delete(id) : n.add(id); return n; });
  const allOnPage = rows.length > 0 && rows.every((r) => selected.has(r.id));

  return (
    <section className="panel">
      <header className="panel-head">
        <h2>Edit quotes</h2>
        <p>{count} quotes in the database. Edit any cell, then save all changes at once.</p>
      </header>

      <div className="filters">
        <input type="search" placeholder="Search quote text" value={search}
          onChange={(e) => { setSearch(e.target.value); setPage(0); }} disabled={dirtyCount > 0} />
        <input type="search" placeholder="Filter by anime" value={animeFilter}
          onChange={(e) => { setAnimeFilter(e.target.value); setPage(0); }} disabled={dirtyCount > 0} />
      </div>

      {notice && <p className={`notice ${notice.kind}`} role="status">{notice.text}</p>}

      <div className="table-wrap">
        <table className="grid">
          <thead>
            <tr>
              <th className="narrow">
                <input type="checkbox" checked={allOnPage} aria-label="Select all on this page"
                  onChange={() => setSelected(allOnPage ? new Set() : new Set(rows.map((r) => r.id)))} />
              </th>
              <th>Quote</th><th>Character</th><th>Anime</th><th>Ep.</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.id} className={dirty[r.id] ? "is-dirty" : ""}>
                <td className="narrow"><input type="checkbox" checked={selected.has(r.id)} onChange={() => toggle(r.id)} aria-label="Select quote" /></td>
                <td className="quote-cell">
                  <textarea className="bubble" rows={2} value={value(r, "quote")}
                    onChange={(e) => edit(r, "quote", e.target.value)} aria-label="Quote" />
                </td>
                <td>
                  <select value={value(r, "character_id")} onChange={(e) => edit(r, "character_id", e.target.value ? Number(e.target.value) : null)} aria-label="Character">
                    <option value="">Unlinked</option>
                    {Object.entries(byAnime).map(([anime, list]) => (
                      <optgroup key={anime} label={anime}>
                        {list.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
                      </optgroup>
                    ))}
                  </select>
                  {r.character_id && !charById.has(r.character_id) && <small className="muted">Missing character #{r.character_id}</small>}
                </td>
                <td><input value={value(r, "anime")} onChange={(e) => edit(r, "anime", e.target.value)} aria-label="Anime" /></td>
                <td className="narrow"><input value={value(r, "episode")} onChange={(e) => edit(r, "episode", e.target.value)} aria-label="Episode" /></td>
              </tr>
            ))}
            {!rows.length && <tr><td colSpan={5} className="empty">No quotes match these filters. Clear them or add quotes in the Add quotes tab.</td></tr>}
          </tbody>
        </table>
      </div>

      <div className="row-actions spread">
        <div className="pager">
          <button className="btn ghost" disabled={page === 0 || dirtyCount > 0} onClick={() => setPage((p) => p - 1)}>Previous</button>
          <span>Page {page + 1} of {pages}</span>
          <button className="btn ghost" disabled={page + 1 >= pages || dirtyCount > 0} onClick={() => setPage((p) => p + 1)}>Next</button>
          {dirtyCount > 0 && <small className="muted">Save or discard to change page</small>}
        </div>
        <div className="row-actions">
          {selected.size > 0 && <button className="btn danger" onClick={removeSelected} disabled={busy}>Delete {selected.size}</button>}
          <button className="btn ghost" onClick={() => setDirty({})} disabled={!dirtyCount || busy}>Discard</button>
          <button className="btn primary" onClick={save} disabled={!dirtyCount || busy}>
            {busy ? "Saving…" : `Save ${dirtyCount || ""} changes`}
          </button>
        </div>
      </div>
    </section>
  );
}
