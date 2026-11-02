import type { Lang } from "@/lib/i18n";

// Etichette della pagina di un singolo percorso.
export interface PercorsoContent {
  includes: string;
  feeK: string;
  next: string;
  nextBtn: string;
  all: string;
  notFound: string;
  ctaT: string;
  ctaX: string;
  ctaL: string;
  ctaL2: string;
}

export const percorso: Record<Lang, PercorsoContent> = {
  it: { includes: "Che cosa comprende", feeK: "Dopo il primo anno", next: "Il passo successivo", nextBtn: "Scopri", all: "Tutti i percorsi", notFound: "Questo percorso non esiste.",
    ctaT: "Hai ancora domande?", ctaX: "Scrivici o parla con l'avatar: ti spieghiamo tutto, senza fretta.", ctaL: "Scrivici", ctaL2: "Parla con l'avatar" },
  en: { includes: "What it includes", feeK: "After the first year", next: "The next step", nextBtn: "Discover", all: "All the paths", notFound: "This path does not exist.",
    ctaT: "Still have questions?", ctaX: "Write to us or talk to the avatar: we will explain everything, without rushing.", ctaL: "Write to us", ctaL2: "Talk to the avatar" },
  fr: { includes: "Ce que cela comprend", feeK: "Après la première année", next: "L'étape suivante", nextBtn: "Découvrir", all: "Tous les parcours", notFound: "Ce parcours n'existe pas.",
    ctaT: "Vous avez encore des questions ?", ctaX: "Écrivez-nous ou parlez à l'avatar : nous vous expliquons tout, sans hâte.", ctaL: "Écrivez-nous", ctaL2: "Parler à l'avatar" },
  de: { includes: "Was enthalten ist", feeK: "Nach dem ersten Jahr", next: "Der nächste Schritt", nextBtn: "Entdecken", all: "Alle Wege", notFound: "Dieser Weg existiert nicht.",
    ctaT: "Noch Fragen?", ctaX: "Schreibe uns oder sprich mit dem Avatar: Wir erklären dir alles, ohne Eile.", ctaL: "Schreibe uns", ctaL2: "Mit dem Avatar sprechen" },
};
