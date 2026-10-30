import { Link, useLocation } from "wouter";
import { useState } from "react";
import logoPath from "@assets/Logo_UltraRem-removebg-preview_1775473927277.png";
import { useLang, useDict, LANGS } from "@/lib/i18n";

export function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const d = useDict();

  const navLinks = [
    { href: "/", label: d.nav.home },
    { href: "/il-progetto", label: d.nav.project },
    { href: "/per-chi", label: d.nav.forWho },
    { href: "/come-funziona", label: d.nav.how },
    { href: "/ricerca", label: d.nav.research },
    { href: "/demo", label: d.nav.demo },
    { href: "/contatti", label: d.nav.contact },
  ];

  const LangToggle = ({ mobile = false }: { mobile?: boolean }) => (
    <div style={{
      display: "flex", alignItems: "center",
      border: "1px solid rgba(26,18,9,0.25)",
      overflow: "hidden",
      ...(mobile ? { margin: "0.5rem 2rem" } : {}),
    }}>
      {LANGS.map(l => (
        <button
          key={l}
          onClick={() => setLang(l)}
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.58rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            background: lang === l ? "#1a1209" : "transparent",
            color: lang === l ? "#f5f0e8" : "#1a1209",
            border: "none",
            padding: "0.42rem 0.7rem",
            cursor: "pointer",
            transition: "all .15s",
          }}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );

  return (
    <nav className="sticky top-0 z-50" style={{ background: "rgba(245,240,232,0.97)", backdropFilter: "blur(8px)", borderBottom: "2px solid #1a1209", padding: "0 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
      <Link href="/">
        <div className="overflow-hidden cursor-pointer" style={{ height: 56 }}>
          <img src={logoPath} alt="UltraRem" style={{ height: 195, width: "auto" }} />
        </div>
      </Link>

      <div className="hidden md:flex items-center gap-4">
        {navLinks.map(link => (
          <Link key={link.href} href={link.href}>
            <span className="cursor-pointer transition-colors" style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.62rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: location === link.href ? "#c4522a" : "#1a1209",
              textDecoration: "none",
              borderBottom: location === link.href ? "2px solid #c4522a" : "2px solid transparent",
              paddingBottom: "2px",
            }}
              onMouseOver={e => { if (location !== link.href) e.currentTarget.style.color = "#c4522a"; }}
              onMouseOut={e => { if (location !== link.href) e.currentTarget.style.color = "#1a1209"; }}>
              {link.label}
            </span>
          </Link>
        ))}
      </div>

      <div className="hidden md:flex items-center gap-3">
        <LangToggle />
        <a href="/presentazione.html?print=1" target="_blank" rel="noopener" style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.62rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: "#8a7d6b",
          textDecoration: "none",
          border: "1px solid #8a7d6b",
          padding: "0.5rem 1rem",
          transition: "all .2s",
        }}
          onMouseOver={e => { e.currentTarget.style.color = "#c4522a"; e.currentTarget.style.borderColor = "#c4522a"; }}
          onMouseOut={e => { e.currentTarget.style.color = "#8a7d6b"; e.currentTarget.style.borderColor = "#8a7d6b"; }}>
          {d.nav.slides}
        </a>
        <Link href="/prenota">
          <span className="cursor-pointer transition-colors" style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "0.68rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            background: "#1a1209",
            color: "#f5f0e8",
            padding: "0.6rem 1.3rem",
          }}
            onMouseOver={e => (e.currentTarget.style.background = "#c4522a")}
            onMouseOut={e => (e.currentTarget.style.background = "#1a1209")}>
            {d.nav.book}
          </span>
        </Link>
      </div>

      <button className="flex md:hidden flex-col gap-1.5" style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }} onClick={() => setMenuOpen(v => !v)}>
        <span style={{ width: 24, height: 2, background: "#1a1209", display: "block" }} />
        <span style={{ width: 24, height: 2, background: "#1a1209", display: "block" }} />
        <span style={{ width: 24, height: 2, background: "#1a1209", display: "block" }} />
      </button>

      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0" style={{ background: "#f5f0e8", borderBottom: "2px solid #1a1209", zIndex: 200 }}>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href}>
              <div className="px-8 py-4 cursor-pointer" style={{ borderBottom: "1px solid rgba(26,18,9,0.1)", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: location === link.href ? "#c4522a" : "#1a1209" }} onClick={() => setMenuOpen(false)}>
                {link.label}
              </div>
            </Link>
          ))}
          <div className="px-8 py-3">
            <LangToggle mobile />
          </div>
          <Link href="/prenota">
            <div className="px-8 py-4 cursor-pointer" style={{ background: "#1a1209", fontFamily: "'Space Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "#f5f0e8" }} onClick={() => setMenuOpen(false)}>
              {d.nav.bookArrow}
            </div>
          </Link>
        </div>
      )}
    </nav>
  );
}
