import { Link } from "wouter";
import logoPath from "@assets/Logo_UltraRem-removebg-preview_1775473927277.png";
import { useDict } from "@/lib/i18n";

export function Footer() {
  const d = useDict();

  const navLinks = [
    { href: "/il-progetto", label: d.nav.project },
    { href: "/per-chi", label: d.nav.forWho },
    { href: "/come-funziona", label: d.nav.how },
    { href: "/ricerca", label: d.nav.research },
    { href: "/incontra", label: d.nav.meet },
  ];

  return (
    <footer style={{ background: "#1a1209", color: "#f5f0e8", borderTop: "2px solid #1a1209" }}>
      <div className="grid grid-cols-1 md:grid-cols-3" style={{ borderBottom: "1px solid rgba(245,240,232,0.1)" }}>
        <div className="p-12 md:border-r-2" style={{ borderColor: "rgba(245,240,232,0.1)" }}>
          <div className="overflow-hidden mb-4" style={{ height: 55 }}>
            <img src={logoPath} alt="UltraRem" style={{ height: 190, width: "auto" }} />
          </div>
          <div className="mb-4" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8a820" }}>
            Your Memory Is You
          </div>
          <p style={{ fontSize: "0.95rem", color: "rgba(245,240,232,0.6)", lineHeight: 1.7, maxWidth: 320 }}>
            {d.footer.tagline}
          </p>
        </div>
        <div className="p-12 md:border-r-2" style={{ borderColor: "rgba(245,240,232,0.1)" }}>
          <div className="mb-6" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8a820" }}>
            {d.footer.navigate}
          </div>
          <ul className="flex flex-col gap-3">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="cursor-pointer transition-colors" style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem", textDecoration: "none" }}
                    onMouseOver={e => (e.currentTarget.style.color = "#c4522a")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-12">
          <div className="mb-6" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8a820" }}>
            {d.footer.contact}
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/contatti", label: d.footer.getInTouch },
              { href: "/prenota", label: d.footer.bookDemo },
            ].map(link => (
              <li key={link.href}>
                <Link href={link.href}>
                  <span className="cursor-pointer transition-colors" style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem" }}
                    onMouseOver={e => (e.currentTarget.style.color = "#c4522a")}
                    onMouseOut={e => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}>
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
            <li>
              <a href="mailto:info@ultrarem.it" style={{ color: "rgba(245,240,232,0.7)", fontSize: "0.95rem", textDecoration: "none" }}
                onMouseOver={e => (e.currentTarget.style.color = "#c4522a")}
                onMouseOut={e => (e.currentTarget.style.color = "rgba(245,240,232,0.7)")}>
                info@ultrarem.it
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-2 px-12 py-5">
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>
          © 2026 UltraRem Srl — P.IVA 14404030968 — REA MI-2780427 — {d.footer.startup}
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>
          Viale Cassala 30, 20143 Milano · info@ultrarem.it · ultrarem.com
        </p>
      </div>
    </footer>
  );
}
