import { Link, useRoute } from "wouter";
import { Page, Hero, Sec, Prose, CtaBand, RED } from "@/components/Mag";
import { guides } from "@/content/guides";
import NotFound from "./not-found";
export default function Guida() {
  const [, params] = useRoute("/guide/:slug");
  const guide = guides.find(g => g.slug === params?.slug);
  if (!guide) return <NotFound />;
  return <Page>
    <article lang="it">
      <Hero k="Le guide di UltraRem" title={guide.title} lead={guide.lead} />
      {guide.sections.map(section => <Sec key={section.title} k="Raccontarsi" title={section.title}>
        <Prose max={800}>{section.paragraphs.map(p => <p key={p}>{p}</p>)}</Prose>
      </Sec>)}
      <Sec k="Continua a leggere" title="Altri modi per cominciare">
        <ul>{guides.filter(g => g.slug !== guide.slug).map(g => <li key={g.slug}><Link href={"/guide/" + g.slug} style={{ color: RED }}>{g.title}</Link></li>)}</ul>
        <Link href="/storie">Torna alle storie e alle guide</Link>
      </Sec>
    </article>
    <CtaBand title="La tua storia comincia da te." text="Scegli come raccontarti: un diario personale o un percorso di interviste con lo psicologo." a={{ href: guide.path, label: guide.cta }} b={{ href: "/contatti", label: "Scrivici" }} />
  </Page>;
}
