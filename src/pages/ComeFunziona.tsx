import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";

import salonImg from "@assets/Conversazione_in_un_salotto_accogliente_1775567152215.png";
import discussioneImg from "@assets/Un_momento_di_discussione_familiare_1775567169170.png";

const V = "#3d7a6b", BX = "#8b2e2e", TC = "#c4522a", GI = "#e8a820";
const NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

const StripeBar = ({ reverse = false }) => {
  const colors = [V, BX, TC, GI];
  const c = reverse ? [...colors].reverse() : colors;
  return (
    <div className="flex w-full" style={{ height: 5 }}>
      {c.map((col, i) => <div key={i} className="flex-1" style={{ backgroundColor: col }} />)}
    </div>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function ComeFunziona() {
  const { lang } = useLang();

  const minipack = lang === "en"
    ? [
        {
          ore: "3h · 1 theme", nome: "A Memory", prezzo: "€1.200", abbonamento: "€10/month",
          features: ["1 psychological session (3 hours)", "1 theme of your choice", "Textual corpus of the chosen theme", "Synthesised voice (ElevenLabs)", "Personal digital archive", "Access for 2 authorised people"],
          nota: "No avatar · Text and voice only",
        },
        {
          ore: "6h · up to 3 themes", nome: "Important Stories", prezzo: "€2.000", abbonamento: "€12.50/month",
          features: ["2 psychological sessions (3 hours each)", "Up to 3 themes of your choice", "Multi-theme textual corpus", "Synthesised voice (ElevenLabs)", "Personal digital archive", "Access for 3 authorised people", "Psychologist's narrative report"],
          nota: "No avatar · Text and voice",
        },
        {
          ore: "10h · up to 5 themes", nome: "Great Events to Pass On", prezzo: "€2.500", abbonamento: "€15/month",
          features: ["3–4 psychological sessions", "Up to 5 themes of your choice", "Rich, structured textual corpus", "Synthesised voice (ElevenLabs)", "Complete digital archive", "Access for 5 authorised people", "In-depth narrative report", "Expandable later"],
          nota: "No avatar · Text and voice",
        },
      ]
    : [
        {
          ore: "3 ore · 1 tema", nome: "Un Ricordo", prezzo: "€1.200", abbonamento: "€10/mese",
          features: ["1 sessione psicologica da 3 ore", "1 tema a scelta tra quelli disponibili", "Corpus testuale del tema scelto", "Voce sintetizzata (ElevenLabs)", "Archivio digitale personale", "Accesso per 2 persone autorizzate"],
          nota: "Nessun avatar · Solo testo e voce",
        },
        {
          ore: "6 ore · fino a 3 temi", nome: "Storie Importanti", prezzo: "€2.000", abbonamento: "€12,50/mese",
          features: ["2 sessioni psicologiche da 3 ore", "Fino a 3 temi a scelta", "Corpus testuale multi-tema", "Voce sintetizzata (ElevenLabs)", "Archivio digitale personale", "Accesso per 3 persone autorizzate", "Report narrativo dello psicologo"],
          nota: "Nessun avatar · Testo e voce",
        },
        {
          ore: "10 ore · fino a 5 temi", nome: "Grandi Eventi da Tramandare", prezzo: "€2.500", abbonamento: "€15/mese",
          features: ["3-4 sessioni psicologiche", "Fino a 5 temi a scelta", "Corpus testuale ricco e strutturato", "Voce sintetizzata (ElevenLabs)", "Archivio digitale completo", "Accesso per 5 persone autorizzate", "Report narrativo approfondito", "Possibilità di espandere in seguito"],
          nota: "Nessun avatar · Testo e voce",
        },
      ];

  const pacchetti = lang === "en"
    ? [
        {
          ore: "20h · 4 sessions × 5h · Online", nome: "Essential", prezzo: "€5.000", badge: null,
          features: [
            { text: "4 psychological sessions (5 hours each)", gold: false },
            { text: "Complete identity corpus", gold: false },
            { text: "All identity domains explored", gold: false },
            { text: "Synthesised voice (ElevenLabs)", gold: false },
            { text: "Searchable thematic archive", gold: false },
            { text: "Unlimited family access", gold: false },
            { text: "10-year preservation", gold: false },
          ],
        },
        {
          ore: "30h · 6 sessions × 5h · Mixed", nome: "Heritage", prezzo: "€10.000", badge: "Most chosen",
          features: [
            { text: "Everything in Essential", gold: true },
            { text: "6 sessions (mixed online/in-person)", gold: false },
            { text: "Personalised voice clone", gold: true },
            { text: "On-site A/V support", gold: false },
            { text: "Structured video and audio", gold: false },
            { text: "Ethical-narrative report", gold: true },
            { text: "30-year preservation", gold: false },
          ],
        },
        {
          ore: "40h · 8 sessions × 5h · In-person", nome: "Legacy", prezzo: "€20.000", badge: null,
          features: [
            { text: "Everything in Heritage", gold: true },
            { text: "8 in-person sessions with crew", gold: false },
            { text: "Interactive visual avatar", gold: true },
            { text: "Professional crew included", gold: false },
            { text: "Perpetual preservation", gold: true },
            { text: "Dedicated consultant", gold: false },
            { text: "Complete audiovisual archive", gold: true },
          ],
        },
      ]
    : [
        {
          ore: "20 ore · 4 sessioni × 5h · Online", nome: "Essential", prezzo: "€5.000", badge: null,
          features: [
            { text: "4 sessioni psicologiche da 5 ore", gold: false },
            { text: "Corpus identitario completo", gold: false },
            { text: "Tutti i domini esplorati dallo psicologo", gold: false },
            { text: "Voce sintetizzata (ElevenLabs)", gold: false },
            { text: "Archivio tematico ricercabile", gold: false },
            { text: "Accesso familiari illimitato", gold: false },
            { text: "Conservazione 10 anni", gold: false },
          ],
        },
        {
          ore: "30 ore · 6 sessioni × 5h · Misto", nome: "Heritage", prezzo: "€10.000", badge: "Più scelto",
          features: [
            { text: "Tutto di Essential", gold: true },
            { text: "6 sessioni (misto online/de visu)", gold: false },
            { text: "Clone vocale personalizzato", gold: true },
            { text: "Supporto A/V in loco", gold: false },
            { text: "Video e audio strutturati", gold: false },
            { text: "Report etico-narrativo", gold: true },
            { text: "Conservazione 30 anni", gold: false },
          ],
        },
        {
          ore: "40 ore · 8 sessioni × 5h · De visu", nome: "Legacy", prezzo: "€20.000", badge: null,
          features: [
            { text: "Tutto di Heritage", gold: true },
            { text: "8 sessioni de visu con troupe", gold: false },
            { text: "Avatar visivo interattivo", gold: true },
            { text: "Troupe professionale inclusa", gold: false },
            { text: "Conservazione perpetua", gold: true },
            { text: "Consulente dedicato", gold: false },
            { text: "Archivio audiovisivo completo", gold: true },
          ],
        },
      ];

  const abbonamenti = lang === "en"
    ? [
        { nome: "A Memory", prezzo: "€10", periodo: "per month · €120/year", desc: "Platform access. Textual corpus of the chosen theme. Synthesised voice. Listening and reading of the collected material." },
        { nome: "Important Stories", prezzo: "€12.50", periodo: "per month · €150/year", desc: "Multi-theme access. Textual corpus and narrative report. Synthesised voice. Sharing with authorised people." },
        { nome: "Great Events to Pass On", prezzo: "€15", periodo: "per month · €180/year", desc: "Full access to the rich corpus. In-depth report. Synthesised voice. Up to 5 authorised people." },
        { nome: "Essential", prezzo: "€20", periodo: "per month · €240/year", desc: "Platform access. Complete identity corpus. Synthesised voice. Searchable thematic archive. Unlimited family members." },
        { nome: "Heritage", prezzo: "€30", periodo: "per month · €360/year", desc: "Full access. Personalised voice clone. Guided textual conversation from corpus. Structured video and audio included." },
        { nome: "Legacy", prezzo: "€50", periodo: "per month · €600/year", desc: "Full access. Voice clone + interactive visual avatar. Full conversation. Audiovisual archive. Perpetual preservation." },
      ]
    : [
        { nome: "Un Ricordo", prezzo: "€10", periodo: "al mese · €120/anno", desc: "Accesso alla piattaforma. Corpus testuale del tema scelto. Voce sintetizzata. Ascolto e lettura del materiale raccolto." },
        { nome: "Storie Importanti", prezzo: "€12,50", periodo: "al mese · €150/anno", desc: "Accesso multi-tema. Corpus testuale e report narrativo. Voce sintetizzata. Condivisione con le persone autorizzate." },
        { nome: "Grandi Eventi da Tramandare", prezzo: "€15", periodo: "al mese · €180/anno", desc: "Accesso completo al corpus ricco. Report approfondito. Voce sintetizzata. Fino a 5 persone autorizzate." },
        { nome: "Essential", prezzo: "€20", periodo: "al mese · €240/anno", desc: "Accesso alla piattaforma. Corpus identitario completo. Voce sintetizzata. Archivio tematico ricercabile. Familiari illimitati." },
        { nome: "Heritage", prezzo: "€30", periodo: "al mese · €360/anno", desc: "Accesso pieno. Clone vocale personalizzato. Conversazione testuale guidata dal corpus. Video e audio strutturati inclusi." },
        { nome: "Legacy", prezzo: "€50", periodo: "al mese · €600/anno", desc: "Accesso completo. Clone vocale + avatar visivo interattivo. Conversazione piena. Archivio audiovisivo. Conservazione perpetua." },
      ];

  const temi = lang === "en"
    ? [
        { nome: "Family", desc: "Your role as parent, child, grandparent" },
        { nome: "Love", desc: "How you love and relate to others" },
        { nome: "Work", desc: "Your professional and entrepreneurial vision" },
        { nome: "Roots", desc: "Family of origin, childhood, cultural identity" },
        { nome: "Vision", desc: "How you see the world, politics, the future" },
        { nome: "An event", desc: "A specific moment you want to hand down" },
      ]
    : [
        { nome: "Famiglia", desc: "Il tuo ruolo di genitore, figlio, nonno" },
        { nome: "Amore", desc: "Il tuo modo di amare e di stare in relazione" },
        { nome: "Lavoro", desc: "La tua visione professionale e imprenditoriale" },
        { nome: "Radici", desc: "Famiglia d'origine, infanzia, identità culturale" },
        { nome: "Visione", desc: "Come vedi il mondo, la politica, il futuro" },
        { nome: "Un evento", desc: "Un momento specifico che vuoi tramandare" },
      ];

  const confrontoHeaders = lang === "en"
    ? ["Feature", "A Memory", "Imp. Stories", "Great Events", "Essential", "Heritage", "Legacy"]
    : ["Caratteristica", "Un Ricordo", "Storie Importanti", "Grandi Eventi", "Essential", "Heritage", "Legacy"];

  const confrontoRows = lang === "en"
    ? [
        { label: "Price", values: ["€1.200", "€2.000", "€2.500", "€5.000", "€10.000", "€20.000"], type: "text" },
        { label: "Session hours", values: ["3h", "6h", "10h", "20h", "30h", "40h"], type: "text" },
        { label: "Themes explored", values: ["1 (your choice)", "3 (your choice)", "5 (your choice)", "All", "All", "All"], type: "text", siCols: [3, 4, 5] },
        { label: "Textual corpus", values: ["✓", "✓", "✓", "✓", "✓", "✓"], type: "si" },
        { label: "Synthesised voice", values: ["✓", "✓", "✓", "✓", "✓ clone", "✓ clone"], type: "si" },
        { label: "Visual avatar", values: ["—", "—", "—", "—", "—", "✓"], type: "mixed", noIdxs: [0,1,2,3,4], siIdxs: [5] },
        { label: "Psychologist report", values: ["—", "✓", "✓", "✓", "✓", "✓"], type: "mixed", noIdxs: [0], siIdxs: [1,2,3,4,5] },
        { label: "Access subscription", values: ["€10/mo", "€12.50/mo", "€15/mo", "€20/mo", "€30/mo", "€50/mo"], type: "text" },
        { label: "Preservation", values: ["5 years", "5 years", "10 years", "10 years", "30 years", "Perpetual"], type: "text" },
        { label: "Expandable later", values: ["✓", "✓", "✓", "Heritage/Legacy", "Legacy", "—"], type: "mixed", siIdxs: [0,1,2], parzIdxs: [3,4], noIdxs: [5] },
      ]
    : [
        { label: "Prezzo", values: ["€1.200", "€2.000", "€2.500", "€5.000", "€10.000", "€20.000"], type: "text" },
        { label: "Ore di sessione", values: ["3h", "6h", "10h", "20h", "30h", "40h"], type: "text" },
        { label: "Temi esplorati", values: ["1 (scelto da te)", "3 (scelti da te)", "5 (scelti da te)", "Tutti", "Tutti", "Tutti"], type: "text", siCols: [3, 4, 5] },
        { label: "Corpus testuale", values: ["✓", "✓", "✓", "✓", "✓", "✓"], type: "si" },
        { label: "Voce sintetizzata", values: ["✓", "✓", "✓", "✓", "✓ clone", "✓ clone"], type: "si" },
        { label: "Avatar visivo", values: ["—", "—", "—", "—", "—", "✓"], type: "mixed", noIdxs: [0,1,2,3,4], siIdxs: [5] },
        { label: "Report psicologo", values: ["—", "✓", "✓", "✓", "✓", "✓"], type: "mixed", noIdxs: [0], siIdxs: [1,2,3,4,5] },
        { label: "Abbonamento accesso", values: ["€10/mese", "€12,50/mese", "€15/mese", "€20/mese", "€30/mese", "€50/mese"], type: "text" },
        { label: "Conservazione", values: ["5 anni", "5 anni", "10 anni", "10 anni", "30 anni", "Perpetua"], type: "text" },
        { label: "Espandibile in seguito", values: ["✓", "✓", "✓", "Heritage/Legacy", "Legacy", "—"], type: "mixed", siIdxs: [0,1,2], parzIdxs: [3,4], noIdxs: [5] },
      ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <motion.section className="border-b-2 border-black" style={{ background: NE, color: CR }}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
      >
        <div className="grid md:grid-cols-2 gap-16 px-8 md:px-16 py-24 md:py-32 max-w-screen-xl mx-auto items-center">
          <div>
            <motion.p variants={fadeUp} className="font-mono uppercase mb-8" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: GI }}>
              {lang === "en" ? "Pricing · Six levels of depth" : "Prezzi · Sei livelli di profondità"}
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif font-black leading-none mb-8" style={{ fontSize: "clamp(3rem,6vw,5.5rem)", letterSpacing: "-2px" }}>
              {lang === "en"
                ? <>With little,<br />get <em style={{ color: TC }}>everything.</em></>
                : <>Con poco<br />avrai <em style={{ color: TC }}>tutto.</em></>}
            </motion.h1>
            <motion.p variants={fadeUp} style={{ fontSize: "1.2rem", color: "rgba(245,240,232,0.6)", fontStyle: "italic", lineHeight: 1.75 }}>
              {lang === "en"
                ? "The depth of introspection determines the richness of the corpus. It's not about technology — it's about how far you're willing to go inside yourself."
                : "La profondità dell'introspezione determina la ricchezza del corpus. Non è una questione di tecnologia — è una questione di quanto sei disposto ad andare dentro te stesso."}
            </motion.p>
          </div>
          <motion.div variants={fadeUp} className="flex flex-col gap-6">
            <div className="relative overflow-hidden border-2 border-white/10" style={{ aspectRatio: "4/3" }}>
              <img src={salonImg} alt="Conversazione in salotto" className="w-full h-full object-contain" />
            </div>
            <p style={{ fontSize: "1.1rem", color: "rgba(245,240,232,0.7)", lineHeight: 1.85 }}>
              {lang === "en"
                ? <>UltraRem offers six levels of access to your digital identity. The first three are <em style={{ color: GI }}>thematic</em> — you choose what to explore. The last three are <em style={{ color: GI }}>integral</em> — the psychologist explores everything, even what you didn't know you had.</>
                : <>UltraRem offre sei livelli di accesso alla propria identità digitale. I primi tre sono <em style={{ color: GI }}>tematici</em> — scegli tu cosa esplorare. Gli ultimi tre sono <em style={{ color: GI }}>integrali</em> — lo psicologo esplora tutto, anche ciò che non sapevi di avere.</>}
            </p>
            <p style={{ fontSize: "1.05rem", color: CR, fontWeight: 600 }}>
              {lang === "en"
                ? "In minipacks, you lead. In full packages, discover themes you didn't know you had."
                : "Nei minipack sei tu che guidi. Nei pacchetti completi, scopri temi che non sapevi di avere."}
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* SEPARATORE */}
      <div className="grid md:grid-cols-2 border-b-2 border-black">
        <div className="px-10 py-10 border-b-2 md:border-b-0 md:border-r-2 border-black flex items-center gap-6" style={{ background: CS }}>
          <div>
            <p className="font-mono uppercase mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: TC }}>
              {lang === "en" ? "Thematic minipacks" : "Minipack tematici"}
            </p>
            <p style={{ fontSize: "1rem", color: GC, lineHeight: 1.6 }}>
              {lang === "en"
                ? <>Choose a specific theme. We explore it in limited depth. One-off <strong style={{ color: NE }}>activation fee</strong> + monthly subscription for platform access.</>
                : <>Scegli un tema specifico. Lo esploriamo in profondità limitata. Fee di attivazione <strong style={{ color: NE }}>una tantum</strong> + abbonamento mensile per l'accesso alla piattaforma.</>}
            </p>
          </div>
        </div>
        <div className="px-10 py-10 flex items-center gap-6" style={{ background: NE, color: CR }}>
          <div>
            <p className="font-mono uppercase mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: GI }}>
              {lang === "en" ? "Full packages" : "Pacchetti completi"}
            </p>
            <p style={{ fontSize: "1rem", color: "rgba(245,240,232,0.65)", lineHeight: 1.6 }}>
              {lang === "en"
                ? <>The psychological method guides you through <strong style={{ color: CR }}>all identity domains</strong>. With a long-term custody subscription.</>
                : <>Il metodo psicologico guida te attraverso <strong style={{ color: CR }}>tutti i domini identitari</strong>. Con abbonamento di custodia nel tempo.</>}
            </p>
          </div>
        </div>
      </div>

      {/* MINIPACK HEADER */}
      <div className="px-8 md:px-16 py-12 border-b-2 border-black flex flex-wrap items-baseline gap-6" style={{ background: CR }}>
        <h2 className="font-serif font-black" style={{ fontSize: "2.8rem" }}>
          {lang === "en" ? "Thematic minipacks" : "Minipack tematici"}
        </h2>
        <p style={{ fontSize: "1.1rem", color: GC, fontStyle: "italic" }}>
          {lang === "en" ? "One theme. Your choice. Your depth." : "Un tema. La tua scelta. La tua profondità."}
        </p>
      </div>

      {/* MINIPACK GRID */}
      <motion.div className="grid md:grid-cols-3 border-b-2 border-black"
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
      >
        {minipack.map((mp, i) => (
          <motion.div key={i} variants={fadeUp} className="flex flex-col gap-5 p-10 border-b-2 md:border-b-0 border-black"
            style={{ borderRight: i < 2 ? `2px solid ${NE}` : "none", transition: "background 0.3s" }}
            onMouseEnter={e => (e.currentTarget.style.background = CS)}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
            <p className="font-mono uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: TC }}>{mp.ore}</p>
            <h3 className="font-serif font-bold" style={{ fontSize: "2rem", lineHeight: 1.1 }}>{mp.nome}</h3>
            <p className="font-serif font-black" style={{ fontSize: "3.8rem", lineHeight: 1, color: NE }}>{mp.prezzo}</p>
            <p className="font-mono uppercase" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: GC, marginTop: "-1rem" }}>
              {lang === "en" ? `One-off fee · + ${mp.abbonamento} platform access` : `Fee una tantum · + ${mp.abbonamento} accesso piattaforma`}
            </p>
            <hr style={{ border: "none", borderTop: `1px solid rgba(26,18,9,0.12)` }} />
            <ul className="flex flex-col gap-3 flex-1">
              {mp.features.map((f, fi) => (
                <li key={fi} className="relative pl-6" style={{ fontSize: "1rem", color: GC, lineHeight: 1.5 }}>
                  <span className="absolute left-0 font-mono" style={{ color: TC, fontSize: "0.65rem", top: "0.3rem" }}>→</span>
                  {f}
                </li>
              ))}
            </ul>
            <p className="font-mono uppercase pt-4" style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: GC, borderTop: `1px solid rgba(26,18,9,0.08)` }}>{mp.nota}</p>
            <Link href="/prenota">
              <span className="inline-flex items-center gap-3 cursor-pointer border-2 px-5 py-3 font-mono uppercase transition-all"
                style={{ fontSize: "0.65rem", letterSpacing: "0.15em", borderColor: NE, color: NE, display: "inline-flex" }}
                onMouseEnter={e => { e.currentTarget.style.background = NE; e.currentTarget.style.color = CR; }}
                onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = NE; }}>
                {lang === "en" ? "Start →" : "Inizia →"}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* TEMI DISPONIBILI */}
      <motion.div className="grid md:grid-cols-2 gap-12 px-8 md:px-16 py-16 border-b-2 border-black items-center"
        style={{ background: CS }}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
      >
        <motion.div variants={fadeUp}>
          <h3 className="font-serif font-black mb-6" style={{ fontSize: "2rem" }}>
            {lang === "en"
              ? <>In minipacks, <em style={{ color: TC }}>you choose</em> the theme</>
              : <>Nei minipack <em style={{ color: TC }}>scegli tu</em> il tema</>}
          </h3>
          <p className="mb-4" style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.8 }}>
            {lang === "en"
              ? "It is not the method that explores — it is you who decides what to leave. This makes minipacks simpler to start, but more limited in overall depth."
              : "Non è il metodo che esplora — sei tu che decidi cosa lasciare. Questo rende i minipack più semplici da avviare, ma più limitati nella profondità totale."}
          </p>
          <p className="mb-4" style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.8 }}>
            {lang === "en"
              ? <><strong style={{ color: NE }}>In full packages instead</strong>, the psychologist explores all identity domains — even those you wouldn't have thought to include. That's where the truest things emerge.</>
              : <><strong style={{ color: NE }}>Nei pacchetti completi invece</strong>, lo psicologo esplora tutti i domini identitari — anche quelli che non avresti pensato di includere. È lì che emergono le cose più vere.</>}
          </p>
          <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.8 }}>
            {lang === "en"
              ? "You can start with a minipack and expand later into a full package — the thematic corpus is integrated."
              : "Puoi iniziare con un minipack e espandere in seguito verso un pacchetto completo — il corpus tematico viene integrato."}
          </p>
        </motion.div>
        <motion.div variants={fadeUp}>
          <p className="font-mono uppercase mb-4" style={{ fontSize: "0.6rem", letterSpacing: "0.15em", color: TC }}>
            {lang === "en" ? "Available themes in minipacks" : "Temi disponibili nei minipack"}
          </p>
          <div className="grid grid-cols-2 gap-3">
            {temi.map((t, i) => (
              <div key={i} className="p-4" style={{ border: "1px solid rgba(26,18,9,0.15)" }}>
                <p className="font-mono uppercase mb-1" style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: TC }}>{t.nome}</p>
                <p style={{ fontSize: "0.95rem", color: GC, lineHeight: 1.3 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* PACCHETTI HEADER */}
      <div className="px-8 md:px-16 py-12 border-b-2 border-black flex flex-wrap items-baseline gap-6" style={{ background: NE }}>
        <h2 className="font-serif font-black" style={{ fontSize: "2.8rem", color: CR }}>
          {lang === "en" ? "Full packages" : "Pacchetti completi"}
        </h2>
        <p style={{ fontSize: "1.1rem", color: "rgba(245,240,232,0.5)", fontStyle: "italic" }}>
          {lang === "en" ? "The psychological method guides you. You don't choose themes — they emerge." : "Il metodo psicologico guida te. Non scegli i temi — emergono."}
        </p>
      </div>

      {/* PACCHETTI GRID */}
      <div style={{ background: NE, borderBottom: `2px solid ${NE}` }}>
        <motion.div className="grid md:grid-cols-3"
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
        >
          {pacchetti.map((p, i) => (
            <motion.div key={i} variants={fadeUp} className="relative flex flex-col gap-5 p-10"
              style={{ borderRight: i < 2 ? "1px solid rgba(245,240,232,0.1)" : "none", background: p.badge ? "rgba(245,240,232,0.05)" : "transparent" }}>
              {p.badge && (
                <span className="absolute font-mono uppercase" style={{ top: "2.5rem", right: "2.5rem", background: GI, color: NE, fontSize: "0.55rem", letterSpacing: "0.1em", padding: "0.3rem 0.7rem" }}>
                  {p.badge}
                </span>
              )}
              <p className="font-mono uppercase" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: GI }}>{p.ore}</p>
              <h3 className="font-serif font-black" style={{ fontSize: "2.2rem", color: CR, lineHeight: 1.1 }}>{p.nome}</h3>
              <p className="font-serif font-black" style={{ fontSize: "3.8rem", color: CR, lineHeight: 1 }}>{p.prezzo}</p>
              <p className="font-mono uppercase" style={{ fontSize: "0.55rem", letterSpacing: "0.1em", color: "rgba(245,240,232,0.4)", marginTop: "-1rem" }}>
                {lang === "en" ? "Activation fee + subscription" : "Fee di attivazione + abbonamento"}
              </p>
              <hr style={{ border: "none", borderTop: "1px solid rgba(245,240,232,0.1)" }} />
              <ul className="flex flex-col gap-3 flex-1">
                {p.features.map((f, fi) => (
                  <li key={fi} className="relative pl-6" style={{ fontSize: "1rem", color: f.gold ? "rgba(245,240,232,0.9)" : "rgba(245,240,232,0.65)", lineHeight: 1.5 }}>
                    <span className="absolute left-0 font-mono" style={{ color: f.gold ? GI : TC, fontSize: "0.65rem", top: "0.3rem" }}>→</span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Link href="/prenota">
                <span className="inline-flex items-center gap-3 cursor-pointer border-2 px-5 py-3 font-mono uppercase transition-all"
                  style={{ fontSize: "0.65rem", letterSpacing: "0.15em", background: p.badge ? GI : CR, borderColor: p.badge ? GI : CR, color: NE, display: "inline-flex" }}
                  onMouseEnter={e => { e.currentTarget.style.background = TC; e.currentTarget.style.borderColor = TC; e.currentTarget.style.color = CR; }}
                  onMouseLeave={e => { e.currentTarget.style.background = p.badge ? GI : CR; e.currentTarget.style.borderColor = p.badge ? GI : CR; e.currentTarget.style.color = NE; }}>
                  {lang === "en" ? "Start →" : "Inizia →"}
                </span>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* ABBONAMENTI */}
        <motion.div className="px-8 md:px-16 py-16" style={{ borderTop: "1px solid rgba(245,240,232,0.1)" }}
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
        >
          <motion.p variants={fadeUp} className="font-mono uppercase mb-3" style={{ fontSize: "0.6rem", letterSpacing: "0.2em", color: GI }}>
            {lang === "en" ? "All levels · Monthly platform access" : "Tutti i livelli · Accesso mensile alla piattaforma"}
          </motion.p>
          <motion.h3 variants={fadeUp} className="font-serif font-black mb-2" style={{ fontSize: "2rem", color: CR }}>
            {lang === "en" ? "Access and custody subscriptions" : "Abbonamenti di accesso e custodia"}
          </motion.h3>
          <motion.p variants={fadeUp} className="mb-10" style={{ fontSize: "1rem", color: "rgba(245,240,232,0.5)", fontStyle: "italic" }}>
            {lang === "en"
              ? "Every package includes a one-off activation fee and a monthly subscription for continuous platform access."
              : "Ogni pacchetto include una fee di attivazione una tantum e un abbonamento mensile per l'accesso continuativo alla piattaforma."}
          </motion.p>
          <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-0.5" style={{ border: "1px solid rgba(245,240,232,0.1)", background: "rgba(245,240,232,0.1)" }}>
            {abbonamenti.map((a, i) => (
              <div key={i} className="p-8" style={{ background: "rgba(245,240,232,0.04)" }}>
                <p className="font-mono uppercase mb-3" style={{ fontSize: "0.55rem", letterSpacing: "0.15em", color: GI }}>{a.nome}</p>
                <p className="font-serif font-black" style={{ fontSize: "2.5rem", color: CR, lineHeight: 1 }}>{a.prezzo}</p>
                <p className="font-mono uppercase mb-4" style={{ fontSize: "0.5rem", letterSpacing: "0.1em", color: "rgba(245,240,232,0.35)", marginTop: "0.3rem" }}>{a.periodo}</p>
                <p style={{ fontSize: "0.9rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* IMMAGINE INTERMEZZO */}
      <div className="grid md:grid-cols-2 border-b-2 border-black">
        <div className="overflow-hidden" style={{ maxHeight: 420 }}>
          <img src={discussioneImg} alt="Discussione in famiglia" className="w-full h-full object-cover" style={{ objectPosition: "50% 10%" }} />
        </div>
        <div className="flex flex-col justify-center px-10 md:px-16 py-16" style={{ background: CS }}>
          <p className="font-mono uppercase mb-4" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: TC }}>
            {lang === "en" ? "The difference that matters" : "La differenza che conta"}
          </p>
          <h3 className="font-serif font-black mb-6" style={{ fontSize: "2.2rem", lineHeight: 1.15 }}>
            {lang === "en"
              ? <>In minipacks, <em style={{ color: TC }}>you</em> decide.<br />In packages, <em style={{ color: V }}>who you really are</em> emerges.</>
              : <>Nei minipack <em style={{ color: TC }}>sei tu</em> che decidi.<br />Nei pacchetti <em style={{ color: V }}>emerge</em> chi sei davvero.</>}
          </h3>
          <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.8 }}>
            {lang === "en"
              ? "The psychologist leads the journey with a proven narrative method. It is not an interview — it is a guided voyage that brings to light layers of identity you didn't know you possessed."
              : "Lo psicologo conduce il percorso con un metodo narrativo collaudato. Non è un'intervista — è un viaggio guidato che porta alla luce strati di identità che non sapevi di possedere."}
          </p>
        </div>
      </div>

      {/* TABELLA CONFRONTO */}
      <motion.section className="px-6 md:px-12 py-20 border-b-2 border-black" style={{ background: CS }}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-60px" }} variants={stagger}
      >
        <motion.h2 variants={fadeUp} className="font-serif font-black mb-3" style={{ fontSize: "2.5rem" }}>
          {lang === "en" ? "Full comparison" : "Confronto completo"}
        </motion.h2>
        <motion.p variants={fadeUp} className="mb-10" style={{ fontSize: "1.1rem", color: GC, fontStyle: "italic" }}>
          {lang === "en" ? "What each level includes — at a glance." : "Cosa include ogni livello — in un colpo solo."}
        </motion.p>
        <motion.div variants={fadeUp} className="overflow-x-auto">
          <table className="w-full" style={{ borderCollapse: "collapse", border: `2px solid ${NE}`, minWidth: 800 }}>
            <thead>
              <tr>
                {confrontoHeaders.map((h, i) => (
                  <th key={i} className="text-left font-mono uppercase" style={{
                    color: CR, fontSize: "0.6rem", letterSpacing: "0.12em", padding: "1.2rem",
                    borderRight: i < 6 ? "1px solid rgba(245,240,232,0.1)" : "none",
                    backgroundColor: i === 0 ? NE : i <= 3 ? "#3a1a10" : "#0d2920",
                  }}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {confrontoRows.map((row, ri) => (
                <tr key={ri} style={{ borderBottom: `1px solid rgba(26,18,9,0.1)` }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(26,18,9,0.03)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
                  <td className="font-bold" style={{ padding: "1.2rem", borderRight: "1px solid rgba(26,18,9,0.1)", color: NE, fontSize: "1rem" }}>{row.label}</td>
                  {row.values.map((val, vi) => {
                    let cellColor = NE;
                    let isSi = false, isNo = false, isParz = false;
                    if (row.type === "si") { isSi = true; cellColor = V; }
                    else if (row.type === "mixed") {
                      if ((row as any).siIdxs?.includes(vi)) { isSi = true; cellColor = V; }
                      else if ((row as any).noIdxs?.includes(vi)) { isNo = true; cellColor = "rgba(26,18,9,0.25)"; }
                      else if ((row as any).parzIdxs?.includes(vi)) { isParz = true; cellColor = GI; }
                    } else if (row.type === "text" && (row as any).siCols?.includes(vi)) {
                      isSi = true; cellColor = V;
                    }
                    return (
                      <td key={vi} style={{
                        padding: "1.2rem", borderRight: vi < 5 ? "1px solid rgba(26,18,9,0.1)" : "none",
                        fontSize: (isSi || isNo || isParz) ? "0.7rem" : "1rem",
                        fontFamily: (isSi || isNo || isParz) ? "'Space Mono', monospace" : "inherit",
                        color: cellColor, verticalAlign: "middle",
                        background: vi <= 2 ? "rgba(196,82,42,0.03)" : "rgba(61,122,107,0.03)",
                      }}>
                        {val}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.section>

      {/* CTA FINALE */}
      <motion.section className="py-32 px-8 text-center border-b-2 border-black" style={{ background: CR }}
        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={stagger}
      >
        <motion.p variants={fadeUp} className="font-mono uppercase mb-8" style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: TC }}>
          {lang === "en" ? "Not sure where to start?" : "Non sai da dove iniziare?"}
        </motion.p>
        <motion.h2 variants={fadeUp} className="font-serif font-black mb-6 mx-auto" style={{ fontSize: "clamp(2.5rem,4vw,4rem)", lineHeight: 1.1, maxWidth: 640 }}>
          {lang === "en"
            ? <>Start with <em style={{ color: TC }}>one memory.</em><br />Then decide.</>
            : <>Inizia con <em style={{ color: TC }}>un ricordo.</em><br />Poi decidi.</>}
        </motion.h2>
        <motion.p variants={fadeUp} className="mx-auto mb-12" style={{ fontSize: "1.2rem", color: GC, maxWidth: 520, fontStyle: "italic" }}>
          {lang === "en"
            ? "The first conversation is always free. We explain everything with no commitment."
            : "La prima conversazione è sempre gratuita. Ti spieghiamo tutto senza impegno."}
        </motion.p>
        <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4">
          <Link href="/prenota">
            <Button size="lg" className="rounded-none font-mono uppercase border-2 text-lg h-14 px-10" style={{ background: NE, color: CR, borderColor: NE }}
              onMouseEnter={e => { e.currentTarget.style.background = TC; e.currentTarget.style.borderColor = TC; }}
              onMouseLeave={e => { e.currentTarget.style.background = NE; e.currentTarget.style.borderColor = NE; }}>
              {lang === "en" ? "Book the demo →" : "Prenota la demo →"}
            </Button>
          </Link>
          <Link href="/ricerca">
            <Button size="lg" variant="outline" className="rounded-none font-mono uppercase border-2 text-lg h-14 px-10" style={{ borderColor: NE, color: NE }}>
              {lang === "en" ? "Research" : "La ricerca"}
            </Button>
          </Link>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
}
