import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, Tbp, kicker, RED, INK, GREY, PALE, BODONI, NARROW } from "@/components/Mag";

const dibattiti = [
  { q: "La memoria è un diritto?", a: "Chi pensa di sì ricorda che la nostra identità sta dentro il racconto che gli altri fanno di noi, e che averne cura (da vivi) è una forma di libertà. Chi pensa di no sostiene che il diritto di essere dimenticati vale quanto quello di essere ricordati, e che nessuno dovrebbe dover lasciare tracce." },
  { q: "Come si custodisce una storia con rispetto?", a: "L’autore sceglie che cosa raccontare, rilegge e approva l’autobiografia. Nei percorsi certificati decide anche a chi affidarla: la consultazione segue la sua volontà." },
  { q: "Chi decide che cosa lascio?", a: "Io, mentre sono vivo? I miei figli, dopo? Un'azienda? La domanda sposta il discorso dalla tecnologia ai diritti, ed è lì che va discusso." },
];

const lettere = [
  { t: "Il corpus siamo noi", k: "Approfondimento · Cultura", p: "Prima di essere memoria è corpo, prima di essere racconto è vita che respira." },
];

export default function Storie() {
  return (
    <Page>
      <Hero k="Storie" title={<>Da leggere, da discutere, <em style={{ color: RED }}>da ricordare.</em></>} lead="UltraRem è anche un luogo dove si racconta. Qui trovi le storie delle persone, i dibattiti sul raccontarsi, i saggi sulla cultura della memoria e i profili di chi la studia." />

      <Sec k="Come funziona" title="Ogni storia si legge. Alcune si possono anche ascoltare.">
        <Cols gap={40}>
          <Prose>
            <p>Una storia nasce dal racconto della persona, che rilegge il testo e ne approva la pubblicazione. I percorsi certificati permettono di condividere l’autobiografia secondo la volontà dell’autore; il Diario di bordo rimane invece personale.</p>
            <p>Quando l’autore di un’autobiografia certificata lo sceglie, il racconto può aprirsi alle domande. L’interazione è dichiarata come artificiale, la voce come sintetica e i collegamenti o le deduzioni vengono segnalati. La consultazione resta facoltativa.</p>
            <p>Le storie che trovi in questa pagina, per ora, sono segnaposto: stiamo raccogliendo i consensi delle persone che le racconteranno, e non pubblichiamo nulla senza.</p>
          </Prose>
          <div style={{ flex: "1 1 300px", maxWidth: 420 }}><Photo name="storie-nonno" ar="4 / 3" pos="62% center" /></div>
        </Cols>
      </Sec>

      <Sec k="Le storie" title="Chi si racconta, e chi ascolta." bg={PALE}>
        <Cols gap={20}>
          {["A", "B", "C"].map((l, i) => (
            <div key={l} style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Photo name={["quaderno", "faro", "bussola"][i]} ar="3 / 2" />
              <div style={kicker()}>Storia · {["8", "6", "10"][i]} min di lettura</div>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1 }}>[ Titolo di una storia vera ]</div>
              <p style={{ margin: 0, fontSize: 16 }}>Uno spazio per un racconto di vita, scelto e autorizzato dalla persona. {i === 0 ? "Questa è la prima che pubblicheremo, con il testo e, se lei lo vorrà, il dialogo." : ""}</p>
            </div>
          ))}
        </Cols>
        <div style={{ marginTop: 22, padding: "14px 18px", border: `1px dashed ${GREY}`, fontSize: 15, maxWidth: 780 }}>
          <b>Vuoi che la tua storia, o quella di una persona cara, sia raccontata qui?</b> Scrivici: nessuna pubblicazione senza la sua approvazione scritta, e puoi ritirarla quando vuoi. <Link href="/contatti"><span style={{ color: RED, cursor: "pointer", fontWeight: 700 }}>Vai ai contatti</span></Link>
        </div>
      </Sec>

      <Sec k="Cultura · approfondimento" title="Il corpus siamo noi.">
        <Prose max={720}>
          <p>UltraRem richiama l’idea di andare oltre: raccontarsi, conoscersi e affidare ciò che si è capito della vita. Il corpus è la materia prima dell’autobiografia, fatta di parole, ricordi e scelte di chi la racconta.</p>
          <p>Dalla voce alla pagina e dalla pagina alle domande: ogni strumento aggiunge un modo di ritrovare una storia. L’autobiografia interattiva mette al centro chi si racconta e il racconto che sceglie di approvare.</p>
          <p>Nei percorsi certificati lo psicologo ordina i materiali, redige la sintesi e la restituisce alla persona. L’autore corregge e approva: è questa la storia che diventa consultabile.</p>
          <p>Chi consulta incontra un racconto, con la sua storia e le sue ragioni. Quando una risposta non è nei contenuti autorizzati, il sistema lo dichiara. Il Diario personale restituisce soltanto racconti e idee ricevuti.</p>
        </Prose>
        <p style={{ marginTop: 18, fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>UltraRem · 5 min di lettura</p>
      </Sec>

      <Sec k="Dibattiti" title="Domande aperte, più voci." dark>
        <p style={{ margin: "0 0 24px", maxWidth: 760, color: "rgba(255,255,255,0.8)" }}>Su questi temi non abbiamo risposte da vendere. Per ciascuno raccogliamo posizioni anche opposte, ciascuna con la sua firma. UltraRem è neutrale rispetto a credi e orientamenti (art. 4). Qui sotto, una traccia di come li impostiamo.</p>
        <Cols gap={0}>
          {dibattiti.map((d, i) => (
            <div key={d.q} style={{ flex: "1 1 320px", padding: "20px 24px", borderTop: "1px solid rgba(255,255,255,0.4)", borderLeft: i ? "1px solid rgba(255,255,255,0.4)" : "none" }}>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 26, lineHeight: 1.1, marginBottom: 8 }}>{d.q}</div>
              <p style={{ margin: 0, fontSize: 16, color: "rgba(255,255,255,0.85)" }}>{d.a}</p>
              <div style={{ ...kicker("#ff3b52"), marginTop: 10 }}>Interventi in arrivo</div>
            </div>
          ))}
        </Cols>
      </Sec>

      <Sec k="Profili" title="Chi studia la memoria, il lutto, la fine." bg={PALE}>
        <Prose>
          <p>Ogni scheda presenta uno studioso o una studiosa con le opere principali e le fonti, ed è scritta per far capire a chi non è del mestiere perché quel lavoro conta. Nessun avatar e nessuna intervista a nome di una persona senza il suo consenso scritto.</p>
        </Prose>
        <div style={{ marginTop: 22, display: "flex", flexWrap: "wrap", gap: 20 }}>
          {["A", "B", "C", "D"].map((l, i) => (
            <div key={l} style={{ flex: "1 1 200px", maxWidth: 240 }}>
              <Tbp ini={l} ar="1 / 1" col={["#111", "#3d7a6b", "#c8102e", "#e8a820"][i]} label="Profilo in preparazione" />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 20, marginTop: 8 }}>[ Nome e cognome ]</div>
              <div style={{ fontSize: 14, color: GREY }}>Campo di ricerca · Ateneo</div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 18, maxWidth: 700, fontSize: 15 }}>I profili che pubblicheremo per primi saranno quelli di chi lavora con noi, come la Prof.ssa Ines Testoni dell'Università di Padova, che trovi nella <Link href="/fondatori"><span style={{ color: RED, cursor: "pointer", fontWeight: 700 }}>pagina dei fondatori</span></Link>, e di chi ha accettato di essere intervistato.</p>
      </Sec>

      <CtaBand title="Hai una storia, o una domanda?" text="Scrivici. Le storie nascono da persone che decidono di raccontarsi, e i dibattiti da chi ha qualcosa da dire." a={{ href: "/contatti", label: "Scrivici" }} b={{ href: "/incontra", label: "Parla con l'avatar" }} />
    </Page>
  );
}
