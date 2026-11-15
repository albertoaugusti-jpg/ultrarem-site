import type { CSSProperties, ReactNode } from "react";
import { Link } from "wouter";
import {
  Page,
  Photo,
  Sec,
  Wrap,
  CtaBand,
  personaSrc,
  kicker,
  btn,
  INK,
  GREY,
  PALE,
  BODONI,
  NARROW,
} from "@/components/Mag";
import { useHome, SLUGS } from "@/content/useHome";
import { useLang } from "@/lib/i18n";

const grid = (min: number, gap = 24): CSSProperties => ({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fit, minmax(min(${min}px, 100%), 1fr))`,
  gap,
});

const block: CSSProperties = {
  display: "block",
  color: "inherit",
  textDecoration: "none",
};

const RED = "#c8102e";

const GUIDES = [
  {
    name: "Steno",
    image: "guida-diario.png",
    pdf: "/Steno_e_la_Balena.pdf",
    title: "Steno e la Balena",
  },
  {
    name: "Nemo",
    image: "guida-marinai.png",
    pdf: "/Nemo_e_il_cuore_della_nave.pdf",
    title: "Nemo e il cuore della nave",
  },
  {
    name: "Haddock",
    image: "guida-capitani.png",
    pdf: "/Haddock_e_la_Tigre.pdf",
    title: "Haddock e la Tigre",
  },
];

function Zone({
  k,
  title,
  sub,
  text,
  a,
  b,
  bg,
  children,
}: {
  k: string;
  title: string;
  sub?: string;
  text?: string;
  a?: { href: string; label: string };
  b?: { href: string; label: string };
  bg?: string;
  children?: ReactNode;
}) {
  return (
    <Sec k={k} title={title} bg={bg}>
      {sub && (
        <p
          style={{
            margin: "0 0 12px",
            maxWidth: 760,
            fontStyle: "italic",
            fontSize: 21,
            lineHeight: 1.45,
          }}
        >
          {sub}
        </p>
      )}

      {text && (
        <p
          style={{
            margin: "0 0 20px",
            maxWidth: 720,
            fontSize: 17,
            lineHeight: 1.6,
          }}
        >
          {text}
        </p>
      )}

      {children}

      {(a || b) && (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            marginTop: 20,
          }}
        >
          {a && (
            <Link href={a.href}>
              <span style={btn(INK, "#fff")}>{a.label}</span>
            </Link>
          )}

          {b && (
            <Link href={b.href}>
              <span
                style={btn("transparent", INK, `2px solid ${INK}`)}
              >
                {b.label}
              </span>
            </Link>
          )}
        </div>
      )}
    </Sec>
  );
}

function Play() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
        width: 76,
        height: 76,
        borderRadius: "50%",
        background: RED,
        border: "3px solid #fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          marginLeft: 6,
          borderStyle: "solid",
          borderWidth: "13px 0 13px 22px",
          borderColor: "transparent transparent transparent #fff",
        }}
      />
    </div>
  );
}

function Tile({
  href,
  img,
  k,
  title,
  text,
  label,
  solid,
}: {
  href: string;
  img: string;
  k: string;
  title: string;
  text: string;
  label: string;
  solid?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <Link
        href={href}
        style={{ ...block, position: "relative" }}
      >
        <Photo name={img} ar="16 / 10" />
        <Play />
      </Link>

      <div style={kicker("#ff3b52")}>{k}</div>

      <h2
        style={{
          margin: 0,
          fontFamily: BODONI,
          fontWeight: 900,
          fontSize: "clamp(28px,3.6vw,42px)",
          lineHeight: 1.05,
          letterSpacing: -1,
        }}
      >
        {title}
      </h2>

      <p
        style={{
          margin: 0,
          fontSize: 17,
          lineHeight: 1.55,
          opacity: 0.9,
          flexGrow: 1,
        }}
      >
        {text}
      </p>

      <div>
        <Link href={href}>
          <span
            style={
              solid
                ? btn("#fff", INK)
                : btn("transparent", "#fff", "2px solid #fff")
            }
          >
            {label}
          </span>
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const { cover, ladder, who, ui } = useHome();
  const { lang } = useLang();
  const homeCopy = {
    it: { intro: "Tre modi di raccontarti, con i nomi della navigazione.", cta: "Raccogli i tuoi ricordi, racconta la tua storia e ritrovala attraverso le tue domande." },
    en: { intro: "Three ways to tell your story, inspired by navigation.", cta: "Gather your memories, tell your story and explore it through your questions." },
    fr: { intro: "Trois façons de raconter votre histoire, inspirées de la navigation.", cta: "Rassemblez vos souvenirs, racontez votre histoire et retrouvez-la à travers vos questions." },
    de: { intro: "Drei Wege, Ihre Geschichte zu erzählen, inspiriert von der Seefahrt.", cta: "Sammeln Sie Ihre Erinnerungen, erzählen Sie Ihre Geschichte und entdecken Sie sie durch Ihre Fragen wieder." },
  }[lang];

  const chain = {
    it: {
      k: "Raccontarsi è antico",
      t: "Da sempre una storia vive finché qualcuno la racconta.",
      f: [
        ["Il griot", "La memoria vive nella voce di chi la tramanda.", "Un giovane uomo sotto un albero, in un villaggio africano, al tramonto"],
        ["Gli amanuensi", "Il racconto diventa pagina e attraversa i secoli.", "Un monaco amanuense scrive con la penna d'oca in un chiostro"],
        ["Gutenberg", "La stampa moltiplica le parole e le porta a molti.", "Un tipografo solleva un foglio appena stampato accanto al torchio"],
        ["UltraRem", "La storia che hai raccontato si apre alle domande.", "Una donna parla con un avatar sul portatile, contrassegnato come intelligenza artificiale"],
      ],
      p: [
        "Di Kunta Kinte ci è arrivato il nome perché un griot lo ripeté per due secoli. Poi la pagina e la stampa hanno moltiplicato le parole, a costo di separarle dalla voce e dal volto di chi le aveva dette.",
        "Oggi l'intelligenza artificiale permette di rimettere insieme ciò che i secoli avevano diviso: un racconto che fai tu, da vivo, con le tue parole, la tua voce e il tuo volto, e a cui chi verrà potrà fare domande.",
      ],
    },
    en: {
      k: "Telling a life is ancient",
      t: "A story has always lived for as long as someone tells it.",
      f: [
        ["The griot", "Memory lives in the voice of those who hand it down.", "A young man under a tree in an African village at sunset"],
        ["The scribes", "The story becomes a page and crosses the centuries.", "A monk writing with a quill in a cloister"],
        ["Gutenberg", "Print multiplies words and carries them to many.", "A printer holding up a freshly printed sheet beside the press"],
        ["UltraRem", "The story you told opens up to questions.", "A woman talking with an avatar on a laptop, marked as artificial intelligence"],
      ],
      p: [
        "We know Kunta Kinte's name because a griot repeated it for two centuries. Then the page and the printing press multiplied words, at the cost of separating them from the voice and face of those who had spoken them.",
        "Today artificial intelligence can put back together what the centuries had divided: a story you tell yourself, while you are alive, in your own words, voice and face, and that those who come after can ask questions of.",
      ],
    },
    fr: {
      k: "Se raconter est ancien",
      t: "Une histoire vit depuis toujours tant que quelqu'un la raconte.",
      f: [
        ["Le griot", "La mémoire vit dans la voix de ceux qui la transmettent.", "Un jeune homme sous un arbre dans un village africain, au coucher du soleil"],
        ["Les copistes", "Le récit devient page et traverse les siècles.", "Un moine copiste écrit à la plume dans un cloître"],
        ["Gutenberg", "L'imprimerie multiplie les mots et les porte au plus grand nombre.", "Un imprimeur lève une feuille tout juste imprimée près de la presse"],
        ["UltraRem", "L'histoire que vous avez racontée s'ouvre aux questions.", "Une femme parle avec un avatar sur un ordinateur portable, signalé comme intelligence artificielle"],
      ],
      p: [
        "Le nom de Kunta Kinte nous est parvenu parce qu'un griot l'a répété pendant deux siècles. Puis la page et l'imprimerie ont multiplié les mots, au prix de les séparer de la voix et du visage de ceux qui les avaient prononcés.",
        "Aujourd'hui, l'intelligence artificielle permet de réunir ce que les siècles avaient séparé : un récit que vous faites vous-même, de votre vivant, avec vos mots, votre voix et votre visage, et auquel ceux qui viendront pourront poser des questions.",
      ],
    },
    de: {
      k: "Erzählen ist uralt",
      t: "Eine Geschichte lebt seit jeher, solange jemand sie erzählt.",
      f: [
        ["Der Griot", "Erinnerung lebt in der Stimme derer, die sie weitergeben.", "Ein junger Mann unter einem Baum in einem afrikanischen Dorf bei Sonnenuntergang"],
        ["Die Kopisten", "Die Erzählung wird zur Seite und überdauert die Jahrhunderte.", "Ein Mönch schreibt mit der Feder in einem Kreuzgang"],
        ["Gutenberg", "Der Buchdruck vervielfältigt die Worte und trägt sie zu vielen.", "Ein Drucker hält einen frisch gedruckten Bogen neben der Presse hoch"],
        ["UltraRem", "Die Geschichte, die Sie erzählt haben, öffnet sich für Fragen.", "Eine Frau spricht mit einem Avatar auf dem Laptop, gekennzeichnet als künstliche Intelligenz"],
      ],
      p: [
        "Der Name Kunta Kintes ist uns überliefert, weil ein Griot ihn zwei Jahrhunderte lang wiederholte. Dann haben Seite und Buchdruck die Worte vervielfältigt, um den Preis, sie von Stimme und Gesicht derer zu trennen, die sie gesprochen hatten.",
        "Heute erlaubt es die künstliche Intelligenz, wieder zusammenzufügen, was die Jahrhunderte getrennt hatten: eine Erzählung, die Sie selbst zu Lebzeiten gestalten, mit Ihren Worten, Ihrer Stimme und Ihrem Gesicht, und der künftige Menschen Fragen stellen können.",
      ],
    },
  }[lang];
  const chainImg = ["premessa-griot", "premessa-amanuensi", "premessa-gutenberg", "premessa-ultrarem"];

  return (
    <Page>
      <section
        style={{
          borderBottom: `3px solid ${INK}`,
          padding: "clamp(32px,5vw,56px) 0",
        }}
      >
        <Wrap>
          <div
            style={{
              ...grid(420, 40),
              alignItems: "start",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div style={kicker()}>{cover.kicker}</div>

              <h1
                style={{
                  margin: 0,
                  fontFamily: BODONI,
                  fontWeight: 900,
                  fontSize: "clamp(40px,5.6vw,72px)",
                  lineHeight: 1,
                  letterSpacing: -2,
                }}
              >
                {cover.title}
                <span
                  style={{
                    color: "#c4522a",
                    fontStyle: "italic",
                    fontWeight: 500,
                  }}
                >
                  {cover.titleAccent}
                </span>
              </h1>

              <p
                style={{
                  margin: 0,
                  fontStyle: "italic",
                  fontSize: 22,
                }}
              >
                {cover.lead}
              </p>

              <p
                style={{
                  margin: 0,
                  fontFamily: NARROW,
                  fontWeight: 700,
                  fontSize: 17,
                  letterSpacing: "0.04em",
                  borderLeft: `4px solid ${RED}`,
                  paddingLeft: 14,
                }}
              >
                {cover.what}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 12,
                  marginTop: 4,
                }}
              >
                <Link href="/il-progetto">
                  <span style={btn(INK, "#fff")}>
                    {ui.ctaProject}
                  </span>
                </Link>

                <Link href="/il-progetto#avatar">
                  <span
                    style={btn(
                      "transparent",
                      INK,
                      `2px solid ${INK}`
                    )}
                  >
                    {ui.talk}
                  </span>
                </Link>
              </div>
            </div>

            <figure
              style={{
                margin: 0,
                maxWidth: 440,
                width: "100%",
                justifySelf: "center",
              }}
            >
              <Photo
                name="cover"
                ar="1035 / 1312"
                pos="center top"
              />

              <figcaption
                style={{
                  marginTop: 8,
                  fontFamily: NARROW,
                  fontSize: 12,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: GREY,
                }}
              >
                {ui.caption}
              </figcaption>
            </figure>
          </div>
        </Wrap>
      </section>

      <Sec k={chain.k} title={chain.t}>
        <div style={grid(250, 20)}>
          {chain.f.map(([name, text, alt], i) => (
            <figure key={name} style={{ margin: 0, display: "flex", flexDirection: "column", gap: 12, minWidth: 0 }}>
              <Photo name={chainImg[i]} ar="16 / 10" alt={alt} />
              <figcaption>
                <div style={kicker(i === 3 ? RED : INK)}>{name}</div>
                <div style={{ fontSize: 17, lineHeight: 1.5, color: GREY }}>{text}</div>
              </figcaption>
            </figure>
          ))}
        </div>
        <div style={{ maxWidth: 700, marginTop: 36, display: "flex", flexDirection: "column", gap: 14, fontSize: 19, lineHeight: 1.65 }}>
          {chain.p.map((x) => (
            <p key={x} style={{ margin: 0 }}>{x}</p>
          ))}
        </div>
      </Sec>

      <section
        style={{
          background: INK,
          color: "#fff",
          padding: "clamp(32px,5vw,56px) 0",
        }}
      >
        <Wrap>
          <div
            style={{
              ...grid(340, 40),
              alignItems: "stretch",
            }}
          >
            <Tile
              href="/il-progetto#avatar"
              img="riempitivo2"
              k={ui.talk}
              title={ui.avatarTitle}
              text={ui.avatarText}
              label={ui.talk}
              solid
            />

            <Tile
              href="/il-progetto#video"
              img="cultura"
              k={ui.video}
              title={ui.videoTitle}
              text={ui.videoText}
              label={ui.video}
            />
          </div>
        </Wrap>
      </section>

      <Sec k={ladder.kicker} title={ui.ladderTitle}>
        <p
          style={{
            margin: "0 0 24px",
            maxWidth: 780,
            fontSize: 17,
            lineHeight: 1.6,
          }}
        >
          {homeCopy.intro}
        </p>

        <div style={grid(280, 20)}>
          {ladder.steps.map((s, i) => {
            const guide = GUIDES[i];
            const href = `/percorsi/${SLUGS[i]}`;
            const isLight = s.tone === "light";
            const foreground = isLight ? INK : "#fff";

            return (
              <article
                key={s.name}
                style={{
                  border: `2px solid ${
                    s.tone === "red" ? RED : INK
                  }`,
                  background:
                    s.tone === "red"
                      ? RED
                      : s.tone === "dark"
                        ? INK
                        : "#fff",
                  color: foreground,
                  padding: 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                }}
              >
                <Link
                  href={href}
                  style={block}
                  aria-label={`Scopri ${s.name}`}
                >
                  <Photo name={s.img} ar="3 / 2" />
                </Link>

                <div style={kicker(isLight ? GREY : "#fff")}>
                  {s.tag}
                </div>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    alignItems: "center",
                    gap: 16,
                  }}
                >
                  <div
                    style={{
                      flex: "1 1 160px",
                      minWidth: 0,
                    }}
                  >
                    <Link href={href} style={block}>
                      <h2
                        style={{
                          margin: 0,
                          fontFamily: BODONI,
                          fontWeight: 900,
                          fontSize: 28,
                          lineHeight: 1.1,
                          minHeight: 62,
                        }}
                      >
                        {s.name}
                      </h2>
                    </Link>


                  </div>

                  {guide && (
                    <figure
                      style={{
                        margin: 0,
                        marginLeft: "auto",
                        flex: "0 0 120px",
                        width: 120,
                        textAlign: "center",
                      }}
                    >
                      <a
                        href={guide.pdf}
                        download
                        aria-label={`Scarica ${guide.title}, PDF`}
                        style={{
                          ...block,
                          borderRadius: 8,
                        }}
                      >
                        <img
                          src={`/img/rivista/${guide.image}`}
                          alt={`Ritratto di ${guide.name}`}
                          width={110}
                          height={110}
                          loading="lazy"
                          style={{
                            display: "block",
                            width: 110,
                            height: 110,
                            margin: "0 auto",
                            objectFit: "contain",
                          }}
                        />

                        <figcaption
                          style={{
                            marginTop: 8,
                            fontFamily: NARROW,
                            fontWeight: 700,
                            fontSize: 18,
                            letterSpacing: "0.08em",
                            color: isLight ? RED : "#fff",
                          }}
                        >
                          {guide.name}
                        </figcaption>

                        <span
                          style={{
                            display: "inline-block",
                            marginTop: 9,
                            padding: "7px 8px",
                            border: `1px solid ${foreground}`,
                            borderRadius: 3,
                            fontFamily: NARROW,
                            fontWeight: 700,
                            fontSize: 13,
                            lineHeight: 1.3,
                            letterSpacing: "0.01em",
                          }}
                        >
                          Leggi la mia storia ↓
                        </span>
                      </a>
                    </figure>
                  )}
                </div>

                <p
                  style={{
                    margin: 0,
                    fontSize: 15.5,
                    lineHeight: 1.55,
                    flexGrow: 1,
                  }}
                >
                  {s.lead}
                </p>

                <Link
                  href={href}
                  style={{
                    ...block,
                    alignSelf: "flex-start",
                    marginTop: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: NARROW,
                      fontWeight: 700,
                      fontSize: 13,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      textDecoration: "underline",
                      textUnderlineOffset: 4,
                    }}
                  >
                    {ui.learn} →
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        <div style={{ marginTop: 24 }}>
          <Link href="/come-funziona">
            <span style={btn(INK, "#fff")}>
              {ui.ladderBtn}
            </span>
          </Link>
        </div>
      </Sec>

      <Zone
        k={who.kicker}
        title={who.title}
        sub={ui.whoText}
        a={{ href: "/fondatori", label: ui.whoBtn }}
        b={{ href: "/ricerca", label: ui.ricBtn }}
        bg={PALE}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
            alignItems: "center",
          }}
        >
          {[...who.founders, ...who.science]
            .filter((f) => !f.name.includes("Ines"))
            .map((f) => (
              <div
                key={f.name}
                title={f.name}
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                  background: "#fff",
                }}
              >
                <img
                  src={personaSrc(f.ini)}
                  alt={f.name}
                  style={{
                    position: "absolute",
                    width: 72,
                    height: 72,
                    left: 0,
                    top: 0,
                    maxWidth: "none",
                  }}
                />
              </div>
            ))}
        </div>
      </Zone>

      <CtaBand
        title={ui.ctaTitle}
        text={homeCopy.cta}
        a={{
          href: "/percorsi/diario-di-bordo",
          label: ui.ctaA,
        }}
        b={{
          href: "/contatti",
          label: ui.ctaB,
        }}
      />
    </Page>
  );
}
