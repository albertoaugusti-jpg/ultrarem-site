// Dizionario di riferimento (italiano). Le altre lingue devono avere le stesse chiavi:
// se ne manca una, `npm run typecheck` segnala l'errore.
export const it = {
  nav: {
    home: "Home",
    project: "Il Progetto",
    forWho: "Per Chi",
    how: "Come Funziona",
    research: "Ricerca",
    meet: "Conosci UltraRem",
    contact: "Contatti",
    slides: "Presentazione ↗",
    book: "Prenota Demo",
    bookArrow: "Prenota Demo →",
  },
  footer: {
    tagline: "Preserviamo ciò che sei, per chi ami, finché esiste il tempo.",
    navigate: "Naviga",
    contact: "Contatti",
    getInTouch: "Contattaci",
    bookDemo: "Prenota una Demo",
    startup: "Start-Up Innovativa",
  },
  meet: {
    eyebrow: "Conosci UltraRem",
    title1: "Parla con",
    title2: "l'avatar di Alberto.",
    intro: "Alberto Augusti, fondatore di UltraRem, ti spiega cos'è il progetto e risponde alle tue domande.",
    avatarTag: "Spazio 1 · L'avatar",
    avatarTitle: "Chiedi a chi l'ha fondata",
    avatarText: "Scrivi o parla: l'avatar racconta cos'è UltraRem, a chi serve e come funziona il percorso.",
    avatarSoon: "L'avatar è in preparazione. Torna presto, oppure scrivici.",
    videoTag: "Spazio 2 · Il video",
    videoTitle: "UltraRem in pochi minuti",
    videoText: "Il video racconta l'idea, dal perché alle quattro fasi del percorso.",
    videoSoon: "Il video sarà disponibile a breve.",
    cta: "Prenota una demo →",
  },
};

export type Dict = typeof it;
