export const ORIGIN = "https://ultrarem.eu";
export const seoPages: Record<string, { title: string; description: string }> = {
  "/": { title: "UltraRem | La tua autobiografia interattiva", description: "Racconta la tua vita con UltraRem. Raccogli ricordi, esperienze e pensieri in un’autobiografia da rileggere, approvare ed esplorare con le tue domande." },
  "/il-progetto": { title: "Autobiografia interattiva: che cos’è | UltraRem", description: "Come nasce un’autobiografia interattiva: il racconto, la tua approvazione e le domande. Scopri il progetto UltraRem e il ruolo dell’intelligenza artificiale." },
  "/per-chi": { title: "Raccontare la propria vita e trasmettere esperienze | UltraRem", description: "Per chi vuole raccogliere ricordi, raccontare una vita di lavoro o condividere la propria storia con la famiglia. Trova il tuo percorso UltraRem." },
  "/come-funziona": { title: "Come creare la tua autobiografia interattiva | UltraRem", description: "Dal Diario di bordo ai percorsi con lo psicologo: scopri come raccogliere, approvare e consultare la tua autobiografia e cosa comprende ogni percorso." },
  "/percorsi/diario-di-bordo": { title: "Diario di bordo: un diario personale da scrivere parlando | UltraRem", description: "Raccogli ricordi, pensieri e idee in un diario personale da consultare in chat o a voce. Senza volto, con voce propria non clonata e quaderno PDF." },
  "/percorsi/i-marinai-del-tempo": { title: "I marinai del tempo: autobiografia con lo psicologo | UltraRem", description: "Costruisci la tua autobiografia con interviste guidate dallo psicologo. Rileggi e approva il racconto e scegli con chi condividerlo, già oggi." },
  "/percorsi/i-capitani-di-lungo-corso": { title: "I Capitani di lungo corso: raccontare una vita di esperienze | UltraRem", description: "Un percorso autobiografico approfondito con lo psicologo, riprese in studio e avatar per esplorare il racconto approvato. Per la tua storia e il tuo sapere." },
  "/ricerca": { title: "Ricerca su autobiografia, memoria ed etica dell’IA | UltraRem", description: "La ricerca UltraRem con l’Università di Padova: fedeltà al racconto, sicurezza emotiva e regole per una consultazione rispettosa delle autobiografie." },
  "/storie": { title: "Storie, ricordi e guide per raccontarsi | UltraRem", description: "Esplora i racconti di Steno, Nemo e Haddock e le guide UltraRem per cominciare a raccontarti, raccogliere ricordi e trasmettere la tua esperienza." },
  "/fondatori": { title: "Le persone dietro UltraRem | Fondatori e squadra", description: "Conosci le persone che costruiscono UltraRem e il loro lavoro per raccogliere e custodire autobiografie fedeli alla volontà di chi si racconta." },
  "/contatti": { title: "Contatta UltraRem | Informazioni sui percorsi autobiografici", description: "Hai domande sul Diario di bordo o sui percorsi autobiografici UltraRem? Contattaci per capire come cominciare a raccontare la tua storia." },
};
export const aliases: Record<string, string> = { "/percorsi": "/come-funziona", "/incontra": "/il-progetto" };
export function getSeo(path: string) {
  const clean = path.replace(/\/+$/, "") || "/";
  const canonicalPath = aliases[clean] || clean;
  const page = seoPages[canonicalPath];
  return { title: page?.title || "Pagina non disponibile | UltraRem", description: page?.description || "Esplora UltraRem e i percorsi per raccontare la tua storia.", canonical: ORIGIN + (canonicalPath === "/" ? "/" : canonicalPath + "/"), index: Boolean(page) };
}
export function structuredData(path: string) {
  const meta = getSeo(path);
  return { "@context": "https://schema.org", "@graph": [
    { "@type": "Organization", "@id": ORIGIN + "/#organization", name: "UltraRem", url: ORIGIN, logo: ORIGIN + "/img/rivista/logo.png", email: "contatti@ultrarem.eu" },
    { "@type": "WebSite", "@id": ORIGIN + "/#website", url: ORIGIN, name: "UltraRem", inLanguage: "it", publisher: { "@id": ORIGIN + "/#organization" } },
    { "@type": "WebPage", "@id": meta.canonical + "#webpage", url: meta.canonical, name: meta.title, description: meta.description, inLanguage: "it", isPartOf: { "@id": ORIGIN + "/#website" } }
  ] };
}

// Render serves directory index files at trailing-slash URLs, even when a legacy SPA fallback remains configured.
export function pageHref(href: string) {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  const match = href.match(/^([^?#]*)(.*)$/)!;
  const path = match[1].replace(/\/+$/, "") || "/";
  const target = aliases[path] || path;
  return seoPages[target] && target !== "/" ? target + "/" + match[2] : href;
}
