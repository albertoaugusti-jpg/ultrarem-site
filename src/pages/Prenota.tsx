import { useState, useRef } from "react";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";

const V = "#3d7a6b", BX = "#8b2e2e", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

const APPS_SCRIPT_URL = "https://script.google.com/macros/s/INCOLLA_QUI_IL_TUO_URL/exec";

const fieldStyle: React.CSSProperties = {
  background: CS, border: `1px solid rgba(26,18,9,0.2)`, borderBottom: `2px solid ${NE}`,
  padding: "1rem 1.2rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem",
  color: NE, width: "100%", outline: "none", appearance: "none" as const,
};

const labelStyle: React.CSSProperties = {
  fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em",
  textTransform: "uppercase", color: GC, display: "block", marginBottom: "0.5rem",
};

export default function Prenota() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);
  const { lang } = useLang();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const data = new URLSearchParams();
    const now = new Date().toLocaleString("it-IT", { timeZone: "Europe/Rome" });
    data.append("data", now);
    (["nome", "cognome", "email", "telefono", "interesse", "pacchetto", "messaggio", "come_trovato"] as const).forEach(k => {
      const el = form.elements.namedItem(k) as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;
      if (el) data.append(k, el.value);
    });
    try {
      await fetch(APPS_SCRIPT_URL, { method: "POST", body: data, mode: "no-cors" });
      setStatus("ok");
      formRef.current?.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const heroChecklist = lang === "en"
    ? [
        "Free introductory call with no obligation",
        "We explain the process in detail",
        "No commercial pressure",
        "Guaranteed reply within 24 working hours",
      ]
    : [
        "Chiamata conoscitiva gratuita senza impegno",
        "Ti spieghiamo il processo in dettaglio",
        "Nessuna pressione commerciale",
        "Risposta garantita entro 24 ore lavorative",
      ];

  const callSteps = lang === "en"
    ? [
        { num: "01", text: "We listen to your situation without judgement or rush." },
        { num: "02", text: "We explain in detail how the UltraRem process works." },
        { num: "03", text: "We answer all your questions, even the hardest ones." },
        { num: "04", text: "If there's a fit, we propose the package best suited to you." },
      ]
    : [
        { num: "01", text: "Ascoltiamo la tua situazione senza giudizio e senza fretta." },
        { num: "02", text: "Ti raccontiamo nel dettaglio come funziona il processo UltraRem." },
        { num: "03", text: "Rispondiamo a tutte le tue domande, anche le più difficili." },
        { num: "04", text: "Se c'è sintonia, ti proponiamo il pacchetto più adatto a te." },
      ];

  const infoBlocks = lang === "en"
    ? [
        { label: "Availability", text: "We reply within 24 working hours. The introductory call lasts about 20 minutes and can be held by phone or video call." },
        { label: "Confidentiality", text: "Everything you share in the form and during the call is strictly confidential. We never share your data with third parties." },
        { label: "No commitment", text: "The introductory call is completely free. You can decide not to proceed at any time, without explanation." },
      ]
    : [
        { label: "Disponibilità", text: "Rispondiamo entro 24 ore lavorative. La chiamata conoscitiva dura circa 20 minuti e può essere fatta via telefono o videochimata." },
        { label: "Riservatezza", text: "Tutto ciò che condividi nel modulo e nella chiamata è strettamente riservato. Non condividiamo mai i tuoi dati con terzi." },
        { label: "Nessun impegno", text: "La chiamata conoscitiva è completamente gratuita. Puoi decidere di non procedere in qualsiasi momento, senza spiegazioni." },
      ];

  const selectArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%231a1209' stroke-width='2' fill='none'/%3E%3C/svg%3E")`;
  const selectExtra: React.CSSProperties = { ...fieldStyle, backgroundImage: selectArrow, backgroundRepeat: "no-repeat", backgroundPosition: "right 1.2rem center", paddingRight: "3rem", cursor: "pointer" };

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: "60vh" }}>
        <div className="flex flex-col justify-center" style={{ padding: "6rem 4rem", borderRight: `2px solid ${NE}` }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
            {lang === "en" ? "Book · Free first call" : "Prenota · Prima chiamata gratuita"}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem" }}>
            {lang === "en"
              ? <>Start with a<br /><em style={{ fontStyle: "italic", color: TC }}>conversation.</em></>
              : <>Inizia con una<br /><em style={{ fontStyle: "italic", color: TC }}>conversazione.</em></>}
          </h1>
          <p style={{ fontSize: "1.2rem", color: GC, maxWidth: 460, fontStyle: "italic", lineHeight: 1.7, marginBottom: "2.5rem" }}>
            {lang === "en"
              ? "Fill in the form and we will get back to you within 24 hours to arrange a free 20-minute introductory call."
              : "Compila il modulo e ti ricontatteremo entro 24 ore per organizzare una chiamata conoscitiva gratuita di 20 minuti."}
          </p>
          <div className="flex flex-col gap-4">
            {heroChecklist.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: GI, minWidth: "1.5rem", marginTop: "0.4rem" }}>✓</span>
                <span style={{ fontSize: "1rem", color: GC, lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: NE, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 4rem", gap: "2rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI }}>
            {lang === "en" ? "What to expect" : "Cosa aspettarsi"}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, color: CR, lineHeight: 1.2 }}>
            {lang === "en"
              ? <>A call that <em style={{ color: TC, fontStyle: "italic" }}>changes</em> how you think about memory</>
              : <>Una chiamata che <em style={{ color: TC, fontStyle: "italic" }}>cambia</em> il modo di pensare alla memoria</>}
          </h2>
          <ul className="flex flex-col gap-4">
            {callSteps.map((s, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: GI, minWidth: "2rem", marginTop: "0.3rem" }}>{s.num}</span>
                <span style={{ fontSize: "1rem", color: "rgba(245,240,232,0.75)", lineHeight: 1.5 }}>{s.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FORM SECTION */}
      <div className="grid grid-cols-1 md:grid-cols-5" style={{ borderBottom: `2px solid ${NE}` }}>
        {/* INFO COL */}
        <div className="md:col-span-2 flex flex-col gap-8" style={{ background: CS, padding: "5rem 3.5rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, lineHeight: 1.2 }}>
            {lang === "en"
              ? <>Tell us about <em style={{ color: TC, fontStyle: "italic" }}>yourself.</em></>
              : <>Raccontaci di <em style={{ color: TC, fontStyle: "italic" }}>te.</em></>}
          </h2>
          {infoBlocks.map((b, i) => (
            <div key={i} className="flex flex-col gap-2">
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TC }}>{b.label}</span>
              <p style={{ fontSize: "1.05rem", color: GC, lineHeight: 1.6 }}>{b.text}</p>
            </div>
          ))}

          {/* Prezzi mini */}
          <div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TC, marginBottom: "0.5rem" }}>
              {lang === "en" ? "Thematic minipacks" : "Minipack tematici"}
            </div>
            {[
              { nome: lang === "en" ? "A Memory" : "Un Ricordo", prezzo: "€1.200" },
              { nome: lang === "en" ? "Important Stories" : "Storie Importanti", prezzo: "€2.000" },
              { nome: lang === "en" ? "Great Events to Pass On" : "Grandi Eventi da Tramandare", prezzo: "€2.500" },
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center" style={{ padding: "0.8rem 1rem", border: `1px solid rgba(26,18,9,0.15)`, marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.nome}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: TC }}>{p.prezzo}</span>
              </div>
            ))}
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TC, margin: "1.2rem 0 0.5rem" }}>
              {lang === "en" ? "Full packages" : "Pacchetti completi"}
            </div>
            {[
              { nome: "Essential", prezzo: "€5.000" },
              { nome: "Heritage", prezzo: "€10.000" },
              { nome: "Legacy", prezzo: "€20.000" },
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center" style={{ padding: "0.8rem 1rem", border: `1px solid rgba(26,18,9,0.15)`, marginBottom: "0.5rem" }}>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>{p.nome}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.1rem", fontWeight: 700, color: TC }}>{p.prezzo}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FORM */}
        <div className="md:col-span-3" style={{ padding: "5rem 4rem" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2rem", fontWeight: 900, marginBottom: "0.5rem" }}>
            {lang === "en" ? "Request form" : "Il modulo di richiesta"}
          </h2>
          <p style={{ fontSize: "1rem", color: GC, fontStyle: "italic", marginBottom: "3rem" }}>
            {lang === "en" ? "All fields marked with * are required." : "Tutti i campi contrassegnati con * sono obbligatori."}
          </p>

          {status === "ok" && (
            <div style={{ border: `2px solid ${V}`, background: "rgba(61,122,107,0.08)", padding: "2rem", marginBottom: "2rem" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: V, display: "block", marginBottom: "0.5rem" }}>
                {lang === "en" ? "Request sent ✓" : "Richiesta inviata ✓"}
              </span>
              <p style={{ fontSize: "1.05rem", color: V, lineHeight: 1.6 }}>
                {lang === "en"
                  ? "Thank you! We will reply within 24 working hours to arrange your free introductory call."
                  : "Grazie! Ti risponderemo entro 24 ore lavorative per organizzare la tua chiamata conoscitiva gratuita."}
              </p>
            </div>
          )}
          {status === "error" && (
            <div style={{ border: `2px solid ${BX}`, background: "rgba(139,46,46,0.08)", padding: "2rem", marginBottom: "2rem" }}>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: BX, display: "block", marginBottom: "0.5rem" }}>
                {lang === "en" ? "Sending error" : "Errore nell'invio"}
              </span>
              <p style={{ fontSize: "1.05rem", color: BX, lineHeight: 1.6 }}>
                {lang === "en"
                  ? <>An error occurred. Please write directly to <strong>info@ultrarem.it</strong> or try again shortly.</>
                  : <>Si è verificato un errore. Per favore scrivi direttamente a <strong>info@ultrarem.it</strong> o riprova tra poco.</>}
              </p>
            </div>
          )}

          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
              <div className="flex flex-col">
                <label style={labelStyle}>{lang === "en" ? "First name" : "Nome"} <span style={{ color: TC }}>*</span></label>
                <input name="nome" required placeholder={lang === "en" ? "Your first name" : "Il tuo nome"} style={fieldStyle} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)} />
              </div>
              <div className="flex flex-col">
                <label style={labelStyle}>{lang === "en" ? "Last name" : "Cognome"} <span style={{ color: TC }}>*</span></label>
                <input name="cognome" required placeholder={lang === "en" ? "Your last name" : "Il tuo cognome"} style={fieldStyle} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)} />
              </div>
              <div className="flex flex-col">
                <label style={labelStyle}>Email <span style={{ color: TC }}>*</span></label>
                <input name="email" type="email" required placeholder={lang === "en" ? "your@email.com" : "tua@email.it"} style={fieldStyle} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)} />
              </div>
              <div className="flex flex-col">
                <label style={labelStyle}>{lang === "en" ? "Phone" : "Telefono"}</label>
                <input name="telefono" type="tel" placeholder="+39 XXX XXX XXXX" style={fieldStyle} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)} />
              </div>
            </div>
            <div className="flex flex-col mb-5">
              <label style={labelStyle}>{lang === "en" ? "Reason for interest" : "Motivo di interesse"} <span style={{ color: TC }}>*</span></label>
              <select name="interesse" required style={selectExtra} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)}>
                <option value="">{lang === "en" ? "Select..." : "Seleziona..."}</option>
                <option value="Genitore anziano">{lang === "en" ? "An elderly parent or relative" : "Un genitore o familiare anziano"}</option>
                <option value="Io stesso">{lang === "en" ? "For myself" : "Per me stesso"}</option>
                <option value="Alzheimer">{lang === "en" ? "Alzheimer's or dementia diagnosis" : "Diagnosi di Alzheimer o demenza"}</option>
                <option value="Progetto professionale">{lang === "en" ? "Professional / corporate project" : "Progetto professionale / aziendale"}</option>
                <option value="Altro">{lang === "en" ? "Other" : "Altro"}</option>
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label style={labelStyle}>{lang === "en" ? "Package of interest" : "Pacchetto di interesse"}</label>
              <select name="pacchetto" style={selectExtra} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)}>
                <option value="">{lang === "en" ? "Not sure yet..." : "Non so ancora..."}</option>
                <optgroup label={lang === "en" ? "Thematic minipacks" : "Minipack tematici"}>
                  <option value="Un Ricordo">{lang === "en" ? "A Memory" : "Un Ricordo"} — €1.200</option>
                  <option value="Storie Importanti">{lang === "en" ? "Important Stories" : "Storie Importanti"} — €2.000</option>
                  <option value="Grandi Eventi da Tramandare">{lang === "en" ? "Great Events to Pass On" : "Grandi Eventi da Tramandare"} — €2.500</option>
                </optgroup>
                <optgroup label={lang === "en" ? "Full packages" : "Pacchetti completi"}>
                  <option value="Essential">Essential — €5.000</option>
                  <option value="Heritage">Heritage — €10.000</option>
                  <option value="Legacy">Legacy — €20.000</option>
                </optgroup>
              </select>
            </div>
            <div className="flex flex-col mb-5">
              <label style={labelStyle}>{lang === "en" ? "Your message" : "Il tuo messaggio"} <span style={{ color: TC }}>*</span></label>
              <textarea name="messaggio" required rows={5}
                placeholder={lang === "en"
                  ? "Tell us briefly about your situation and what brought you to contact us..."
                  : "Raccontaci brevemente la tua situazione e cosa ti ha portato a contattarci..."}
                style={{ ...fieldStyle, resize: "vertical", minHeight: 140 }}
                onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)} />
            </div>
            <div className="flex flex-col mb-6">
              <label style={labelStyle}>{lang === "en" ? "How did you find UltraRem?" : "Come hai trovato UltraRem?"}</label>
              <select name="come_trovato" style={selectExtra} onFocus={e => (e.target.style.borderColor = TC)} onBlur={e => (e.target.style.borderColor = NE)}>
                <option value="">{lang === "en" ? "Select..." : "Seleziona..."}</option>
                <option value="Passaparola">{lang === "en" ? "Word of mouth" : "Passaparola"}</option>
                <option value="Social media">Social media</option>
                <option value="Ricerca Google">{lang === "en" ? "Google search" : "Ricerca Google"}</option>
                <option value="Stampa">{lang === "en" ? "Press / media" : "Stampa / media"}</option>
                <option value="Medico o psicologo">{lang === "en" ? "Doctor or psychologist" : "Medico o psicologo"}</option>
                <option value="Altro">{lang === "en" ? "Other" : "Altro"}</option>
              </select>
            </div>
            <div className="flex gap-4 items-start mb-6">
              <input type="checkbox" name="privacy" required id="privacy" style={{ width: 20, height: 20, minWidth: 20, marginTop: "0.3rem", cursor: "pointer", accentColor: TC }} />
              <label htmlFor="privacy" style={{ fontSize: "0.95rem", color: GC, lineHeight: 1.5, cursor: "pointer" }}>
                {lang === "en"
                  ? <>I have read and accept the <a href="#" style={{ color: NE, textDecoration: "underline" }}>Privacy Policy</a>. I understand that my data will be used exclusively to contact me regarding my request. <span style={{ color: TC }}>*</span></>
                  : <>Ho letto e accetto la <a href="#" style={{ color: NE, textDecoration: "underline" }}>Privacy Policy</a>. Comprendo che i miei dati saranno utilizzati esclusivamente per contattarmi riguardo alla mia richiesta. <span style={{ color: TC }}>*</span></>}
              </label>
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <button type="submit" disabled={loading} style={{ background: loading ? "rgba(26,18,9,0.5)" : NE, color: CR, border: `2px solid ${NE}`, padding: "1.2rem 3rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", cursor: loading ? "not-allowed" : "pointer", display: "flex", alignItems: "center", gap: "0.8rem" }}
                onMouseOver={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = TC; }}
                onMouseOut={e => { if (!loading) (e.currentTarget as HTMLElement).style.background = NE; }}>
                {loading
                  ? (lang === "en" ? "Sending..." : "Invio in corso...")
                  : (lang === "en" ? "Send request →" : "Invia la richiesta →")}
              </button>
              <p style={{ fontSize: "0.85rem", color: GC, fontStyle: "italic" }}>
                {lang === "en" ? "Guaranteed reply within 24 working hours" : "Risposta garantita entro 24 ore lavorative"}
              </p>
            </div>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
}
