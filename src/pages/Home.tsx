import type { CSSProperties } from "react";
import { Link } from "wouter";
import { Page, Photo, Sec, Wrap, CtaBand, kicker, btn, RED, INK, GREY, PALE, BODONI, BLACK, NARROW } from "@/components/Mag";
import { cover, index, reads, ladder, who, research, story, charter, editorial } from "@/content/home";

const grid = (min: number, gap = 24): CSSProperties => ({ display: "grid", gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`, gap });
const block: CSSProperties = { display: "block", color: "inherit", textDecoration: "none" };

function Play() {
  return <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 76, height: 76, borderRadius: "50%", background: RED, border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ marginLeft: 6, borderStyle: "solid", borderWidth: "13px 0 13px 22px", borderColor: "transparent transparent transparent #fff" }} />
  </div>;
}

export default function Home() {
  return (
    <Page>
      <div style={{ borderBottom: `2px solid ${INK}` }}>
        <Wrap>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, padding: "10px 0", fontFamily: NARROW, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
            <span>UltraRem · identità digitale e memoria</span><span style={{ color: GREY }}>Milano · Genova</span><span style={{ color: RED }}>Your memory is you</span>
          </div>
        </Wrap>
      </div>

      <section style={{ borderBottom: `3px solid ${INK}`, padding: "clamp(32px,5vw,56px) 0" }}>
        <Wrap>
          <div style={{ ...grid(420, 40), gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))", alignItems: "start" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={kicker()}>{cover.kicker}</div>
              <h1 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(40px,5.6vw,72px)", lineHeight: 1, letterSpacing: -2 }}>{cover.title}</h1>
              <p style={{ margin: 0, fontStyle: "italic", fontSize: 22 }}>{cover.lead}</p>
              <p style={{ margin: 0, fontFamily: NARROW, fontWeight: 700, fontSize: 17, letterSpacing: "0.04em", borderLeft: `4px solid ${RED}`, paddingLeft: 14 }}>{cover.what}</p>
              <div style={{ columnWidth: 280, columnGap: 32, columnRule: `1px solid ${INK}`, fontSize: 16.5, lineHeight: 1.6 }}>
                <p style={{ margin: "0 0 12px" }}>{cover.body}</p>
                <p style={{ margin: "0 0 12px" }}>{cover.body2}</p>
                <p style={{ margin: 0 }}>{cover.body3}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                <Link href="/incontra#avatar"><span style={btn(RED, "#fff")}>Parla con l'avatar</span></Link>
                <Link href="/incontra#video"><span style={btn("transparent", INK, `2px solid ${INK}`)}>Guarda il video</span></Link>
              </div>
            </div>
            <figure style={{ margin: 0, maxWidth: 440, width: "100%", justifySelf: "center" }}>
              <Photo name="cover" ar="1199 / 1312" pos="center top" />
              <figcaption style={{ marginTop: 8, fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>Immagine illustrativa.</figcaption>
            </figure>
          </div>
        </Wrap>
      </section>

      <section style={{ background: INK, color: "#fff", borderBottom: `3px solid ${INK}`, padding: "clamp(32px,5vw,56px) 0" }}>
        <Wrap>
          <div style={{ ...grid(360, 40), alignItems: "center" }}>
            <Link href="/incontra#avatar" style={{ ...block, position: "relative" }}><Photo name="riempitivo2" ar="16 / 10" /><Play /></Link>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div style={kicker("#ff3b52")}>Parla con l'avatar</div>
              <h2 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(32px,4.4vw,54px)", lineHeight: 1.04, letterSpacing: -1 }}>Chiedimi che cos'è UltraRem.</h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, opacity: 0.9 }}>Ti spiego in due minuti che cos'è UltraRem e rispondo alle tue domande. Ti dico subito che sono un'intelligenza artificiale, e puoi smettere quando vuoi.</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Che cos'è UltraRem?", "Quanto costa?", "Chi c'è dietro?", "Che fine fanno i miei dati?"].map(q => (
                  <Link key={q} href="/incontra#avatar"><span style={{ fontFamily: NARROW, fontWeight: 700, fontSize: 13, letterSpacing: "0.06em", border: "1px solid rgba(255,255,255,0.6)", padding: "8px 14px", display: "inline-block", cursor: "pointer" }}>{q}</span></Link>
                ))}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 4 }}>
                <Link href="/incontra#avatar"><span style={btn(RED, "#fff")}>Parla con l'avatar</span></Link>
                <Link href="/incontra#video"><span style={btn("transparent", "#fff", "2px solid #fff")}>Guarda il video</span></Link>
              </div>
            </div>
          </div>
        </Wrap>
      </section>

      <Sec k={ladder.kicker} title="Costruisci la tua identità digitale prima che lo faccia qualcun altro.">
        <p style={{ margin: "0 0 24px", maxWidth: 780, fontSize: 17, lineHeight: 1.6 }}>{ladder.intro}</p>
        <div style={grid(280, 20)}>
          {ladder.steps.map(s => (
            <Link key={s.name} href="/come-funziona" style={{ ...block, border: `2px solid ${s.tone === "red" ? RED : INK}`, background: s.tone === "red" ? RED : s.tone === "dark" ? INK : "#fff", color: s.tone === "light" ? INK : "#fff", padding: 24 }}>
              <div style={kicker(s.tone === "light" ? GREY : "#fff")}>{s.tag}</div>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 28, lineHeight: 1.1, margin: "6px 0" }}>{s.name}</div>
              <div style={{ fontFamily: BLACK, fontSize: 36, letterSpacing: -1, color: s.tone === "light" ? RED : "#fff" }}>{s.price}</div>
              <div style={{ fontSize: 14, opacity: 0.85, margin: "2px 0 12px" }}>{s.sub}</div>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: 15, lineHeight: 1.5 }}>{s.items.slice(0, 3).map(it => <li key={it}>{it}</li>)}</ul>
            </Link>
          ))}
        </div>
        <p style={{ margin: "20px 0 0", maxWidth: 820, fontSize: 14.5, color: GREY }}>{ladder.fee}</p>
        <div style={{ marginTop: 20 }}><Link href="/come-funziona"><span style={btn(RED, "#fff")}>Che cosa include ogni gradino</span></Link></div>
      </Sec>

      <section style={{ background: PALE, borderBottom: `3px solid ${INK}`, padding: "22px 0" }}>
        <Wrap>
          <div style={{ fontFamily: BLACK, fontSize: 20, letterSpacing: -0.5, marginBottom: 10 }}>Cosa trovi qui</div>
          <div style={grid(170, 0)}>
            {index.map((x, i) => (
              <Link key={x.k} href={x.href} style={{ ...block, padding: "10px 16px", borderLeft: i ? `1px solid ${INK}` : "none", borderTop: `2px solid ${INK}` }}>
                <span style={{ ...kicker(), letterSpacing: "0.14em" }}>{x.k}</span><br /><span style={{ fontSize: 17 }}>{x.t}</span>
              </Link>
            ))}
          </div>
        </Wrap>
      </section>

      <Sec k={editorial.kicker} title={editorial.title}>
        <div style={{ columnWidth: 300, columnGap: 40, columnRule: `1px solid ${INK}`, fontSize: 17, lineHeight: 1.65 }}>
          {editorial.paras.map((p, i) => <p key={i} style={{ margin: "0 0 14px" }}>{p}</p>)}
        </div>
        <p style={{ margin: "10px 0 0", fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>{editorial.by}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 22 }}>
          <Link href="/incontra#avatar"><span style={btn(RED, "#fff")}>Parla con l'avatar</span></Link>
          <Link href="/come-funziona"><span style={btn(INK, "#fff")}>Scopri i percorsi</span></Link>
        </div>
      </Sec>

      <Sec k="Approfondimenti" title="Storie, dibattiti, cultura." bg={PALE}>
        <div style={grid(240)}>
          {reads.map(r => (
            <Link key={r.k} href="/storie" style={{ ...block }}>
              <article style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Photo name={r.img || "riempitivo"} ar="3 / 2" />
                <div style={kicker()}>{r.k}</div>
                <h3 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1 }}>{r.t}</h3>
                <p style={{ margin: 0, fontSize: 15.5, lineHeight: 1.55 }}>{r.p}</p>
                <span style={{ fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>{r.m}</span>
              </article>
            </Link>
          ))}
        </div>
        <div style={{ marginTop: 24 }}><Link href="/storie"><span style={btn(INK, "#fff")}>Tutte le storie</span></Link></div>
      </Sec>

      <Sec k={story.kicker} title={story.title}>
        <div style={{ ...grid(320, 40), alignItems: "start" }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.65 }}>{story.text}</p>
          <div style={{ border: `2px solid ${INK}`, background: "#fff", padding: 22, fontSize: 16, lineHeight: 1.6 }}>{story.box}</div>
        </div>
      </Sec>

      <Sec k={who.kicker} title={who.title} bg={PALE}>
        <p style={{ margin: "0 0 22px", maxWidth: 820, fontSize: 17, lineHeight: 1.6 }}>Cinque soci, due operativi, e una squadra scientifica con l'Università di Padova e una rete di psicologi. Ognuno viene da un altro mestiere, e tutti hanno scelto di credere in questo.</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center" }}>
          {[...who.founders, ...who.science].map(f => (
            <div key={f.name} title={f.name} style={{ width: 54, height: 54, borderRadius: "50%", background: f.col, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: BLACK, fontSize: 17, border: `2px solid ${INK}` }}>{f.ini}</div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}><Link href="/fondatori"><span style={btn(INK, "#fff")}>Conosci i Founder</span></Link></div>
      </Sec>

      <Sec k={research.kicker} title={research.title}>
        <div style={{ ...grid(280, 32) }}>
          {research.cells.map(c => (
            <div key={c.k} style={{ borderTop: `3px solid ${INK}`, paddingTop: 12 }}>
              <div style={kicker()}>{c.k}</div>
              <p style={{ margin: "6px 0 0", fontSize: 16, lineHeight: 1.6 }}>{c.v}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: "22px 0", maxWidth: 820, fontSize: 15, color: GREY }}>{research.note}</p>
        <Link href="/ricerca"><span style={btn("transparent", INK, `2px solid ${INK}`)}>La ricerca a Padova</span></Link>
      </Sec>

      <Sec k={charter.kicker} title={charter.title} dark>
        <div style={grid(240, 0)}>
          {charter.arts.map((a, i) => (
            <div key={a.a} style={{ padding: "18px 22px", borderTop: "1px solid rgba(255,255,255,0.4)", borderLeft: i ? "1px solid rgba(255,255,255,0.4)" : "none" }}>
              <div style={kicker("#ff3b52")}>{a.a}</div>
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1, margin: "6px 0" }}>{a.t}</div>
              <p style={{ margin: 0, fontSize: 15.5, opacity: 0.85 }}>{a.d}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}><Link href="/il-progetto"><span style={btn("#fff", INK)}>Leggi la Carta</span></Link></div>
      </Sec>

      <CtaBand title="Comincia dal Diario di bordo." text="290 € per raccontarti con il companion e capire se vuoi andare avanti. Senza intervista e senza fretta." a={{ href: "/come-funziona", label: "Scopri il Diario di bordo" }} b={{ href: "/contatti", label: "Scrivici" }} />
    </Page>
  );
}
