import { Link } from "wouter";
import { StripeBar } from "@/components/StripeBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useDict } from "@/lib/i18n";
import { AVATAR_URL, VIDEO_URL } from "@/lib/config";

const V = "#3d7a6b", TC = "#c4522a", GI = "#e8a820", NE = "#1a1209", CR = "#f5f0e8", CS = "#ede5d4", GC = "#8a7d6b";
const MONO = "'Space Mono', monospace";
const SERIF = "'Playfair Display', serif";

function Soon({ text, cta }: { text: string; cta?: string }) {
  return (
    <div className="flex flex-col items-center justify-center text-center" style={{ minHeight: 360, padding: "2rem", background: CS, border: `2px dashed ${GC}` }}>
      <p style={{ fontSize: "1.25rem", fontStyle: "italic", color: GC, maxWidth: 420 }}>{text}</p>
      {cta && (
        <Link href="/contatti">
          <span className="cursor-pointer inline-block" style={{ marginTop: "1.5rem", fontFamily: MONO, fontSize: "0.7rem", letterSpacing: "0.14em", textTransform: "uppercase", borderBottom: `2px solid ${TC}`, color: NE }}>{cta}</span>
        </Link>
      )}
    </div>
  );
}

function Video({ src }: { src: string }) {
  const isDrive = src.includes("drive.google.com");
  return isDrive
    ? <iframe src={src} title="UltraRem" allow="autoplay; fullscreen" allowFullScreen style={{ width: "100%", aspectRatio: "16 / 9", border: `2px solid ${NE}` }} />
    : <video src={src} controls playsInline preload="metadata" style={{ width: "100%", aspectRatio: "16 / 9", background: NE, border: `2px solid ${NE}` }} />;
}

export default function Incontra() {
  const d = useDict().meet;

  return (
    <div style={{ background: CR, color: NE, fontFamily: "'Cormorant Garamond', serif", fontSize: 18, lineHeight: 1.7, overflowX: "hidden" }}>
      <StripeBar />
      <Navbar />

      <div style={{ background: NE, color: CR, padding: "7rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: GI, marginBottom: "2rem" }}>{d.eyebrow}</p>
        <h1 style={{ fontFamily: SERIF, fontSize: "clamp(3rem, 5vw, 5rem)", fontWeight: 900, lineHeight: 1.0, letterSpacing: "-2px", marginBottom: "2rem", maxWidth: 800 }}>
          {d.title1}<br /><em style={{ fontStyle: "italic", color: TC }}>{d.title2}</em>
        </h1>
        <p style={{ fontSize: "1.3rem", color: "rgba(245,240,232,0.65)", maxWidth: 640, fontStyle: "italic", lineHeight: 1.6 }}>{d.intro}</p>
      </div>

      <section style={{ padding: "5rem 4rem", borderBottom: `2px solid ${NE}` }}>
        <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: V, marginBottom: "1rem" }}>{d.avatarTag}</p>
        <h2 style={{ fontFamily: SERIF, fontSize: "2.6rem", fontWeight: 900, marginBottom: "1rem" }}>{d.avatarTitle}</h2>
        <p style={{ color: GC, fontStyle: "italic", maxWidth: 680, marginBottom: "2rem" }}>{d.avatarText}</p>
        {AVATAR_URL
          ? <iframe src={AVATAR_URL} title="Avatar UltraRem" allow="microphone; camera; autoplay" style={{ width: "100%", minHeight: 560, border: `2px solid ${NE}`, background: NE }} />
          : <Soon text={d.avatarSoon} cta={d.cta} />}
      </section>

      <section style={{ padding: "5rem 4rem", borderBottom: `2px solid ${NE}`, background: CS }}>
        <p style={{ fontFamily: MONO, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: V, marginBottom: "1rem" }}>{d.videoTag}</p>
        <h2 style={{ fontFamily: SERIF, fontSize: "2.6rem", fontWeight: 900, marginBottom: "1rem" }}>{d.videoTitle}</h2>
        <p style={{ color: GC, fontStyle: "italic", maxWidth: 680, marginBottom: "2rem" }}>{d.videoText}</p>
        {VIDEO_URL ? <Video src={VIDEO_URL} /> : <Soon text={d.videoSoon} />}
      </section>

      <Footer />
    </div>
  );
}
