import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Tbp, kicker, RED, INK, GREY, PALE, BODONI } from "@/components/Mag";
import { who } from "@/content/home";

const dettagli: Record<string, string> = {
  AA: "È l'Amministratore Unico: guida la società in prima persona e risponde di ciò che promettiamo.",
  BL: "Si occupa dell'amministrazione e dei conti della società. Porta a UltraRem l'abitudine di chi ha gestito aziende grandi e piccole: i numeri tornano, le scadenze si rispettano, le promesse sono sostenibili.",
  MD: "Non ha un ruolo operativo in UltraRem. È tra i soci che hanno scelto di crederci: porta lo sguardo di chi ha diretto sistemi informativi complessi e sa riconoscere quando un'idea regge, e quando no.",
  GT: "Non ha un ruolo operativo in UltraRem. È tra i soci che hanno scelto di crederci: porta lo sguardo di chi ha disegnato esperienze usate da milioni di persone, e sa quanto conti che una cosa delicata sia semplice da usare.",
  SF: "Non ha un ruolo operativo in UltraRem. È tra i soci che hanno scelto di crederci: porta lo sguardo di chi ha lavorato su sistemi che servono decine di milioni di persone, dove un errore non è un'opzione.",
};

export default function Fondatori() {
  return (
    <Page>
      <Hero dark k="Fondatori" title={<>Non siamo <em style={{ color: "#ff3b52" }}>quattro che ci provano.</em></>} lead="Un servizio che custodisce la memoria di una persona si giudica anche da chi lo costruisce. Qui trovi tutti i nomi, che cosa fa ciascuno e che cosa no." />

      <Sec k="Chi lavora e chi crede" title="Due soci lavorano alla società. Gli altri tre ci credono.">
        <Prose>
          <p>{who.intro}</p>
          <p>Lo diciamo senza giri di parole perché ci sembra il modo più onesto di presentarsi: non fingiamo che siano tutti in prima linea. Ma non è un dettaglio da poco che persone con carriere solide in energia, pagamenti e grandi sistemi informativi abbiano scelto di mettere il proprio nome accanto a un progetto sulla memoria.</p>
        </Prose>
      </Sec>

      <Sec k="I soci" title="Le persone." bg={PALE}>
        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {who.founders.map((f, i) => (
            <div key={f.name} style={{ display: "flex", flexWrap: "wrap", gap: 28, borderTop: `2px solid ${INK}`, paddingTop: 22, alignItems: "flex-start" }}>
              <div style={{ flex: "0 0 220px", maxWidth: 260 }}><Tbp ini={f.ini} ar="4 / 5" col={f.col} /></div>
              <div style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 8 }}>
                <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 34, lineHeight: 1.05 }}>{f.name}</div>
                <div style={kicker(i < 2 ? RED : GREY)}>{f.role}</div>
                <p style={{ margin: 0 }}>{f.text}</p>
                <p style={{ margin: 0 }}>{dettagli[f.ini]}</p>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <Sec k="La scienza" title="Chi ci tiene con i piedi per terra.">
        <Cols gap={28}>
          {who.science.map(f => (
            <div key={f.name} style={{ flex: "1 1 360px", display: "flex", flexDirection: "column", gap: 10 }}>
              <Tbp ini={f.ini} ar="3 / 2" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 30, lineHeight: 1.1 }}>{f.name}</div>
              <div style={kicker()}>{f.role}</div>
              <p style={{ margin: 0 }}>{f.text}</p>
            </div>
          ))}
        </Cols>
        <p style={{ margin: "26px 0 0", maxWidth: 760 }}>Leggi di più sulla <Link href="/ricerca"><span style={{ color: RED, fontWeight: 700, cursor: "pointer" }}>ricerca a Padova</span></Link>.</p>
      </Sec>

      <Sec k="Il metodo" title={who.method.t} dark>
        <Prose>
          <p>{who.method.p1}</p>
          <p>{who.method.p2}</p>
        </Prose>
      </Sec>

      <Sec k="Partner" title="Chi ci affianca." bg={PALE}>
        <Cols gap={20}>
          <Card k="Fornitore tecnologico" t="QBT Sagl"><p style={{ margin: 0 }}>Realizza la parte tecnica, avatar compreso. È un fornitore tecnologico, non un socio di UltraRem.</p></Card>
          <Card k="In definizione" t="So.Crem Genova"><p style={{ margin: 0 }}>{who.socrem}</p></Card>
        </Cols>
      </Sec>

      <CtaBand title="Vuoi conoscerci di persona?" text="Una chiamata, o un incontro a Milano o a Genova. Ti raccontiamo tutto quello che vuoi sapere." a={{ href: "/prenota", label: "Prenota una demo" }} b={{ href: "/contatti", label: "Scrivici" }} />
    </Page>
  );
}
