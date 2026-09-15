import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useLang } from "@/lib/i18n";

import logoPath from "@assets/Logo_UltraRem-removebg-preview_1775473927277.png";
import heroImg from "@assets/Eleganza_milanese_al_tramonto_1775476267981.png";
import manifestoImgHands from "@assets/Festa_di_compleanno_di_Antonio_1775587556936.png";
import manifestoImgUomo from "@assets/Uomo_elegante_tra_luci_e_ombreggiature_1775476267982.png";
import caterinaImg from "@assets/Album_fotografico_vintage_su_legno_rustico_1775474333993.png";

import statuaCaterinaImg from "@assets/Statua_di_donna_anziana_in_cimitero_1775510016767.png";
import padovaImg from "@assets/Aula_Magna_Universita_di_Padova_1775509591808.png";
  import cambridgeImg from "@assets/King's_College_al_tramonto_1775509591809.png";

export default function Home() {
  const { lang } = useLang();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const StripeBar = ({ reverse = false }) => {
    const colors = ["#3d7a6b", "#8b2e2e", "#c4522a", "#e8a820"];
    const displayColors = reverse ? [...colors].reverse() : colors;
    return (
      <div className="flex h-[5px] w-full" data-testid={`stripe-bar${reverse ? '-reverse' : ''}`}>
        {displayColors.map((c, i) => (
          <div key={i} className="flex-1" style={{ backgroundColor: c }} />
        ))}
      </div>
    );
  };

  const stats = lang === "en"
    ? [
        { num: "30h", label: "of structured psychological sessions" },
        { num: "2", label: "university partners — Cambridge and Padova" },
        { num: "1M+", label: "Italians with Alzheimer's — time is now" },
        { num: "∞", label: "stories that deserve to be told" },
      ]
    : [
        { num: "30h", label: "di sessioni psicologiche strutturate" },
        { num: "2", label: "università partner — Cambridge e Padova" },
        { num: "1M+", label: "italiani con Alzheimer — il tempo è adesso" },
        { num: "∞", label: "storie che meritano di essere raccontate" },
      ];

  const perChiItems = lang === "en"
    ? [
        "Those diagnosed with Alzheimer's or dementia",
        "The parent who wants to be there forever",
        "Those who never had a voice",
        "The founder who wants to pass on their vision",
        "The professional who wants to protect their identity",
        "Anyone who simply wants to tell their story",
      ]
    : [
        "Chi ha una diagnosi di Alzheimer o demenza",
        "Il genitore che vuole esserci per sempre",
        "Chi non ha mai avuto una voce",
        "Il fondatore che vuole trasmettere la visione",
        "Il professionista che vuole proteggere la propria identità",
        "Chi semplicemente vuole raccontarsi",
      ];

  const steps = lang === "en"
    ? [
        { phase: "01", title: "Sessions with the psychologist", desc: "Dedicated meetings to surface your deepest memories and build the structure of your story." },
        { phase: "02", title: "Building the corpus", desc: "Recording of texts, collection of diaries, letters and documents that define your identity." },
        { phase: "03", title: "Voice and likeness", desc: "Creation of your digital twin through cutting-edge technologies to capture timbre and expressions." },
        { phase: "04", title: "Preservation over time", desc: "Secure, decentralised archiving to ensure your legacy is accessible only to those you choose." },
      ]
    : [
        { phase: "01", title: "Le sessioni con lo psicologo", desc: "Incontri dedicati per far emergere i ricordi più profondi e costruire la struttura del tuo racconto." },
        { phase: "02", title: "La costruzione del corpus", desc: "Registrazione dei testi, raccolta di diari, lettere e documenti che definiscono la tua identità." },
        { phase: "03", title: "La voce e il volto", desc: "Creazione del tuo gemello digitale attraverso tecnologie all'avanguardia per catturare timbro ed espressioni." },
        { phase: "04", title: "La custodia nel tempo", desc: "Archiviazione sicura e decentralizzata per garantire che il tuo lascito sia accessibile solo a chi decidi tu." },
      ];

  const stepIcons = [
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="36" height="22" fill="#c4522a" stroke="#1a1209" strokeWidth="2.5"/>
      <polygon points="8,26 8,34 18,26" fill="#c4522a" stroke="#1a1209" strokeWidth="2"/>
      <line x1="8" y1="12" x2="30" y2="12" stroke="#f5f0e8" strokeWidth="2"/>
      <line x1="8" y1="18" x2="24" y2="18" stroke="#f5f0e8" strokeWidth="2"/>
      <rect x="18" y="30" width="36" height="20" fill="#3d7a6b" stroke="#1a1209" strokeWidth="2.5"/>
      <polygon points="48,50 48,56 40,50" fill="#3d7a6b" stroke="#1a1209" strokeWidth="2"/>
      <line x1="24" y1="38" x2="46" y2="38" stroke="#e8a820" strokeWidth="2"/>
      <line x1="24" y1="44" x2="38" y2="44" stroke="#e8a820" strokeWidth="2"/>
    </svg>,
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="8" y="14" width="34" height="6" fill="#e8a820" stroke="#1a1209" strokeWidth="2"/>
      <rect x="8" y="24" width="34" height="6" fill="#f5f0e8" stroke="#1a1209" strokeWidth="2"/>
      <rect x="8" y="34" width="34" height="6" fill="#c4522a" stroke="#1a1209" strokeWidth="2"/>
      <line x1="14" y1="17" x2="36" y2="17" stroke="#1a1209" strokeWidth="1.5"/>
      <line x1="14" y1="27" x2="36" y2="27" stroke="#1a1209" strokeWidth="1.5"/>
      <line x1="14" y1="37" x2="36" y2="37" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="4" y="10" width="48" height="36" stroke="#1a1209" strokeWidth="3"/>
    </svg>,
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="4" width="16" height="28" rx="0" fill="#3d7a6b" stroke="#1a1209" strokeWidth="3"/>
      <path d="M10 28 Q10 44 28 44 Q46 44 46 28" stroke="#1a1209" strokeWidth="3" fill="none"/>
      <line x1="28" y1="44" x2="28" y2="52" stroke="#1a1209" strokeWidth="3"/>
      <line x1="18" y1="52" x2="38" y2="52" stroke="#1a1209" strokeWidth="3"/>
      <line x1="24" y1="14" x2="32" y2="14" stroke="#e8a820" strokeWidth="2.5"/>
      <line x1="24" y1="20" x2="32" y2="20" stroke="#e8a820" strokeWidth="2.5"/>
    </svg>,
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="18" width="52" height="34" fill="#f5f0e8" stroke="#1a1209" strokeWidth="3"/>
      <path d="M18 18 L18 10 L38 10 L38 18" fill="none" stroke="#1a1209" strokeWidth="3"/>
      <rect x="2" y="31" width="52" height="8" fill="#e8a820" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="22" y="27" width="12" height="16" fill="#3d7a6b" stroke="#1a1209" strokeWidth="2"/>
      <rect x="25" y="33" width="6" height="4" fill="#f5f0e8" stroke="#1a1209" strokeWidth="1.5"/>
      <rect x="2" y="18" width="7" height="7" fill="#c4522a"/>
      <rect x="47" y="18" width="7" height="7" fill="#c4522a"/>
      <rect x="2" y="45" width="7" height="7" fill="#c4522a"/>
      <rect x="47" y="45" width="7" height="7" fill="#c4522a"/>
    </svg>,
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <StripeBar />
      <Navbar />

      {/* Logo Banner */}
      <div
        className="w-full flex justify-center items-center border-b-2 border-foreground bg-background overflow-hidden"
        style={{ height: 90 }}
        data-testid="logo-banner"
      >
        <Link href="/">
          <motion.img
            src={logoPath}
            alt="UltraRem Logo"
            className="cursor-pointer"
            style={{ height: 320, width: "auto", display: "block", marginTop: 0 }}
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ scale: 1.06, transition: { duration: 0.35, ease: "easeOut" } }}
            whileTap={{ scale: 0.97 }}
            data-testid="img-logo"
          />
        </Link>
      </div>

      {/* Hero Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh] border-b-2 border-foreground" data-testid="section-hero">
        <motion.div
          className="p-8 md:p-16 xl:p-24 flex flex-col justify-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeInUp} className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-8">
            Milano - Genova - Cambridge - Padova
          </motion.div>
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl lg:text-8xl font-black leading-[0.9] tracking-tight mb-6">
            {lang === "en"
              ? <>Who I was, who I am <span className="text-[#c4522a] italic font-medium">and who I'll be.</span></>
              : <>Chi ero, chi sono <span className="text-[#c4522a] italic font-medium">e chi sarò.</span></>}
          </motion.h1>
          <motion.p variants={fadeInUp} className="font-sans text-xl md:text-2xl text-muted-foreground italic mb-10 max-w-lg">
            {lang === "en"
              ? "Preserve your digital identity. An act of will for those who remain."
              : "Preserva la tua identità digitale. Un atto di volontà per chi resta."}
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
            <Link href="/prenota">
              <Button size="lg" className="rounded-none font-mono uppercase bg-foreground text-background hover:bg-primary transition-colors border-2 border-foreground" data-testid="button-hero-cta1">
                {lang === "en" ? "Build your legacy" : "Costruisci la tua eredità"}
              </Button>
            </Link>
            <Link href="/il-progetto">
              <Button size="lg" variant="outline" className="rounded-none font-mono uppercase border-2 border-foreground hover:bg-foreground hover:text-background transition-colors" data-testid="button-hero-cta2">
                {lang === "en" ? "Learn more" : "Scopri di più"}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
        <div className="relative min-h-[40vh] md:min-h-full border-l-2 border-foreground overflow-hidden">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src={heroImg} alt="Eleganza milanese al tramonto" className="absolute inset-0 w-full h-full object-cover object-top" data-testid="img-hero" />
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section
        className="grid grid-cols-2 md:grid-cols-4 border-b-2 border-foreground divide-x-2 divide-foreground border-t-0"
        data-testid="section-stats"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={staggerContainer}
      >
        {stats.map((stat, i) => (
          <motion.div variants={fadeInUp} key={i} className="p-8 text-center bg-background hover:bg-muted/50 transition-colors border-b-2 md:border-b-0 border-foreground last:border-b-0">
            <div className="font-serif text-4xl md:text-6xl text-[#c4522a] mb-2">{stat.num}</div>
            <div className="font-mono text-xs uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </motion.section>

      {/* Manifesto */}
      <section id="progetto" className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-foreground min-h-[600px]" data-testid="section-manifesto">
        <motion.div
          className="bg-[#1a1209] text-white p-8 md:p-12 flex flex-col justify-between border-r-2 border-foreground/30 relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="font-mono text-xs uppercase tracking-widest text-[#e8a820] mb-6">
            {lang === "en" ? "Our manifesto" : "Il nostro manifesto"}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl xl:text-5xl font-black leading-tight">
            {lang === "en"
              ? <>Made by <span className="text-[#c4522a] italic">the living,</span><br />for <span className="text-[#e8a820] italic">the living.</span></>
              : <>Fatto da <span className="text-[#c4522a] italic">vivi,</span><br />per i <span className="text-[#e8a820] italic">vivi.</span></>}
          </motion.h2>
          <motion.div variants={fadeInUp} className="mt-8 flex justify-center items-end flex-1">
            <img
              src={manifestoImgHands}
              alt="Antonio 7 anni 1989 — festa di compleanno in famiglia"
              style={{ width: "85%", maxWidth: 320, display: "block", transform: "rotate(-3deg)", filter: "drop-shadow(4px 6px 18px rgba(0,0,0,0.55))" }}
              data-testid="img-manifesto-hands"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="relative overflow-hidden min-h-[400px] md:min-h-full border-r-2 border-foreground/30"
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, ease: "easeOut" }}
        >
          <img src={manifestoImgUomo} alt="Uomo elegante italiano" className="absolute inset-0 w-full h-full object-cover object-top" data-testid="img-manifesto-uomo" />
        </motion.div>

        <motion.div
          className="p-8 md:p-12 flex flex-col justify-center bg-background"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="space-y-6 font-sans text-base md:text-lg text-foreground/80 leading-relaxed">
            {lang === "en" ? (
              <>
                <p>UltraRem was born from a deeply human need: the right to tell your own story, in your own words, with your own voice, while you still can.</p>
                <p><strong className="text-[#c4522a]">It is an act of will, not surrender.</strong> You do it while you can speak, while you can choose, while you can decide what is worth passing on — and to whom.</p>
                <p>With the supervision of qualified clinical psychologists and the validation of Cambridge and Padova, we build together an authentic identity corpus: your words, your way of thinking, your values. <strong className="text-[#c4522a]">A presence that continues to be useful over time.</strong></p>
              </>
            ) : (
              <>
                <p>UltraRem nasce da un'esigenza profondamente umana: il diritto di raccontarsi, con le proprie parole, con la propria voce, mentre si può ancora farlo.</p>
                <p><strong className="text-[#c4522a]">È un atto di volontà, non di resa.</strong> Lo fai mentre puoi parlare, mentre puoi scegliere, mentre puoi decidere cosa di te vale la pena trasmettere — e a chi.</p>
                <p>Con la supervisione di psicologi clinici qualificati e la validazione di Cambridge e Padova, costruiamo insieme a te un corpus identitario autentico: le tue parole, il tuo modo di pensare, i tuoi valori. <strong className="text-[#c4522a]">Una presenza che continua a essere utile nel tempo.</strong></p>
              </>
            )}
          </motion.div>
        </motion.div>
      </section>

      {/* Per Chi */}
      <section id="per-chi" className="py-24 px-6 md:px-12 bg-background border-b-2 border-foreground" data-testid="section-per-chi">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-black mb-16 text-center">
            {lang === "en" ? "Who UltraRem is for" : "Per chi è UltraRem"}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-0 border-2 border-foreground bg-foreground">
            {perChiItems.map((text, i) => (
              <motion.div variants={fadeInUp} key={i} className="group bg-background p-10 border-[1px] border-foreground hover:bg-[#3d7a6b] hover:text-white transition-all duration-300 flex flex-col justify-between min-h-[200px] cursor-pointer">
                <div className="font-mono text-sm mb-4 opacity-50 group-hover:opacity-80 group-hover:text-white">0{i + 1}</div>
                <div className="font-serif text-2xl font-bold leading-tight">{text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Come Funziona */}
      <section id="come-funziona" className="py-24 px-6 md:px-12 bg-[#ede5d4] border-b-2 border-foreground" data-testid="section-come-funziona">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="font-mono text-xs uppercase tracking-widest text-center mb-4 text-[#8b2e2e]">
            {lang === "en" ? "The Process" : "Il Processo"}
          </motion.div>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-black mb-16 text-center">
            {lang === "en" ? "How it works" : "Come funziona"}
          </motion.h2>

          <div className="space-y-0 border-2 border-foreground divide-y-2 divide-foreground bg-background">
            {steps.map((step, i) => (
              <motion.div variants={fadeInUp} key={i} className="p-8 md:p-12 flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center hover:bg-muted/30 transition-colors">
                <div className="flex items-center gap-5 shrink-0">
                  <div className="font-mono text-3xl md:text-5xl text-[#e8a820] font-bold leading-none">
                    {lang === "en" ? `Phase ${step.phase}` : `Fase ${step.phase}`}
                  </div>
                  <div className="shrink-0">{stepIcons[i]}</div>
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="font-sans text-lg text-muted-foreground">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Partner Accademici */}
      <section id="ricerca" className="bg-background border-b-2 border-foreground" data-testid="section-partner">
        <div className="text-center py-12 border-b-2 border-foreground">
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {lang === "en" ? "Academic Partners & Research" : "Partner accademici & Ricerca"}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y-2 md:divide-y-0 md:divide-x-2 divide-foreground">
          <motion.div className="flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
            <div className="relative overflow-hidden border-b-2 border-foreground" style={{ height: 340 }}>
              <motion.img src={cambridgeImg} alt="King's College Cambridge al tramonto" className="absolute inset-0 w-full h-full object-cover object-center" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} data-testid="img-cambridge" />
            </div>
            <motion.div variants={fadeInUp} className="p-8 md:p-12">
              <div className="font-mono text-xs uppercase tracking-widest text-[#3d7a6b] mb-3">Cambridge, UK</div>
              <h3 className="font-serif text-3xl font-black mb-4">University of Cambridge</h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">Dr. Tomasz Hollanek<br />Dr. Katarzyna Nowaczyk-Basinska</p>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={staggerContainer}>
            <div className="relative overflow-hidden border-b-2 border-foreground" style={{ height: 340 }}>
              <motion.img src={padovaImg} alt="Aula Magna dell'Università di Padova" className="absolute inset-0 w-full h-full object-cover object-center" initial={{ scale: 1.06 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: "easeOut" }} data-testid="img-padova" />
            </div>
            <motion.div variants={fadeInUp} className="p-8 md:p-12">
              <div className="font-mono text-xs uppercase tracking-widest text-[#8b2e2e] mb-3">
                {lang === "en" ? "Padova, Italy" : "Padova, Italia"}
              </div>
              <h3 className="font-serif text-3xl font-black mb-4">
                {lang === "en" ? "University of Padova" : "Università degli Studi di Padova"}
              </h3>
              <p className="font-mono text-sm text-muted-foreground leading-relaxed">Prof.ssa Ines Testoni</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Storia di Caterina */}
      <section className="grid grid-cols-1 lg:grid-cols-2 border-b-2 border-foreground" data-testid="section-caterina">
        <div className="relative overflow-hidden border-b-2 lg:border-b-0 lg:border-r-2 border-foreground/30">
          <img src={statuaCaterinaImg} alt="Statua di Caterina Campodonico a Staglieno" className="absolute inset-0 w-full h-full object-cover object-center" style={{ opacity: 0.55 }} data-testid="img-statua-caterina" />
          <div className="absolute inset-0 bg-[#1a1209]" style={{ opacity: 0.45 }} />
          <motion.div
            className="relative z-10 p-8 md:p-16 xl:p-24 flex flex-col justify-center text-[#f5f0e8] min-h-[500px]"
            initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="font-mono text-xs uppercase tracking-widest text-[#e8a820] mb-6">
              {lang === "en" ? "Genoa, 1892" : "Genova, 1892"}
            </motion.div>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl font-black mb-8 text-[#f5f0e8]">
              {lang === "en" ? "The memory of Caterina" : "La memoria di Caterina"}
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-sans text-lg md:text-xl mb-8 text-[#c9bfaf]">
              {lang === "en"
                ? "Caterina Campodonico, the peanut seller of Genoa, spent her life savings to commission a statue of herself in the Staglieno cemetery, so as not to be forgotten. Today, technology allows us to do this in a living way."
                : "Caterina Campodonico, la venditrice di noccioline di Genova, spese i risparmi di una vita per commissionare una statua di sé stessa al cimitero di Staglieno, per non essere dimenticata. Oggi, la tecnologia ci permette di farlo in modo vivo."}
            </motion.p>
            <motion.blockquote variants={fadeInUp} className="border-l-4 border-[#e8a820] pl-6 py-2 italic font-serif text-2xl text-[#e8a820]">
              "A furia di vender collane e ciambelle, mi sono fatta questa statua per l'eternità."
            </motion.blockquote>
          </motion.div>
        </div>
        <div className="p-8 md:p-16 bg-[#2a1f14] flex flex-col gap-8 justify-center items-center">
          <div className="relative w-full max-w-sm aspect-[9/16] border-4 border-[#e8a820] p-2 bg-[#1a1209]">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/tQ7UJ96ipXE"
              title="Caterina Campodonico Story"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <img src={caterinaImg} alt="Album vintage" className="w-full max-w-xs border-2 border-foreground/30 opacity-70" data-testid="img-caterina" />
        </div>
      </section>

      {/* CTA Finale */}
      <section className="py-32 px-6 bg-[#3d7a6b] text-white text-center border-b-2 border-foreground" data-testid="section-cta">
        <motion.div
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-black mb-12 leading-tight">
            {lang === "en"
              ? "Your story deserves to outlive you."
              : "La tua storia merita di sopravviverti."}
          </motion.h2>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="rounded-none font-mono uppercase bg-white text-[#3d7a6b] hover:bg-[#ede5d4] border-2 border-transparent text-lg h-16 px-10" asChild data-testid="button-final-scrivici">
              <Link href="/prenota">{lang === "en" ? "Book now" : "Prenota ora"}</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-none font-mono uppercase border-2 border-white text-white hover:bg-white hover:text-[#3d7a6b] text-lg h-16 px-10" asChild data-testid="button-final-funziona">
              <Link href="/come-funziona">{lang === "en" ? "How it works" : "Come funziona"}</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}
