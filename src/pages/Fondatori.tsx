import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Tbp, kicker, RED, INK, GREY, PALE, BODONI } from "@/components/Mag";
import { useHome } from "@/content/useHome";
import { useLang } from "@/lib/i18n";
import { founders } from "@/content/founders";

export default function Fondatori() {
  const { who } = useHome();
  const { lang } = useLang();
  const c = founders[lang] ?? founders.it;
  return (
    <Page>
      <Hero dark k={c.k} title={<>{c.titleA}<em style={{ color: "#ff3b52" }}>{c.titleB}</em></>} lead={c.lead} />

      <Sec k={c.storyK} title={c.storyT}>
        <Prose>
          <p>{c.p1}</p>
          <p>{c.p2}</p>
          <p>{c.p3}</p>
          <p>{c.p4}</p>
        </Prose>
      </Sec>

      <Sec k={c.peopleK} title={c.peopleT} bg={PALE}>
        <Cols gap={20}>
          {who.founders.map((f, i) => (
            <div key={f.name} style={{ flex: "1 1 170px", maxWidth: 220, display: "flex", flexDirection: "column", gap: 8 }}>
              <Tbp ini={f.ini} ar="4 / 5" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}>{f.name}</div>
              <div style={kicker(i < 2 ? RED : GREY)}>{f.role}</div>
            </div>
          ))}
        </Cols>
      </Sec>

      <Sec k={c.sciK} title={c.sciT}>
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
        <p style={{ margin: "26px 0 0", maxWidth: 760 }}>{c.sciLink}<Link href="/ricerca"><span style={{ color: RED, fontWeight: 700, cursor: "pointer" }}>{c.sciLinkT}</span></Link>.</p>
      </Sec>

      <Sec k={c.methodK} title={who.method.t} dark>
        <Prose>
          <p>{who.method.p1}</p>
          <p>{who.method.p2}</p>
        </Prose>
      </Sec>

      <Sec k={c.partnersK} title={c.partnersT} bg={PALE}>
        <Cols gap={20}>
          <Card k={c.qbtK} t="QBT Sagl"><p style={{ margin: 0 }}>{c.qbtP}</p></Card>
          <Card k={c.socK} t="So.Crem Genova"><p style={{ margin: 0 }}>{who.socrem}</p></Card>
        </Cols>
      </Sec>

      <CtaBand title={c.ctaT} text={c.ctaX} a={{ href: "/contatti", label: c.ctaA }} b={{ href: "/percorsi/diario-di-bordo", label: c.ctaB }} />
    </Page>
  );
}
