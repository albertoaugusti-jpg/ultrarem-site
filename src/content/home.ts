// Contenuti della Home (italiano). Per aggiungere una storia o una scheda
// basta modificare questo file: la pagina li mostra da sola.

export const cover = {
  kicker: "Identità digitale e memoria",
  what: "UltraRem costruisce con te la tua identità digitale: la tua storia raccolta con la guida di uno psicologo, il consenso scritto a ogni passo e una custodia dichiarata.",
  title: "Chi ero, chi sono e chi sarò.",
  lead: "La dimensione digitale di ciascuno esisterà comunque. La domanda è chi la costruisce, e se ha il diritto di farlo la persona stessa.",
};

export const ladder = {
  kicker: "I percorsi",
  title: "Una scala di tre gradini, con i nomi della navigazione.",
  intro: "La tradizione marinara genovese da cui il progetto proviene ha dato i nomi. Ogni gradino conduce al successivo: quanto hai già pagato viene scalato dal prezzo di quello dopo.",
  steps: [
    { tag: "Gradino 1 · aperto a tutti", name: "Diario di bordo", price: "290 €", sub: "pacchetto di partenza", img: "nave-diario", lead: "Comincia a raccontarti con il companion, quando vuoi e senza psicologo. Alla fine hai un quaderno della tua narrazione e puoi decidere se andare avanti.", tone: "light",
      items: ["10 ore di racconto con il companion", "un quaderno della tua narrazione in PDF", "un clone vocale che risponde solo con ciò che il diario contiene, finché sei in vita", "12 mesi di conservazione, poi si rinnova (49 € l'anno)"],
      note: "Senza intervista e senza psicologo. È un prodotto distinto da UltraRem, e serve a capire se vuoi andare avanti." },
    { tag: "Gradino 2 · percorso certificato", name: "I marinai del tempo", price: "3.800 €", sub: "la partenza del Diario viene scalata", img: "nave-marinai", lead: "Uno psicologo ti ascolta e firma la sintesi del tuo progetto; hai la tua voce clonata e un primo avatar.", tone: "dark",
      items: ["10 ore di intervista con lo psicologo", "10 ore di raccolta con il companion", "la sintesi del tuo progetto, firmata dallo psicologo", "la tua voce clonata e un avatar semplice"],
      note: "Il primo anno di custodia è compreso." },
    { tag: "Gradino 3 · percorso completo", name: "I Capitani di lungo corso", price: "9.800 €", sub: "quanto hai pagato per i Marinai viene scalato", img: "nave-capitani", lead: "Il percorso più lungo: trenta ore con lo psicologo, un avatar con riprese in studio e, se vuoi, la forma tridimensionale.", tone: "red",
      items: ["30 ore di intervista con lo psicologo", "30 ore di raccolta con il companion", "la sintesi e la voce clonata", "un avatar realizzato con riprese in studio", "elaborazione tridimensionale su richiesta"],
      note: "Il primo anno di custodia è compreso." },
  ],
  fee: "Dal secondo anno, nei due percorsi certificati, c'è un canone di custodia (circa 150 € per i Marinai, circa 300 € per i Capitani, circa 550 € con l'elaborazione tridimensionale). Include conservazione sicura, governance degli accessi e un uso interattivo ragionevole; oltre, l'avatar video si paga a consumo. Importi indicativi.",
};

export const research = {
  kicker: "Ricerca",
  title: "Il sé digitale postumo, a Padova.",
  cells: [
    { k: "Esito", v: "Una ricerca triennale, dal 1° novembre 2027, sul tema «Il sé digitale postumo: benessere, dignità e continuità identitaria nella costruzione di avatar memoriali basati sull'intelligenza artificiale». Gli esiti si aggiungeranno a ricerca conclusa." },
    { k: "Chi la conduce", v: "Università di Padova, dipartimento FISPPA. Dottorato in Human Rights, Society, and Multi-level Governance (curriculum Inclusion and Psychological Growth), con la Prof.ssa Ines Testoni come docente di riferimento. UltraRem finanzia una borsa." },
    { k: "A chi appartengono i risultati", v: "Saranno definiti nella convenzione con l'Ateneo, in attesa di sottoscrizione." },
  ],
  note: "La ricerca è tenuta distinta dall'attività commerciale: partecipare a uno studio richiede un consenso separato ed è sempre facoltativo (art. 25).",
};

export const who = {
  kicker: "Chi c'è dietro",
  title: "Dietro UltraRem ci sono persone che hanno già costruito altro.",
  intro: "Un servizio che custodisce la memoria di una persona si giudica anche da chi lo costruisce. Alberto Augusti, Amministratore unico, e Bruno Legger, responsabile amministrativo, lavorano ogni giorno alla società. Massimo Del Vecchio è Founder senza un ruolo operativo e viene dai grandi sistemi informativi.",
  founders: [
    { ini: "AA", name: "Alberto Augusti", role: "Amministratore unico · operativo", text: "Imprenditore genovese, laureato in Scienze internazionali e diplomatiche. Guida la società.", col: "#c8102e" },
    { ini: "BL", name: "Bruno Massimo Legger", role: "Responsabile amministrativo · operativo", text: "Trent'anni di gestione d'impresa tra cosmetica, moda e utilities, da Shiseido ad AEM.", col: "#3d7a6b" },
    { ini: "MD", name: "Massimo Del Vecchio", role: "Founder", text: "Executive Director in Engineering Ingegneria Informatica; in precedenza CIO e direttore digitale in Ericsson, Ooredoo e Poste Italiane.", col: "#8b2e2e" },
  ],
  science: [
    { ini: "IT", name: "Prof.ssa Ines Testoni", role: "Università di Padova · la ricerca", text: "Dirige il master in Death Studies & The End of Life, il primo master universitario italiano dedicato al fine vita. UltraRem ha formalizzato l'impegno a finanziare un dottorato triennale sul sé digitale postumo (inizio novembre 2027), di cui è la docente di riferimento.", col: "#111111" },
    { ini: "MG", name: "Dott. Michele Galgani", role: "Psicologo e psicoterapeuta · la rete", text: "Costruisce la squadra che ti ascolterà: una selezione su base nazionale di venti psicologi e psicoterapeuti iscritti all'Albo, 48 ore di formazione sul protocollo di intervista e la supervisione sui primi casi.", col: "#3d7a6b" },
  ],
  method: {
    k: "Il metodo",
    t: "Un modello, non un programma.",
    p1: "La macchina raccoglie, ogni giorno, più di quanto un ciclo di interviste potrebbe mai fare. Lo psicologo dà senso a quel materiale, distingue ciò che è identità da ciò che è rumore e lo valida con un verbale firmato (art. 7). Nessuno dei due, da solo, produce un'identità autentica.",
    p2: "La tecnologia è di QBT, fornitore tecnologico. Il valore sta nella qualità del dato e nella responsabilità della custodia.",
  },
  socrem: "Con So.Crem Genova (Società Genovese di Cremazione) è in definizione una lettera d'intenti per un convegno sulla continuità digitale dopo la morte, la formazione degli operatori, il sostegno ai corsi per la doula di fine vita e un master universitario sul lutto.",
};

// Etichette e frasi che stanno direttamente nella pagina (non nelle schede sopra).
export const ui = {
  talk: "Parla con l'avatar",
  avatarTitle: "Chiedimi che cos'è UltraRem.",
  avatarText: "In due minuti ti spiego che cos'è UltraRem e rispondo alle tue domande. Ti dico subito che sono un'intelligenza artificiale e puoi fermarmi quando vuoi.",
  video: "Guarda il video",
  videoTitle: "Perché abbiamo cominciato.",
  videoText: "Un filmato breve, per chi ha qualche minuto e nessuna voglia di leggere.",
  caption: "Milano, 1983.",
  ladderTitle: "Costruisci la tua identità digitale prima che lo faccia qualcun altro.",
  ladderBtn: "Tutti i percorsi",
  learn: "Scopri",
  whoBtn: "Conosci i Founder",
  ctaTitle: "Comincia dal Diario di bordo.",
  ctaText: "290 € per raccontarti con il companion e capire se vuoi andare avanti. Senza intervista e senza fretta.",
  ctaA: "Scopri il Diario di bordo",
  ctaB: "Scrivici",
  ctaProject: "Scopri il progetto",
  ricBtn: "Università e ricerca",
  whoText: "Chi guida la società, i Founder e la squadra scientifica con l'Università di Padova.",
};

export const it = { cover, ladder, who, research, ui };
export type HomeContent = typeof it;
