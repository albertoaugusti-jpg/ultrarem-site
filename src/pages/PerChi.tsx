import { Link } from "wouter";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";
import sorriso from "@assets/Un_sorriso_italiano_a_tavola_1775474333994.png";

const V = "#3d7a6b", BX = "#8b2e2e", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";

export default function PerChi() {
  const { lang } = useLang();

  const useCases = lang === "en"
    ? [
        { num: "01", tag: "Diagnosis · Alzheimer's and dementia", color: BX, title: "Those diagnosed with Alzheimer's", text: "Time is the most precious resource. With UltraRem you can build your identity corpus while you are still able to do so with full clarity and authenticity. Do not wait until it is too late." },
        { num: "02", tag: "Family · Always present", color: V, title: "The parent who wants to always be there", text: "Even when you can no longer answer the phone, you can still give advice, tell stories, share values. With UltraRem, your children and grandchildren can always hear your voice." },
        { num: "03", tag: "Business · Leadership and vision", color: NE, title: "The founder who wants to pass on their vision", text: "A company's culture lives in its people. With UltraRem, your entrepreneurial philosophy, founding values and decision-making style remain alive for future generations." },
        { num: "04", tag: "Professionals · Identity and reputation", color: TC, title: "The professional with a story to tell", text: "Decades of experience, relationships, insights. Your professional identity is precious and unique. UltraRem allows you to preserve and pass it on authentically." },
        { num: "05", tag: "Humanity · Every story matters", color: CS, title: "Those who never had a voice", text: "You do not have to be famous to deserve to be remembered. UltraRem is for anyone who has lived, loved, suffered, rejoiced — that is, for everyone. Your story has value, exactly as it is." },
        { num: "06", tag: "Prevention · Before it's too late", color: GI, title: "Anyone who simply wants to tell their story", text: "Don't wait for a diagnosis or a crisis. The best time to build your memory is now, when you can do it calmly, with joy, with the certainty that your words are truly yours." },
      ]
    : [
        { num: "01", tag: "Diagnosi · Alzheimer e demenze", color: BX, title: "Chi ha una diagnosi di Alzheimer", text: "Il tempo è la risorsa più preziosa. Con UltraRem puoi costruire il tuo corpus identitario mentre sei ancora in grado di farlo con piena lucidità e autenticità. Non aspettare che sia troppo tardi." },
        { num: "02", tag: "Famiglia · Per sempre presente", color: V, title: "Il genitore che vuole esserci sempre", text: "Anche quando non puoi più rispondere al telefono, puoi ancora dare consigli, raccontare storie, condividere valori. Con UltraRem, i tuoi figli e nipoti potranno sempre sentire la tua voce." },
        { num: "03", tag: "Impresa · Leadership e visione", color: NE, title: "Il fondatore che vuole trasmettere la visione", text: "La cultura di un'azienda vive nelle sue persone. Con UltraRem, la tua filosofia imprenditoriale, i valori fondativi e il modo di prendere decisioni rimangono vivi per le generazioni future." },
        { num: "04", tag: "Professionisti · Identità e reputazione", color: TC, title: "Il professionista con una storia da raccontare", text: "Decenni di esperienza, di relazioni, di intuizioni. La tua identità professionale è preziosa e unica. UltraRem ti permette di preservarla e trasmetterla in modo autentico." },
        { num: "05", tag: "Umanità · Ogni storia vale", color: CS, title: "Chi non ha mai avuto una voce", text: "Non devi essere famoso per meritare di essere ricordato. UltraRem è per chiunque abbia vissuto, amato, sofferto, gioito — cioè per tutti. La tua storia ha valore, esattamente così com'è." },
        { num: "06", tag: "Prevenzione · Prima che sia tardi", color: GI, title: "Chi semplicemente vuole raccontarsi", text: "Non aspettare una diagnosi o una crisi. Il momento migliore per costruire la tua memoria è adesso, quando puoi farlo con calma, con gioia, con la certezza che le tue parole siano davvero tue." },
      ];

  const quandoItems = lang === "en"
    ? [
        { title: "After a diagnosis", text: "If you or a family member have received a diagnosis of Alzheimer's or dementia, start immediately — every session has immense value." },
        { title: "Before the age of 70", text: "Narrative prevention is the most effective form of identity care. Do not wait for signs of cognitive decline." },
        { title: "At any point in life", text: "A birth, a retirement, an anniversary. Any transition is a doorway to begin building your legacy." },
      ]
    : [
        { title: "Dopo una diagnosi", text: "Se tu o un familiare avete ricevuto una diagnosi di Alzheimer o demenza, iniziate subito — ogni sessione ha un valore immenso." },
        { title: "Prima dei 70 anni", text: "La prevenzione narrativa è la forma più efficace di cura identitaria. Non aspettare segnali di declino cognitivo." },
        { title: "In ogni momento della vita", text: "Una nascita, un pensionamento, un anniversario. Qualsiasi passaggio è una porta per iniziare a costruire la tua eredità." },
      ];

  const stats = lang === "en"
    ? [
        { val: "1M+", label: "Italians with Alzheimer's" },
        { val: "6", label: "documented use cases" },
        { val: "∞", label: "stories that deserve telling" },
      ]
    : [
        { val: "1M+", label: "italiani con Alzheimer" },
        { val: "6", label: "contesti d'uso documentati" },
        { val: "∞", label: "storie che meritano" },
      ];

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      {/* HERO */}
      <div style={{ minHeight: "50vh", background: NE, color: CR, padding: "7rem 4rem", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: `2px solid ${NE}`, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: "-5rem", top: "-10rem", fontFamily: "'Playfair Display', serif", fontSize: "40rem", color: "rgba(245,240,232,0.03)", lineHeight: 1, pointerEvents: "none", fontWeight: 900 }}>?</div>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>
          {lang === "en" ? "Who It's For · Every story is valid" : "Per Chi · Ogni storia è valida"}
        </p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(3rem, 5vw, 5.5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem", maxWidth: 800 }}>
          {lang === "en"
            ? <>You don't need an illness.<br /><em style={{ fontStyle: "italic", color: TC }}>You just need to want to be here.</em></>
            : <>Non serve una malattia.<br /><em style={{ fontStyle: "italic", color: TC }}>Basta voler esserci.</em></>}
        </h1>
        <p style={{ fontSize: "1.3rem", color: "rgba(245,240,232,0.65)", maxWidth: 600, fontStyle: "italic", lineHeight: 1.6 }}>
          {lang === "en"
            ? "UltraRem is for anyone who has something to say and wants it to remain authentic over time. Here is who found us before you."
            : "UltraRem è per chiunque abbia qualcosa da dire e voglia che rimanga autentico nel tempo. Ecco chi ci ha trovato prima di te."}
        </p>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-2 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}` }}>
        {stats.map((s, i) => (
          <div key={i} className="text-center" style={{ padding: "3rem 2.5rem", borderRight: i < 2 ? `2px solid ${NE}` : "none" }}>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 900, color: TC, display: "block", lineHeight: 1, marginBottom: "0.5rem" }}>{s.val}</span>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: GC }}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* HEADER USE CASES */}
      <div style={{ padding: "5rem 4rem 3rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "1rem" }}>
          {lang === "en" ? "Who uses UltraRem" : "Chi usa UltraRem"}
        </h2>
        <p style={{ fontSize: "1.2rem", color: GC, fontStyle: "italic", maxWidth: 600 }}>
          {lang === "en" ? "Six real, documented cases. Maybe one of them is you." : "Sei casi reali, documentati. Forse uno di questi sei tu."}
        </p>
      </div>

      {/* USE CASES */}
      {useCases.map((uc, i) => {
        const even = i % 2 === 1;
        const textColor = [BX, V, NE].includes(uc.color) ? CR : NE;
        const tagColor = [BX, V, NE].includes(uc.color) ? GI : TC;
        return (
          <div key={i} className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: `2px solid ${NE}`, minHeight: 280 }}>
            {!even && (
              <div style={{ background: uc.color, padding: "4rem 3rem", borderRight: `2px solid ${NE}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 900, color: textColor === CR ? "rgba(245,240,232,0.15)" : "rgba(26,18,9,0.1)", lineHeight: 1, marginBottom: "1rem" }}>{uc.num}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: tagColor }}>{uc.tag}</div>
              </div>
            )}
            <div className="md:col-span-2" style={{ padding: "4rem", display: "flex", flexDirection: "column", justifyContent: "center", borderRight: even ? `2px solid ${NE}` : "none" }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.2rem", fontWeight: 700, marginBottom: "1.5rem", lineHeight: 1.2 }}>{uc.title}</h2>
              <p style={{ fontSize: "1.1rem", color: GC, lineHeight: 1.75, maxWidth: 580 }}>{uc.text}</p>
            </div>
            {even && (
              <div style={{ background: uc.color, padding: "4rem 3rem", borderLeft: `2px solid ${NE}`, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "5rem", fontWeight: 900, color: "rgba(26,18,9,0.1)", lineHeight: 1, marginBottom: "1rem" }}>{uc.num}</div>
                <div style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.15em", textTransform: "uppercase", color: TC }}>{uc.tag}</div>
              </div>
            )}
          </div>
        );
      })}

      {/* IMMAGINE */}
      <div className="relative overflow-hidden" style={{ borderBottom: `2px solid ${NE}`, minHeight: 400 }}>
        <img src={sorriso} alt="Sorriso italiano a tavola" className="w-full object-cover" style={{ height: 420, objectPosition: "50% 30%" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(26,18,9,0.7) 0%, transparent 60%)" }} />
        <div className="absolute inset-0 flex items-center" style={{ padding: "4rem" }}>
          <div style={{ maxWidth: 480 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontStyle: "italic", color: CR, lineHeight: 1.3, fontWeight: 700 }}>
              {lang === "en"
                ? <>"I don't want to be forgotten.<br />I want to keep being <em style={{ color: GI }}>useful</em>."</>
                : <>"Non voglio essere dimenticata.<br />Voglio continuare ad essere <em style={{ color: GI }}>utile</em>."</>}
            </p>
            <span style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(245,240,232,0.5)", display: "block", marginTop: "1rem" }}>
              {lang === "en" ? "— Maria, 71, Milan" : "— Maria, 71 anni, Milano"}
            </span>
          </div>
        </div>
      </div>

      {/* QUANDO INIZIARE */}
      <div style={{ background: CS, padding: "6rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "3rem", fontWeight: 900, marginBottom: "4rem" }}>
          {lang === "en" ? "When to start" : "Quando iniziare"}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {quandoItems.map((q, i) => (
            <div key={i} style={{ borderTop: `4px solid ${TC}`, paddingTop: "2rem" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.5rem", fontWeight: 700, marginBottom: "1rem" }}>{q.title}</h3>
              <p style={{ fontSize: "1rem", color: GC, lineHeight: 1.7 }}>{q.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center" style={{ padding: "8rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: TC, marginBottom: "2rem" }}>
          {lang === "en" ? "Are you ready?" : "Sei pronto?"}
        </p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 900, lineHeight: 1.1, marginBottom: "2rem" }}>
          {lang === "en"
            ? <>Your story is waiting<br />to be <em style={{ fontStyle: "italic", color: TC }}>told.</em></>
            : <>La tua storia aspetta<br />solo di essere <em style={{ fontStyle: "italic", color: TC }}>raccontata.</em></>}
        </h2>
        <p style={{ fontSize: "1.2rem", color: GC, maxWidth: 520, margin: "0 auto 3rem", fontStyle: "italic" }}>
          {lang === "en" ? "A free discovery call. No commitment. Just listening." : "Una chiamata conoscitiva gratuita. Nessun impegno. Solo ascolto."}
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/prenota"><span className="cursor-pointer inline-block" style={{ background: NE, color: CR, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${NE}` }}
            onMouseOver={e => (e.currentTarget.style.background = TC)}
            onMouseOut={e => (e.currentTarget.style.background = NE)}>
            {lang === "en" ? "Book your demo →" : "Prenota la tua demo →"}
          </span></Link>
          <Link href="/come-funziona"><span className="cursor-pointer inline-block" style={{ background: "transparent", color: NE, padding: "1.1rem 2.2rem", fontFamily: "'Space Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", border: `2px solid ${NE}` }}
            onMouseOver={e => { e.currentTarget.style.background = NE; e.currentTarget.style.color = CR; }}
            onMouseOut={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = NE; }}>
            {lang === "en" ? "How it works" : "Come funziona"}
          </span></Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
