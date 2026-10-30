// Dizionario di riferimento (italiano). Le altre lingue devono avere le stesse chiavi:
// se ne manca una, `npm run typecheck` segnala l'errore.
export const it = {
  nav: {
    home: "Home",
    project: "Il Progetto",
    forWho: "Per Chi",
    how: "Come Funziona",
    research: "Ricerca",
    demo: "Demo",
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
};

export type Dict = typeof it;
