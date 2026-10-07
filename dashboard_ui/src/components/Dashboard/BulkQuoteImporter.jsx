import { useMemo, useState } from "react";
import { supabase, TABLES, IMPORT_CHUNK } from "../../utils";
//import { charKey, parseBulk } from "./lib";
import Papa from 'papaparse';
import { useQuoteContext } from "../QuoteContext";

const blankRow = () => ({ key: crypto.randomUUID(), quote: "", character: "", anime: "", episode: "" });

const SAMPLE = `quote,character,anime,episode
"People's lives don't end, when they die. It ends when they lose faith.",Itachi Uchiha,Naruto Shippuden,
"If you don't ta,ke risks, you can't crea,te a future.",Monkey D. Luffy,One Piece,`;



export default function BulkQuoteImporter() {
  const [raw, setRaw] = useState("");
  const [rows, setRows] = useState([]);
  const [showPreview, setShowPreview] = useState(false);
  const [createMissing, setCreateMissing] = useState(true);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);
  
  const { quotesQuery, charQuery } = useQuoteContext();


  function loadPreview () {
    const result = Papa.parse(raw, {
        header: true,
        skipEmptyLines: true,
    });

    result.data.map((x) => {
      if(!x.key) {
        x.key = crypto.randomUUID()
      }
      
    })

    setRows((prev) => [
        ...prev,
        ...result.data
    ]);

    setShowPreview(true);
  }

  async function readFile(e) {
    const file = e.target.files?.[0];
    if (file) setRaw(await file.text());
    e.target.value = "";
  }


  const update = (key, field, value) => setRows((rs) => rs.map((r) => (r.key === key ? { ...r, [field]: value } : r)));

  const remove = (key) => setRows((rs) => rs.filter((r) => r.key !== key));

  const checkQuote = () => {};
  const checkChar = () => {};
  const checkAnime = () => {};
 
  return (
    <section className="panel">
      <header className="panel-head">
        <h2>Add quotes</h2>
        <p>Paste CSV or JSON, or upload a file. Columns:  character, anime, quote</p>
      </header>

      <div className="paste-area">
        <textarea
          value={raw}
          onChange={(e) => setRaw(e.target.value)}
          placeholder={SAMPLE}
          rows={6}
          spellCheck={false}
        />
        <div className="row-actions">
          <label className="btn ghost">
            Upload file
            <input type="file" accept=".csv,.tsv,.json,.txt" onChange={readFile} hidden />
          </label>
          <button className="btn" onClick={loadPreview} disabled={!raw.trim()}>Preview rows</button>
        </div>
      </div>

      {notice && <p className={`notice ${notice.kind}`} role="status">{notice.text}</p>}

      <p>{charQuery.isLoading ? "Loading" : ""}</p>
      <p>{charQuery.isError ? "Error" : ""}</p>
      <p onClick={() => console.log(charQuery.data)}>{charQuery.data ? charQuery.data[0].name : ""}</p>
      

      {showPreview ? <>
        <div className="summary">
          <span>{rows.length} rows</span>
          { <span className="tag ok"> matched</span>}
          { <span className="tag new"> new character</span>}
          { <span className="tag warn"> unlinked</span>}
          { <span className="tag error"> need fixing</span>}
          <label className="check">
            <input type="checkbox" onChange={(e) => setCreateMissing(e.target.checked)} />
            Create characters that don't exist yet
          </label>
        </div>

        <div className="table-wrap">
            <table className="grid">
              <thead>
                <tr><th>Quote</th><th>Character</th><th>Anime</th><th>Check</th><th /></tr>
              </thead>
              <tbody>
                {rows.map((r, index) => (
                  <tr key={r.key} className={`lvl-`}>

                    <td className="quote-cell">
                      <textarea className="bubble" value={r.quote} onChange={(e) => update(r.key, "quote", e.target.value)} rows={2}  aria-label="Quote" />
                    </td>

                    <td>
                      <input value={r.character} list="char-names"  onChange={(e) => update(r.key, "character", e.target.value)}  aria-label="Character" />
                    </td>
                    
                    <td>
                      <input value={r.anime} list="anime-names" onChange={(e) => update(r.key, "anime", e.target.value)} aria-label="Anime" />
                    </td>
                    
                    
                    <td><button className="icon-btn" onClick={() => remove(r.key)} aria-label="Remove row">×</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
        </div>
      </> : <></>}

      
    </section>
  );
}

/**
 * 
 * {checked.length > 0 && (
        <>
          <div className="summary">
            <span>{checked.length} rows</span>
            {counts.ok && <span className="tag ok">{counts.ok} matched</span>}
            {counts.new && <span className="tag new">{counts.new} new character</span>}
            {counts.warn && <span className="tag warn">{counts.warn} unlinked</span>}
            {counts.error && <span className="tag error">{counts.error} need fixing</span>}
            <label className="check">
              <input type="checkbox" checked={createMissing} onChange={(e) => setCreateMissing(e.target.checked)} />
              Create characters that don't exist yet
            </label>
          </div>

          <div className="table-wrap">
            <table className="grid">
              <thead>
                <tr><th>Quote</th><th>Character</th><th>Anime</th><th>Ep.</th><th>Check</th><th /></tr>
              </thead>
              <tbody>
                {checked.map((r) => (
                  <tr key={r.key} className={`lvl-${r.status.level}`}>
                    <td className="quote-cell">
                      <textarea className="bubble" value={r.quote} rows={2}
                        onChange={(e) => update(r.key, "quote", e.target.value)} aria-label="Quote" />
                    </td>
                    <td><input value={r.character} list="char-names"
                      onChange={(e) => update(r.key, "character", e.target.value)} aria-label="Character" /></td>
                    <td><input value={r.anime} list="anime-names"
                      onChange={(e) => update(r.key, "anime", e.target.value)} aria-label="Anime" /></td>
                    <td className="narrow"><input value={r.episode}
                      onChange={(e) => update(r.key, "episode", e.target.value)} aria-label="Episode" /></td>
                    <td className="status">{r.status.msg}</td>
                    <td><button className="icon-btn" onClick={() => remove(r.key)} aria-label="Remove row">×</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <datalist id="char-names">{characters.map((c) => <option key={c.id} value={c.name} />)}</datalist>
          <datalist id="anime-names">{[...new Set(characters.map((c) => c.anime))].map((a) => <option key={a} value={a} />)}</datalist>

          <div className="row-actions end">
            <button className="btn ghost" onClick={() => setRows([])} disabled={busy}>Clear preview</button>
            <button className="btn primary" onClick={runImport} disabled={busy || !importable.length}>
              {busy ? "Importing…" : `Import ${importable.length} quotes`}
            </button>
          </div>
        </>
      )}


        // 

  // async function runImport() {
  //   setBusy(true);
  //   setNotice(null);
  //   try {
  //     const map = new Map(charMap);

  //     if (createMissing) {
  //       const missing = new Map();
  //       importable.filter((r) => r.status.level === "new").forEach((r) =>
  //         missing.set(charKey(r.character, r.anime), { name: r.character.trim(), anime: r.anime.trim() })
  //       );
  //       if (missing.size) {
  //         const { data, error } = await supabase
  //           .from(TABLES.characters)
  //           .upsert([...missing.values()], { onConflict: "name,anime" })
  //           .select("id, name, anime");
  //         if (error) throw error;
  //         data.forEach((c) => map.set(charKey(c.name, c.anime), c));
  //       }
  //     }

  //     const payload = importable.map((r) => ({
  //       quote: r.quote.trim(),
  //       anime: r.anime.trim(),
  //       episode: r.episode.trim() || null,
  //       character_id: r.character.trim() ? map.get(charKey(r.character, r.anime))?.id ?? null : null,
  //     }));

  //     let done = 0;
  //     for (let i = 0; i < payload.length; i += IMPORT_CHUNK) {
  //       const { error } = await supabase.from(TABLES.quotes).insert(payload.slice(i, i + IMPORT_CHUNK));
  //       if (error) throw new Error(`${error.message} (after ${done} rows were saved)`);
  //       done += Math.min(IMPORT_CHUNK, payload.length - i);
  //     }

  //     const imported = new Set(importable.map((r) => r.key));
  //     setRows((rs) => rs.filter((r) => !imported.has(r.key)));
  //     setNotice({ kind: "success", text: `Imported ${done} quotes.` });
  //     onImported?.();
  //   } catch (e) {
  //     setNotice({ kind: "error", text: `Import stopped: ${e.message}` });
  //   } finally {
  //     setBusy(false);
  //   }
  // }




  // const charMap = useMemo(
  //   () => new Map(characters.map((c) => [charKey(c.name, c.anime), c])),
  //   [characters]
  // );

  // // Validate every row against existing characters and the rest of the batch
  // const checked = useMemo(() => {
  //   const seen = new Set();
  //   return rows.map((r) => {
  //     const dupKey = r.quote.trim().toLowerCase();
  //     let status;
  //     if (!r.quote.trim()) status = { level: "error", msg: "Quote is empty" };
  //     else if (!r.anime.trim()) status = { level: "error", msg: "Anime is empty" };
  //     else if (seen.has(dupKey)) status = { level: "error", msg: "Same quote appears earlier in this batch" };
  //     else if (!r.character.trim()) status = { level: "warn", msg: "No character, will import unlinked" };
  //     else if (charMap.has(charKey(r.character, r.anime))) status = { level: "ok", msg: "Character found" };
  //     else status = createMissing
  //       ? { level: "new", msg: "New character will be created" }
  //       : { level: "warn", msg: "Character not found, will import unlinked" };
  //     seen.add(dupKey);
  //     return { ...r, status };
  //   });
  // }, [rows, charMap, createMissing]);

  // const counts = checked.reduce((a, r) => ({ ...a, [r.status.level]: (a[r.status.level] || 0) + 1 }), {});
  // const importable = checked.filter((r) => r.status.level !== "error");

 * 
 */
