import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, Tbp, kicker, RED, INK, GREY, PALE, BODONI, NARROW } from "@/components/Mag";

const dibattiti = [
  { q: "La memoria è un diritto?", a: "Chi pensa di sì ricorda che la nostra identità sta dentro il racconto che gli altri fanno di noi, e che averne cura (da vivi) è una forma di libertà. Chi pensa di no sostiene che il diritto di essere dimenticati vale quanto quello di essere ricordati, e che nessuno dovrebbe dover lasciare tracce." },
  { q: "Si può rispettare un morto facendolo parlare?", a: "Per alcuni l'avatar è un modo per restare accanto a chi resta, per altri è una violazione del silenzio. Il punto su cui quasi tutti concordano è il consenso della persona prima, e il tempo di attesa dopo." },
  { q: "Chi decide che cosa lascio?", a: "Io, mentre sono vivo? I miei figli, dopo? Un'azienda? La domanda sposta il discorso dalla tecnologia ai diritti, ed è lì che va discusso." },
];

const lettere = [
  { t: "Il corpus siamo noi", k: "Saggio · Cultura", p: "Prima di essere memoria è corpo, prima di essere racconto è vita che respira." },
];

export default function Storie() {
  return (
    <Page>
      <Hero k="Storie" title={<>Da leggere, da discutere, <em style={{ color: RED }}>da ricordare.</em></>} lead="UltraRem è anche un luogo dove si racconta. Qui trovi le storie delle persone, i dibattiti sul fine vita, i saggi sulla cultura della memoria e i profili di chi la studia." />

      <Sec k="Come funziona" title="Ogni storia si legge. Alcune si possono anche ascoltare.">
        <Cols gap={40}>
          <Prose>
            <p>Una storia nasce come un articolo: un testo scritto con la persona (o con la sua famiglia) e pubblicato solo con il suo consenso scritto (art. 18). Si legge, come si legge un racconto.</p>
            <p>Se la persona lo ha deciso, in fondo alla pagina si apre uno spazio di dialogo con la sua testimonianza, dove puoi farle domande. Prima di parlare ti diciamo che stai interagendo con un'intelligenza artificiale (art. 14), e ogni risposta porta l'etichetta Testimonianza o Elaborazione (art. 15). Se non vuoi entrare, non entri: nessuno ti invita a farlo (art. 17).</p>
            <p>Le storie che trovi in questa pagina, per ora, sono segnaposto: stiamo raccogliendo i consensi delle persone che le racconteranno, e non pubblichiamo nulla senza.</p>
          </Prose>
          <div style={{ flex: "1 1 300px", maxWidth: 420 }}><Photo name="storie" ar="4 / 5" /></div>
        </Cols>
      </Sec>

      <Sec k="Le storie" title="Chi si racconta, e chi ascolta." bg={PALE}>
        <Cols gap={20}>
          {["A", "B", "C"].map((l, i) => (
            <div key={l} style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Photo name="riempitivo" ar="3 / 2" pos={["center", "left", "right"][i]} />
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

      <Sec k="Cultura · saggio" title="Il corpus siamo noi.">
        <Prose max={720}>
          <p>Il nome di questo progetto viene da una parola latina, <i>ultra</i>, e da un'altra che sta in fondo a ogni notte, <i>rem</i>: andare oltre il sonno, oltre il riposo, oltre quello che il corpo dà per scontato. Prima di essere memoria, ciò che di noi resta è corpo, fatto di gesti, di voce, di respiro, di un certo modo di inclinare la testa quando qualcuno dice una cosa che non ci convince.</p>
          <p>La cultura occidentale ha provato a staccare l'anima dal corpo per trovare una forma di immortalità che non dipendesse dalla materia. Oggi la tecnologia ci offre l'inverso: tenere il corpo, o meglio le sue tracce, e farne un modo di restare. È una promessa antica con un vestito nuovo, e come tutte le promesse antiche va maneggiata con rispetto.</p>
          <p>Il corpus, in questo senso, è ciò che di noi può essere raccolto senza tradirci: le parole, le pause, i silenzi, le cose che non diciamo mai. Un corpus è fedele quando lascia dentro anche ciò che non è presentabile, e per questo non può essere composto di tracce raccolte per caso.</p>
          <p>Chi ci lascia un corpus vero ci lascia qualcosa di più di un ricordo: ci lascia la possibilità di continuare a conversare con lui, nel modo in cui lui ha scelto, e sapendo sempre quando stiamo ascoltando lui e quando stiamo ascoltando una macchina.</p>
        </Prose>
        <p style={{ marginTop: 18, fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>Redazione UltraRem · 5 min di lettura</p>
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
