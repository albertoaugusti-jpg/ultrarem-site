import { Page, Hero, Sec, Prose, Cols, Card, Quote, CtaBand, Photo, kicker, RED, INK, GREY, PALE, BODONI, BLACK, NARROW } from "@/components/Mag";

const carta = [
  { a: "Art. 2", t: "Nessuna pubblicità", d: "Né negli archivi né nel dialogo con l'avatar. La tua memoria non è uno spazio da vendere." },
  { a: "Art. 3", t: "Fedeltà alla persona", d: "Decidi tu come essere ricordato, anche nei lati meno levigati. Nessuno ti abbellisce a tua insaputa." },
  { a: "Art. 4", t: "Neutralità", d: "Operiamo senza prendere posizione su credi e orientamenti: la tua visione della vita e della morte è la tua." },
  { a: "Art. 7", t: "Il verbale firmato", d: "La sintesi del tuo progetto la firma lo psicologo che ti ha ascoltato: una persona con un nome, che risponde di ciò che scrive." },
  { a: "Art. 14", t: "Trasparenza sull'IA", d: "Chi parla con un avatar sa sempre che sta parlando con un sistema di intelligenza artificiale." },
  { a: "Art. 15", t: "Testimonianza o elaborazione", d: "Ogni risposta è etichettata: Testimonianza se riporta ciò che la persona ha detto, Elaborazione se nasce dal sistema." },
  { a: "Art. 17", t: "Libertà di non dialogare", d: "Nessun familiare è obbligato a parlare con l'avatar, e nessuno riceve inviti o messaggi non richiesti." },
  { a: "Art. 18", t: "Memoria condivisa", d: "Quando un ricordo riguarda altre persone, serve il loro consenso specifico." },
  { a: "Art. 20", t: "Novanta giorni di silenzio", d: "Dopo la morte l'avatar non parla ai familiari prima di novanta giorni, per lasciare spazio al dolore." },
  { a: "Art. 25", t: "La ricerca resta separata", d: "Partecipare a uno studio richiede un consenso a parte ed è sempre facoltativo." },
  { a: "Art. 26", t: "Percorsi per chi non può permetterseli", d: "Ogni anno, con criteri trasparenti, offriamo percorsi a chi non potrebbe permetterseli." },
];

export default function IlProgetto() {
  return (
    <Page>
      <Hero k="Il Progetto" title={<>Chi ero, chi sono <em style={{ color: RED }}>e chi sarò.</em></>} lead="UltraRem non è un archivio e non è un gioco con l'intelligenza artificiale. È un modo serio, accompagnato da professionisti, di decidere mentre sei vivo e lucido che cosa di te debba restare, e a chi." />

      <Sec k="Perché esiste" title="La tua dimensione digitale esisterà comunque.">
        <Cols gap={40}>
          <Prose>
            <p>Ogni traccia che lasciamo online, ogni messaggio, ogni fotografia, ogni registrazione, concorre a formare una versione di noi. Nessuno la sta costruendo con cura. Viene composta da sistemi che deducono, non da persone che ascoltano, e il risultato somiglia a chi eravamo come una fotografia sfocata somiglia a un volto.</p>
            <p>Se quella versione esisterà comunque, ci sembra giusto che a costruirla sia chi ne ha il diritto (la persona stessa), con il tempo e con l'aiuto di chi sa fare le domande. È da qui che parte UltraRem, e da questa premessa discendono tutte le scelte che trovi in queste pagine: i professionisti, i tempi lunghi, il verbale firmato, il consenso, la Carta.</p>
            <p>Non promettiamo di far tornare nessuno. Promettiamo di custodire ciò che una persona ha scelto di lasciare, nel modo in cui l'ha scelto, e di non aggiungere niente che lei non abbia detto.</p>
          </Prose>
          <div style={{ flex: "1 1 320px", maxWidth: 440 }}><Photo name="cover" ar="4 / 5" pos="center top" /></div>
        </Cols>
      </Sec>

      <Sec k="Il metodo" title="Una macchina che raccoglie, una persona che dà senso." bg={PALE}>
        <Cols gap={20}>
          <Card k="1" t="Raccogliere">
            <p style={{ margin: 0 }}>Un companion digitale ti ascolta ogni volta che vuoi, di giorno o di notte, e raccoglie molto più di quanto un ciclo di interviste potrebbe mai fare: i dettagli, i ritorni, le cose che dici di sfuggita.</p>
          </Card>
          <Card k="2" t="Dare senso">
            <p style={{ margin: 0 }}>Uno psicologo iscritto all'Albo ti intervista, legge ciò che è emerso, distingue ciò che è identità da ciò che è rumore e ti restituisce il quadro. La macchina non sa farlo, e per questo non la lasciamo sola.</p>
          </Card>
          <Card k="3" t="Convalidare" dark>
            <p style={{ margin: 0 }}>Lo psicologo firma un verbale che dice che cosa è stato raccolto e come va letto (art. 7). Solo ciò che passa da quella firma entra nel tuo archivio come tuo.</p>
          </Card>
        </Cols>
        <p style={{ margin: "22px 0 0", maxWidth: 760 }}>Nessuno dei due, da solo, produce un'identità autentica. La tecnologia è di QBT, nostro fornitore tecnologico; il valore sta nella qualità del dato e nella responsabilità della custodia, che sono nostre.</p>
      </Sec>

      <Sec k="Il corpus" title="Che cosa mettiamo, davvero, in un'identità.">
        <Prose>
          <p>Il nucleo di ogni progetto è un corpus, cioè un insieme ordinato di racconti, registrazioni della voce, lettere, riflessioni e risposte a domande che di solito nessuno fa. Non è una biografia: una biografia ordina i fatti, un corpus conserva il modo. Il modo in cui ragioni, quello che ti fa ridere, i valori che non hai mai scritto e che governano ogni tua scelta, le esitazioni, le cose che dici sempre.</p>
          <p>Per questo la raccolta richiede tempo (decine di ore, nei percorsi più completi) e per questo non si improvvisa. Un avatar costruito in un pomeriggio dice quello che hai detto in un pomeriggio.</p>
        </Prose>
        <Quote by="Dal saggio «Il corpus siamo noi»">Prima di essere memoria è corpo, prima di essere racconto è vita che respira.</Quote>
      </Sec>

      <Sec k="Onestà" title="Testimonianza oppure elaborazione." dark>
        <Cols gap={40}>
          <Prose>
            <p>Un avatar fa due cose molto diverse, e chi lo ascolta ha diritto di sapere quale delle due sta facendo in ogni momento. Può riportare ciò che la persona ha effettivamente detto, e allora la risposta porta l'etichetta <b>Testimonianza</b>. Può invece rielaborare, collegare, rispondere a una domanda che la persona non ha mai ricevuto, e allora porta l'etichetta <b>Elaborazione</b> (art. 15).</p>
            <p>È una distinzione scomoda, perché toglie al sistema la possibilità di sembrare più fedele di quanto sia. Ma è il motivo per cui ti puoi fidare della prima e valutare con la giusta distanza la seconda.</p>
          </Prose>
          <div style={{ flex: "1 1 280px", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
            <div style={{ border: "2px solid #ff3b52", padding: 16 }}><div style={kicker("#ff3b52")}>Testimonianza</div><div style={{ fontSize: 16, marginTop: 4 }}>Ciò che la persona ha detto, con le sue parole.</div></div>
            <div style={{ border: "2px solid #aaa", padding: 16 }}><div style={kicker("#aaa")}>Elaborazione</div><div style={{ fontSize: 16, marginTop: 4 }}>Ciò che il sistema ricostruisce o collega.</div></div>
          </div>
        </Cols>
      </Sec>

      <Sec k="La Carta dei Valori" title="Ciò che promettiamo, e che puoi pretendere." bg={PALE}>
        <p style={{ margin: "0 0 24px", maxWidth: 760 }}>La Carta (versione 2, 30 ottobre 2026) è il documento a cui ci obblighiamo. Qui trovi gli articoli che incidono di più sul tuo rapporto con noi, in parole semplici.</p>
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

      <Sec k="Che cosa non siamo" title="Un confine che teniamo con cura.">
        <Prose>
          <p>Non siamo una banca di dati e non vendiamo profili. Non siamo una terapia, anche se lavoriamo con psicologi: l'intervista serve a costruire un progetto, non a curare. Non siamo una promessa di immortalità. E non siamo un sistema che parla ai tuoi cari senza che tu l'abbia deciso.</p>
          <p>Sappiamo che chi si occupa di morte e di memoria ha il dovere di dire con chiarezza dove finisce. Per questo preferiamo scrivere ciò che non faremo, piuttosto che ciò che sapremmo fare.</p>
        </Prose>
      </Sec>

      <CtaBand title="Vuoi vedere come si traduce in un percorso?" text="Tre gradini, ciascuno con i suoi tempi e il suo prezzo, e ognuno che conduce al successivo." a={{ href: "/come-funziona", label: "Come funziona" }} b={{ href: "/fondatori", label: "Chi c'è dietro" }} />
    </Page>
  );
}
