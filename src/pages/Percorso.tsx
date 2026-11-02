import { Link, useRoute } from "wouter";
import { Page, Hero, Sec, Cols, Photo, CtaBand, btn, RED, INK, GREY, PALE } from "@/components/Mag";
import { useHome, SLUGS } from "@/content/useHome";
import { useLang } from "@/lib/i18n";
import { percorso } from "@/content/percorso";

export default function Percorso() {
  const [, params] = useRoute("/percorsi/:slug");
  const { ladder } = useHome();
  const { lang } = useLang();
  const t = percorso[lang] ?? percorso.it;
  const i = SLUGS.indexOf(params?.slug ?? "");
  if (i < 0) {
    return <Page><Hero k="UltraRem" title={t.notFound} lead="" /><Sec k="" title=""><Link href="/percorsi"><span style={btn(RED, "#fff")}>{t.all}</span></Link></Sec></Page>;
  }
  const s = ladder.steps[i];
  const next = ladder.steps[i + 1];
  const certified = i > 0;
  return (
    <Page>
      <Hero k={s.tag} title={s.name} lead={s.lead} />

      <Sec k={t.includes} title={s.price}>
        <Cols gap={40}>
          <div style={{ flex: "1 1 320px" }}>
            <div style={{ fontSize: 15, color: GREY, marginBottom: 12 }}>{s.sub}</div>
            <ul style={{ margin: 0, paddingLeft: 20, fontSize: 17, lineHeight: 1.6 }}>{s.items.map(x => <li key={x}>{x}</li>)}</ul>
            <p style={{ margin: "16px 0 0", fontSize: 15, fontStyle: "italic" }}>{s.note}</p>
          </div>
          <div style={{ flex: "1 1 320px", maxWidth: 520 }}><Photo name={s.img} ar="16 / 10" /></div>
        </Cols>
      </Sec>

      {certified && (
        <Sec k={t.feeK} title="" bg={PALE}>
          <p style={{ margin: 0, maxWidth: 820, fontSize: 16, lineHeight: 1.6 }}>{ladder.fee}</p>
        </Sec>
      )}

      {next && (
        <Sec k={t.next} title={next.name}>
          <p style={{ margin: "0 0 18px", maxWidth: 720, fontSize: 17, lineHeight: 1.6 }}>{next.lead}</p>
          <Link href={`/percorsi/${SLUGS[i + 1]}`}><span style={btn(INK, "#fff")}>{t.nextBtn} {next.name}</span></Link>
        </Sec>
      )}

      <CtaBand title={t.ctaT} text={t.ctaX} a={{ href: "/contatti", label: t.ctaL }} b={{ href: "/incontra#avatar", label: t.ctaL2 }} />
    </Page>
  );
}
