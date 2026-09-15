import { Link } from "wouter";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import cambridgeImg from "@assets/King's_College_al_tramonto_1775509591809.png";
import padovaImg from "@assets/Aula_Magna_dell'Università_di_Padova_1775509591808.png";

const V = "#3d7a6b", BX = "#8b2e2e", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

export default function Ricerca() {
  const { lang } = useLang();

  const workPackages = lang === "en"
    ? [
        { id: "WP1", titolo: "Corpus Design", stato: "Completed", kpi: "12 validated protocols", desc: "Definition of methodologies for the collection and structuring of the identity corpus." },
        { id: "WP2", titolo: "Psychological Validation", stato: "In progress", kpi: "47 sessions analysed", desc: "Clinical validation of narrative collection protocols with real subjects." },
        { id: "WP3", titolo: "AI Ethics Framework", stato: "In progress", kpi: "3 papers under review", desc: "Development of the ethical framework for responsible use of digital identity models." },
        { id: "WP4", titolo: "Privacy & Legal", stato: "Completed", kpi: "100% GDPR compliant", desc: "Legal structuring of the service in collaboration with Dentons International." },
        { id: "WP5", titolo: "User Studies", stato: "Upcoming", kpi: "200 target families", desc: "Longitudinal study on the emotional and psychological impact of using UltraRem in families." },
      ]
    : [
        { id: "WP1", titolo: "Corpus Design", stato: "Completato", kpi: "12 protocolli validati", desc: "Definizione delle metodologie per la raccolta e strutturazione del corpus identitario." },
        { id: "WP2", titolo: "Psychological Validation", stato: "In corso", kpi: "47 sessioni analizzate", desc: "Validazione clinica dei protocolli di raccolta narrativa con soggetti reali." },
        { id: "WP3", titolo: "AI Ethics Framework", stato: "In corso", kpi: "3 paper in revisione", desc: "Sviluppo del framework etico per l'utilizzo responsabile dei modelli identitari digitali." },
        { id: "WP4", titolo: "Privacy & Legal", stato: "Completato", kpi: "GDPR compliant al 100%", desc: "Strutturazione legale del servizio in collaborazione con Dentons International." },
        { id: "WP5", titolo: "User Studies", stato: "Prossimamente", kpi: "200 famiglie target", desc: "Studio longitudinale sull'impatto emotivo e psicologico dell'uso di UltraRem nelle famiglie." },
      ];

  const metodi = lang === "en"
    ? [
        { num: "1", title: "Qualitative collection", text: "Every session follows a semi-structured protocol: open questions, active silence, respect for the person's narrative rhythms. No rush, no rigid framework." },
        { num: "2", title: "Corpus analysis", text: "The collected texts are analysed using computational linguistics methodologies to extract identity patterns, narrative styles, recurring values — all verified by psychologists." },
        { num: "3", title: "Cross-validation", text: "The final corpus is validated by a panel of experts who verify consistency, authenticity and the absence of distortions introduced by the collection or analysis technology." },
      ]
    : [
        { num: "1", title: "Raccolta qualitativa", text: "Ogni sessione segue un protocollo semi-strutturato: domande aperte, silenzio attivo, rispetto dei tempi narrativi della persona. Nessuna fretta, nessuna griglia rigida." },
        { num: "2", title: "Analisi del corpus", text: "I testi raccolti vengono analizzati con metodologie di linguistica computazionale per estrarre pattern identitari, stili narrativi, valori ricorrenti — tutto verificato da psicologi." },
        { num: "3", title: "Validazione incrociata", text: "Il corpus finale viene validato da un panel di esperti che verifica coerenza, autenticità e assenza di distorsioni introdotte dalla tecnologia di raccolta o analisi." },
      ];

  const tableHeaders = lang === "en"
    ? ["ID", "Work Package", "Status", "KPI", "Description"]
    : ["ID", "Work Package", "Stato", "KPI", "Descrizione"];

  const statoColor = (s: string) => {
    if (s === "Completato" || s === "Completed") return V;
    if (s === "In corso" || s === "In progress") return GI;
    return CS;
  };
  const statoTextColor = (s: string) => {
    if (s === "Completato" || s === "Completed") return CR;
    return NE;
  };

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <div style={{ background: CS, padding: "7rem 4rem 5rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
          {lang === "en" ? "Academic Research · Scientific foundations" : "Ricerca Accademica · Fondamenti scientifici"}
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem", maxWidth: 900 }}>
          {lang === "en"
            ? <>The science<br />that <em style={{ fontStyle: "italic", color: TC }}>grounds us.</em></>
            : <>La scienza<br />che <em style={{ fontStyle: "italic", color: TC }}>ci fonda.</em></>}
        </h1>
        <p style={{ fontSize: "1.3rem", color: GC, maxWidth: 680, fontStyle: "italic", lineHeight: 1.6 }}>
          {lang === "en"
            ? "UltraRem is not a technology product. It is a scientifically grounded response to one of the deepest challenges facing humanity today."
            : "UltraRem non è un prodotto tecnologico. È una risposta scientificamente fondata a una delle sfide più profonde dell'umanità contemporanea."}
        </p>
      </div>

      {/* PERCHÉ ACCADEMICA */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}` }}>
        <div className="flex flex-col justify-center" style={{ background: NE, color: CR, padding: "5rem 3rem", borderRight: `2px solid ${NE}` }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "1.5rem" }}>
            {lang === "en" ? "Why research" : "Perché la ricerca"}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.1, color: CR }}>
            {lang === "en"
              ? <>Without science,<br />only<br /><em style={{ color: TC, fontStyle: "italic" }}>technology.</em></>
              : <>Senza scienza,<br />solo<br /><em style={{ color: TC, fontStyle: "italic" }}>tecnologia.</em></>}
          </h2>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center gap-6" style={{ padding: "5rem 4rem" }}>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                The greatest risk in digital memory projects is <strong style={{ color: TC }}>artificial authenticity</strong>: systems that produce plausible but untrue responses, that imitate without understanding, that reassure without being faithful.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                That is why every element of UltraRem — the collection protocols, the analysis methods, the corpus architecture — has been developed and validated with independent academic institutions. <strong style={{ color: TC }}>Research is our compass, not marketing.</strong>
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Il rischio più grande dei progetti di memoria digitale è l'<strong style={{ color: TC }}>autenticità artificiale</strong>: sistemi che producono risposte plausibili ma non vere, che imitano senza capire, che rassicurano senza essere fedeli.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Per questo ogni elemento di UltraRem — i protocolli di raccolta, i metodi di analisi, l'architettura del corpus — è stato sviluppato e validato con istituzioni accademiche indipendenti. <strong style={{ color: TC }}>La ricerca è la nostra bussola, non il marketing.</strong>
              </p>
            </>
          )}
        </div>
      </div>

      {/* PARTNER HEADER */}
      <div style={{ padding: "5rem 4rem 3rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900 }}>
          {lang === "en" ? "Academic partners" : "Partner accademici"}
        </h2>
      </div>

      {/* CAMBRIDGE */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: 480 }}>
        <div className="relative overflow-hidden" style={{ borderRight: `2px solid ${NE}`, minHeight: 380 }}>
          <img src={cambridgeImg} alt="King's College Cambridge" className="absolute inset-0 w-full h-full object-cover object-center" style={{ transition: "transform 1.2s ease" }} />
        </div>
        <div className="flex flex-col justify-center" style={{ padding: "5rem 4rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "1rem" }}>Cambridge, United Kingdom</div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>University of Cambridge</h3>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GC, marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: `1px solid rgba(26,18,9,0.12)` }}>Department of Computer Science & Technology</div>
          <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.75, marginBottom: "2.5rem" }}>
            {lang === "en"
              ? <>The Cambridge team developed the protocols for the <strong style={{ color: NE }}>construction and validation of the identity corpus</strong>. Their research in Ethical AI and Digital Identity underpins UltraRem's approach to the digital representation of the individual.</>
              : <>Il team di Cambridge ha sviluppato i protocolli per la <strong style={{ color: NE }}>costruzione e validazione del corpus identitario</strong>. La loro ricerca in Ethical AI e Digital Identity è alla base dell'approccio UltraRem alla rappresentazione digitale dell'individuo.</>}
          </p>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GC, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <strong style={{ color: TC, fontSize: "0.7rem" }}>{lang === "en" ? "Scientific contacts" : "Referenti scientifici"}</strong>
            <span>Dr. Tomasz Hollanek</span>
            <span>Dr. Katarzyna Nowaczyk-Basinska</span>
          </div>
        </div>
      </div>

      {/* PADOVA */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: 480 }}>
        <div className="flex flex-col justify-center md:order-1" style={{ padding: "5rem 4rem", borderRight: `2px solid ${NE}` }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: BX, marginBottom: "1rem" }}>
            {lang === "en" ? "Padova, Italy" : "Padova, Italia"}
          </div>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, marginBottom: "0.5rem" }}>
            {lang === "en" ? "University of Padova" : "Università degli Studi di Padova"}
          </h3>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GC, marginBottom: "2.5rem", paddingBottom: "2.5rem", borderBottom: `1px solid rgba(26,18,9,0.12)` }}>FISPPA — {lang === "en" ? "Dept. of Philosophy, Sociology, Pedagogy & Applied Psychology" : "Dipartimento di Filosofia, Sociologia, Pedagogia e Psicologia Applicata"}</div>
          <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.75, marginBottom: "2.5rem" }}>
            {lang === "en"
              ? <>Padova brings expertise in <strong style={{ color: NE }}>clinical psychology and thanatology</strong>. Prof. Testoni is one of Europe's foremost experts in the relationship between identity, memory and awareness of death — an essential contribution to founding UltraRem on psychological rigour.</>
              : <>Padova porta l'expertise in <strong style={{ color: NE }}>psicologia clinica e tanatologia</strong>. La Prof.ssa Testoni è una delle massime esperte europee nel rapporto tra identità, memoria e consapevolezza della morte — un contributo essenziale per fondare UltraRem sul rigore psicologico.</>}
          </p>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GC, display: "flex", flexDirection: "column", gap: "0.3rem" }}>
            <strong style={{ color: BX, fontSize: "0.7rem" }}>{lang === "en" ? "Scientific contact" : "Referente scientifico"}</strong>
            <span>Prof.ssa Ines Testoni</span>
          </div>
        </div>
        <div className="relative overflow-hidden md:order-2" style={{ minHeight: 380 }}>
          <img src={padovaImg} alt="Aula Magna Università di Padova" className="absolute inset-0 w-full h-full object-cover object-center" />
        </div>
      </div>

      {/* METODO */}
      <div style={{ background: CS, padding: "6rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
          {lang === "en" ? "The scientific method" : "Il metodo scientifico"}
        </h2>
        <p style={{ fontSize: "1.1rem", color: GC, fontStyle: "italic", marginBottom: "4rem" }}>
          {lang === "en" ? "How we guarantee the quality and authenticity of each corpus" : "Come garantiamo la qualità e l'autenticità di ogni corpus"}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3" style={{ border: `2px solid ${NE}` }}>
          {metodi.map((m, i) => (
            <div key={i} style={{ padding: "3rem 2.5rem", borderRight: i < 2 ? `2px solid ${NE}` : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "4rem", fontWeight: 900, color: TC, lineHeight: 1, marginBottom: "1rem" }}>{m.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{m.title}</h3>
              <p style={{ fontSize: "1rem", color: GC, lineHeight: 1.7 }}>{m.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* DENTONS */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}` }}>
        <div className="flex flex-col justify-center" style={{ background: BX, color: CR, padding: "5rem 3rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 900, color: CR, lineHeight: 1.1, marginBottom: "1rem" }}>Dentons International</h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)" }}>
            {lang === "en" ? "Global legal partner" : "Partner legale globale"}
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center gap-5" style={{ padding: "5rem 4rem" }}>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Dentons is the world's largest law firm by number of lawyers. Their partnership ensures that <strong style={{ color: TC }}>every legal aspect of UltraRem complies with European and international regulations on privacy and digital rights</strong>.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                From structuring user contracts to managing digital inheritance rights, Dentons ensures that your story is protected not only ethically, but also legally.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Dentons è il più grande studio legale al mondo per numero di avvocati. La loro partnership garantisce che <strong style={{ color: TC }}>ogni aspetto legale di UltraRem sia conforme alle normative europee e internazionali sulla privacy e sui diritti digitali</strong>.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Dalla strutturazione dei contratti con gli utenti alla gestione dei diritti di eredità digitale, Dentons assicura che la tua storia sia protetta non solo eticamente, ma anche giuridicamente.
              </p>
            </>
          )}
        </div>
      </div>

      {/* WORK PACKAGES */}
      <div style={{ padding: "6rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
          {lang === "en" ? "Research Work Packages" : "Work Packages di ricerca"}
        </h2>
        <p style={{ fontSize: "1.1rem", color: GC, fontStyle: "italic", marginBottom: "3rem" }}>
          {lang === "en" ? "The current state of our academic research, updated quarterly." : "Lo stato attuale della nostra ricerca accademica, aggiornato trimestralmente."}
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", border: `2px solid ${NE}` }}>
          <thead>
            <tr>
              {tableHeaders.map((h, i) => (
                <th key={i} style={{ background: NE, color: CR, fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", padding: "1rem 1.5rem", textAlign: "left", borderRight: i < 4 ? "1px solid rgba(245,240,232,0.1)" : "none" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {workPackages.map((wp, i) => (
              <tr key={i} style={{ borderBottom: i < workPackages.length - 1 ? `1px solid rgba(26,18,9,0.1)` : "none" }}>
                <td style={{ padding: "1.5rem", borderRight: `1px solid rgba(26,18,9,0.1)`, fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", color: TC, fontWeight: 700 }}>{wp.id}</td>
                <td style={{ padding: "1.5rem", borderRight: `1px solid rgba(26,18,9,0.1)`, fontSize: "1rem", fontWeight: 600 }}>{wp.titolo}</td>
                <td style={{ padding: "1.5rem", borderRight: `1px solid rgba(26,18,9,0.1)`, fontSize: "0.9rem" }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.3rem 0.6rem", background: statoColor(wp.stato), color: statoTextColor(wp.stato) }}>{wp.stato}</span>
                </td>
                <td style={{ padding: "1.5rem", borderRight: `1px solid rgba(26,18,9,0.1)`, fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", color: V }}>{wp.kpi}</td>
                <td style={{ padding: "1.5rem", fontSize: "1rem", color: GC }}>{wp.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="text-center" style={{ background: NE, color: CR, padding: "8rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>
          {lang === "en" ? "Let's build together" : "Costruiamo insieme"}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem", color: CR }}>
          {lang === "en"
            ? <>Research is our<br /><em style={{ fontStyle: "italic", color: TC }}>guarantee.</em></>
            : <>La ricerca è la nostra<br /><em style={{ fontStyle: "italic", color: TC }}>garanzia.</em></>}
        </h2>
        <p style={{ fontSize: "1.2rem", color: "rgba(245,240,232,0.65)", maxWidth: 520, margin: "0 auto 3rem", fontStyle: "italic" }}>
          {lang === "en"
            ? "Start with a conversation. We explain how we work, with no commitment."
            : "Inizia con una conversazione. Ti raccontiamo come lavoriamo, senza impegno."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/prenota"><span className="cursor-pointer inline-block" style={{ background: CR, color: NE, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${CR}` }}
            onMouseOver={e => { e.currentTarget.style.background = TC; e.currentTarget.style.borderColor = TC; e.currentTarget.style.color = CR; }}
            onMouseOut={e => { e.currentTarget.style.background = CR; e.currentTarget.style.borderColor = CR; e.currentTarget.style.color = NE; }}>
            {lang === "en" ? "Book your demo →" : "Prenota la tua demo →"}
          </span></Link>
          <Link href="/demo"><span className="cursor-pointer inline-block" style={{ background: "transparent", color: CR, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid rgba(245,240,232,0.4)` }}
            onMouseOver={e => (e.currentTarget.style.background = "rgba(245,240,232,0.1)")}
            onMouseOut={e => (e.currentTarget.style.background = "transparent")}>
            {lang === "en" ? "See demos" : "Vedi le demo"}
          </span></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}

