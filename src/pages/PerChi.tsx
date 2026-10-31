import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, btn, kicker, RED, INK, GREY, PALE, BODONI } from "@/components/Mag";

const profili = [
  { k: "Per i figli e i nipoti", t: "Chi vuole lasciare più di una fotografia", p: "Le foto dicono com'eri, non come ragionavi. Se pensi ai tuoi figli o ai tuoi nipoti tra trent'anni, probabilmente vuoi che sappiano che cosa avresti risposto, che cosa ti faceva ridere, che cosa non avresti mai fatto. Si può raccogliere, adesso, con calma, mentre hai ancora voglia di raccontarlo.", via: "Diario di bordo, poi I marinai del tempo" },
  { k: "Per chi ha costruito qualcosa", t: "Il fondatore o la fondatrice che vuole trasmettere una visione", p: "La cultura di un'impresa vive nelle persone che l'hanno fatta, e si disperde quando loro se ne vanno. Il modo di decidere, i criteri con cui si dice di sì o di no, le ragioni di certe scelte difficili: sono ciò che i successori vorrebbero chiederti e non potranno.", via: "I Capitani di lungo corso" },
  { k: "Per le professioni", t: "Chi ha una storia professionale da consegnare", p: "Decenni di mestiere, di relazioni, di intuizioni che non stanno in nessun manuale. Un medico, un insegnante, un artigiano, un magistrato: la loro identità professionale è un patrimonio che di solito si perde al momento della pensione.", via: "I marinai del tempo" },
  { k: "Per chi attraversa una malattia", t: "Chi sa che il tempo della lucidità può accorciarsi", p: "Se tu o una persona della tua famiglia state affrontando una malattia che può toccare la memoria, il tempo è la risorsa che manca di più. Raccontare adesso, con la piena lucidità, vale più di ogni elaborazione successiva. Se è il tuo caso, scrivici: troviamo un ritmo che regga.", via: "Scrivici subito, senza aspettare di decidere" },
  { k: "Per le famiglie", t: "Chi vuole raccogliere la voce dei propri genitori", p: "A volte chi inizia non è la persona da ricordare, ma chi le sta accanto. È possibile, purché sia lei a volerlo: nessuno viene ricostruito contro la propria volontà (art. 3), e nessuno viene registrato senza saperlo.", via: "Diario di bordo, per cominciare insieme" },
  { k: "Per chi non pensa di meritarlo", t: "Chi non è nessuno, per fortuna", p: "Non serve essere famosi per meritare di essere ricordati. Serve avere vissuto, amato, sbagliato e riso, il che ci include quasi tutti. Per chi non potrebbe permetterselo, la Carta (art. 26) prevede ogni anno percorsi dedicati, con criteri trasparenti.", via: "Percorsi dedicati (art. 26)" },
];

const quando = [
  { t: "Adesso", p: "Il momento migliore è quando puoi farlo con calma, senza urgenza e senza paura. Racconti meglio, scegli meglio, e arrivi in fondo con la sensazione di aver lasciato qualcosa e non di averlo dovuto fare." },
  { t: "Dopo una diagnosi", p: "Il tempo diventa un fattore. Parlane con noi appena puoi: ogni ora di racconto in piena lucidità ha un valore che non si ripete." },
  { t: "Alle soglie di un passaggio", p: "Una nascita, un pensionamento, un anniversario, un trasferimento. I passaggi sono occasioni naturali per guardarsi indietro e decidere che cosa tenere." },
];

export default function PerChi() {
  return (
    <Page>
      <Hero k="Per chi" title={<>Non serve una malattia. <em style={{ color: RED }}>Basta voler esserci.</em></>} lead="UltraRem è per chiunque abbia qualcosa da dire e voglia che resti autentico nel tempo. Qui trovi sei situazioni in cui ci si può riconoscere, e il punto da cui partire in ciascuna." />

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
            <Quote>Non voglio essere dimenticata. Voglio continuare ad essere, a modo mio.</Quote>
            <p>È il senso di tutto. Non si tratta di vincere sulla morte, che è una gara persa in partenza, e nemmeno di lasciare un monumento. Si tratta di restare riconoscibili per chi resta, e di decidere da soli come.</p>
            <p>Per questo abbiamo scelto di non mostrarti mai un avatar senza il consenso della persona che rappresenta, di chiamare le cose con il loro nome (testimonianza o elaborazione) e di non spingerti ad andare avanti: il Diario di bordo costa poco proprio per darti il modo di capire se è un cammino per te.</p>
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

      <Sec k="Per chi non è la scelta giusta" title="Quando ti diremo di non farlo." bg={PALE}>
        <Prose>
          <p>Se stai attraversando un lutto recente e ti aspetti che un avatar ti restituisca la persona che hai perso, UltraRem non fa questo: lavora con chi vuole raccontarsi, non con chi vuole ricostruire un altro senza il suo consenso. Se è il tuo caso ti diciamo con franchezza che è presto, e ti consigliamo di rivolgerti prima a un professionista del lutto.</p>
          <p>Se la persona che vorresti raccontare non è consapevole o non vuole, non andiamo avanti. Non è una cautela burocratica: è l'unico modo per essere fedeli a lei.</p>
        </Prose>
      </Sec>

      <CtaBand title="Parti dal gradino che senti più tuo." text="Il Diario di bordo costa 290 € e serve proprio a capire se vuoi andare avanti. Se vuoi una persona accanto fin dall'inizio, comincia dai Marinai del tempo." a={{ href: "/come-funziona", label: "Vedi i percorsi" }} b={{ href: "/prenota", label: "Prenota una demo" }} />
    </Page>
  );
}
