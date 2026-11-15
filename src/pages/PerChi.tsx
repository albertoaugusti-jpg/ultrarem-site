import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, btn, kicker, RED, INK, GREY, PALE, BODONI } from "@/components/Mag";

const profili = [
  { k: "Per i figli e i nipoti", t: "Chi vuole lasciare più di una fotografia", p: "Le foto aprono una storia; le tue parole possono raccontare il resto. Che cosa ti fa ridere, come hai scelto una strada, che cosa hai imparato: nei percorsi certificati costruisci e approvi un’autobiografia da condividere con figli e nipoti, già oggi.", via: "Diario di bordo, poi I marinai del tempo" },
  { k: "Per chi ha costruito qualcosa", t: "Il fondatore o la fondatrice che vuole trasmettere una visione", p: "La cultura di un’impresa vive nelle persone che l’hanno costruita: il modo di decidere, le ragioni di certe scelte, ciò che hanno imparato. Un’autobiografia certificata permette di raccogliere questa esperienza e condividerla con chi prosegue il lavoro.", via: "I Capitani di lungo corso" },
  { k: "Per le professioni", t: "Chi ha una storia professionale da consegnare", p: "Decenni di mestiere, di relazioni, di intuizioni che non stanno in nessun manuale. Un medico, un insegnante, un artigiano, un magistrato: la loro identità professionale è un patrimonio che di solito si perde al momento della pensione.", via: "I marinai del tempo" },
  { k: "Per chi vuole ritrovarsi", t: "Chi desidera mettere ordine nei propri ricordi", p: "Un viaggio, una scelta, un incontro: parlare aiuta a ritrovare il filo. Puoi iniziare con il Diario personale o scegliere fin da subito l’accompagnamento di uno psicologo in un percorso certificato.", via: "Diario personale o percorso certificato" },
  { k: "Per le famiglie", t: "Chi vuole raccogliere la voce dei propri genitori", p: "Puoi regalare il Diario a un genitore maggiorenne che desidera raccontarsi: resta personale e lo consulta soltanto lui. Per condividere un’autobiografia con la famiglia, la persona può scegliere un percorso certificato.", via: "Diario in regalo, consultabile solo dal titolare" },
  { k: "Per chi non pensa di meritarlo", t: "Chi non è nessuno, per fortuna", p: "Non serve essere famosi per meritare di essere ricordati. Serve avere vissuto, amato, sbagliato e riso, il che ci include quasi tutti. Il Diario è un punto di partenza personale, riservato ai maggiorenni; le condizioni di eventuali percorsi agevolati saranno comunicate quando definite.", via: "Percorsi dedicati (art. 26)" },
];

const quando = [
  { t: "Adesso", p: "Il momento migliore è quando puoi farlo con calma, senza urgenza e senza paura. Racconti meglio, scegli meglio, e arrivi in fondo con la sensazione di aver lasciato qualcosa e non di averlo dovuto fare." },
  { t: "Quando ti va di fare il punto", p: "Una nuova fase della vita può essere l’occasione per raccogliere pensieri e ricordi. Scegli tu il ritmo, senza dover avere già in mente il capitolo finale." },
  { t: "Alle soglie di un passaggio", p: "Una nascita, un pensionamento, un anniversario, un trasferimento. I passaggi sono occasioni naturali per guardarsi indietro e decidere che cosa tenere." },
];

export default function PerChi() {
  return (
    <Page>
      <Hero k="Per chi" title={<>Ognuno ha una storia <em style={{ color: RED }}>che merita di durare.</em></>} lead="UltraRem è per chiunque abbia qualcosa da dire e voglia che resti autentico nel tempo. Qui trovi sei situazioni in cui ci si può riconoscere, e il punto da cui partire in ciascuna." />

      <Sec k="Sei situazioni" title="Forse ti riconosci in una di queste.">
        <p style={{ margin: "0 0 26px", maxWidth: 760 }}>Sono scenari, non casi di clienti: ci servono per ragionare insieme su che cosa ti serve davvero e da dove ti conviene cominciare.</p>
        <Cols gap={20}>
          {profili.map((p, i) => (
            <Card key={p.k} k={p.k} t={p.t} dark={i === 1} red={i === 3} min={300}>
              <p style={{ margin: 0 }}>{p.p}</p>
              <div style={{ ...kicker(i === 1 || i === 3 ? "#fff" : INK), borderTop: `1px solid ${i === 1 || i === 3 ? "#fff" : INK}`, paddingTop: 10, marginTop: "auto" }}>Da dove partire · {p.via}</div>
            </Card>
          ))}
        </Cols>
      </Sec>

      <Sec bg={PALE}>
        <Cols gap={40}>
          <div style={{ flex: "1 1 300px", maxWidth: 440 }}><Photo name="dibattiti" ar="4 / 5" /></div>
          <Prose>
            <div style={kicker()}>Il senso di tutto</div>
            <Quote>La mia storia? Comincerei da quella volta che…</Quote>
            <p>Raccontare la propria vita vale già mentre lo fai: ritrovi episodi, idee e modi di vedere le cose. Un’autobiografia interattiva permette di tornarci con una domanda, anche quando il segnalibro si è perso.</p>
            <p>Il Diario di bordo è uno spazio personale per maggiorenni. Nei percorsi certificati il racconto viene costruito con lo psicologo, riletto e approvato dall’autore, che può affidarlo alle persone scelte.</p>
          </Prose>
        </Cols>
      </Sec>

      <Sec k="Quando cominciare" title="Non esiste un momento sbagliato, ma ce n'è uno migliore.">
        <Cols gap={20}>
          {quando.map(q => (
            <div key={q.t} style={{ flex: "1 1 280px", borderTop: `4px solid ${RED}`, paddingTop: 14 }}>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 26, lineHeight: 1.1, marginBottom: 8 }}>{q.t}</div>
              <p style={{ margin: 0, fontSize: 16 }}>{q.p}</p>
            </div>
          ))}
        </Cols>
      </Sec>

      <Sec k="La scelta è personale" title="Consapevolezza e volontà di raccontarsi." bg={PALE}>
        <Prose>
          <p>Il punto di partenza è una persona consapevole che desidera raccontarsi e approva il proprio racconto. Un regalo può facilitare l’inizio, ma la scelta di partecipare resta sua.</p>
          <p>La consultazione del Diario è riservata al titolare. La condivisione appartiene ai percorsi certificati e segue le indicazioni dell’autore. Gli incontri autobiografici non sostituiscono un percorso terapeutico.</p>
        </Prose>
      </Sec>

      <CtaBand title="Parti dal gradino che senti più tuo." text="Il Diario si crea con 290 €: dieci ore di raccolta, PDF e dodici mesi di conservazione. La consultazione è separata, a 20 €/mese. Per costruire un’autobiografia con lo psicologo e condividerla, scegli i percorsi certificati." a={{ href: "/come-funziona", label: "Vedi i percorsi" }} b={{ href: "/contatti", label: "Scrivici" }} />
    </Page>
  );
}
