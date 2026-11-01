import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Photo, kicker, RED, INK, GREY, PALE, BODONI } from "@/components/Mag";
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
  "Che cosa succede ai miei racconti quando non ci sono più?",
  "Chi potrà parlare con il mio avatar, e chi no?",
  "Quanto costa, e che cosa ottengo in ciascun percorso?",
  "Che differenza c'è tra ciò che ho detto io e ciò che il sistema elabora?",
];

export default function Incontra() {
  return (
    <Page>
      <Hero dark k="Conosci UltraRem" title={<>Due modi per cominciare, <em style={{ color: "#ff3b52" }}>a modo tuo.</em></>} lead="Puoi parlare con l'avatar di Alberto, che ti spiega il progetto e risponde alle tue domande, oppure guardare un video breve che racconta perché abbiamo cominciato." />

      <Sec id="avatar" k="1 · Conversazione" title="Parla con l'avatar di Alberto.">
        <Prose>
          <p>Alberto Augusti, fondatore di UltraRem, ha un avatar che ti accompagna dentro il progetto: ti spiega come funziona, che cosa facciamo e che cosa non faremo mai, e risponde a quello che gli chiedi, nell'ordine e con il ritmo che preferisci.</p>
          <p>Prima di parlare ti diciamo che stai interagendo con un sistema di intelligenza artificiale (art. 14 della Carta dei Valori). Se in qualunque momento non vuoi più dialogare, ti basta smettere: nessuno ti scriverà per riprendere la conversazione e nessuno ti chiederà perché (art. 17).</p>
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

      <Sec id="video" k="2 · Racconto" title="Il video." bg={PALE}>
        <Prose>
          <p>Un filmato breve, pensato per chi ha qualche minuto e nessuna voglia di leggere. Non spiega la tecnologia. Racconta quello che resta di noi quando smettiamo di parlare, e perché secondo noi merita di essere detto bene, mentre siamo ancora in tempo.</p>
        </Prose>
        <div style={{ margin: "26px 0 0" }}>
          {VIDEO_URL ? <Video src={VIDEO_URL} /> : <Slot img="cultura" text="Il video sarà online a breve" />}
        </div>
      </Sec>

      <Sec k="Dopo, se vuoi" title="Che cosa fare dopo aver conosciuto UltraRem.">
        <Cols gap={20}>
          <Card k="Leggere" t="Le storie">
            <p style={{ margin: 0 }}>Racconti, dibattiti e saggi sulla memoria, il lutto e il tempo che ci resta, da leggere con calma.</p>
          </Card>
          <Card k="Capire" t="Come funziona">
            <p style={{ margin: 0 }}>I tre percorsi, dal Diario di bordo ai Capitani di lungo corso, con tutto quello che include ciascuno e quanto costa.</p>
          </Card>
          <Card k="Verificare" t="Chi c'è dietro" dark>
            <p style={{ margin: 0 }}>I Founder, l'Università di Padova, la rete di psicologi: perché puoi affidarci una cosa così delicata.</p>
          </Card>
        </Cols>
      </Sec>

      <CtaBand title="Preferisci una persona a uno schermo?" text="Scrivici, senza impegno. Ti ascoltiamo e ti diciamo con franchezza se UltraRem fa per te." a={{ href: "/contatti", label: "Scrivici" }} b={{ href: "/come-funziona", label: "Inizia dal Diario di bordo" }} />
    </Page>
  );
}
