import type { CSSProperties, ReactNode } from "react";
import { Link } from "wouter";
import { Page, Photo, Sec, Wrap, CtaBand, kicker, btn, INK, GREY, PALE, BODONI, BLACK, NARROW } from "@/components/Mag";
import { useHome, SLUGS } from "@/content/useHome";

const grid = (min: number, gap = 24): CSSProperties => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`, gap });
const block: CSSProperties = { display: "block", color: "inherit", textDecoration: "none" };
const RED = "#c8102e";

// Ogni zona: titolo, sottotitolo, al massimo 2-3 righe di testo, una o due call to action.
function Zone({ k, title, sub, text, a, b, bg, children }: { k: string; title: string; sub?: string; text?: string; a?: { href: string; label: string }; b?: { href: string; label: string }; bg?: string; children?: ReactNode }) {
  return (
    <Sec k={k} title={title} bg={bg}>
      {sub && <p style={{ margin: "0 0 12px", maxWidth: 760, fontStyle: "italic", fontSize: 21, lineHeight: 1.45 }}>{sub}</p>}
      {text && <p style={{ margin: "0 0 20px", maxWidth: 720, fontSize: 17, lineHeight: 1.6 }}>{text}</p>}
      {children}
      {(a || b) && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 20 }}>
          {a && <Link href={a.href}><span style={btn(INK, "#fff")}>{a.label}</span></Link>}
          {b && <Link href={b.href}><span style={btn("transparent", INK, `2px solid ${INK}`)}>{b.label}</span></Link>}
        </div>
      )}
    </Sec>
  );
}

export default function Home() {
  const { cover, ladder, who, ui } = useHome();
  return (
    <Page>
      <section style={{ borderBottom: `3px solid ${INK}`, padding: "clamp(32px,5vw,56px) 0" }}>
        <Wrap>
          <div style={{ ...grid(420, 40), alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={kicker()}>{cover.kicker}</div>
              <h1 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(40px,5.6vw,72px)", lineHeight: 1, letterSpacing: -2 }}>{cover.title}</h1>
              <p style={{ margin: 0, fontStyle: "italic", fontSize: 22 }}>{cover.lead}</p>
              <p style={{ margin: 0, fontFamily: NARROW, fontWeight: 700, fontSize: 17, letterSpacing: "0.04em", borderLeft: `4px solid ${RED}`, paddingLeft: 14 }}>{cover.what}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                <Link href="/il-progetto"><span style={btn(INK, "#fff")}>{ui.ctaProject}</span></Link>
                <Link href="/il-progetto#avatar"><span style={btn("transparent", INK, `2px solid ${INK}`)}>{ui.talk}</span></Link>
              </div>
            </div>
            <figure style={{ margin: 0, maxWidth: 440, width: "100%", justifySelf: "center" }}>
              <Photo name="cover" ar="1035 / 1312" pos="center top" />
              <figcaption style={{ marginTop: 8, fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>{ui.caption}</figcaption>
            </figure>
          </div>
        </Wrap>
      </section>

      <Sec k={ladder.kicker} title={ui.ladderTitle}>
        <p style={{ margin: "0 0 24px", maxWidth: 780, fontSize: 17, lineHeight: 1.6 }}>{ladder.intro}</p>
        <div style={grid(280, 20)}>
          {ladder.steps.map((s, i) => (
            <Link key={s.name} href={`/percorsi/${SLUGS[i]}`} style={{ ...block, border: `2px solid ${s.tone === "red" ? RED : INK}`, background: s.tone === "red" ? RED : s.tone === "dark" ? INK : "#fff", color: s.tone === "light" ? INK : "#fff", padding: 24, display: "flex", flexDirection: "column", gap: 10 }}>
              <Photo name={s.img} ar="3 / 2" />
              <div style={kicker(s.tone === "light" ? GREY : "#fff")}>{s.tag}</div>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 28, lineHeight: 1.1, minHeight: 62 }}>{s.name}</div>
              <div style={{ fontFamily: NARROW, fontWeight: 700, fontSize: 15, letterSpacing: "0.04em", color: s.tone === "light" ? RED : "#fff" }}>{s.price}</div>
              <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55, flexGrow: 1 }}>{s.lead}</p>
              <span style={{ fontFamily: NARROW, fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase" }}>{ui.learn} →</span>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24 }}><Link href="/come-funziona"><span style={btn(INK, "#fff")}>{ui.ladderBtn}</span></Link></div>
      </Sec>

      <Zone k={who.kicker} title={who.title} sub={ui.whoText} a={{ href: "/fondatori", label: ui.whoBtn }} b={{ href: "/ricerca", label: ui.ricBtn }} bg={PALE}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {[...who.founders, ...who.science].map(f => (
            <div key={f.name} title={f.name} style={{ width: 54, height: 54, borderRadius: "50%", background: f.col, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BLACK, fontSize: 17, border: `2px solid ${INK}` }}>{f.ini}</div>
          ))}
        </div>
      </Zone>

      <CtaBand title={ui.ctaTitle} text={ui.ctaText} a={{ href: "/percorsi/diario-di-bordo", label: ui.ctaA }} b={{ href: "/contatti", label: ui.ctaB }} />
    </Page>
  );
}
