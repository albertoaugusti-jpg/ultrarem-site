import { Link } from "wouter";
import { Page, Photo, Tbp, Cols, Sec, CtaBand, kicker, btn, RED, INK, GREY, PALE, BODONI, BLACK, NARROW, PAD } from "@/components/Mag";
import { cover, index, reads, ladder, who, research } from "@/content/home";

function Play() {
  return <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", width: 76, height: 76, borderRadius: "50%", background: RED, border: "3px solid #fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <div style={{ marginLeft: 6, borderStyle: "solid", borderWidth: "13px 0 13px 22px", borderColor: "transparent transparent transparent #fff" }} />
  </div>;
}

function Entry({ href, k, t, p, img, cta }: { href: string; k: string; t: string; p: string; img: string; cta: string }) {
  return (
    <Link href={href}>
      <div style={{ flex: "1 1 340px", border: `2px solid ${INK}`, background: "#fff", cursor: "pointer", display: "flex", flexDirection: "column" }}>
        <div style={{ position: "relative" }}><Photo name={img} ar="16 / 9" /><Play /></div>
        <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={kicker()}>{k}</div>
          <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 30, lineHeight: 1.08 }}>{t}</div>
          <p style={{ margin: 0, fontSize: 16 }}>{p}</p>
          <span style={{ ...btn(INK, "#fff"), alignSelf: "flex-start", marginTop: 6 }}>{cta}</span>
        </div>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <Page>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, padding: `10px ${PAD}`, borderBottom: `2px solid ${INK}`, fontFamily: NARROW, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        <span>Rivista di memoria e vita</span><span style={{ color: GREY }}>Milano · Genova · Padova</span><span style={{ color: RED }}>Numero 1 · Autunno 2026</span>
      </div>

      <section style={{ display: "flex", flexWrap: "wrap", borderBottom: `3px solid ${INK}` }}>
        <div style={{ flex: "2 1 560px", padding: `clamp(36px,6vw,64px) ${PAD}`, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={kicker()}>{cover.kicker}</div>
          <h1 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(40px,6.2vw,76px)", lineHeight: 1, letterSpacing: -2 }}>{cover.title}</h1>
          <p style={{ margin: 0, fontStyle: "italic", fontSize: 22, maxWidth: 640 }}>{cover.lead}</p>
          <p style={{ margin: 0, maxWidth: 640 }}>{cover.body}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            <Link href="/incontra#avatar"><span style={btn(RED, "#fff")}>Parla con l'avatar</span></Link>
            <Link href="/incontra#video"><span style={btn("transparent", INK, `2px solid ${INK}`)}>Guarda il video</span></Link>
          </div>
        </div>
        <aside style={{ flex: "1 1 320px", padding: "32px 28px", background: PALE, display: "flex", flexDirection: "column", gap: 14 }}>
          <Photo name="cover" ar="4 / 5" pos="center top" />
          <div style={{ fontFamily: BLACK, fontSize: 20, letterSpacing: -0.5 }}>In questo numero</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 17 }}>
            {index.map((x, i) => (
              <Link key={x.k} href={x.href}>
                <div style={{ padding: "9px 0", cursor: "pointer", borderTop: `${i === 0 ? 2 : 1}px solid ${INK}`, borderBottom: i === index.length - 1 ? `2px solid ${INK}` : undefined }}>
                  <span style={{ ...kicker(), letterSpacing: "0.14em" }}>{x.k}</span><br />{x.t}
                </div>
              </Link>
            ))}
          </div>
        </aside>
      </section>

      <Sec k="Per cominciare" title="Due modi per conoscerci, in pochi minuti.">
        <Cols gap={24}>
          <Entry href="/incontra#avatar" k="1 · Conversazione" t="Parla con l'avatar di Alberto" p="Ti spiega che cos'è UltraRem e risponde alle tue domande. Ti dice subito che è un'intelligenza artificiale, e puoi smettere quando vuoi." img="storie" cta="Parla con l'avatar" />
          <Entry href="/incontra#video" k="2 · Racconto" t="Il video: perché lo facciamo" p="Un filmato breve, senza spiegazioni tecniche, su quello che resta di noi e su chi lo racconta." img="cultura" cta="Guarda il video" />
        </Cols>
      </Sec>

      <Sec k="Da leggere" title="Storie, dibattiti, cultura." bg={PALE}>
        <Cols gap={24}>
          {reads.map(r => (
            <Link key={r.k} href="/storie">
              <article style={{ flex: "1 1 240px", cursor: "pointer", display: "flex", flexDirection: "column", gap: 8 }}>
                <Photo name={r.img || "riempitivo"} ar="3 / 2" />
                <div style={kicker()}>{r.k}</div>
                <h3 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: 24, lineHeight: 1.1 }}>{r.t}</h3>
                <span style={{ fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>{r.m}</span>
              </article>
            </Link>
          ))}
        </Cols>
        <div style={{ marginTop: 22 }}><Link href="/storie"><span style={btn(INK, "#fff")}>Tutte le storie</span></Link></div>
      </Sec>

      <Sec k={ladder.kicker} title="Tre gradini, un solo percorso.">
        <Cols gap={20}>
          {ladder.steps.map(s => (
            <Link key={s.name} href="/come-funziona">
              <div style={{ flex: "1 1 260px", cursor: "pointer", border: `2px solid ${s.tone === "red" ? RED : INK}`, background: s.tone === "red" ? RED : s.tone === "dark" ? INK : "#fff", color: s.tone === "light" ? INK : "#fff", padding: 22, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={kicker(s.tone === "light" ? GREY : "#fff")}>{s.tag}</div>
                <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 28, lineHeight: 1.1 }}>{s.name}</div>
                <div style={{ fontFamily: BLACK, fontSize: 36, letterSpacing: -1, color: s.tone === "light" ? RED : "#fff" }}>{s.price}</div>
                <div style={{ fontSize: 14, opacity: 0.85 }}>{s.sub}</div>
              </div>
            </Link>
          ))}
        </Cols>
        <div style={{ marginTop: 22 }}><Link href="/come-funziona"><span style={btn(RED, "#fff")}>Che cosa include ogni gradino</span></Link></div>
      </Sec>

      <Sec k={who.kicker} title={who.title} bg={PALE}>
        <p style={{ margin: "0 0 22px", maxWidth: 760 }}>{who.intro}</p>
        <Cols gap={14}>
          {[...who.founders, ...who.science].map(f => (
            <div key={f.name} style={{ flex: "1 1 120px", maxWidth: 170 }}>
              <Tbp ini={f.ini} ar="1 / 1" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 16, lineHeight: 1.1, marginTop: 6 }}>{f.name}</div>
            </div>
          ))}
        </Cols>
        <div style={{ marginTop: 22 }}><Link href="/fondatori"><span style={btn(INK, "#fff")}>Conosci i fondatori</span></Link></div>
      </Sec>

      <Sec k={research.kicker} title={research.title}>
        <p style={{ margin: "0 0 18px", maxWidth: 760 }}>{research.cells[0].v}</p>
        <Link href="/ricerca"><span style={btn("transparent", INK, `2px solid ${INK}`)}>La ricerca a Padova</span></Link>
      </Sec>

      <CtaBand title="Preferisci parlarne con una persona?" text="Una chiamata conoscitiva, senza impegno e senza fretta." a={{ href: "/prenota", label: "Prenota una demo" }} b={{ href: "/contatti", label: "Scrivici" }} />
    </Page>
  );
}
