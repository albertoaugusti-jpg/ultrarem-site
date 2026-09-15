import { Link } from "wouter";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import statuaImg from "@assets/Statua_di_donna_anziana_in_cimitero_1775510016767.png";
import uomoImg from "@assets/Uomo_elegante_tra_luci_e_ombreggiature_1775476267982.png";

const V = "#3d7a6b", BX = "#8b2e2e", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

export default function Demo() {
  const { lang } = useLang();

  const demos = lang === "en"
    ? [
        {
          num: "01", tag: "Clinical case · Alzheimer's", tagColor: BX,
          nome: "Caterina", anni: "71 years old · early Alzheimer's diagnosis · Genoa",
          desc: <><span>Caterina began her UltraRem journey </span><strong>three months after her diagnosis</strong><span>. In 12 sessions she built a corpus of over 40,000 words — childhood memories, letters to her husband, advice for her grandchildren. Today, even in moments of confusion, her loved ones can hear her lucid and affectionate voice.</span></>,
          img: statuaImg, youtubeId: "tQ7UJ96ipXE", borderColor: BX,
        },
        {
          num: "02", tag: "Business case · Corporate legacy", tagColor: V,
          nome: "Marco", anni: "68 years old · founding entrepreneur · Milan",
          desc: <><span>Marco built a company from scratch over 40 years. With UltraRem he preserved </span><strong>the entrepreneurial philosophy</strong><span> that no manual could have captured: how he evaluated risks, the values he never negotiated, the stories from the early years he told new managers.</span></>,
          img: uomoImg, youtubeId: "tQ7UJ96ipXE", borderColor: V, dark: true,
        },
      ]
    : [
        {
          num: "01", tag: "Caso clinico · Alzheimer", tagColor: BX,
          nome: "Caterina", anni: "71 anni · diagnosi precoce di Alzheimer · Genova",
          desc: <><span>Caterina ha iniziato il suo percorso con UltraRem </span><strong>tre mesi dopo la diagnosi</strong><span>. In 12 sessioni ha costruito un corpus di oltre 40.000 parole — ricordi d'infanzia, lettere al marito, consigli per i nipoti. Oggi, anche nei momenti di confusione, i suoi cari possono sentire la sua voce lucida e affettuosa.</span></>,
          img: statuaImg, youtubeId: "tQ7UJ96ipXE", borderColor: BX,
        },
        {
          num: "02", tag: "Caso imprenditoriale · Eredità aziendale", tagColor: V,
          nome: "Marco", anni: "68 anni · imprenditore fondatore · Milano",
          desc: <><span>Marco ha costruito un'azienda da zero in 40 anni. Con UltraRem ha preservato </span><strong>la filosofia imprenditoriale</strong><span> che nessun manuale avrebbe potuto catturare: il modo di valutare i rischi, i valori che non negoziava mai, le storie dei primi anni che raccontava ai nuovi manager.</span></>,
          img: uomoImg, youtubeId: "tQ7UJ96ipXE", borderColor: V, dark: true,
        },
      ];

  const expectItems = lang === "en"
    ? [
        "Authentic conversations based on the person's real corpus",
        "Responses consistent with the individual's values and language",
        "No invented answers — only what was built together",
        "Access limited to designated family members, never public",
      ]
    : [
        "Conversazioni autentiche basate sul corpus reale della persona",
        "Risposta coerente con i valori e il linguaggio dell'individuo",
        "Nessuna risposta inventata — solo ciò che è stato costruito insieme",
        "Accesso limitato ai familiari designati, mai pubblico",
      ];

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO DARK */}
      <div style={{ background: NE, color: CR, padding: "7rem 4rem", borderBottom: `2px solid ${NE}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-3rem", bottom: "-4rem", fontFamily: "'Playfair Display', serif", fontSize: "22rem", fontWeight: 900, color: "rgba(245,240,232,0.03)", lineHeight: 1, pointerEvents: "none", letterSpacing: "-5px" }}>DEMO</div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>
          {lang === "en" ? "Demo · Real stories" : "Demo · Storie reali"}
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem", maxWidth: 800 }}>
          {lang === "en"
            ? <>Listen to those who have<br />already <em style={{ fontStyle: "italic", color: TC }}>chosen to be here.</em></>
            : <>Ascolta chi ha<br />già <em style={{ fontStyle: "italic", color: TC }}>scelto di esserci.</em></>}
        </h1>
        <p style={{ fontSize: "1.3rem", color: "rgba(245,240,232,0.65)", maxWidth: 640, fontStyle: "italic", lineHeight: 1.6 }}>
          {lang === "en"
            ? "These are not simulations. They are real excerpts from UltraRem journeys, shared with the permission of the individuals and families involved."
            : "Queste non sono simulazioni. Sono estratti reali di percorsi UltraRem, condivisi con il permesso delle persone e delle famiglie coinvolte."}
        </p>
      </div>

      {/* AVVERTENZA */}
      <div className="flex items-center gap-8" style={{ background: GI, padding: "2rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", fontWeight: 700, color: NE, minWidth: 80, letterSpacing: "0.1em" }}>
          {lang === "en" ? "NOTE" : "NOTA"}
        </span>
        <p style={{ fontSize: "1rem", color: NE, lineHeight: 1.5 }}>
          <strong>
            {lang === "en"
              ? "Names and some details have been changed to protect privacy."
              : "I nomi e alcuni dettagli sono stati modificati per proteggere la privacy."}
          </strong>{" "}
          {lang === "en"
            ? "Audio and video content has been shared with explicit consent. The stories are authentic."
            : "I contenuti audio e video sono stati condivisi con consenso esplicito. Le storie sono autentiche."}
        </p>
      </div>

      {/* INTRO */}
      <div style={{ padding: "5rem 4rem 3rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
          {lang === "en" ? "Two stories, two journeys" : "Due storie, due percorsi"}
        </h2>
        <p style={{ fontSize: "1.2rem", color: GC, fontStyle: "italic", maxWidth: 680 }}>
          {lang === "en"
            ? "Every UltraRem journey is unique. But they all begin the same way: with the courage to want to be here."
            : "Ogni percorso UltraRem è unico. Ma tutti iniziano allo stesso modo: con il coraggio di voler esserci."}
        </p>
      </div>

      {/* DEMO CARDS */}
      {demos.map((d, i) => (
        <div key={i} className="grid grid-cols-1 md:grid-cols-2" style={{ borderBottom: `2px solid ${NE}`, minHeight: 500 }}>
          <div className={`flex flex-col justify-center ${d.dark ? "md:order-2" : ""}`} style={{ padding: "5rem 4rem", borderRight: d.dark ? "none" : `2px solid ${NE}`, borderLeft: d.dark ? `2px solid ${NE}` : "none", background: d.dark ? CS : CR }}>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "7rem", fontWeight: 900, color: CS, lineHeight: 1, marginBottom: "1rem" }}>{d.num}</div>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: d.tagColor, marginBottom: "1.5rem" }}>{d.tag}</div>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "0.5rem", lineHeight: 1.1 }}>{d.nome}</h3>
            <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase", color: GC, marginBottom: "2rem", paddingBottom: "2rem", borderBottom: `1px solid rgba(26,18,9,0.12)` }}>{d.anni}</div>
            <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.75, marginBottom: "2.5rem" }}>{d.desc}</p>
            <Link href="/prenota">
              <span className="cursor-pointer inline-block" style={{ background: NE, color: CR, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${NE}` }}
                onMouseOver={e => (e.currentTarget.style.background = TC)}
                onMouseOut={e => (e.currentTarget.style.background = NE)}>
                {lang === "en" ? "Start your journey →" : "Inizia il tuo percorso →"}
              </span>
            </Link>
          </div>
          <div className={`flex flex-col items-center justify-center gap-6 ${d.dark ? "md:order-1" : ""}`} style={{ background: d.dark ? NE : CS, padding: "4rem" }}>
            <a href={`https://www.youtube.com/watch?v=${d.youtubeId}`} target="_blank" rel="noopener noreferrer" style={{ width: "100%", maxWidth: 360, aspectRatio: "3/4", background: NE, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", cursor: "pointer", textDecoration: "none", border: `3px solid ${d.borderColor}` }}>
              <img src={d.img} alt={d.nome} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", opacity: 0.6 }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(26,18,9,0.85) 100%)" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 70, height: 70, background: "rgba(245,240,232,0.15)", border: "2px solid rgba(245,240,232,0.4)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: CR, fontSize: "1.4rem", marginLeft: 4 }}>▶</span>
              </div>
              <div style={{ position: "absolute", bottom: "2rem", left: 0, right: 0, textAlign: "center" }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, color: CR, display: "block" }}>{d.nome}</span>
                <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.7)" }}>
                  {lang === "en" ? "Watch the video →" : "Guarda il video →"}
                </span>
              </div>
            </a>
            <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: d.dark ? "rgba(245,240,232,0.4)" : GC, textAlign: "center" }}>
              {lang === "en" ? "Excerpt shared with consent" : "Estratto condiviso con consenso"}
            </p>
          </div>
        </div>
      ))}

      {/* COSA SONO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ background: CS, padding: 0, borderBottom: `2px solid ${NE}` }}>
        <div style={{ padding: "6rem 4rem", borderRight: `2px solid ${NE}` }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.8rem", fontWeight: 900, marginBottom: "2rem" }}>
            {lang === "en"
              ? <>What are the <em style={{ color: TC, fontStyle: "italic" }}>UltraRem demos?</em></>
              : <>Cosa sono le <em style={{ color: TC, fontStyle: "italic" }}>demo UltraRem?</em></>}
          </h2>
          {lang === "en" ? (
            <>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, marginBottom: "1.5rem", color: GC }}>
                The demos are not simulated reconstructions. They are <strong style={{ color: NE }}>authentic excerpts</strong> of identity corpora built during psychological sessions, presented in the form of guided conversation.
              </p>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: GC }}>
                Each demo shows how a person's corpus responds to real questions — the way she herself would have answered, with her words, her tone, her specificity.
              </p>
            </>
          ) : (
            <>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, marginBottom: "1.5rem", color: GC }}>
                Le demo non sono ricostruzioni simulate. Sono <strong style={{ color: NE }}>estratti autentici</strong> dei corpus identitari costruiti durante le sessioni psicologiche, presentati in forma di conversazione guidata.
              </p>
              <p style={{ fontSize: "1.15rem", lineHeight: 1.85, color: GC }}>
                Ogni demo mostra come il corpus di una persona risponde a domande reali — il modo in cui avrebbe risposto lei stessa, con le sue parole, il suo tono, la sua specificità.
              </p>
            </>
          )}
        </div>
        <div style={{ background: NE, padding: "6rem 4rem" }}>
          <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "1.5rem", display: "block" }}>
            {lang === "en" ? "What to expect" : "Cosa puoi aspettarti"}
          </span>
          {expectItems.map((item, i) => (
            <div key={i} className="flex gap-4 mb-5 items-start">
              <span style={{ color: TC, fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", minWidth: "1.5rem", marginTop: "0.4rem" }}>→</span>
              <span style={{ fontSize: "1rem", color: "rgba(245,240,232,0.8)", lineHeight: 1.6 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center" style={{ padding: "8rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
          {lang === "en" ? "Your story" : "La tua storia"}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem" }}>
          {lang === "en"
            ? <>Your story too<br />deserves to <em style={{ fontStyle: "italic", color: TC }}>continue.</em></>
            : <>Anche la tua storia<br />merita di <em style={{ fontStyle: "italic", color: TC }}>continuare.</em></>}
        </h2>
        <p style={{ fontSize: "1.2rem", color: GC, maxWidth: 520, margin: "0 auto 3rem", fontStyle: "italic" }}>
          {lang === "en"
            ? "We build your corpus together. Start with a free conversation."
            : "Costruiamo insieme il tuo corpus. Inizia con una conversazione gratuita."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/prenota"><span className="cursor-pointer inline-block" style={{ background: NE, color: CR, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${NE}` }}
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
