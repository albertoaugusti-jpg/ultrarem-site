import { Link } from "wouter";
import { useState } from "react";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";

const V = "#3d7a6b", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

export default function Contatti() {
  const [aperta, setAperta] = useState<number | null>(null);
  const { lang } = useLang();

  const faqs = lang === "en"
    ? [
        { q: "How long does an UltraRem journey take?", a: "It depends on the chosen package. The essential journey includes 6 one-hour sessions over 2–3 months. The full journey (15 sessions) takes about 5–6 months. For the Living Legacy (30 sessions), we plan together the calendar best suited to the situation." },
        { q: "Can I start even without an Alzheimer's diagnosis?", a: "Absolutely. In fact, we encourage you to start before there is any urgency. An identity corpus built in conditions of full clarity is the richest and most authentic. Don't wait for a crisis to take care of your story." },
        { q: "How is my data stored?", a: "Your data is stored in encrypted form on European servers, compliant with GDPR. It is never shared with third parties without your explicit consent. You can request access, modification or complete deletion at any time." },
        { q: "Who can access my corpus?", a: "Only the people you have explicitly designated. You can specify access conditions (e.g., my children can access only after my death, or from now). You have full control for the entire duration of the service." },
        { q: "Is the service available outside Italy?", a: "We currently operate in Italy, with in-person sessions in Milan and Genoa and online sessions for the whole country. We are expanding the service across Europe in 2025, in collaboration with our Cambridge partners." },
        { q: "How can I contact you with a specific question?", a: "Write to info@ultrarem.it with subject 'Information request'. We will reply within 24 working hours. For urgent matters, you can directly book a free introductory call from the Book page." },
      ]
    : [
        { q: "Quanto tempo dura un percorso UltraRem?", a: "Dipende dal pacchetto scelto. Il percorso essenziale prevede 6 sessioni di un'ora ciascuna, distribuite nell'arco di 2-3 mesi. Il percorso completo (15 sessioni) dura circa 5-6 mesi. Per l'Eredità Viva (30 sessioni), pianifichiamo insieme il calendario più adatto alla situazione." },
        { q: "Posso iniziare anche senza una diagnosi di Alzheimer?", a: "Assolutamente sì. Anzi, ti incoraggiamo a iniziare prima che ci sia qualsiasi urgenza. Il corpus identitario costruito in condizioni di piena lucidità è il più ricco e autentico. Non aspettare una crisi per prenderti cura della tua storia." },
        { q: "Come vengono conservati i miei dati?", a: "I tuoi dati vengono archiviati in forma cifrata su server europei, conformi al GDPR. Non vengono mai condivisi con terzi senza il tuo consenso esplicito. Puoi richiedere l'accesso, la modifica o la cancellazione completa in qualsiasi momento." },
        { q: "Chi può accedere al mio corpus?", a: "Solo le persone che hai designato esplicitamente. Puoi specificare condizioni di accesso (ad esempio: i miei figli possono accedere solo dopo la mia morte, oppure da subito). Hai il controllo completo per tutta la durata del servizio." },
        { q: "Il servizio è disponibile fuori dall'Italia?", a: "Attualmente operiamo in Italia, con sessioni in presenza a Milano e Genova e sessioni online per tutto il territorio nazionale. Stiamo espandendo il servizio in Europa nel 2025, in collaborazione con i partner di Cambridge." },
        { q: "Come posso contattarvi per una domanda specifica?", a: "Scrivi a info@ultrarem.it con oggetto 'Richiesta informazioni'. Ti risponderemo entro 24 ore lavorative. Per questioni urgenti, puoi prenotare direttamente una chiamata conoscitiva gratuita dalla pagina Prenota." },
      ];

  const contacts = lang === "en"
    ? [
        { label: "Email", value: "info@ultrarem.it", href: "mailto:info@ultrarem.it" },
        { label: "Phone", value: "010 807 8800", href: "tel:+390108078800" },
        { label: "Registered office", value: "Viale Cassala 30, 20143 Milan" },
      ]
    : [
        { label: "Email", value: "info@ultrarem.it", href: "mailto:info@ultrarem.it" },
        { label: "Telefono", value: "010 807 8800", href: "tel:+390108078800" },
        { label: "Sede legale", value: "Viale Cassala 30, 20143 Milano" },
      ];

  const steps = lang === "en"
    ? [
        { num: "01", text: "Write or book an introductory call — just 20 minutes." },
        { num: "02", text: "We listen without rushing, understanding your situation and goals." },
        { num: "03", text: "If there's a fit, we propose the most suitable journey. No pressure." },
      ]
    : [
        { num: "01", text: "Scrivi o prenota una chiamata conoscitiva — bastano 20 minuti." },
        { num: "02", text: "Ti ascoltiamo senza fretta, capendo la tua situazione e i tuoi obiettivi." },
        { num: "03", text: "Se c'è sintonia, ti proponiamo il percorso più adatto. Senza pressioni." },
      ];

  const locations = lang === "en"
    ? [
        { label: "Registered office", valore: "Viale Cassala 30\n20143 Milan MI\nItaly" },
        { label: "Operations", valore: "Milan · Genoa\nCambridge · Padova" },
        { label: "Hours", valore: "Mon–Fri 9:00–18:00\nSat 10:00–13:00 (online only)" },
        { label: "Online sessions", valore: "Available across Italy\nand in Europe by appointment" },
      ]
    : [
        { label: "Sede legale", valore: "Viale Cassala 30\n20143 Milano MI\nItalia" },
        { label: "Operatività", valore: "Milano · Genova\nCambridge · Padova" },
        { label: "Orari", valore: "Lun–Ven 9:00–18:00\nSab 10:00–13:00 (solo online)" },
        { label: "Sessioni online", valore: "Disponibili su tutta Italia\ne in Europa su appuntamento" },
      ];

  const societaryInfo = lang === "en"
    ? [
        { label: "Company name", valore: "UltraRem S.r.l." },
        { label: "VAT / Tax ID", valore: "IT 14404030968" },
        { label: "REA", valore: "MI-2780427" },
        { label: "Legal form", valore: "SRL — Innovative Start-Up" },
      ]
    : [
        { label: "Ragione sociale", valore: "UltraRem S.r.l." },
        { label: "P.IVA / C.F.", valore: "IT 14404030968" },
        { label: "REA", valore: "MI-2780427" },
        { label: "Forma giuridica", valore: "SRL — Start-up Innovativa" },
      ];

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: "60vh" }}>
        <div className="flex flex-col justify-center" style={{ padding: "6rem 4rem", borderRight: `2px solid ${NE}` }}>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
            {lang === "en" ? "Contact · We are here" : "Contatti · Siamo qui"}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem" }}>
            {lang === "en"
              ? <>Let's talk<br /><em style={{ fontStyle: "italic", color: TC }}>together.</em></>
              : <>Parliamo<br /><em style={{ fontStyle: "italic", color: TC }}>insieme.</em></>}
          </h1>
          <p style={{ fontSize: "1.3rem", color: GC, maxWidth: 480, fontStyle: "italic", lineHeight: 1.6, marginBottom: "3rem" }}>
            {lang === "en"
              ? "Every great project begins with a conversation. Ours is always free, always without commitment."
              : "Ogni grande progetto inizia con una conversazione. La nostra è sempre gratuita, sempre senza impegno."}
          </p>
          <div className="flex flex-col gap-4">
            {contacts.map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "1.5rem", padding: "1.5rem", border: `1px solid rgba(26,18,9,0.15)` }}>
                <div>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GC, display: "block", marginBottom: "0.3rem" }}>{c.label}</span>
                  {c.href ? (
                    <a href={c.href} style={{ fontSize: "1.1rem", fontWeight: 600, color: NE, textDecoration: "none" }}
                      onMouseOver={e => (e.currentTarget.style.color = TC)}
                      onMouseOut={e => (e.currentTarget.style.color = NE)}>{c.value}</a>
                  ) : (
                    <span style={{ fontSize: "1.1rem", fontWeight: 600, color: NE }}>{c.value}</span>
                  )}
                </div>
                <span style={{ marginLeft: "auto", fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", color: TC }}>→</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: NE, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 4rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>
            {lang === "en" ? "How the first contact works" : "Come funziona il primo contatto"}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 900, color: CR, lineHeight: 1.2, marginBottom: "2.5rem" }}>
            {lang === "en"
              ? <>Three steps towards<br />your <em style={{ color: TC, fontStyle: "italic" }}>story.</em></>
              : <>Tre passi verso<br />la tua <em style={{ color: TC, fontStyle: "italic" }}>storia.</em></>}
          </h2>
          <div className="flex flex-col gap-5">
            {steps.map((s, i) => (
              <div key={i} className="flex gap-5 items-start">
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", color: GI, minWidth: "2rem", marginTop: "0.3rem" }}>{s.num}</span>
                <span style={{ fontSize: "1rem", color: "rgba(245,240,232,0.75)", lineHeight: 1.5 }}>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DOVE SIAMO */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}` }}>
        <div style={{ padding: "5rem 4rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem" }}>
            {lang === "en" ? "Where we are" : "Dove siamo"}
          </h2>
          {locations.map((d, i) => (
            <div key={i} style={{ marginBottom: i < 3 ? "2.5rem" : 0, paddingBottom: i < 3 ? "2.5rem" : 0, borderBottom: i < 3 ? `1px solid rgba(26,18,9,0.12)` : "none" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "0.5rem" }}>{d.label}</div>
              <div style={{ fontSize: "1.15rem", lineHeight: 1.6, whiteSpace: "pre-line" }}>{d.valore}</div>
            </div>
          ))}
        </div>
        <div style={{ background: CS, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem", gap: "2rem" }}>
          <div style={{ width: "100%", height: 300, background: NE, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)", textAlign: "center" }}>
              {lang === "en" ? "Registered office" : "Sede legale"}
            </p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontStyle: "italic", color: CR, textAlign: "center" }}>Viale Cassala 30<br />20143 {lang === "en" ? "Milan" : "Milano"}</p>
          </div>
          <a href="https://maps.google.com/?q=Viale+Cassala+30+Milano" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: NE, textDecoration: "none", borderBottom: `1px solid rgba(26,18,9,0.3)` }}
            onMouseOver={e => (e.currentTarget.style.color = TC)}
            onMouseOut={e => (e.currentTarget.style.color = NE)}>
            {lang === "en" ? "Open in Google Maps →" : "Apri in Google Maps →"}
          </a>
        </div>
      </div>

      {/* INFO LEGALE */}
      <div style={{ background: CS, padding: "6rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem" }}>
          {lang === "en" ? "Company information" : "Informazioni societarie"}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ border: `2px solid ${NE}` }}>
          {societaryInfo.map((s, i) => (
            <div key={i} style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? `2px solid ${NE}` : "none" }}>
              <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GC, marginBottom: "0.5rem" }}>{s.label}</div>
              <div style={{ fontSize: "1.1rem", fontWeight: 600, lineHeight: 1.3 }}>{s.valore}</div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div style={{ padding: "6rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, marginBottom: "3rem" }}>
          {lang === "en" ? "Frequently asked questions" : "Domande frequenti"}
        </h2>
        {faqs.map((f, i) => (
          <div key={i} style={{ borderBottom: i < faqs.length - 1 ? `1px solid rgba(26,18,9,0.15)` : "none", padding: "2rem 0" }}>
            <button
              onClick={() => setAperta(aperta === i ? null : i)}
              className="w-full text-left flex justify-between items-center"
              style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            >
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontWeight: 700 }}>{f.q}</span>
              <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "1.2rem", color: TC, minWidth: 24, textAlign: "right" }}>{aperta === i ? "−" : "+"}</span>
            </button>
            {aperta === i && (
              <p style={{ fontSize: "1.05rem", color: GC, lineHeight: 1.75, maxWidth: 780, marginTop: "1rem" }}>{f.a}</p>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ background: NE, color: CR, padding: "8rem 4rem", textAlign: "center", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>
          {lang === "en" ? "Start now" : "Inizia adesso"}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem", color: CR }}>
          {lang === "en"
            ? <>We are ready to<br /><em style={{ fontStyle: "italic", color: TC }}>listen.</em></>
            : <>Siamo pronti ad<br /><em style={{ fontStyle: "italic", color: TC }}>ascoltarti.</em></>}
        </h2>
        <p style={{ fontSize: "1.2rem", color: "rgba(245,240,232,0.65)", maxWidth: 520, margin: "0 auto 3rem", fontStyle: "italic" }}>
          {lang === "en"
            ? "The first conversation is always free. No rush, no commitment."
            : "La prima conversazione è sempre gratuita. Senza fretta, senza impegno."}
        </p>
        <a href="mailto:info@ultrarem.it" style={{ display: "inline-flex", alignItems: "center", gap: "1rem", background: CR, color: NE, padding: "1.4rem 3rem", fontFamily: "'Space Mono', monospace", fontSize: "0.8rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", border: `2px solid ${CR}`, transition: "all 0.3s" }}
          onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = TC; (e.currentTarget as HTMLElement).style.borderColor = TC; (e.currentTarget as HTMLElement).style.color = CR; }}
          onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = CR; (e.currentTarget as HTMLElement).style.borderColor = CR; (e.currentTarget as HTMLElement).style.color = NE; }}>
          {lang === "en" ? "Write to us → info@ultrarem.it" : "Scrivici → info@ultrarem.it"}
        </a>
      </div>

      <Footer />
    </div>
  );
}
