import { useEffect } from "react";
import { Link } from "wouter";
import { useLang, LANGS } from "@/lib/i18n";
import { cover, index, reads, ladder, story, research, who, charter } from "@/content/home";

const RED = "#c8102e", INK = "#111", GREY = "#6b6b6b", PALE = "#f2f2f2";
const NARROW = "'Archivo Narrow', sans-serif";
const BLACK = "'Archivo Black', sans-serif";
const BODONI = "'Bodoni Moda', serif";
const SERIF = "'Source Serif 4', serif";
const STRIPES = ["#3d7a6b", "#c8102e", "#c4522a", "#e8a820"];

const kicker = (color = RED): React.CSSProperties => ({ fontFamily: NARROW, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color });
const h2: React.CSSProperties = { margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(30px,4.5vw,44px)", lineHeight: 1.05 };

function Stripes({ h = 6 }: { h?: number }) {
  return <div style={{ display: "flex", height: h }}>{STRIPES.map(c => <div key={c} style={{ flex: 1, background: c }} />)}</div>;
}

function Photo({ name, ar, pos = "center", bottom = false }: { name: string; ar: string; pos?: string; bottom?: boolean }) {
  return (
    <div style={{ aspectRatio: ar, overflow: "hidden", border: `1px solid ${INK}`, borderWidth: bottom ? "0 0 2px 0" : 1, boxSizing: "border-box" }}>
      <img src={`/img/rivista/${name}.jpg`} alt="Immagine illustrativa" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
    </div>
  );
}

// Segnaposto elegante in attesa della foto vera (TBP)
function Tbp({ ini, ar, col }: { ini: string; ar: string; col: string }) {
  return (
    <div style={{ aspectRatio: ar, position: "relative", overflow: "hidden", border: `1px solid ${INK}`, boxSizing: "border-box", background: col, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 20%,rgba(255,255,255,0.28),rgba(0,0,0,0.35))" }} />
      <div style={{ position: "relative", fontFamily: BLACK, fontSize: 72, letterSpacing: -3, color: "#fff", textShadow: "3px 3px 0 rgba(0,0,0,0.35)" }}>{ini}</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <div style={{ textAlign: "center", fontFamily: NARROW, fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", padding: "4px 0", background: "rgba(0,0,0,0.45)" }}>Foto TBP</div>
        <Stripes />
      </div>
    </div>
  );
}

export default function Home() {
  const { lang, setLang } = useLang();

  useEffect(() => {
    const id = "rivista-fonts";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow:wght@500;700&family=Bodoni+Moda:ital,opsz,wght@0,6..96,700;0,6..96,900;1,6..96,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
    document.head.appendChild(l);
  }, []);

  const navLinks = [
    { href: "/il-progetto", label: "Il Progetto" }, { href: "/per-chi", label: "Per Chi" },
    { href: "/come-funziona", label: "Come Funziona" }, { href: "/ricerca", label: "Ricerca" },
    { href: "/incontra", label: "Conosci UltraRem" }, { href: "/contatti", label: "Contatti" },
  ];
  const linkStyle: React.CSSProperties = { fontFamily: NARROW, fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", color: INK };
  const btn = (bg: string, fg: string, border?: string): React.CSSProperties => ({ fontFamily: NARROW, fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", background: bg, color: fg, border: border ?? "none", padding: "12px 22px", minHeight: 44, boxSizing: "border-box", display: "inline-flex", alignItems: "center", cursor: "pointer" });

  return (
    <div style={{ background: "#fff", color: INK, fontFamily: SERIF, fontSize: 18, lineHeight: 1.6, overflowX: "hidden" }}>
      <Stripes h={5} />

      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "22px 16px 14px", borderBottom: `2px solid ${INK}` }}>
        <Link href="/"><img src="/img/rivista/logo.png" alt="UltraRem, Your memory is you" style={{ height: 150, width: "auto", maxWidth: "100%", display: "block", cursor: "pointer" }} /></Link>
      </div>

      <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px 24px", padding: "14px 40px", borderBottom: `2px solid ${INK}` }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 20px" }}>
          <span style={{ ...linkStyle, color: RED }}>Home</span>
          {navLinks.map(l => <Link key={l.href} href={l.href}><span style={{ ...linkStyle, cursor: "pointer" }}>{l.label}</span></Link>)}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
          <div style={{ display: "flex", border: `1px solid ${INK}`, fontFamily: NARROW, fontWeight: 700, fontSize: 12 }}>
            {LANGS.map(l => <button key={l} onClick={() => setLang(l)} style={{ padding: "6px 9px", border: "none", cursor: "pointer", background: lang === l ? INK : "transparent", color: lang === l ? "#fff" : INK, fontFamily: "inherit", fontWeight: "inherit", fontSize: "inherit" }}>{l.toUpperCase()}</button>)}
          </div>
          <Link href="/prenota"><span style={btn(INK, "#fff")}>Prenota Demo</span></Link>
        </div>
      </nav>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 8, padding: "10px 40px", borderBottom: `2px solid ${INK}`, fontFamily: NARROW, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase" }}>
        <span>Rivista di memoria e vita</span><span style={{ color: GREY }}>Milano · Genova · Padova</span><span style={{ color: RED }}>Numero 1 · Autunno 2026</span>
      </div>

      {/* COPERTINA */}
      <section style={{ display: "flex", flexWrap: "wrap", borderBottom: `3px solid ${INK}` }}>
        <div style={{ flex: "2 1 620px", padding: "56px 48px", borderRight: `1px solid ${INK}`, display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={kicker()}>{cover.kicker}</div>
          <h1 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(40px,6.2vw,76px)", lineHeight: 1, letterSpacing: -2 }}>{cover.title}</h1>
          <p style={{ margin: 0, fontStyle: "italic", fontSize: 22, maxWidth: 640 }}>{cover.lead}</p>
          <p style={{ margin: 0, maxWidth: 640 }}>{cover.body}</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 6 }}>
            <a href="#scala" style={btn(RED, "#fff")}>{cover.cta1}</a>
            <a href="#chi" style={btn("transparent", INK, `2px solid ${INK}`)}>{cover.cta2}</a>
          </div>
        </div>
        <aside style={{ flex: "1 1 320px", padding: "40px 32px", background: PALE, display: "flex", flexDirection: "column", gap: 14 }}>
          <Photo name="cover" ar="4 / 5" pos="center top" />
          <div style={{ fontFamily: BLACK, fontSize: 20, letterSpacing: -0.5 }}>In questo numero</div>
          <div style={{ display: "flex", flexDirection: "column", fontSize: 17 }}>
            {index.map((x, i) => (
              <div key={x.k} style={{ padding: "10px 0", borderTop: `${i === 0 ? 2 : 1}px solid ${INK}`, borderBottom: i === index.length - 1 ? `2px solid ${INK}` : undefined }}>
                <span style={{ ...kicker(), letterSpacing: "0.14em" }}>{x.k}</span><br />{x.t}
              </div>
            ))}
          </div>
        </aside>
      </section>

      {/* DA LEGGERE */}
      <section style={{ padding: "48px 40px", borderBottom: `3px solid ${INK}` }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, borderBottom: `2px solid ${INK}`, paddingBottom: 8, marginBottom: 24 }}>
          <h2 style={{ margin: 0, fontFamily: BLACK, fontSize: 32, letterSpacing: -1 }}>Da leggere</h2>
          <span style={{ ...kicker(GREY), letterSpacing: "0.16em" }}>Esempi con testi segnaposto</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0 }}>
          {reads.map((r, i) => (
            <article key={r.k} style={{ flex: "1 1 260px", padding: i === 0 ? "0 24px 0 0" : i === reads.length - 1 ? "0 0 0 24px" : "0 24px", borderRight: i < reads.length - 1 ? `1px solid ${INK}` : undefined, display: "flex", flexDirection: "column", gap: 10 }}>
              {r.img ? <Photo name={r.img} ar="3 / 2" /> : <Tbp ini="?" ar="3 / 2" col={GREY} />}
              <div style={kicker()}>{r.k}</div>
              <h3 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: 28, lineHeight: 1.1 }}>{r.t}</h3>
              <p style={{ margin: 0, fontSize: 16 }}>{r.p}</p>
              <span style={{ fontFamily: NARROW, fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: GREY }}>{r.m}</span>
            </article>
          ))}
        </div>
      </section>

      {/* SCALA */}
      <section id="scala" style={{ padding: "56px 40px", background: PALE, borderBottom: `3px solid ${INK}` }}>
        <div style={{ ...kicker(), marginBottom: 8 }}>{ladder.kicker}</div>
        <h2 style={{ ...h2, fontSize: "clamp(32px,5vw,52px)", letterSpacing: -1, margin: "0 0 10px" }}>{ladder.title}</h2>
        <p style={{ margin: "0 0 32px", maxWidth: 760 }}>{ladder.intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "stretch" }}>
          {ladder.steps.map(s => {
            const red = s.tone === "red", dark = s.tone === "dark";
            return (
              <div key={s.name} style={{ flex: "1 1 300px", background: "#fff", border: `2px solid ${red ? RED : INK}`, display: "flex", flexDirection: "column" }}>
                <Photo name={s.img} ar="16 / 9" bottom />
                <div style={{ padding: "18px 24px", borderBottom: `2px solid ${red ? RED : INK}`, background: red ? RED : dark ? INK : "#fff", color: red || dark ? "#fff" : INK }}>
                  <div style={{ ...kicker(red ? "#fff" : dark ? "#ff3b52" : GREY) }}>{s.tag}</div>
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
        </div>
        <p style={{ margin: "24px 0 0", fontSize: 15, maxWidth: 900 }}>{ladder.fee}</p>
      </section>

      {/* STORIA INTERATTIVA */}
      <section style={{ display: "flex", flexWrap: "wrap", borderBottom: `3px solid ${INK}` }}>
        <div style={{ flex: "1 1 520px", padding: "48px 40px", borderRight: `1px solid ${INK}`, display: "flex", flexDirection: "column", gap: 14 }}>
          <div style={kicker()}>{story.kicker}</div>
          <h2 style={h2}>{story.title}</h2>
          <p style={{ margin: 0 }}>{story.text}</p>
          <div style={{ borderLeft: `6px solid ${RED}`, padding: "6px 18px", fontSize: 16 }}>
            <b>Sempre dichiarato.</b> {story.box}
          </div>
        </div>
        <div style={{ flex: "1 1 420px", padding: 40, background: INK, color: "#fff", display: "flex", flexDirection: "column", gap: 12, justifyContent: "center" }}>
          <div style={{ aspectRatio: "4 / 3", border: "1px solid rgba(255,255,255,0.4)", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 20, fontFamily: NARROW, fontSize: 13, letterSpacing: "0.16em", textTransform: "uppercase", color: "#aaa", background: "#1c1c1c" }}>{story.slot}</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", fontFamily: NARROW, fontWeight: 700, fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase" }}>
            <span style={{ border: "1px solid #ff3b52", color: "#ff3b52", padding: "4px 10px" }}>Testimonianza</span>
            <span style={{ border: "1px solid #aaa", color: "#aaa", padding: "4px 10px" }}>Elaborazione</span>
            <span style={{ padding: "4px 0", color: "#aaa" }}>Stai parlando con un'IA</span>
          </div>
        </div>
      </section>

      {/* RICERCA */}
      <section style={{ padding: "56px 40px", borderBottom: `3px solid ${INK}` }}>
        <div style={{ ...kicker(), marginBottom: 8 }}>{research.kicker}</div>
        <h2 style={{ ...h2, marginBottom: 24 }}>{research.title}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", border: `2px solid ${INK}` }}>
          {research.cells.map((c, i) => (
            <div key={c.k} style={{ flex: "1 1 300px", padding: 24, borderRight: i < research.cells.length - 1 ? `1px solid ${INK}` : undefined }}>
              <div style={{ ...kicker(), marginBottom: 6 }}>{c.k}</div>
              <p style={{ margin: 0, fontSize: 16 }}>{c.v}</p>
            </div>
          ))}
        </div>
        <p style={{ margin: "14px 0 0", fontSize: 15, color: GREY, maxWidth: 820 }}>{research.note}</p>
      </section>

      {/* CHI C'E DIETRO */}
      <section id="chi" style={{ padding: "56px 40px", borderBottom: `3px solid ${INK}` }}>
        <div style={{ ...kicker(), marginBottom: 8 }}>{who.kicker}</div>
        <h2 style={{ ...h2, marginBottom: 14, maxWidth: 900 }}>{who.title}</h2>
        <p style={{ margin: "0 0 28px", maxWidth: 820 }}>{who.intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 24, marginBottom: 44 }}>
          {who.founders.map(f => (
            <div key={f.name} style={{ flex: "1 1 200px", display: "flex", flexDirection: "column", gap: 8 }}>
              <Tbp ini={f.ini} ar="4 / 5" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 22, lineHeight: 1.1 }}>{f.name}</div>
              <div style={{ ...kicker(), letterSpacing: "0.14em" }}>{f.role}</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>{f.text}</p>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 28 }}>
          {who.science.map(f => (
            <div key={f.name} style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 10 }}>
              <Tbp ini={f.ini} ar="3 / 2" col={f.col} />
              <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 26, lineHeight: 1.1 }}>{f.name}</div>
              <div style={{ ...kicker(), letterSpacing: "0.14em" }}>{f.role}</div>
              <p style={{ margin: 0, fontSize: 16 }}>{f.text}</p>
            </div>
          ))}
          <div style={{ flex: "1 1 320px", display: "flex", flexDirection: "column", gap: 10, background: INK, color: "#fff", padding: 24 }}>
            <div style={kicker("#ff3b52")}>{who.method.k}</div>
            <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 26, lineHeight: 1.1 }}>{who.method.t}</div>
            <p style={{ margin: 0, fontSize: 16 }}>{who.method.p1}</p>
            <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.7)" }}>{who.method.p2}</p>
          </div>
        </div>
        <div style={{ marginTop: 32, padding: "16px 20px", border: `1px dashed ${GREY}`, fontSize: 15, maxWidth: 900 }}>{who.socrem}</div>
      </section>

      {/* CARTA */}
      <section style={{ padding: "56px 40px", background: INK, color: "#fff" }}>
        <div style={{ ...kicker("#ff3b52"), marginBottom: 8 }}>{charter.kicker}</div>
        <h2 style={{ ...h2, marginBottom: 28, maxWidth: 820 }}>{charter.title}</h2>
        <div style={{ display: "flex", flexWrap: "wrap", borderTop: "1px solid rgba(255,255,255,0.3)" }}>
          {charter.arts.map((a, i) => (
            <div key={a.a} style={{ flex: "1 1 240px", padding: i === 0 ? "20px 22px 20px 0" : "20px 22px", borderRight: i < charter.arts.length - 1 ? "1px solid rgba(255,255,255,0.3)" : undefined }}>
              <div style={{ fontFamily: BLACK, fontSize: 14, color: "#ff3b52" }}>{a.a}</div>
              <b>{a.t}</b>
              <div style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>{a.d}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PARTNER E PIEDE */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: "28px 40px", borderBottom: `1px solid ${INK}`, fontSize: 16, alignItems: "flex-end" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ ...kicker(), letterSpacing: "0.16em" }}>Ricerca</span><img src="/img/rivista/unipd.png" alt="Università di Padova" onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} style={{ height: 56 }} /><span>Università di Padova</span></div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}><span style={{ ...kicker(), letterSpacing: "0.16em" }}>Fornitore tecnologico</span><img src="/img/rivista/qbt.png" alt="QBT Sagl" style={{ height: 56, width: "auto" }} /></div>
        <div><span style={{ ...kicker(), letterSpacing: "0.16em" }}>Redazione</span><br />Viale Cassala 30, 20143 Milano<br /><a href="mailto:info@ultrarem.it" style={{ color: INK }}>info@ultrarem.it</a></div>
      </div>
      <div style={{ padding: "18px 40px 28px", fontFamily: NARROW, fontWeight: 500, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: GREY }}>© 2026 UltraRem Srl · P.IVA 14404030968 · REA MI-2780427 · Start-Up Innovativa</div>
    </div>
  );
}
