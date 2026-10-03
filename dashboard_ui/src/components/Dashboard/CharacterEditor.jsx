import { useEffect, useMemo, useState } from "react";
import { supabase } from "./supabaseClient";
import { TABLES } from "./config";

const EMPTY = { name: "", anime: "", image_url: "", description: "" };

export default function CharacterEditor({ characters, reload }) {
  const [selectedId, setSelectedId] = useState(null); // null = creating new
  const [draft, setDraft] = useState(EMPTY);
  const [filter, setFilter] = useState("");
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);

  const selected = characters.find((c) => c.id === selectedId);
  useEffect(() => {
    setDraft(selected ? { name: selected.name, anime: selected.anime, image_url: selected.image_url ?? "", description: selected.description ?? "" } : EMPTY);
  }, [selectedId, selected]);

  const visible = useMemo(() => {
    const f = filter.trim().toLowerCase();
    return f ? characters.filter((c) => `${c.name} ${c.anime}`.toLowerCase().includes(f)) : characters;
  }, [characters, filter]);

  const changed = selected
    ? Object.keys(EMPTY).some((k) => (selected[k] ?? "") !== draft[k])
    : Object.values(draft).some((v) => v.trim());
  const valid = draft.name.trim() && draft.anime.trim();

  async function save() {
    setBusy(true);
    const payload = {
      name: draft.name.trim(),
      anime: draft.anime.trim(),
      image_url: draft.image_url.trim() || null,
      description: draft.description.trim() || null,
    };
    const q = selected
      ? supabase.from(TABLES.characters).update(payload).eq("id", selected.id).select().single()
      : supabase.from(TABLES.characters).insert(payload).select().single();
    const { data, error } = await q;
    setBusy(false);
    if (error) {
      const text = error.code === "23505" ? `${payload.name} from ${payload.anime} already exists.` : error.message;
      return setNotice({ kind: "error", text });
    }
    setNotice({ kind: "success", text: selected ? "Character saved." : "Character added." });
    await reload();
    setSelectedId(data.id);
  }

  async function remove() {
    const msg = selected.quoteCount
      ? `Delete ${selected.name}? Their ${selected.quoteCount} quotes will stay but become unlinked.`
      : `Delete ${selected.name}?`;
    if (!confirm(msg)) return;
    setBusy(true);
    const { error } = await supabase.from(TABLES.characters).delete().eq("id", selected.id);
    setBusy(false);
    if (error) return setNotice({ kind: "error", text: error.message });
    setNotice({ kind: "success", text: "Character deleted." });
    setSelectedId(null);
    reload();
  }

  const set = (k) => (e) => setDraft((d) => ({ ...d, [k]: e.target.value }));

  return (
    <section className="panel split">
      <aside className="char-list">
        <div className="char-list-head">
          <input type="search" placeholder="Find a character" value={filter} onChange={(e) => setFilter(e.target.value)} />
          <button className="btn" onClick={() => setSelectedId(null)}>New character</button>
        </div>
        <ul>
          {visible.map((c) => (
            <li key={c.id}>
              <button className={c.id === selectedId ? "char-item active" : "char-item"} onClick={() => setSelectedId(c.id)}>
                <span className="avatar">{c.image_url ? <img src={c.image_url} alt="" /> : c.name[0]}</span>
                <span className="char-meta">
                  <strong>{c.name}</strong>
                  <small>{c.anime}</small>
                </span>
                <span className="count" title="Quotes">{c.quoteCount}</span>
              </button>
            </li>
          ))}
          {!visible.length && <li className="empty">No characters match. Clear the search or add one.</li>}
        </ul>
      </aside>

      <div className="char-form">
        <header className="panel-head">
          <h2>{selected ? `Edit ${selected.name}` : "New character"}</h2>
          {selected && <p>{selected.quoteCount} quotes linked</p>}
        </header>

        {notice && <p className={`notice ${notice.kind}`} role="status">{notice.text}</p>}

        <div className="form-grid">
          <label>Name<input value={draft.name} onChange={set("name")} /></label>
          <label>Anime<input value={draft.anime} onChange={set("anime")} list="anime-options" /></label>
          <label className="full">Image URL<input value={draft.image_url} onChange={set("image_url")} placeholder="https://…" /></label>
          <label className="full">Description<textarea rows={5} value={draft.description} onChange={set("description")} /></label>
        </div>
        <datalist id="anime-options">{[...new Set(characters.map((c) => c.anime))].map((a) => <option key={a} value={a} />)}</datalist>

        {draft.image_url && (
          <figure className="portrait">
            <img src={draft.image_url} alt={`${draft.name || "Character"} portrait`} onError={(e) => (e.currentTarget.style.opacity = 0.2)} />
          </figure>
        )}

        <div className="row-actions spread">
          {selected ? <button className="btn danger" onClick={remove} disabled={busy}>Delete character</button> : <span />}
          <button className="btn primary" onClick={save} disabled={!changed || !valid || busy}>
            {busy ? "Saving…" : selected ? "Save character" : "Add character"}
          </button>
        </div>
      </div>
    </section>
  );
}
