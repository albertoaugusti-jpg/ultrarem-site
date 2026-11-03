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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))", gap: 24, alignItems: "start" }}>
          {[...who.founders, ...who.science].map((f, i) => (
            <div key={f.name} style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <Tbp ini={f.ini} ar="1 / 1" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}>{f.name}</div>
              <div style={kicker(i < 2 ? RED : GREY)}>{f.role}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.55 }}>{f.text}</p>
            </div>
          ))}
        </div>
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
          <Card k={c.qbtK} t="QBT Sagl"><img src="/img/rivista/qbt.png" alt="QBT Sagl" style={{ height: 56, width: "auto", alignSelf: "flex-start" }} /><p style={{ margin: 0 }}>{c.qbtP}</p></Card>
          <Card k={c.socK} t="So.Crem Genova"><img src="/img/rivista/socrem.png" alt="So.Crem, Società Genovese di Cremazione" style={{ height: 56, width: "auto", alignSelf: "flex-start" }} /><p style={{ margin: 0 }}>{who.socrem}</p></Card>
        </Cols>
      </Sec>

      <CtaBand title={c.ctaT} text={c.ctaX} a={{ href: "/contatti", label: c.ctaA }} b={{ href: "/percorsi/diario-di-bordo", label: c.ctaB }} />
    </Page>
  );
}
