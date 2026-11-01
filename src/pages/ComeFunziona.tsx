import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Photo, btn, kicker, RED, INK, GREY, PALE, BODONI, BLACK } from "@/components/Mag";
import { ladder } from "@/content/home";

const tappe = [
  { n: "1", t: "Cominci dal Diario", p: "Parli con il companion quando vuoi. Nessuna intervista, nessuno psicologo, nessun impegno oltre il primo pacchetto. Alla fine hai un quaderno in PDF della tua narrazione e, se vuoi, una voce che risponde solo con ciò che il diario contiene." },
  { n: "2", t: "Incontri lo psicologo", p: "Se decidi di proseguire, entri nel percorso certificato: 10 ore di intervista con uno psicologo iscritto all'Albo, formato sul protocollo di UltraRem, e 10 ore di raccolta con il companion tra un incontro e l'altro." },
  { n: "3", t: "Firmi il tuo progetto", p: "Lo psicologo redige la sintesi di ciò che è emerso e la firma (art. 7). Tu la leggi, la correggi, la approvi. Solo a quel punto è la tua identità, e non l'interpretazione di qualcuno." },
  { n: "4", t: "Scegli la tua forma", p: "La voce viene clonata (con tecnologia ElevenLabs, integrata da QBT) e puoi avere un avatar semplice. Nel percorso completo l'avatar è realizzato con riprese in studio, e su richiesta si può aggiungere l'elaborazione tridimensionale." },
  { n: "5", t: "Decidi chi può parlarti", p: "Stabilisci tu chi potrà dialogare con il tuo avatar e a quali condizioni. Quello che non decidi non accade (art. 3). In ogni caso, nei primi novanta giorni dopo la tua morte l'avatar non parla ai familiari (art. 20)." },
  { n: "6", t: "Custodiamo", p: "Il primo anno è compreso nei percorsi certificati. Dal secondo anno c'è un canone di custodia, che copre la conservazione sicura, la governance degli accessi e un uso interattivo ragionevole." },
];

const faq = [
  { q: "Posso fermarmi dopo il Diario di bordo?", a: "Sì, ed è per questo che esiste. Il Diario è un prodotto distinto da UltraRem e serve a capire se vuoi andare avanti. Se prosegui, quanto hai pagato viene scalato dal prezzo del gradino successivo." },
  { q: "Chi ascolta quello che racconto?", a: "Nel Diario, solo il companion. Nei percorsi certificati, anche lo psicologo che ti segue, che risponde di ciò che scrive e lo firma con il suo nome." },
  { q: "Chi può parlare con il mio avatar?", a: "Soltanto chi decidi tu. Nessuno è obbligato a dialogare (art. 17), nessuno riceve inviti non richiesti, e non è prevista alcuna pubblicità (art. 2)." },
  { q: "L'avatar può dire cose che non ho detto?", a: "Può elaborare, ma deve dirlo: ogni risposta è etichettata come Testimonianza (ciò che hai detto) o Elaborazione (ciò che il sistema ricostruisce), art. 15. E parla sempre dichiarandosi un sistema di intelligenza artificiale (art. 14)." },
  { q: "Quando i miei cari potranno usarlo?", a: "Non prima di novanta giorni dalla tua morte (art. 20). Il dolore ha i suoi tempi e l'avatar non deve occuparli." },
  { q: "E se un mio ricordo riguarda altre persone?", a: "Serve il loro consenso specifico (art. 18). Senza quello, il ricordo resta fuori." },
  { q: "Quanto costa tenere tutto?", a: "Nel Diario, 49 € l'anno dopo i primi dodici mesi. Nei percorsi certificati c'è un canone di custodia dal secondo anno (importi indicativi nella tabella qui sopra)." },
  { q: "Posso partecipare a una ricerca?", a: "Se vuoi, con un consenso separato e sempre facoltativo (art. 25). Non influisce in alcun modo sul tuo percorso." },
];

export default function ComeFunziona() {
  return (
    <Page>
      <Hero k="Come funziona" title={<>Una scala di tre gradini, <em style={{ color: RED }}>con i nomi della navigazione.</em></>} lead={ladder.intro} />

      <Sec k="I tre gradini" title="Che cosa ottieni, e a che prezzo.">
        <Cols gap={20}>
          {ladder.steps.map(s => {
            const red = s.tone === "red", dark = s.tone === "dark";
            return (
              <div key={s.name} style={{ flex: "1 1 300px", background: "#fff", border: `2px solid ${red ? RED : INK}`, display: "flex", flexDirection: "column" }}>
                <Photo name={s.img} ar="16 / 9" />
                <div style={{ padding: "18px 24px", borderTop: `2px solid ${red ? RED : INK}`, borderBottom: `2px solid ${red ? RED : INK}`, background: red ? RED : dark ? INK : "#fff", color: red || dark ? "#fff" : INK }}>
                  <div style={kicker(red ? "#fff" : dark ? "#ff3b52" : GREY)}>{s.tag}</div>
                  <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 34, lineHeight: 1.1, marginTop: 4 }}>{s.name}</div>
                </div>
                <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 10, flex: 1 }}>
                  <div style={{ fontFamily: BLACK, fontSize: 40, letterSpacing: -1, color: RED, lineHeight: 1 }}>{s.price}</div>
                  <div style={{ fontSize: 15, color: GREY }}>{s.sub}</div>
                  <ul style={{ margin: 0, paddingLeft: 20, fontSize: 16 }}>{s.items.map(it => <li key={it}>{it}</li>)}</ul>
                  <p style={{ margin: 0, fontSize: 14, fontStyle: "italic" }}>{s.note}</p>
                </div>
              </div>
            );
          })}
        </Cols>
        <p style={{ margin: "24px 0 0", fontSize: 15, maxWidth: 900 }}>{ladder.fee}</p>
      </Sec>

      <Sec k="Il viaggio" title="Dall'ora zero all'archivio, in sei tappe." bg={PALE}>
        <Cols gap={0}>
          {tappe.map((t, i) => (
            <div key={t.n} style={{ flex: "1 1 340px", padding: "22px 24px", borderTop: `2px solid ${INK}`, borderLeft: i % 2 ? `1px solid ${INK}` : "none", background: "#fff", display: "flex", gap: 18 }}>
              <div style={{ fontFamily: BLACK, fontSize: 44, color: RED, lineHeight: 1 }}>{t.n}</div>
              <div><div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1, marginBottom: 6 }}>{t.t}</div><p style={{ margin: 0, fontSize: 16 }}>{t.p}</p></div>
            </div>
          ))}
        </Cols>
      </Sec>

      <Sec k="Perché dura tanto" title="Il tempo non è un costo, è il metodo.">
        <Prose>
          <p>Trenta ore di intervista e trenta di raccolta possono sembrare tante. Sono quelle che ci servono per sapere come rispondi quando qualcuno ti interrompe, che cosa non dici mai, che cosa ripeti. Nessuna sintesi di un'ora riesce a restituire un carattere, e un avatar che non ha il carattere è un doppiatore, non una presenza.</p>
          <p>Per questo ogni gradino conduce al successivo, e quanto hai già pagato viene scalato. Non vogliamo che tu decida tutto subito, vogliamo che tu possa fermarti dove ti senti a casa.</p>
        </Prose>
      </Sec>

      <Sec k="Domande" title="Le cose che ci chiedono sempre." bg={PALE}>
        <Cols gap={0}>
          {faq.map((f, i) => (
            <div key={f.q} style={{ flex: "1 1 420px", padding: "20px 24px", borderTop: `1px solid ${INK}`, borderLeft: i % 2 ? `1px solid ${INK}` : "none", background: "#fff" }}>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.15, marginBottom: 6 }}>{f.q}</div>
              <p style={{ margin: 0, fontSize: 16 }}>{f.a}</p>
            </div>
          ))}
        </Cols>
      </Sec>

      <CtaBand title="Non sei sicuro di quale gradino?" text="Parti dal Diario di bordo: se basta, te lo diciamo noi. Per qualsiasi dubbio, scrivici." a={{ href: "/contatti", label: "Scrivici" }} />
    </Page>
  );
}
