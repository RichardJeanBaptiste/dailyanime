import { useEffect, useState } from "react";
import { supabase } from '../../utils';
// import { useCharacters } from "./lib";
import BulkQuoteImporter from "./BulkQuoteImporter";
// import QuoteEditor from "./QuoteEditor";
// import CharacterEditor from "./CharacterEditor";
import { useNavigate } from "react-router";
import "./dashboard.css";

const TABS = [
  { id: "add", label: "Add quotes" },
  { id: "quotes", label: "Edit quotes" },
  { id: "characters", label: "Characters" },
];



function Workspace({ session }) {
  const [tab, setTab] = useState("add");
  //const { characters, error, reload } = useCharacters();

  return (
    <div className="shell">
      <header className="topbar">
        <h1 className="wordmark">Daily Anime</h1>
        <nav className="tabs" role="tablist">
          {TABS.map((t) => (
            <button key={t.id} role="tab" aria-selected={tab === t.id} className="tab" onClick={() => setTab(t.id)}>
              {t.label}
            </button>
          ))}
        </nav>
        <div className="who">
          <small>{session.user.email}</small>
          <button className="btn ghost" onClick={() => supabase.auth.signOut()}>Sign out</button>
        </div>
      </header>

      <main>
        {tab === "add" && <BulkQuoteImporter /> }
        {tab === "quotes" }
        {tab === "characters" }
      </main>
    </div>
  );
}

export default function Dashboard() {

  const [session, setSession] = useState(undefined);

  let navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => data.subscription.unsubscribe();
  }, []);

    if (session === undefined) return null;

    if(session) {
      return  <Workspace session={session} />
    } else {
      navigate('/');
    }
  }


  /**
   * {tab === "add" && <BulkQuoteImporter characters={characters} onImported={reload} />}
        {tab === "quotes" && <QuoteEditor characters={characters} />}
        {tab === "characters" && <CharacterEditor characters={characters} reload={reload} />}
   */
