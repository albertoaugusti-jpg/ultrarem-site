import { guides } from "@/content/guides";
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
      <Hero k="Storie" title={<>Da leggere, da discutere, <em style={{ color: RED }}>da ricordare.</em></>} lead="UltraRem è anche un luogo dove si racconta. Qui trovi i racconti dei nostri personaggi, le guide per cominciare a raccontarti e le riflessioni sulla cultura della memoria." />

      <Sec k="Come funziona" title="Ogni storia si legge. Alcune si possono anche ascoltare.">
        <Cols gap={40}>
          <Prose>
            <p>Una storia nasce dal racconto della persona, che rilegge il testo e ne approva la pubblicazione. I percorsi certificati permettono di condividere l’autobiografia secondo la volontà dell’autore; il Diario di bordo rimane invece personale.</p>
            <p>Quando l’autore di un’autobiografia certificata lo sceglie, il racconto può aprirsi alle domande. L’interazione è dichiarata come artificiale, la voce come sintetica e i collegamenti o le deduzioni vengono segnalati. La consultazione resta facoltativa.</p>
            <p>Steno, Nemo e Haddock sono personaggi di fantasia. I loro racconti accompagnano i tre percorsi UltraRem e invitano a riflettere sulle esperienze che danno forma a una vita. Le eventuali testimonianze dei clienti saranno pubblicate soltanto con la loro approvazione.</p>
          </Prose>
          <div style={{ flex: "1 1 300px", maxWidth: 420 }}><Photo name="storie-nonno" ar="4 / 3" pos="62% center" /></div>
        </Cols>
      </Sec>

      <Sec k="I racconti di UltraRem" title="Steno, Nemo e Haddock." bg={PALE}>
        <Cols gap={20}>
          {[
            { name: "Steno e la Balena", img: "guida-diario.png", pdf: "/Steno_e_la_Balena.pdf", text: "Dal Diario di bordo di Steno: un racconto di mare per cominciare il viaggio.", path: "/percorsi/diario-di-bordo", label: "Il Diario di bordo" },
            { name: "Nemo e il cuore della nave", img: "guida-marinai.png", pdf: "/Nemo_e_il_cuore_della_nave.pdf", text: "La storia di Nemo accompagna I marinai del tempo e il desiderio di raccontarsi.", path: "/percorsi/i-marinai-del-tempo", label: "I marinai del tempo" },
            { name: "Haddock e la Tigre", img: "guida-capitani.png", pdf: "/Haddock_e_la_Tigre.pdf", text: "Haddock racconta ai nipoti una delle avventure della sua vita.", path: "/percorsi/i-capitani-di-lungo-corso", label: "I Capitani di lungo corso" },
          ].map(story => <div key={story.name} style={{ flex: "1 1 280px" }}>
            <img src={"/img/rivista/" + story.img} alt={story.name} width={110} height={110} loading="lazy" style={{ objectFit: "contain" }} />
            <h3 style={{ fontFamily: BODONI, fontSize: 26 }}>{story.name}</h3>
            <p>{story.text}</p>
            <p><a href={story.pdf} style={{ color: RED }} download>Leggi il racconto · PDF</a></p>
            <Link href={story.path}>Scopri {story.label}</Link>
          </div>)}
        </Cols>
      </Sec>

      <Sec k="Le guide" title="Da dove cominciare a raccontarsi">
        <Cols gap={24}>{guides.map(guide => <div key={guide.slug} style={{ flex: "1 1 280px" }}>
          <h3 style={{ fontFamily: BODONI, fontSize: 25 }}><Link href={"/guide/" + guide.slug} style={{ color: INK }}>{guide.title}</Link></h3>
          <p>{guide.description}</p>
          <Link href={"/guide/" + guide.slug} style={{ color: RED }}>Leggi la guida →</Link>
        </div>)}</Cols>
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

      <Sec k="Ricerca" title="Studiare la memoria e il racconto di sé." bg={PALE}>
        <Prose><p>Il progetto integra la ricerca sulla fedeltà del racconto, la sicurezza emotiva e le modalità di consultazione delle autobiografie. Nella pagina dedicata trovi il lavoro con l’Università di Padova e il ruolo della Prof.ssa Ines Testoni.</p>
        <p><Link href="/ricerca" style={{ color: RED }}>Università e ricerca →</Link></p></Prose>
      </Sec>

      <CtaBand title="Hai una storia, o una domanda?" text="Scrivici. Le storie nascono da persone che decidono di raccontarsi, e i dibattiti da chi ha qualcosa da dire." a={{ href: "/contatti", label: "Scrivici" }} b={{ href: "/il-progetto#avatar", label: "Parla con l'avatar" }} />
    </Page>
  );
}
