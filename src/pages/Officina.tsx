import { useEffect, useRef, useState } from "react";
import { Page, Hero, Sec, Cols, kicker, btn, RED, INK, GREY, PALE, BODONI, BLACK } from "@/components/Mag";

// Pagina di lavoro, non linkata nel menu e con noindex. Le immagini restano nel browser (localStorage).
const STYLE = "Illustrazione editoriale in stile pubblicità italiana anni Ottanta (Milano), colori piatti e un po' di grana da stampa: rosso #c8102e, nero inchiostro, bianco e crema. Figure stilizzate, senza volti riconoscibili e senza testo né scritte nell'immagine. Formato orizzontale 16:10, composizione semplice con molto spazio libero.";

const SLOTS = [
  { id: "t1", file: "tappa-1-diario", t: "1 · Cominci dal Diario", p: "Una persona seduta a un tavolo di casa, di sera, parla con un piccolo dispositivo luminoso (il companion) accanto a un quaderno aperto e a una tazza. Atmosfera intima, nessuna fretta." },
  { id: "t2", file: "tappa-2-psicologo", t: "2 · Incontri lo psicologo", p: "Due poltrone una di fronte all'altra in uno studio luminoso: la persona racconta, lo psicologo ascolta prendendo appunti. Sul tavolino una lampada e un registratore. Tono sereno e professionale." },
  { id: "t3", file: "tappa-3-progetto", t: "3 · Firmi il tuo progetto", p: "Una mano che firma un foglio su una scrivania, accanto a una penna stilografica e a un fascicolo con sigillo rosso. Un'altra mano indica un passaggio del testo. Inquadratura ravvicinata dall'alto." },
  { id: "t4", file: "tappa-4-forma", t: "4 · Scegli la tua forma", p: "Uno studio di ripresa semplice: una sedia, un microfono davanti a una persona stilizzata e, sullo sfondo, uno schermo che ne mostra la sagoma riflessa come avatar. Luci di scena ben visibili." },
  { id: "t5", file: "tappa-5-accessi", t: "5 · Decidi chi può parlarti", p: "Una porta con alcune chiavi di forme diverse appese accanto, solo una infilata nella serratura; oltre la porta, una luce calda. Simboleggia chi sceglie chi può entrare." },
  { id: "t6", file: "tappa-6-custodia", t: "6 · Custodiamo", p: "Una grande libreria-archivio luminosa con cassetti etichettati e una persona stilizzata che ne chiude uno con cura. Atmosfera di conservazione sicura e silenziosa, luce calda." },
];

const STATI = ["Da fare", "Generata", "Approvata"] as const;
type St = { img?: string; stato: (typeof STATI)[number] };
const KEY = "ur-officina-v1";

const load = (): Record<string, St> => { try { return JSON.parse(localStorage.getItem(KEY) || "{}"); } catch { return {}; } };
const save = (d: Record<string, St>) => { try { localStorage.setItem(KEY, JSON.stringify(d)); return true; } catch { return false; } };

function shrink(file: File): Promise<string> {
  return new Promise((res, rej) => {
    const r = new FileReader();
    r.onerror = () => rej(new Error("lettura"));
    r.onload = () => {
      const im = new Image();
      im.onerror = () => rej(new Error("immagine"));
      im.onload = () => {
        const k = Math.min(1, 1600 / im.width);
        const c = document.createElement("canvas");
        c.width = Math.round(im.width * k); c.height = Math.round(im.height * k);
        c.getContext("2d")!.drawImage(im, 0, 0, c.width, c.height);
        res(c.toDataURL("image/jpeg", 0.85));
      };
      im.src = String(r.result);
    };
    r.readAsDataURL(file);
  });
}

export default function Officina() {
  const [d, setD] = useState<Record<string, St>>({});
  const [msg, setMsg] = useState("");
  const [copied, setCopied] = useState("");
  const inp = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    setD(load());
    const m = document.createElement("meta"); m.name = "robots"; m.content = "noindex,nofollow";
    document.head.appendChild(m);
    return () => { document.head.removeChild(m); };
  }, []);

  const put = (id: string, patch: Partial<St>) => setD(prev => {
    const n = { ...prev, [id]: { stato: "Da fare" as const, ...prev[id], ...patch } };
    if (!save(n)) setMsg("Memoria del browser piena: scarica le immagini già pronte e svuota qualche casella.");
    return n;
  });

  const take = async (id: string, f?: File | null) => {
    if (!f || !f.type.startsWith("image/")) return;
    try { const img = await shrink(f); put(id, { img, stato: d[id]?.stato === "Approvata" ? "Approvata" : "Generata" }); setMsg(""); }
    catch { setMsg("Non riesco a leggere questo file: prova con un PNG o un JPG."); }
  };

  const copy = async (id: string, text: string) => {
    try { await navigator.clipboard.writeText(text); setCopied(id); setTimeout(() => setCopied(""), 1800); } catch { setMsg("Copia non riuscita: seleziona il testo a mano."); }
  };

  const fatte = SLOTS.filter(s => d[s.id]?.stato === "Approvata").length;

  return (
    <Page>
      <Hero dark k="Spazio di lavoro" title={<>Le immagini del <em style={{ color: "#ff3b52" }}>processo.</em></>} lead="Pagina riservata: non compare nel menu e non viene indicizzata. Qui prepari le sei illustrazioni delle tappe." />

      <Sec k="Stile comune" title="Incolla questo in ogni richiesta.">
        <p style={{ margin: "0 0 14px", maxWidth: 820, fontSize: 16, lineHeight: 1.6 }}>{STYLE}</p>
        <button onClick={() => copy("stile", STYLE)} style={{ ...btn(INK, "#fff"), border: "none" }}>{copied === "stile" ? "Copiato" : "Copia lo stile"}</button>
        <p style={{ margin: "18px 0 0", maxWidth: 820, fontSize: 14, color: GREY }}>Consiglio: genera tutte le immagini nella stessa conversazione di ChatGPT, così lo stile resta uniforme. Le immagini finali devono essere orizzontali (16:10) e senza scritte.</p>
      </Sec>

      <Sec k={`Tappe · ${fatte} di ${SLOTS.length} approvate`} title="Una casella per tappa." bg={PALE}>
        {msg && <p style={{ margin: "0 0 16px", color: RED, fontWeight: 700 }}>{msg}</p>}
        <Cols gap={20}>
          {SLOTS.map(s => {
            const st = d[s.id];
            const prompt = `${s.p} ${STYLE}`;
            return (
              <div key={s.id} style={{ flex: "1 1 360px", maxWidth: 560, background: "#fff", border: `2px solid ${st?.stato === "Approvata" ? "#1d7a3f" : INK}`, display: "flex", flexDirection: "column" }}>
                <div
                  onDragOver={e => e.preventDefault()}
                  onDrop={e => { e.preventDefault(); take(s.id, e.dataTransfer.files?.[0]); }}
                  onClick={() => inp.current[s.id]?.click()}
                  style={{ aspectRatio: "16 / 10", background: "#e9e9e9", borderBottom: `2px solid ${INK}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", overflow: "hidden" }}
                >
                  {st?.img
                    ? <img src={st.img} alt={s.t} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                    : <span style={{ ...kicker(GREY), textAlign: "center", padding: 16 }}>Trascina qui l'immagine<br />o clicca per scegliere</span>}
                  <input ref={el => { inp.current[s.id] = el; }} type="file" accept="image/*" hidden onChange={e => { take(s.id, e.target.files?.[0]); e.target.value = ""; }} />
                </div>
                <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1 }}>{s.t}</div>
                  <div style={kicker(GREY)}>File finale: {s.file}.jpg · 16:10</div>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}><strong>Scena.</strong> {s.p}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: "auto" }}>
                    <button onClick={() => copy(s.id, prompt)} style={{ ...btn(RED, "#fff"), border: "none" }}>{copied === s.id ? "Copiato" : "Copia il prompt"}</button>
                    {st?.img && <a href={st.img} download={`${s.file}.jpg`} style={btn("transparent", INK, `2px solid ${INK}`)}>Scarica</a>}
                    {st?.img && <button onClick={() => put(s.id, { img: undefined, stato: "Da fare" })} style={{ ...btn("transparent", GREY, `1px solid ${GREY}`) }}>Svuota</button>}
                  </div>
                  <label style={{ fontFamily: BLACK, fontSize: 12, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                    Stato{" "}
                    <select value={st?.stato ?? "Da fare"} onChange={e => put(s.id, { stato: e.target.value as St["stato"] })} style={{ fontSize: 14, padding: "6px 8px", marginLeft: 6 }}>
                      {STATI.map(x => <option key={x}>{x}</option>)}
                    </select>
                  </label>
                </div>
              </div>
            );
          })}
        </Cols>
        <p style={{ margin: "24px 0 0", maxWidth: 820, fontSize: 14, color: GREY }}>Le immagini restano solo in questo browser (non sul sito). Quando sono pronte mandale in chat con il nome indicato nella casella e le inserisco io nelle pagine.</p>
      </Sec>
    </Page>
  );
}
