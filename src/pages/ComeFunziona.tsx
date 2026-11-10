import { Link } from "wouter";
import { Page, Hero, Sec, Prose, Cols, Card, CtaBand, Photo, btn, kicker, RED, INK, GREY, PALE, BODONI, BLACK } from "@/components/Mag";
import { useHome } from "@/content/useHome";
import { useLang } from "@/lib/i18n";
import { come } from "@/content/come";

// Immagini dei passi: stesso ordine dei passi in come.ts (i Capitani riusano le immagini dei Marinai).
const IMG = [
  ["d1-avatar", "d2-registrazione", "d3-pagamento", "d4-companion", "d5-quaderno"],
  ["m1-contatto", "m2-proposta", "m3-intervista", "m4-companion-dedicato", "m5-tra-incontri", "m6-sintesi", "m7-firma", "m8-deposito"],
  ["c1-archivio-multimediale"],
];

export default function ComeFunziona() {
  const { ladder } = useHome();
  const { lang } = useLang();
  const c = come[lang] ?? come.it;
  const { flows, faq } = c;
  return (
    <Page>
      <Hero k={c.k} title={<>{c.titleA}<em style={{ color: RED }}>{c.titleB}</em></>} lead={ladder.intro} />

      <Sec k={c.stepsK} title={c.stepsT}>
        <Cols gap={20}>
          {ladder.steps.map(s => {
            const red = s.tone === "red", dark = s.tone === "dark";
            return (
              <div key={s.name} style={{ flex: "1 1 300px", background: "#fff", border: `2px solid ${red ? RED : INK}`, display: "flex", flexDirection: "column" }}>
                <Photo name={s.img} ar="16 / 9" />
                <div style={{ padding: "18px 24px", minHeight: 144, boxSizing: "border-box", borderTop: `2px solid ${red ? RED : INK}`, borderBottom: `2px solid ${red ? RED : INK}`, background: red ? RED : dark ? INK : "#fff", color: red || dark ? "#fff" : INK }}>
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

      <Sec k={c.tripK} title={c.tripT} bg={PALE}>
        {flows.map((f, fi) => (
          <div key={f.name} style={{ marginTop: fi ? 48 : 0 }}>
            <div style={kicker(RED)}>{f.tag}</div>
            <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(28px,3.4vw,40px)", lineHeight: 1.05, margin: "4px 0 6px" }}>{f.name}</div>
            <p style={{ margin: "0 0 20px", maxWidth: 760, fontSize: 17 }}>{f.lead}</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: 20 }}>
              {f.steps.map((t, i) => (
                <div key={t.t} style={{ background: "#fff", border: `2px solid ${INK}`, display: "flex", flexDirection: "column" }}>
                  <Photo name={IMG[fi][i]} ar="16 / 10" />
                  <div style={{ padding: "16px 20px 20px", display: "flex", gap: 14 }}>
                    <div style={{ fontFamily: BLACK, fontSize: 36, color: RED, lineHeight: 1 }}>{i + 1}</div>
                    <div><div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.1, marginBottom: 6 }}>{t.t}</div><p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.5 }}>{t.p}</p></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Sec>

      <Sec k={c.whyK} title={c.whyT}>
        <Prose>
          <p>{c.why1}</p>
          <p>{c.why2}</p>
        </Prose>
      </Sec>

      <Sec k={c.faqK} title={c.faqT} bg={PALE}>
        <Cols gap={0}>
          {faq.map((f, i) => (
            <div key={f.q} style={{ flex: "1 1 420px", padding: "20px 24px", borderTop: `1px solid ${INK}`, borderLeft: i % 2 ? `1px solid ${INK}` : "none", background: "#fff" }}>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.15, marginBottom: 6 }}>{f.q}</div>
              <p style={{ margin: 0, fontSize: 16 }}>{f.a}</p>
            </div>
          ))}
        </Cols>
      </Sec>

      <CtaBand title={c.ctaT} text={c.ctaX} a={{ href: "/contatti", label: c.ctaL }} />
    </Page>
  );
}
