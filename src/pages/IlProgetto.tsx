import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, kicker, RED, INK, GREY, PALE, BODONI, BLACK, NARROW } from "@/components/Mag";
import { AVATAR_URL, VIDEO_URL } from "@/lib/config";

function Slot({ text, img }: { text: string; img: string }) {
  return (
    <div style={{ position: "relative", maxWidth: 960 }}>
      <Photo name={img} ar="16 / 9" />
      <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.55)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: 24, textAlign: "center", color: "#fff" }}>
        <div style={{ width: 76, height: 76, borderRadius: "50%", background: RED, border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ marginLeft: 6, borderStyle: "solid", borderWidth: "13px 0 13px 22px", borderColor: "transparent transparent transparent #fff" }} />
        </div>
        <div style={{ ...kicker("#fff") }}>{text}</div>
      </div>
    </div>
  );
}

function Video({ src }: { src: string }) {
  return src.includes("drive.google.com")
    ? <iframe src={src} title="UltraRem" allow="autoplay; fullscreen" allowFullScreen style={{ width: "100%", maxWidth: 960, aspectRatio: "16 / 9", border: `2px solid ${INK}` }} />
    : <video src={src} controls playsInline preload="metadata" style={{ width: "100%", maxWidth: 960, aspectRatio: "16 / 9", background: INK, border: `2px solid ${INK}` }} />;
}

const questions = [
  "Che cos'è UltraRem, in parole semplici?",
  "Chi è lo psicologo che mi ascolta, e che cosa fa esattamente?",
  "Come rileggo e approvo la mia autobiografia?",
  "Che differenza c’è tra il Diario personale e i percorsi certificati?",
  "Quanto costa, e che cosa ottengo in ciascun percorso?",
  "Che differenza c'è tra ciò che ho detto io e ciò che il sistema elabora?",
];


const carta = [
  { a: "Art. 2", t: "Nessuna pubblicità", d: "Né negli archivi né nel dialogo con l'avatar. La tua memoria non è uno spazio da vendere." },
  { a: "Art. 3", t: "Fedeltà alla persona", d: "Decidi tu come essere ricordato, anche nei lati meno levigati. Nessuno ti abbellisce a tua insaputa." },
  { a: "Art. 4", t: "Neutralità", d: "Operiamo senza prendere posizione su credi e orientamenti: la tua visione della vita e della morte è la tua." },
  { a: "Art. 7", t: "Il verbale firmato", d: "La sintesi del tuo progetto la firma lo psicologo che ti ha ascoltato: una persona con un nome, che risponde di ciò che scrive." },
  { a: "Art. 14", t: "Trasparenza sull'IA", d: "Chi parla con un avatar sa sempre che sta parlando con un sistema di intelligenza artificiale." },
  { a: "Art. 15", t: "Testimonianza o elaborazione", d: "Il sistema attinge al racconto autorizzato, segnala le informazioni mancanti e dichiara quando collega o deduce. La voce sintetica è riconoscibile come tale." },
  { a: "Art. 17", t: "Libertà di non dialogare", d: "Nessun familiare è obbligato a parlare con l'avatar, e nessuno riceve inviti o messaggi non richiesti." },
  { a: "Art. 18", t: "Memoria condivisa", d: "Quando un ricordo riguarda altre persone, serve il loro consenso specifico." },
  { a: "Accesso", t: "Disponibile già in vita", d: "L’autobiografia certificata viene rilasciata già in vita. L’autore sceglie chi può consultarla e definisce le regole di accesso, revoca e sospensione." },
  { a: "Art. 25", t: "La ricerca resta separata", d: "Partecipare a uno studio richiede un consenso a parte ed è sempre facoltativo." },
  { a: "Art. 26", t: "Percorsi per chi non può permetterseli", d: "Le condizioni di eventuali percorsi agevolati saranno comunicate quando definite." },
];

export default function IlProgetto() {
  return (
    <Page>
      <Hero k="Il Progetto" title={<>La tua storia, <em style={{ color: RED }}>raccontata da te.</em></>} lead="UltraRem raccoglie ricordi, esperienze e pensieri e li trasforma in un’autobiografia interattiva. Un racconto che costruisci e approvi, da consultare già oggi e affidare alle persone che scegli nei percorsi certificati." />

      <Sec id="avatar" k="Conversazione" title="Parla con l'avatar di Alberto.">
        <Prose>
          <p>L’avatar di Alberto Augusti, fondatore di UltraRem, presenta il progetto e risponde alle tue domande. È una dimostrazione dell’autobiografia interattiva nei percorsi certificati; il Diario personale ha invece una voce propria e nessun avatar.</p>
          <p>Prima di parlare sai che stai interagendo con un sistema di intelligenza artificiale e che la voce è sintetica. Puoi interrompere quando vuoi, senza inviti o messaggi per riprendere la conversazione.</p>
        </Prose>
        <div style={{ margin: "26px 0" }}>
          {AVATAR_URL
            ? <iframe src={AVATAR_URL} title="Avatar UltraRem" allow="microphone; camera; autoplay" style={{ width: "100%", maxWidth: 960, minHeight: 560, border: `2px solid ${INK}`, background: INK }} />
            : <Slot img="riempitivo2" text="L'avatar sarà disponibile a breve" />}
        </div>
        <div style={{ ...kicker(), marginBottom: 10 }}>Che cosa puoi chiedergli</div>
        <Cols gap={0}>
          {questions.map((q, i) => (
            <div key={q} style={{ flex: "1 1 320px", padding: "14px 18px", borderTop: `1px solid ${INK}`, fontFamily: BODONI, fontStyle: "italic", fontSize: 20, background: i % 2 ? PALE : "#fff" }}>{q}</div>
          ))}
        </Cols>
        <p style={{ marginTop: 18, maxWidth: 760, fontSize: 15, color: GREY }}>L'avatar parla della società e del progetto con le risposte che Alberto ha approvato. Quando una domanda esce da quel perimetro te lo dice, invece di inventare.</p>
      </Sec>

      <Sec id="video" k="Racconto" title="Il video." bg={PALE}>
        <Prose>
          <p>Un filmato breve sul piacere di raccontarsi e sulle storie che vale la pena mettere in ordine. Per chi ha qualche minuto e nessuna voglia di leggere: anche a bordo c’è posto per entrambi.</p>
        </Prose>
        <div style={{ margin: "26px 0 0" }}>
          {VIDEO_URL ? <Video src={VIDEO_URL} /> : <Slot img="cultura" text="Il video sarà online a breve" />}
        </div>
      </Sec>

      <Sec k="Perché esiste" title="Raccontarsi è già un viaggio.">
        <Cols gap={40}>
          <Prose>
            <p>Le scelte, le persone incontrate, il lavoro, gli aneddoti che tornano a tavola: una vita è fatta di storie grandi e piccole. Raccontarle aiuta a ritrovarne il filo e a riconoscere ciò che conta per te.</p>
            <p>UltraRem ti offre il tempo e gli strumenti per farlo. Nei percorsi certificati uno psicologo accompagna la narrazione e redige la sintesi; tu rileggi, correggi e approvi il racconto. L’autobiografia si apre poi alle domande.</p>
            <p>Puoi cominciare dal Diario di bordo: uno spazio personale riservato ai maggiorenni, consultabile soltanto dal titolare. Nei percorsi certificati scegli anche le persone a cui affidare l’autobiografia.</p>
          </Prose>
          <div style={{ flex: "1 1 320px", maxWidth: 440 }}><Photo name="riempitivo" ar="4 / 5" pos="center" /></div>
        </Cols>
      </Sec>

      <Sec k="Il metodo" title="Racconti, rileggi, approvi." bg={PALE}>
        <Cols gap={20}>
          <Card k="1" t="Raccogliere">
            <p style={{ margin: 0 }}>L’assistente digitale guida la raccolta dei tuoi ricordi. Nei percorsi certificati il companion affianca le interviste con lo psicologo; nel Diario personale raccogli senza il percorso professionale.</p>
          </Card>
          <Card k="2" t="Dare senso">
            <p style={{ margin: 0 }}>Nei percorsi certificati lo psicologo conduce le interviste, ordina il materiale e redige una sintesi professionale. Tu la rileggi, correggi ciò che desideri e decidi quali racconti includere.</p>
          </Card>
          <Card k="3" t="Convalidare" dark>
            <p style={{ margin: 0 }}>La persona approva l’autobiografia e il professionista valida il racconto. Alla conclusione il companion viene rimosso: resta l’autobiografia interattiva, con accessi regolati dalla volontà dell’autore.</p>
          </Card>
        </Cols>
        <p style={{ margin: "22px 0 0", maxWidth: 760 }}>Il risultato dei percorsi certificati è un’autobiografia approvata da chi si racconta. La tecnologia è di QBT, nostro fornitore tecnologico; metodo, qualità del racconto e responsabilità della custodia fanno capo a UltraRem.</p>
      </Sec>

      <Sec k="Il corpus" title="La materia della tua autobiografia.">
        <Prose>
          <p>Il corpus è il materiale da cui prende forma l’autobiografia: racconti, registrazioni, ricordi, riflessioni e parole riviste dalla persona. Nei percorsi certificati il professionista lo ordina e lo restituisce all’autore per la sua approvazione.</p>
          <p>Raccolta e consultazione sono momenti diversi. Prima aggiungi i tuoi racconti; poi puoi ritrovarli facendo domande, già oggi. Il Diario resta personale; l’autobiografia certificata può essere condivisa secondo la volontà dell’autore.</p>
        </Prose>
        <Quote by="Dall'approfondimento «Il corpus siamo noi»">Prima di essere memoria è corpo, prima di essere racconto è vita che respira.</Quote>
      </Sec>

      <Sec k="Onestà" title="Fedeltà al racconto e trasparenza." dark>
        <Cols gap={40}>
          <Prose>
            <p>L’autobiografia risponde attingendo ai contenuti approvati. Quando riporta ciò che è stato raccontato restituisce una <b>Testimonianza</b>; quando collega o deduce lo dichiara come <b>Elaborazione</b>, entro il materiale autorizzato. Se manca un’informazione, lo segnala.</p>
            <p>Il Diario segue una regola contemplativa: restituisce racconti e idee ricevuti, senza proporre nuovi argomenti, creare una relazione o prolungare la consultazione. La sua voce è selezionabile e propria del Diario. Nei percorsi certificati la voce dell’avatar è dichiarata come sintetica.</p>
          </Prose>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
            <div style={{ border: "2px solid #ff3b52", padding: 16 }}><div style={kicker("#ff3b52")}>Testimonianza</div><div style={{ fontSize: 16, marginTop: 4 }}>Ciò che la persona ha detto, con le sue parole.</div></div>
            <div style={{ border: "2px solid #aaa", padding: 16 }}><div style={kicker("#aaa")}>Elaborazione</div><div style={{ fontSize: 16, marginTop: 4 }}>Collegamenti o deduzioni dichiarati, entro i contenuti autorizzati.</div></div>
          </div>
        </Cols>
      </Sec>

      <Sec k="La Carta dei Valori" title="Ciò che promettiamo, e che puoi pretendere." bg={PALE}>
        <p style={{ margin: "0 0 24px", maxWidth: 760 }}>I principi della Carta dei Valori guidano la raccolta, l’approvazione e la custodia del racconto. Qui trovi una sintesi aggiornata al progetto, in parole semplici.</p>
        <Cols gap={0}>
          {carta.map((c, i) => (
            <div key={c.a} style={{ flex: "1 1 320px", padding: "18px 22px", borderTop: `1px solid ${INK}`, borderLeft: i % 2 ? `1px solid ${INK}` : "none", display: "flex", flexDirection: "column", gap: 4, background: "#fff" }}>
              <div style={{ fontFamily: BLACK, fontSize: 14, color: RED }}>{c.a}</div>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}>{c.t}</div>
              <div style={{ fontSize: 16 }}>{c.d}</div>
            </div>
          ))}
        </Cols>
      </Sec>

      <Sec k="Le tutele" title="Il racconto resta nelle tue mani.">
        <Prose>
          <p>Il percorso è autobiografico: gli incontri con lo psicologo servono a raccogliere e validare il racconto, non costituiscono una terapia. L’autore governa i contenuti e, nei percorsi certificati, sceglie chi può accedervi.</p>
          <p>Consenso, rispetto delle altre persone e possibilità di revoca o sospensione guidano la custodia. Nei percorsi certificati il companion di raccolta viene rimosso alla conclusione; resta l’autobiografia che la persona ha approvato.</p>
        </Prose>
      </Sec>

      <CtaBand title="Vuoi vedere come si traduce in un percorso?" text="Tre gradini, ciascuno con i suoi tempi e il suo prezzo, e ognuno che conduce al successivo." a={{ href: "/come-funziona", label: "Come funziona" }} b={{ href: "/fondatori", label: "Chi c'è dietro" }} />
    </Page>
  );
}
