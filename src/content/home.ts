// Contenuti della Home a rivista (italiano). Per aggiungere una storia o una scheda
// basta modificare questo file: la pagina li mostra da sola.

export const cover = {
  kicker: "L'apertura",
  title: "Chi ero, chi sono e chi sarò.",
  lead: "La dimensione digitale di ciascuno esisterà comunque. La domanda è chi la costruisce, e se ha il diritto di farlo la persona stessa.",
  body: "Ogni traccia lasciata online, ogni messaggio e ogni immagine concorrono a formare una versione di noi. Nella maggior parte dei casi viene costruita male, da sistemi che deducono invece di ascoltare. UltraRem parte da una premessa diversa: se esiste comunque, merita di essere costruita con serietà dalla persona stessa, mentre è viva e consapevole.",
  body2: "Questo giornale nasce per tenere insieme due cose che di solito stanno lontane: il racconto di una vita e il modo in cui scegliamo di lasciarlo. Qui trovi storie di persone vere, dibattiti sul fine vita, saggi sulla cultura della memoria e i profili di chi la studia. In fondo, se lo desideri, trovi anche i percorsi con cui UltraRem ti aiuta a costruire la tua.",
  body3: "Non ti chiediamo di credere a una promessa. Ti chiediamo di leggere, di ascoltare e di farti la tua idea, con i tempi che servono. Nessuna storia viene pubblicata senza il consenso scritto di chi la racconta, e nessun avatar parla senza dirti prima che è un'intelligenza artificiale.",
  cta1: "Vai ai percorsi",
  cta2: "Chi c'è dietro",
};

export const index = [
  { k: "Storie", t: "Chi si racconta, e chi ascolta", href: "/storie" },
  { k: "Dibattiti", t: "La memoria è un diritto?", href: "/storie" },
  { k: "Ricerca", t: "Il sé digitale postumo", href: "/ricerca" },
  { k: "Cultura", t: "La vita, la morte, il ricordo", href: "/storie" },
  { k: "I percorsi", t: "Dal Diario di bordo ai Capitani", href: "/come-funziona" },
  { k: "La Carta", t: "Ciò che promettiamo, in chiaro", href: "/il-progetto" },
];

export const reads = [
  { k: "Storie", t: "[ Titolo di una storia vera ]", p: "Lo spazio per un racconto di vita, scelto e autorizzato dalla persona (art. 18 della Carta). In fondo alla pagina, se la persona lo ha deciso, la storia diventa interattiva.", m: "8 min di lettura", img: "storie" },
  { k: "Dibattiti", t: "[ Una domanda aperta sul fine vita ]", p: "Più voci sullo stesso tema, con posizioni anche opposte. UltraRem opera in neutralità rispetto a credi e orientamenti (art. 4).", m: "4 interventi", img: "dibattiti" },
  { k: "Cultura", t: "Il corpus siamo noi", p: "Prima di essere memoria è corpo, prima di essere racconto è vita che respira. Un saggio breve sull'idea da cui nasce il nome: andare oltre, Ultra-Rem.", m: "5 min di lettura", img: "cultura" },
  { k: "Profili", t: "[ Nome di un ricercatore ]", p: "Scheda di uno studioso di lutto, memoria o etica dell'IA, con le opere e le fonti. Nessun avatar o intervista a suo nome senza il suo consenso scritto.", m: "Scheda", img: "" },
];

export const ladder = {
  kicker: "I percorsi",
  title: "Una scala di tre gradini, con i nomi della navigazione.",
  intro: "La tradizione marinara genovese da cui il progetto proviene ha dato i nomi. Ogni gradino conduce al successivo: quanto hai già pagato viene scalato dal prezzo di quello dopo.",
  steps: [
    { tag: "Gradino 1 · aperto a tutti", name: "Diario di bordo", price: "290 €", sub: "pacchetto di partenza", img: "diario", tone: "light",
      items: ["10 ore di racconto con il companion", "un quaderno della tua narrazione in PDF", "un clone vocale che risponde solo con ciò che il diario contiene, finché sei in vita", "12 mesi di conservazione, poi si rinnova (49 € l'anno)"],
      note: "Senza intervista e senza psicologo. È un prodotto distinto da UltraRem, e serve a capire se vuoi andare avanti." },
    { tag: "Gradino 2 · percorso certificato", name: "I marinai del tempo", price: "3.800 €", sub: "la partenza del Diario viene scalata", img: "riempitivo2", tone: "dark",
      items: ["10 ore di intervista con lo psicologo", "10 ore di raccolta con il companion", "la sintesi del tuo progetto, firmata dallo psicologo", "la tua voce clonata e un avatar semplice"],
      note: "Il primo anno di custodia è compreso." },
    { tag: "Gradino 3 · percorso completo", name: "I Capitani di lungo corso", price: "9.800 €", sub: "quanto hai pagato per i Marinai viene scalato", img: "riempitivo3", tone: "red",
      items: ["30 ore di intervista con lo psicologo", "30 ore di raccolta con il companion", "la sintesi e la voce clonata", "un avatar realizzato con riprese in studio", "elaborazione tridimensionale su richiesta"],
      note: "Il primo anno di custodia è compreso." },
  ],
  fee: "Dal secondo anno, nei due percorsi certificati, c'è un canone di custodia (circa 150 € per i Marinai, circa 300 € per i Capitani, circa 550 € con l'elaborazione tridimensionale). Include conservazione sicura, governance degli accessi e un uso interattivo ragionevole; oltre, l'avatar video si paga a consumo. Importi indicativi.",
};

export const story = {
  kicker: "Una storia, due modi di viverla",
  title: "Leggerla. Oppure parlarci.",
  text: "Ogni storia si legge come un articolo. Quando la persona l'ha scelto, sotto il testo si apre uno spazio di dialogo con la sua testimonianza, solo per chi decide di entrare (art. 17). Nessuno riceve inviti o messaggi non richiesti.",
  box: "Prima di parlare ti diciamo che stai interagendo con un sistema di intelligenza artificiale (art. 14). Ogni risposta porta un'etichetta: Testimonianza se riporta ciò che la persona ha detto, Elaborazione se nasce dal sistema (art. 15).",
  slot: "[ L'avatar della storia ]",
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
  title: "Non siamo quattro che ci provano.",
  intro: "Un servizio che custodisce la memoria di una persona si giudica anche da chi lo costruisce. Alberto Augusti e Bruno Legger lavorano alla società. Gli altri tre soci non hanno un ruolo operativo, e proprio per questo la loro scelta di esserci pesa: vengono da energia, pagamenti e grandi sistemi informativi, hanno visto molti progetti e hanno deciso di credere in questo.",
  founders: [
    { ini: "AA", name: "Alberto Augusti", role: "Amministratore unico · operativo", text: "Imprenditore genovese, laureato in Scienze internazionali e diplomatiche. Guida la società.", col: "#c8102e" },
    { ini: "BL", name: "Bruno Massimo Legger", role: "Responsabile amministrativo · operativo", text: "Trent'anni di gestione d'impresa tra cosmetica, moda e utilities, da Shiseido ad AEM.", col: "#3d7a6b" },
    { ini: "MD", name: "Massimo Del Vecchio", role: "Socio", text: "Executive Director in Engineering Ingegneria Informatica; in precedenza CIO e direttore digitale in Ericsson, Ooredoo e Poste Italiane.", col: "#8b2e2e" },
    { ini: "GT", name: "Giuseppe Teatino", role: "Socio", text: "Product designer. Ha guidato la user experience in Nexi e PostePay ed è cofondatore di NeN.it e TaDa.", col: "#c4522a" },
    { ini: "SF", name: "Stefano Fumi", role: "Socio", text: "Vent'anni nel mercato dell'energia: Enel (la fatturazione di 30 milioni di clienti), NeN.it, PostePay.", col: "#e8a820" },
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

export const charter = {
  kicker: "La Carta dei Valori · versione 2, 30 ottobre 2026",
  title: "Ciò che promettiamo, e che puoi pretendere.",
  arts: [
    { a: "Art. 2", t: "Nessuna pubblicità.", d: "Né negli archivi, né nel dialogo con l'avatar." },
    { a: "Art. 3", t: "Fedeltà alla persona.", d: "Decide lei come essere ricordata, anche nei lati meno levigati." },
    { a: "Art. 20", t: "Novanta giorni di silenzio.", d: "L'avatar non parla ai familiari prima, per lasciare spazio al dolore." },
    { a: "Art. 26", t: "Percorsi per chi non può permetterseli.", d: "Ogni anno, con criteri trasparenti." },
  ],
};

export const editorial = {
  kicker: "Editoriale",
  title: "Perché una rivista, e non un sito di servizi.",
  paras: [
    "Di solito chi si occupa di memoria digitale comincia dal prodotto: un'applicazione, un prezzo, un pulsante. Noi abbiamo preferito cominciare da una domanda che precede tutte le altre, ossia che cosa resti di una persona quando smette di raccontarsi, e chi abbia il diritto di raccontarla al suo posto.",
    "Una domanda del genere non si risolve in una pagina commerciale. Chiede tempo, richiede voci diverse (psicologi, studiosi, famiglie, persone che stanno ancora vivendo la propria storia) e accetta di lasciare aperte alcune questioni. Per questo abbiamo scelto la forma di un giornale, con le sue rubriche, i suoi numeri e le sue firme.",
    "Il progetto UltraRem, con i suoi percorsi, sta in fondo e non in cima: lo trovi nelle pagine dedicate, con i prezzi scritti per intero, e puoi ignorarlo del tutto. Se invece ti incuriosisce, la Carta dei Valori ti dice con precisione che cosa promettiamo e che cosa puoi pretendere da noi.",
    "La riga che teniamo ferma è semplice: la memoria appartiene a chi la vive. Tutto il resto, la tecnologia compresa, è uno strumento al servizio di questa frase.",
  ],
  by: "La redazione",
};
