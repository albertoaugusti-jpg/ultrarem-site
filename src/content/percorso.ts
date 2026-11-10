import type { Lang } from "@/lib/i18n";

// Etichette della pagina di un singolo percorso.
export interface PercorsoContent {
  whyK: string;
  whyT: string;
  body: string[][];
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
  startT: string;
  startX: string;
  startL: string;
  mailSub: string;
}

export const percorso: Record<Lang, PercorsoContent> = {
  it: { whyK: "A che cosa serve", whyT: "Raccontarti, conoscerti, decidere.", body: [["Il Diario di bordo serve a raccontarti: il tuo tempo, la tua storia, le cose che ti hanno portato a essere chi sei. Lo fai parlando con il companion, quando vuoi e al ritmo che preferisci, per un totale di dieci ore.", "Mentre racconti ti capita di guardarti da fuori, e questo aiuta a conoscerti meglio. Alla fine ricevi un quaderno della tua narrazione in PDF.", "C'è poi una seconda ragione. Prima di decidere se lasciare un tuo avatar conviene capire se per te abbia davvero un senso, e il Diario è il modo per accorgersene senza impegnarsi in un percorso più lungo. Se alla fine senti che sì, quanto hai già pagato viene scalato dal prezzo del percorso successivo."], [], []], includes: "Che cosa comprende", feeK: "Dopo il primo anno", next: "Il passo successivo", nextBtn: "Scopri", all: "Tutti i percorsi", notFound: "Questo percorso non esiste.",
    ctaT: "Hai ancora domande?", ctaX: "Scrivici o parla con l'avatar: ti spieghiamo tutto, senza fretta.", ctaL: "Scrivici", ctaL2: "Parla con l'avatar", startT: "Vuoi cominciare dal Diario di bordo?", startX: "Scrivici e ti rispondiamo noi, senza impegno: ti spieghiamo come partire.", startL: "Richiedi il Diario", mailSub: "Richiesta del Diario di bordo" },
  en: { whyK: "What it is for", whyT: "Telling yourself, knowing yourself, deciding.", body: [["The Diario di bordo is for telling your story: your time, your life, the things that made you who you are. You do it by talking with the companion, whenever you like and at your own pace, for a total of ten hours.", "While you tell it you find yourself looking at yourself from outside, and this helps you know yourself better. At the end you receive a notebook of your narrative as a PDF.", "There is also a second reason. Before deciding whether to leave an avatar of yourself, it is worth understanding whether it really makes sense for you, and the Diario is the way to find out without committing to a longer path. If in the end you feel it does, what you have already paid is deducted from the price of the next path."], [], []], includes: "What it includes", feeK: "After the first year", next: "The next step", nextBtn: "Discover", all: "All the paths", notFound: "This path does not exist.",
    ctaT: "Still have questions?", ctaX: "Write to us or talk to the avatar: we will explain everything, without rushing.", ctaL: "Write to us", ctaL2: "Talk to the avatar", startT: "Would you like to start with the Diario di bordo?", startX: "Write to us and we will answer ourselves, with no commitment: we will explain how to begin.", startL: "Request the Diario", mailSub: "Request for the Diario di bordo" },
  fr: { whyK: "À quoi cela sert", whyT: "Vous raconter, vous connaître, décider.", body: [["Le Diario di bordo sert à vous raconter : votre temps, votre histoire, ce qui vous a amené à être qui vous êtes. Vous le faites en parlant avec le companion, quand vous voulez et à votre rythme, pour un total de dix heures.", "En vous racontant, il vous arrive de vous regarder de l'extérieur, et cela aide à mieux vous connaître. À la fin, vous recevez un cahier de votre narration en PDF.", "Il y a aussi une seconde raison. Avant de décider si vous voulez laisser un avatar de vous, il vaut mieux comprendre si cela a vraiment un sens pour vous, et le Diario est le moyen de s'en rendre compte sans s'engager dans un parcours plus long. Si à la fin vous sentez que oui, ce que vous avez déjà payé est déduit du prix du parcours suivant."], [], []], includes: "Ce que cela comprend", feeK: "Après la première année", next: "L'étape suivante", nextBtn: "Découvrir", all: "Tous les parcours", notFound: "Ce parcours n'existe pas.",
    ctaT: "Vous avez encore des questions ?", ctaX: "Écrivez-nous ou parlez à l'avatar : nous vous expliquons tout, sans hâte.", ctaL: "Écrivez-nous", ctaL2: "Parler à l'avatar", startT: "Vous voulez commencer par le Diario di bordo ?", startX: "Écrivez-nous et nous répondons nous-mêmes, sans engagement : nous vous expliquons comment démarrer.", startL: "Demander le Diario", mailSub: "Demande du Diario di bordo" },
  de: { whyK: "Wozu es dient", whyT: "Sich erzählen, sich kennenlernen, entscheiden.", body: [["Das Diario di bordo dient dazu, dich zu erzählen: deine Zeit, deine Geschichte, das, was dich zu dem gemacht hat, der du bist. Du tust es im Gespräch mit dem Companion, wann du willst und in deinem Tempo, insgesamt zehn Stunden lang.", "Beim Erzählen betrachtest du dich von außen, und das hilft dir, dich besser kennenzulernen. Am Ende erhältst du ein Heft deiner Erzählung als PDF.", "Es gibt noch einen zweiten Grund. Bevor du entscheidest, ob du einen Avatar von dir hinterlassen willst, solltest du verstehen, ob es für dich wirklich Sinn ergibt, und das Diario ist der Weg, es zu merken, ohne dich auf einen längeren Weg festzulegen. Wenn du am Ende spürst, dass es so ist, wird das bereits Bezahlte vom Preis des nächsten Weges abgezogen."], [], []], includes: "Was enthalten ist", feeK: "Nach dem ersten Jahr", next: "Der nächste Schritt", nextBtn: "Entdecken", all: "Alle Wege", notFound: "Dieser Weg existiert nicht.",
    ctaT: "Noch Fragen?", ctaX: "Schreibe uns oder sprich mit dem Avatar: Wir erklären dir alles, ohne Eile.", ctaL: "Schreibe uns", ctaL2: "Mit dem Avatar sprechen", startT: "Möchtest du mit dem Diario di bordo beginnen?", startX: "Schreibe uns, und wir antworten selbst, unverbindlich: Wir erklären dir, wie du beginnst.", startL: "Das Diario anfragen", mailSub: "Anfrage zum Diario di bordo" },
};
