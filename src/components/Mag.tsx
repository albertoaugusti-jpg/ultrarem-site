import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { useLang, useDict, LANGS } from "@/lib/i18n";

export const RED = "#c8102e", INK = "#111", GREY = "#6b6b6b", PALE = "#f2f2f2";
export const STRIPES = ["#3d7a6b", "#c8102e", "#c4522a", "#e8a820"];
export const NARROW = "'Archivo Narrow', sans-serif";
export const BLACK = "'Archivo Black', sans-serif";
export const BODONI = "'Bodoni Moda', serif";
export const SERIF = "'Source Serif 4', serif";
export const PAD = "clamp(20px, 4vw, 48px)";

export function useMagFonts() {
  useEffect(() => {
    const id = "rivista-fonts";
    if (document.getElementById(id)) return;
    const l = document.createElement("link");
    l.id = id; l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?family=Archivo+Black&family=Archivo+Narrow:wght@500;700&family=Bodoni+Moda:ital,opsz,wght@0,6..96,700;0,6..96,900;1,6..96,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&display=swap";
    document.head.appendChild(l);
  }, []);
}

export const kicker = (color = RED): CSSProperties => ({ fontFamily: NARROW, fontWeight: 700, fontSize: 12, letterSpacing: "0.18em", textTransform: "uppercase", color });
export const btn = (bg: string, fg: string, border?: string): CSSProperties => ({ fontFamily: NARROW, fontWeight: 700, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", textDecoration: "none", background: bg, color: fg, border: border ?? "none", padding: "12px 22px", minHeight: 44, boxSizing: "border-box", display: "inline-flex", alignItems: "center", cursor: "pointer" });

export function Stripes({ h = 6 }: { h?: number }) {
  return <div style={{ display: "flex", height: h }}>{STRIPES.map(c => <div key={c} style={{ flex: 1, background: c }} />)}</div>;
}

const NAV_EXTRA: Record<string, { stories: string; founders: string; start: string; research: string; cities: string }> = {
  it: { stories: "Storie", founders: "Founder", start: "Inizia", research: "Università e ricerca", cities: "Milano · Genova" },
  en: { stories: "Stories", founders: "Founders", start: "Start", research: "University and research", cities: "Milan · Genoa" },
  fr: { stories: "Histoires", founders: "Founders", start: "Commencer", research: "Université et recherche", cities: "Milan · Gênes" },
  de: { stories: "Geschichten", founders: "Founder", start: "Beginnen", research: "Universität und Forschung", cities: "Mailand · Genua" },
};

// Sotto i 1240 px il menu diventa un hamburger.
const NAV_CSS = ".nv-wide{display:flex}.nv-narrow{display:none}@media (max-width:1240px){.nv-wide{display:none}.nv-narrow{display:flex}}";

export function Navbar() {
  useMagFonts();
  const [loc] = useLocation();
  const { lang, setLang } = useLang();
  const d = useDict();
  const x = NAV_EXTRA[lang] ?? NAV_EXTRA.it;
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [loc]);
  const links = [
    { href: "/", label: d.nav.home },
    { href: "/il-progetto", label: d.nav.project },
    { href: "/per-chi", label: d.nav.forWho },
    { href: "/come-funziona", label: d.nav.how },
    { href: "/ricerca", label: x.research },
    { href: "/storie", label: x.stories },
    { href: "/fondatori", label: x.founders },
    { href: "/contatti", label: d.nav.contact },
  ];
  const ls: CSSProperties = { fontFamily: NARROW, fontWeight: 700, fontSize: 12.5, letterSpacing: "0.13em", textTransform: "uppercase", textDecoration: "none", color: INK, cursor: "pointer", paddingBottom: 2 };
  const sel = (
    <select value={lang} onChange={e => setLang(e.target.value as typeof lang)} aria-label="Language" style={{ fontFamily: NARROW, fontWeight: 700, fontSize: 13, border: `1px solid ${INK}`, background: "#fff", color: INK, padding: "7px 8px", cursor: "pointer" }}>
      {LANGS.map(l => <option key={l} value={l}>{l.toUpperCase()}</option>)}
    </select>
  );
  const start = <Link href="/percorsi/diario-di-bordo"><span style={{ ...btn(RED, "#fff"), padding: "8px 18px", minHeight: 38 }}>{x.start}</span></Link>;
  const logo = <Link href="/"><img src="/img/rivista/logo.png" alt="UltraRem, Your memory is you" style={{ height: 54, width: "auto", cursor: "pointer", display: "block" }} /></Link>;
  const item = (l: { href: string; label: string }) => (
    <Link key={l.href} href={l.href}>
      <span style={{ ...ls, color: loc === l.href ? RED : INK, borderBottom: loc === l.href ? `2px solid ${RED}` : "2px solid transparent" }}>{l.label}</span>
    </Link>
  );
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "#fff", color: INK, borderBottom: `2px solid ${INK}` }}>
      <style>{NAV_CSS}</style>
      <div className="nv-wide" style={{ alignItems: "center", gap: 24, padding: `8px ${PAD}` }}>
        {logo}
        <nav style={{ display: "flex", flexWrap: "wrap", gap: "6px 18px", flex: 1 }}>{links.map(item)}</nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>{sel}{start}</div>
      </div>
      <div className="nv-narrow" style={{ alignItems: "center", justifyContent: "space-between", padding: "8px 16px" }}>
        <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open} style={{ width: 44, height: 44, border: `1px solid ${INK}`, background: "#fff", color: INK, fontSize: 22, cursor: "pointer", lineHeight: 1 }}>{open ? "✕" : "☰"}</button>
        {logo}
        {start}
      </div>
      {open && (
        <div className="nv-narrow" style={{ flexDirection: "column", alignItems: "flex-start", gap: 14, padding: "14px 20px 20px", borderTop: `1px solid ${INK}` }}>
          {links.map(item)}
          {sel}
        </div>
      )}
    </header>
  );
}

export function Footer() {
  const d = useDict();
  const { lang } = useLang();
  const x = NAV_EXTRA[lang] ?? NAV_EXTRA.it;
  const fl: CSSProperties = { color: "rgba(255,255,255,0.75)", textDecoration: "none", fontSize: 15, cursor: "pointer" };
  const col: CSSProperties = { flex: "1 1 220px", display: "flex", flexDirection: "column", gap: 8 };
  return (
    <footer style={{ background: INK, color: "#fff", fontFamily: SERIF }}>
      <Stripes h={5} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: 32, padding: `40px ${PAD}` }}>
        <div style={{ ...col, flex: "2 1 300px" }}>
          <div style={{ fontFamily: BLACK, fontSize: 28, letterSpacing: -1 }}>UltraRem</div>
          <div style={kicker("#ff3b52")}>Your memory is you</div>
          <p style={{ margin: 0, fontSize: 15, color: "rgba(255,255,255,0.65)", maxWidth: 360 }}>{d.footer.tagline}</p>
        </div>
        <div style={col}>
          <div style={kicker("#ff3b52")}>{d.footer.navigate}</div>
          {[["/il-progetto", d.nav.project], ["/per-chi", d.nav.forWho], ["/come-funziona", d.nav.how], ["/ricerca", x.research], ["/storie", x.stories], ["/fondatori", x.founders]].map(([h, l]) => <Link key={h} href={h}><span style={fl}>{l}</span></Link>)}
        </div>
        <div style={col}>
          <div style={kicker("#ff3b52")}>{d.footer.contact}</div>
          <Link href="/contatti"><span style={fl}>{d.footer.getInTouch}</span></Link>
          <Link href="/percorsi/diario-di-bordo"><span style={fl}>Inizia dal Diario di bordo</span></Link>
          <a href="mailto:info@ultrarem.it" style={fl}>info@ultrarem.it</a>
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.65)" }}>Viale Cassala 30, 20143 Milano</span>
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.65)" }}>{x.cities}</span>
        </div>
        <div style={col}>
          <div style={kicker("#ff3b52")}>Partner</div>
          <img src="/img/rivista/universita.jpg" alt="Emblema universitario (illustrazione)" style={{ width: 84, height: 84, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(255,255,255,0.6)" }} />
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>Ricerca: Università di Padova</span>
          <span style={{ fontSize: 15, color: "rgba(255,255,255,0.75)" }}>Tecnologia: QBT Sagl (fornitore)</span>
        </div>
      </div>
      <div style={{ padding: `16px ${PAD} 24px`, borderTop: "1px solid rgba(255,255,255,0.2)", fontFamily: NARROW, fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>
        © 2026 UltraRem Srl · P.IVA 14404030968 · REA MI-2780427 · {d.footer.startup}
      </div>
    </footer>
  );
}

/* ---- blocchi di pagina ---- */
export function Page({ children }: { children: ReactNode }) {
  useMagFonts();
  const [loc] = useLocation();
  useEffect(() => {
    const h = window.location.hash.slice(1);
    const go = () => { const el = h ? document.getElementById(h) : null; if (el) el.scrollIntoView(); else window.scrollTo(0, 0); };
    const t = setTimeout(go, 60);
    return () => clearTimeout(t);
  }, [loc]);
  return <div style={{ background: "#fff", color: INK, fontFamily: SERIF, fontSize: 18, lineHeight: 1.65, overflowX: "clip" }}><Stripes h={5} /><Navbar />{children}<Footer /></div>;
}

export function Wrap({ children }: { children: ReactNode }) {
  return <div style={{ maxWidth: 1600, margin: "0 auto", padding: `0 ${PAD}` }}>{children}</div>;
}

export function Hero({ k, title, lead, dark = false, children }: { k: string; title: ReactNode; lead?: string; dark?: boolean; children?: ReactNode }) {
  return (
    <section style={{ padding: `clamp(40px,7vw,80px) 0`, background: dark ? INK : "#fff", color: dark ? "#fff" : INK, borderBottom: `3px solid ${INK}` }}>
      <Wrap>
      <div style={{ ...kicker(dark ? "#ff3b52" : RED), marginBottom: 14 }}>{k}</div>
      <h1 style={{ margin: 0, fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(38px,6vw,72px)", lineHeight: 1.02, letterSpacing: -2, maxWidth: 1000 }}>{title}</h1>
      {lead && <p style={{ margin: "20px 0 0", fontStyle: "italic", fontSize: "clamp(19px,2.2vw,24px)", maxWidth: 760, color: dark ? "rgba(255,255,255,0.8)" : INK }}>{lead}</p>}
      {children}
      </Wrap>
    </section>
  );
}

export function Sec({ k, title, bg = "#fff", dark = false, id, children }: { k?: string; title?: ReactNode; bg?: string; dark?: boolean; id?: string; children: ReactNode }) {
  return (
    <section id={id} style={{ padding: `clamp(36px,6vw,64px) 0`, background: dark ? INK : bg, color: dark ? "#fff" : INK, borderBottom: `3px solid ${INK}` }}>
      <Wrap>
      {k && <div style={{ ...kicker(dark ? "#ff3b52" : RED), marginBottom: 8 }}>{k}</div>}
      {title && <h2 style={{ margin: "0 0 22px", fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(28px,4.2vw,46px)", lineHeight: 1.06, letterSpacing: -1, maxWidth: 900 }}>{title}</h2>}
      {children}
      </Wrap>
    </section>
  );
}

export function Prose({ children, max = 760 }: { children: ReactNode; max?: number }) {
  return <div style={{ maxWidth: max, display: "flex", flexDirection: "column", gap: 16 }}>{children}</div>;
}

export function Cols({ children, gap = 28 }: { children: ReactNode; gap?: number }) {
  return <div style={{ display: "flex", flexWrap: "wrap", gap }}>{children}</div>;
}

export function Card({ k, t, children, min = 260, dark = false, red = false }: { k?: string; t: string; children: ReactNode; min?: number; dark?: boolean; red?: boolean }) {
  return (
    <div style={{ flex: `1 1 ${min}px`, border: `2px solid ${red ? RED : INK}`, padding: 24, background: red ? RED : dark ? INK : "#fff", color: red || dark ? "#fff" : INK, display: "flex", flexDirection: "column", gap: 10 }}>
      {k && <div style={kicker(red || dark ? "#fff" : RED)}>{k}</div>}
      <div style={{ fontFamily: BODONI, fontWeight: 900, fontSize: 26, lineHeight: 1.1 }}>{t}</div>
      <div style={{ fontSize: 16, display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>
  );
}

export function Quote({ children, by }: { children: ReactNode; by?: string }) {
  return (
    <blockquote style={{ margin: "8px 0", borderLeft: `6px solid ${RED}`, padding: "6px 22px", fontFamily: BODONI, fontStyle: "italic", fontWeight: 500, fontSize: "clamp(22px,3vw,32px)", lineHeight: 1.25, maxWidth: 820 }}>
      {children}
      {by && <footer style={{ ...kicker(GREY), fontStyle: "normal", marginTop: 10 }}>{by}</footer>}
    </blockquote>
  );
}

export function Photo({ name, ar, pos = "center" }: { name: string; ar: string; pos?: string }) {
  return (
    <div style={{ aspectRatio: ar, overflow: "hidden", border: `1px solid ${INK}`, boxSizing: "border-box" }}>
      <img src={`/img/rivista/${name}.jpg`} alt="Immagine illustrativa" loading="lazy" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: pos, display: "block" }} />
    </div>
  );
}

export function Tbp({ ini, ar, col, label = "Foto TBP" }: { ini: string; ar: string; col: string; label?: string }) {
  return (
    <div style={{ aspectRatio: ar, position: "relative", overflow: "hidden", border: `1px solid ${INK}`, boxSizing: "border-box", background: col, display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 30% 20%,rgba(255,255,255,0.28),rgba(0,0,0,0.35))" }} />
      <div style={{ position: "relative", fontFamily: BLACK, fontSize: 72, letterSpacing: -3, color: "#fff", textShadow: "3px 3px 0 rgba(0,0,0,0.35)" }}>{ini}</div>
      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <div style={{ textAlign: "center", fontFamily: NARROW, fontWeight: 700, fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", padding: "4px 0", background: "rgba(0,0,0,0.45)" }}>{label}</div>
        <Stripes />
      </div>
    </div>
  );
}

function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return href.startsWith("mailto:") ? <a href={href} style={{ textDecoration: "none" }}>{children}</a> : <Link href={href}>{children}</Link>;
}

export function CtaBand({ title, text, a, b }: { title: string; text?: string; a: { href: string; label: string }; b?: { href: string; label: string } }) {
  return (
    <section style={{ padding: `clamp(36px,6vw,64px) 0`, background: PALE, borderBottom: `3px solid ${INK}` }}>
      <Wrap>
      <h2 style={{ margin: "0 0 10px", fontFamily: BODONI, fontWeight: 900, fontSize: "clamp(28px,4vw,42px)", lineHeight: 1.08, maxWidth: 800 }}>{title}</h2>
      {text && <p style={{ margin: "0 0 20px", maxWidth: 680 }}>{text}</p>}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <CtaLink href={a.href}><span style={btn(INK, "#fff")}>{a.label}</span></CtaLink>
        {b && <CtaLink href={b.href}><span style={btn("transparent", INK, `2px solid ${INK}`)}>{b.label}</span></CtaLink>}
      </div>
      </Wrap>
    </section>
  );
}
