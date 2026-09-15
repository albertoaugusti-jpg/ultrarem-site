import { Link } from "wouter";
import logoPath from "@assets/Logo_UltraRem-removebg-preview_1775473927277.png";
import { useLang } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLang();

  const navLinks = lang === "en"
    ? [
        { href: "/il-progetto", label: "The Project" },
        { href: "/per-chi", label: "Who It's For" },
        { href: "/come-funziona", label: "How It Works" },
        { href: "/ricerca", label: "Research" },
        { href: "/demo", label: "Demo" },
      ]
    : [
        { href: "/il-progetto", label: "Il Progetto" },
        { href: "/per-chi", label: "Per Chi" },
        { href: "/come-funziona", label: "Come Funziona" },
        { href: "/ricerca", label: "Ricerca" },
        { href: "/demo", label: "Demo" },
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
            {lang === "en"
              ? "We preserve who you are, for those you love, for as long as time allows."
              : "Preserviamo ciò che sei, per chi ami, finché esiste il tempo."}
          </p>
        </div>
        <div className="p-12 md:border-r-2" style={{ borderColor: "rgba(245,240,232,0.1)" }}>
          <div className="mb-6" style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8a820" }}>
            {lang === "en" ? "Navigate" : "Naviga"}
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
            {lang === "en" ? "Contact" : "Contatti"}
          </div>
          <ul className="flex flex-col gap-3">
            {[
              { href: "/contatti", label: lang === "en" ? "Get in touch" : "Contattaci" },
              { href: "/prenota", label: lang === "en" ? "Book a Demo" : "Prenota una Demo" },
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
          © 2026 UltraRem Srl — P.IVA 14404030968 — REA MI-2780427 — {lang === "en" ? "Innovative Start-Up" : "Start-Up Innovativa"}
        </p>
        <p style={{ fontFamily: "'Space Mono', monospace", fontSize: "0.55rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,240,232,0.3)" }}>
          Viale Cassala 30, 20143 Milano · info@ultrarem.it · ultrarem.com
        </p>
      </div>
    </footer>
  );
}
