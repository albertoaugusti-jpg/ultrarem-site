import { Link } from "wouter";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import uomoImg from "@assets/Uomo_elegante_tra_luci_e_ombreggiature_1775476267982.png";

const V = "#3d7a6b", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

export default function IlProgetto() {
  const { lang } = useLang();

  const pillars = lang === "en"
    ? [
        { num: "01", title: "Psychological authenticity", text: "Every session is guided by qualified clinical psychologists. We don't collect data: we build a narrative. The difference is enormous." },
        { num: "02", title: "Academic validation", text: "Cambridge and Padova ensure the scientific rigour of every methodology. Your corpus is grounded in peer-reviewed research." },
        { num: "03", title: "Ethical custody", text: "You decide who has access, when and how. Your data is never sold, analysed for commercial purposes, or shared with third parties." },
      ]
    : [
        { num: "01", title: "Autenticità psicologica", text: "Ogni sessione è guidata da psicologi clinici qualificati. Non raccogliamo dati: costruiamo un racconto. La differenza è enorme." },
        { num: "02", title: "Validazione accademica", text: "Cambridge e Padova garantiscono il rigore scientifico di ogni metodologia. Il tuo corpus è fondato su ricerca peer-reviewed." },
        { num: "03", title: "Custodia etica", text: "Tu decidi chi accede, quando e come. I tuoi dati non vengono mai venduti, analizzati per scopi commerciali o ceduti a terzi." },
      ];

  const corpusTags = lang === "en"
    ? ["Structured psychological sessions", "Authentic voice recordings", "Digitised diaries and letters", "Verified textual corpus", "Validated identity model"]
    : ["Sessioni psicologiche strutturate", "Registrazioni vocali autentiche", "Diari e lettere digitalizzate", "Corpus testuale verificato", "Modello identitario validato"];

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: "55vh" }}>
        <div className="flex flex-col justify-center" style={{ padding: "6rem 4rem", borderRight: `2px solid ${NE}` }}>
          <p className="mb-8" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC }}>
            {lang === "en" ? "The Project · Our story" : "Il Progetto · La nostra storia"}
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem" }}>
            {lang === "en"
              ? <><em style={{ fontStyle: "italic", color: TC }}>An idea born</em><br />from life.</>
              : <>Un'idea <em style={{ fontStyle: "italic", color: TC }}>che nasce</em><br />dalla vita.</>}
          </h1>
          <p style={{ fontSize: "1.3rem", color: GC, maxWidth: 480, fontStyle: "italic", lineHeight: 1.6 }}>
            {lang === "en"
              ? "UltraRem is not a technology startup. It is a human response to a profound question: what remains of us, after?"
              : "UltraRem non è una startup tecnologica. È una risposta umana a una domanda profondissima: cosa rimane di noi, dopo?"}
          </p>
        </div>
        <div style={{ background: NE, display: "flex", flexDirection: "column", justifyContent: "center", padding: "5rem 4rem" }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "1.5rem" }}>
            {lang === "en" ? "Our manifesto" : "Il nostro manifesto"}
          </div>
          <blockquote style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontStyle: "italic", color: CR, lineHeight: 1.4, marginBottom: "2rem" }}>
            {lang === "en"
              ? <>"Memory is not the past.<br />It is the way you <em style={{ color: GI }}>keep existing</em>."</>
              : <>"La memoria non è il passato.<br />È il modo in cui <em style={{ color: GI }}>continui ad esistere</em>."</>}
          </blockquote>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)" }}>— Manifesto UltraRem, 2024</span>
        </div>
      </div>

      {/* PROBLEMA */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}` }}>
        <div className="flex flex-col justify-center" style={{ background: TC, padding: "5rem 3rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 900, color: CR, lineHeight: 1.1, letterSpacing: "-2px" }}>
            {lang === "en" ? <>The<br />problem</> : <>Il<br />problema</>}
          </h2>
          <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.6)", marginTop: "2rem" }}>
            {lang === "en" ? "Why we exist" : "Perché esistiamo"}
          </p>
        </div>
        <div className="md:col-span-2 flex flex-col justify-center gap-6" style={{ padding: "5rem 4rem" }}>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Every year, over <strong style={{ color: TC }}>1 million Italians</strong> lose their memory due to Alzheimer's and dementia. But it is not just a medical issue: it is a collective identity crisis.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                The most precious stories — of grandparents, parents, founders, artists — disappear in silence. Not because they are not worth telling, but because <strong style={{ color: TC }}>no one had the right tools to do it in time.</strong>
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                UltraRem was created to fill this void. Not as a digital archive, but as a living, authentic presence.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Ogni anno, oltre <strong style={{ color: TC }}>1 milione di italiani</strong> perdono la memoria a causa di Alzheimer e demenze. Ma non è solo una questione medica: è una crisi di identità collettiva.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Le storie più preziose — quelle dei nonni, dei genitori, dei fondatori, degli artisti — svaniscono in silenzio. Non perché non valga la pena raccontarle, ma perché <strong style={{ color: TC }}>nessuno aveva gli strumenti giusti per farlo in tempo.</strong>
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                UltraRem nasce per colmare questo vuoto. Non come archivio digitale, ma come presenza viva e autentica.
              </p>
            </>
          )}
        </div>
      </div>

      {/* TRE PILASTRI */}
      <div style={{ borderBottom: `2px solid ${NE}` }}>
        <div className="flex flex-col md:flex-row items-baseline gap-8" style={{ padding: "4rem", borderBottom: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900 }}>
            {lang === "en" ? "Three pillars" : "Tre pilastri"}
          </h2>
          <p style={{ fontStyle: "italic", color: GC }}>
            {lang === "en" ? "On which we build every project" : "Su cui costruiamo ogni progetto"}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={i} style={{ padding: "4rem 3rem", borderRight: i < 2 ? `2px solid ${NE}` : "none" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 900, color: CS, lineHeight: 1, marginBottom: "1.5rem" }}>{p.num}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.6rem", fontWeight: 700, marginBottom: "1rem" }}>{p.title}</h3>
              <p style={{ fontSize: "1.05rem", color: GC, lineHeight: 1.7 }}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* IMMAGINE EDITORIALE */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: 480 }}>
        <div className="relative overflow-hidden" style={{ minHeight: 380 }}>
          <img src={uomoImg} alt="Uomo elegante italiano anni 80" className="absolute inset-0 w-full h-full object-cover object-top" />
        </div>
        <div className="flex flex-col justify-center" style={{ padding: "5rem 4rem", borderLeft: `2px solid ${NE}` }}>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "1.5rem" }}>
            {lang === "en" ? "The solution" : "La soluzione"}
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, marginBottom: "2rem" }}>
            {lang === "en"
              ? <>Not an archive.<br />A <em style={{ color: TC, fontStyle: "italic" }}>presence.</em></>
              : <>Non un archivio.<br />Una <em style={{ color: TC, fontStyle: "italic" }}>presenza.</em></>}
          </h2>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.15rem", color: GC, lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Through structured sessions with psychologists, we collect your voice, your values, your way of thinking. We build an identity corpus that allows those you love to keep feeling close to you.
              </p>
              <p style={{ fontSize: "1.15rem", color: GC, lineHeight: 1.85 }}>
                <strong style={{ color: NE }}>This is not generic artificial intelligence.</strong> It is your specificity, shaped by you, preserved forever.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.15rem", color: GC, lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Attraverso sessioni strutturate con psicologi, raccogliamo la tua voce, i tuoi valori, il tuo modo di pensare. Costruiamo un corpus identitario che permette a chi ami di continuare a sentirti vicino.
              </p>
              <p style={{ fontSize: "1.15rem", color: GC, lineHeight: 1.85 }}>
                <strong style={{ color: NE }}>Non è intelligenza artificiale generica.</strong> È la tua specificità, modellata da te, preservata per sempre.
              </p>
            </>
          )}
        </div>
      </div>

      {/* CORPUS */}
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}` }}>
        <div className="md:col-span-2" style={{ padding: "5rem 4rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, marginBottom: "3rem" }}>
            {lang === "en"
              ? <>The <em style={{ color: TC, fontStyle: "italic" }}>identity corpus</em></>
              : <>Il corpus <em style={{ color: TC, fontStyle: "italic" }}>identitario</em></>}
          </h2>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                The core of every UltraRem project is the <strong style={{ color: TC }}>identity corpus</strong>: a structured set of texts, voice recordings, diaries, letters and reflections that define who you truly are.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                This is not a biography. It is something more alive: the way you reason, the things that make you laugh, the values you never wrote down but that guide every choice you make.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Il nucleo di ogni progetto UltraRem è il <strong style={{ color: TC }}>corpus identitario</strong>: un insieme strutturato di testi, registrazioni vocali, diari, lettere e riflessioni che definiscono chi sei davvero.
              </p>
              <p style={{ fontSize: "1.2rem", lineHeight: 1.85 }}>
                Non si tratta di una biografia. È qualcosa di più vivo: il modo in cui ragioni, le cose che ti fanno ridere, i valori che non hai mai messo per scritto ma che guidano ogni tua scelta.
              </p>
            </>
          )}
        </div>
        <div className="flex flex-col justify-center gap-4" style={{ background: V, padding: "5rem 3rem" }}>
          {corpusTags.map((tag, i) => (
            <div key={i} style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.9)", padding: "0.8rem 1.2rem", border: "1px solid rgba(245,240,232,0.3)" }}>
              {tag}
            </div>
          ))}
        </div>
      </div>

      {/* ORIGINE */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ background: NE, color: CR, padding: 0, borderBottom: `2px solid ${NE}` }}>
        <div style={{ padding: "6rem 4rem", borderRight: `2px solid rgba(245,240,232,0.1)` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem" }}>
            {lang === "en"
              ? <>The origin of <em style={{ color: GI, fontStyle: "italic" }}>an idea</em></>
              : <>L'origine di <em style={{ color: GI, fontStyle: "italic" }}>un'idea</em></>}
          </h2>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "rgba(245,240,232,0.85)", marginBottom: "1.5rem" }}>
                UltraRem was born from a personal experience of the founder: the loss of a grandfather before he could tell his story. That absence opened a question that could not go unanswered.
              </p>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "rgba(245,240,232,0.85)" }}>
                After three years of research with Cambridge and Padova, psychologists consulted, families listened to, UltraRem became what you see today.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "rgba(245,240,232,0.85)", marginBottom: "1.5rem" }}>
                UltraRem nasce da un'esperienza personale del fondatore: la perdita di un nonno prima che potesse raccontare la sua storia. Quell'assenza ha aperto una domanda che non poteva restare senza risposta.
              </p>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: "rgba(245,240,232,0.85)" }}>
                Dopo tre anni di ricerca con Cambridge e Padova, di psicologi interpellati, di famiglie ascoltate, UltraRem è diventato ciò che vedi oggi.
              </p>
            </>
          )}
        </div>
        <div className="flex items-center" style={{ padding: "6rem 4rem" }}>
          <div style={{ background: "rgba(245,240,232,0.05)", borderLeft: `4px solid ${GI}`, padding: "2.5rem 3rem" }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.4rem", fontStyle: "italic", lineHeight: 1.6, color: CR, margin: 0 }}>
              {lang === "en"
                ? '"I realised the problem was not death. It was the silence that comes before, when you could still speak but didn\'t know how to begin."'
                : '"Ho capito che il problema non era la morte. Era il silenzio che arriva prima, quando ancora si potrebbe parlare e invece non si sa come iniziare."'}
            </p>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(245,240,232,0.4)", marginTop: "1.5rem", display: "block" }}>
              {lang === "en" ? "— The founder, Milan 2022" : "— Il fondatore, Milano 2022"}
            </span>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="text-center" style={{ padding: "8rem 4rem", background: CS, borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
          {lang === "en" ? "Start your project" : "Inizia il tuo progetto"}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem" }}>
          {lang === "en"
            ? <>Your story <em style={{ fontStyle: "italic", color: TC }}>deserves</em><br />to be told.</>
            : <>La tua storia <em style={{ fontStyle: "italic", color: TC }}>merita</em><br />di essere raccontata.</>}
        </h2>
        <p style={{ fontSize: "1.2rem", color: GC, maxWidth: 520, margin: "0 auto 3rem", fontStyle: "italic" }}>
          {lang === "en" ? "Start with a discovery call. No commitment, no rush." : "Inizia con una chiamata conoscitiva. Senza impegno, senza fretta."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/prenota"><span className="cursor-pointer inline-block" style={{ background: NE, color: CR, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none", border: `2px solid ${NE}` }}
            onMouseOver={e => (e.currentTarget.style.background = TC)}
            onMouseOut={e => (e.currentTarget.style.background = NE)}>
            {lang === "en" ? "Book your demo →" : "Prenota la tua demo →"}
          </span></Link>
          <Link href="/come-funziona"><span className="cursor-pointer inline-block" style={{ background: "transparent", color: NE, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${NE}` }}
            onMouseOver={e => { e.currentTarget.style.background = NE; e.currentTarget.style.color = CR; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = NE; }}>
            {lang === "en" ? "How it works" : "Come funziona"}
          </span></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
