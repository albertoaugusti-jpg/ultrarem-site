import type { Lang } from "@/lib/i18n";

// Testi della pagina Founder, nelle quattro lingue. Nomi e biografie brevi stanno in home*.ts (who).
export interface FoundersContent {
  k: string; titleA: string; titleB: string; lead: string;
  storyK: string; storyT: string; p1: string; p2: string; p3: string; p4: string;
  peopleK: string; peopleT: string;
  sciK: string; sciT: string; sciLink: string; sciLinkT: string;
  methodK: string;
  partnersK: string; partnersT: string;
  qbtK: string; qbtP: string; socK: string;
  ctaT: string; ctaX: string; ctaA: string; ctaB: string;
}

export const founders: Record<Lang, FoundersContent> = {
  it: {
    k: "Founder", titleA: "Chi ha messo il proprio nome ", titleB: "su UltraRem.",
    lead: "Un servizio che custodisce la memoria di una persona si giudica anche da chi lo costruisce. Questa è la storia di chi c'è.",
    storyK: "La storia", storyT: "Come nasce UltraRem e chi l'ha resa possibile.",
    p1: "L'idea di UltraRem è di Alberto Augusti, imprenditore genovese con una laurea in Scienze internazionali e diplomatiche, che oggi guida la società come Amministratore unico. Nasce da una convinzione semplice: la memoria appartiene a chi la vive, e se una dimensione digitale di ciascuno esisterà comunque, è giusto che la costruisca con cura la persona stessa, finché è viva e consapevole.",
    p2: "Ogni giorno, accanto a lui, lavora Bruno Massimo Legger, responsabile amministrativo, con trent'anni di gestione d'impresa tra cosmesi, moda e servizi di pubblica utilità (da Shiseido ad AEM). Sono i due che tengono in piedi la società giorno per giorno.",
    p3: "Alla società partecipano anche tre Founder, senza un ruolo operativo. Massimo Del Vecchio, Executive Director in Engineering Ingegneria Informatica, è stato CIO e direttore digitale in Ericsson, Ooredoo e Poste Italiane. Giuseppe Teatino, product designer, ha guidato l'esperienza utente di Nexi e PostePay ed è co-fondatore di NeN.it e TaDa. Stefano Fumi ha vent'anni di mercato dell'energia alle spalle: Enel (con la fatturazione di trenta milioni di clienti), NeN.it, PostePay.",
    p4: "La parte scientifica è affidata a chi la studia davvero, e la tecnologia a un fornitore specializzato. Ne parliamo più sotto.",
    peopleK: "I volti", peopleT: "Le cinque persone.",
    sciK: "La scienza", sciT: "Chi ci tiene con i piedi per terra.", sciLink: "Leggi di più sulla ", sciLinkT: "ricerca a Padova",
    methodK: "Il metodo",
    partnersK: "Partner", partnersT: "Chi ci affianca.",
    qbtK: "Fornitore tecnologico", qbtP: "Realizza la parte tecnica, avatar compreso. È un fornitore tecnologico di UltraRem.", socK: "In definizione",
    ctaT: "Vuoi conoscerci di persona?", ctaX: "Scrivici: ti rispondiamo noi, e se vuoi ci vediamo a Milano o a Genova.", ctaA: "Scrivici", ctaB: "Inizia dal Diario di bordo",
  },
  en: {
    k: "Founders", titleA: "Who has put their name ", titleB: "on UltraRem.",
    lead: "A service that keeps a person's memory is also judged by those who build it. This is the story of who is here.",
    storyK: "The story", storyT: "How UltraRem began and who made it possible.",
    p1: "The idea of UltraRem is Alberto Augusti's, an entrepreneur from Genoa with a degree in International and Diplomatic Sciences, who now leads the company as Sole Director. It starts from a simple conviction: memory belongs to the one who lives it, and if a digital dimension of each of us will exist anyway, it is right that the person build it with care, while alive and aware.",
    p2: "Every day, beside him, works Bruno Massimo Legger, Head of Administration, with thirty years of business management across cosmetics, fashion and utilities (from Shiseido to AEM). The two of them keep the company going day by day.",
    p3: "Three Founders also take part in the company, without an operational role. Massimo Del Vecchio, Executive Director at Engineering Ingegneria Informatica, was CIO and digital director at Ericsson, Ooredoo and Poste Italiane. Giuseppe Teatino, a product designer, led user experience at Nexi and PostePay and is a co-founder of NeN.it and TaDa. Stefano Fumi has twenty years in the energy market behind him: Enel (billing for thirty million customers), NeN.it, PostePay.",
    p4: "The scientific side is entrusted to those who really study it, and the technology to a specialised supplier. More on both below.",
    peopleK: "The faces", peopleT: "The five people.",
    sciK: "Science", sciT: "Those who keep us grounded.", sciLink: "Read more about the ", sciLinkT: "research in Padua",
    methodK: "The method",
    partnersK: "Partners", partnersT: "Who stands beside us.",
    qbtK: "Technology supplier", qbtP: "Builds the technical side, avatar included. It is a technology supplier of UltraRem.", socK: "Being defined",
    ctaT: "Would you like to meet us in person?", ctaX: "Write to us: we answer ourselves, and if you wish we can meet in Milan or Genoa.", ctaA: "Write to us", ctaB: "Start with the Diario di bordo",
  },
  fr: {
    k: "Founders", titleA: "Qui a mis son nom ", titleB: "sur UltraRem.",
    lead: "Un service qui conserve la mémoire d'une personne se juge aussi à ceux qui le construisent. Voici l'histoire de ceux qui sont là.",
    storyK: "L'histoire", storyT: "Comment naît UltraRem et qui l'a rendue possible.",
    p1: "L'idée d'UltraRem est d'Alberto Augusti, entrepreneur génois diplômé en sciences internationales et diplomatiques, qui dirige aujourd'hui la société comme administrateur unique. Elle naît d'une conviction simple : la mémoire appartient à celui qui la vit, et si une dimension numérique de chacun existera de toute façon, il est juste que la personne elle-même la construise avec soin, tant qu'elle est vivante et consciente.",
    p2: "Chaque jour, à ses côtés, travaille Bruno Massimo Legger, responsable administratif, avec trente ans de gestion d'entreprise dans la cosmétique, la mode et les services publics (de Shiseido à AEM). Ce sont eux deux qui font tenir la société au quotidien.",
    p3: "Trois Founders participent aussi à la société, sans rôle opérationnel. Massimo Del Vecchio, Executive Director chez Engineering Ingegneria Informatica, a été CIO et directeur digital chez Ericsson, Ooredoo et Poste Italiane. Giuseppe Teatino, product designer, a dirigé l'expérience utilisateur de Nexi et PostePay et est cofondateur de NeN.it et TaDa. Stefano Fumi a vingt ans de marché de l'énergie derrière lui : Enel (facturation de trente millions de clients), NeN.it, PostePay.",
    p4: "La partie scientifique est confiée à ceux qui l'étudient vraiment, et la technologie à un fournisseur spécialisé. Nous en parlons plus bas.",
    peopleK: "Les visages", peopleT: "Les cinq personnes.",
    sciK: "La science", sciT: "Ceux qui nous gardent les pieds sur terre.", sciLink: "En savoir plus sur la ", sciLinkT: "recherche à Padoue",
    methodK: "La méthode",
    partnersK: "Partenaires", partnersT: "Ceux qui nous accompagnent.",
    qbtK: "Fournisseur technologique", qbtP: "Réalise la partie technique, avatar compris. C'est un fournisseur technologique d'UltraRem.", socK: "En cours de définition",
    ctaT: "Vous voulez nous rencontrer ?", ctaX: "Écrivez-nous : nous répondons nous-mêmes, et si vous le souhaitez nous nous voyons à Milan ou à Gênes.", ctaA: "Écrivez-nous", ctaB: "Commencer par le Diario di bordo",
  },
  de: {
    k: "Founder", titleA: "Wer seinen Namen ", titleB: "auf UltraRem gesetzt hat.",
    lead: "Ein Dienst, der die Erinnerung eines Menschen aufbewahrt, wird auch an denen gemessen, die ihn bauen. Dies ist die Geschichte derer, die dabei sind.",
    storyK: "Die Geschichte", storyT: "Wie UltraRem entsteht und wer es möglich gemacht hat.",
    p1: "Die Idee von UltraRem stammt von Alberto Augusti, einem Unternehmer aus Genua mit einem Abschluss in Internationalen und Diplomatischen Wissenschaften, der die Gesellschaft heute als Geschäftsführer leitet. Sie entspringt einer einfachen Überzeugung: Die Erinnerung gehört dem, der sie lebt, und wenn eine digitale Dimension jedes Einzelnen ohnehin entstehen wird, ist es richtig, dass der Mensch sie selbst mit Sorgfalt aufbaut, solange er lebt und bei Bewusstsein ist.",
    p2: "Jeden Tag arbeitet an seiner Seite Bruno Massimo Legger, Leiter Verwaltung, mit dreißig Jahren Unternehmensführung in Kosmetik, Mode und Versorgungsbetrieben (von Shiseido bis AEM). Die beiden halten die Gesellschaft Tag für Tag am Laufen.",
    p3: "An der Gesellschaft beteiligen sich außerdem drei Founder ohne operative Rolle. Massimo Del Vecchio, Executive Director bei Engineering Ingegneria Informatica, war CIO und Digitaldirektor bei Ericsson, Ooredoo und Poste Italiane. Giuseppe Teatino, Product Designer, leitete die User Experience bei Nexi und PostePay und ist Mitgründer von NeN.it und TaDa. Stefano Fumi blickt auf zwanzig Jahre Energiemarkt zurück: Enel (Abrechnung für dreißig Millionen Kunden), NeN.it, PostePay.",
    p4: "Der wissenschaftliche Teil liegt bei denen, die ihn wirklich erforschen, die Technologie bei einem spezialisierten Lieferanten. Mehr dazu weiter unten.",
    peopleK: "Die Gesichter", peopleT: "Die fünf Personen.",
    sciK: "Die Wissenschaft", sciT: "Wer uns auf dem Boden hält.", sciLink: "Mehr zur ", sciLinkT: "Forschung in Padua",
    methodK: "Die Methode",
    partnersK: "Partner", partnersT: "Wer uns zur Seite steht.",
    qbtK: "Technologielieferant", qbtP: "Baut die technische Seite, Avatar inbegriffen. Es ist ein Technologielieferant von UltraRem.", socK: "In Klärung",
    ctaT: "Möchtest du uns persönlich kennenlernen?", ctaX: "Schreibe uns: Wir antworten selbst, und wenn du möchtest, treffen wir uns in Mailand oder Genua.", ctaA: "Schreibe uns", ctaB: "Mit dem Diario di bordo beginnen",
  },
};
