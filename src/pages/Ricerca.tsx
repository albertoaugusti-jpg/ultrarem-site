import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Tbp, kicker, RED, INK, PALE } from "@/components/Mag";
import { research, who } from "@/content/home";

const domande = [
  { t: "Il benessere", p: "Che effetto ha, su chi resta e su chi se ne va, l'idea che una parte di sé continui a esistere in forma interattiva? Aiuta ad affrontare la perdita, la rimanda, la complica?" },
  { t: "La dignità", p: "Che cosa significa rispettare una persona morta quando è possibile far parlare una sua replica? Chi ha il diritto di decidere che cosa dirà, e chi di spegnerla?" },
  { t: "La continuità identitaria", p: "Un avatar costruito con metodo (ore di interviste, un professionista che convalida) è più fedele di uno composto dalle tracce raccolte per caso? E in che senso?" },
];

export default function Ricerca() {
  const t = who.science[0];
  return (
    <Page>
      <Hero k="Ricerca" title={<>Il sé digitale <em style={{ color: RED }}>postumo.</em></>} lead="Prima di costruire a fondo qualcosa di così delicato, abbiamo voluto che un'università lo studiasse, con il rigore del metodo scientifico." />

      <Sec k="La ricerca" title="Una ricerca triennale, all'Università di Padova.">
        <Cols gap={40}>
          <Prose>
            <p>{research.cells[0].v}</p>
            <p>È un dottorato di ricerca finanziato da UltraRem con una borsa, nell'ambito del dipartimento FISPPA dell'Ateneo (Filosofia, Sociologia, Pedagogia e Psicologia Applicata). Il curriculum è Inclusion and Psychological Growth, dentro il programma in Human Rights, Society, and Multi-level Governance. La docente di riferimento è la Prof.ssa Ines Testoni.</p>
            <p>Il nostro ruolo, in questo, è quello di chi sostiene: mettiamo a disposizione un progetto concreto da studiare e un finanziamento.</p>
          </Prose>
          <div style={{ flex: "1 1 300px", maxWidth: 360, display: "flex", flexDirection: "column", gap: 12 }}><img src="/img/rivista/universita.jpg" alt="Emblema universitario (illustrazione)" style={{ width: "100%", border: `1px solid ${INK}` }} /><Tbp ini="IT" ar="3 / 2" col="#111" label="Foto TBP · Prof.ssa Testoni" /></div>
        </Cols>
      </Sec>

      <Sec k="Le domande" title="Che cosa vogliamo capire, e che cosa non sappiamo." bg={PALE}>
        <Cols gap={20}>
          {domande.map((d, i) => (
            <Card key={d.t} k={`Domanda ${i + 1}`} t={d.t} dark={i === 1}><p style={{ margin: 0 }}>{d.p}</p></Card>
          ))}
        </Cols>
        <p style={{ margin: "22px 0 0", maxWidth: 760 }}>Abbiamo già una nostra idea su ciascuna di queste domande, ed è per questo che serve qualcuno che non l'abbia. Un'idea che nessuno ha provato a smentire è una convinzione, non un risultato.</p>
      </Sec>

      <Sec k="Chi la guida" title={t.name}>
        <Cols gap={40}>
          <Prose>
            <p>{t.text}</p>
            <p>Il master in Death Studies &amp; The End of Life è il primo master universitario italiano dedicato al fine vita. Per noi è l'interlocutore naturale: la morte come oggetto di studio e non di tabù.</p>
          </Prose>
        </Cols>
      </Sec>

      <Sec k="Come ci tuteliamo" title="Ricerca e attività commerciale restano separate." dark>
        <Prose>
          <p>Partecipare a uno studio richiede un consenso a parte, esplicito e sempre facoltativo (art. 25 della Carta dei Valori). Non partecipare non cambia nulla del tuo percorso, e lo stesso vale se cambi idea dopo aver partecipato.</p>
          <p>A chi appartengano i risultati lo definirà la convenzione con l'Ateneo, in attesa di sottoscrizione, e te lo diremo con chiarezza quando sarà decisa. Gli esiti si aggiungeranno qui, a ricerca conclusa.</p>
        </Prose>
      </Sec>

      <Sec k="Calendario" title="Quello che sappiamo, e quello che non ancora.">
        <Cols gap={0}>
          {[
            ["Impegno formalizzato", "UltraRem ha formalizzato con l'Università di Padova l'impegno a finanziare la borsa di dottorato."],
            ["1° novembre 2027", "Inizio del dottorato (triennale)."],
            ["In corso di definizione", "La convenzione con l'Ateneo, che regola tra l'altro la proprietà dei risultati."],
            ["A ricerca conclusa", "Pubblicazione degli esiti, che troverai in questa pagina."],
          ].map(([a, b], i) => (
            <div key={a} style={{ flex: "1 1 240px", padding: "18px 22px", borderTop: `2px solid ${INK}`, borderLeft: i ? `1px solid ${INK}` : "none" }}>
              <div style={kicker()}>{a}</div><p style={{ margin: "6px 0 0", fontSize: 16 }}>{b}</p>
            </div>
          ))}
        </Cols>
      </Sec>

      <CtaBand title="Se sei un ricercatore o uno studioso del lutto." text="Stiamo costruendo la sezione dei profili di chi lavora su memoria, fine vita ed etica dell'intelligenza artificiale. Scrivici." a={{ href: "/contatti", label: "Scrivici" }} b={{ href: "/storie", label: "Leggi i profili" }} />
    </Page>
  );
}
