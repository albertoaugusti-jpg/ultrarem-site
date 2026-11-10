import type { Lang } from "@/lib/i18n";

// Testi della pagina Come funziona (le schede dei tre gradini stanno in home*.ts).
export interface ComeContent {
  k: string; titleA: string; titleB: string;
  stepsK: string; stepsT: string;
  tripK: string; tripT: string;
  flows: { tag: string; name: string; lead: string; steps: { t: string; p: string }[] }[];
  whyK: string; whyT: string; why1: string; why2: string;
  faqK: string; faqT: string;
  faq: { q: string; a: string }[];
  ctaT: string; ctaX: string; ctaL: string;
}

const it: ComeContent = {
  k: "Come funziona", titleA: "Una scala di tre gradini, ", titleB: "con i nomi della navigazione.",
  stepsK: "I tre gradini", stepsT: "Che cosa ottieni, e a che prezzo.",
  tripK: "Il percorso", tripT: "Come funziona, passo per passo.",
  flows: [
    { tag: "Online, da solo", name: "Diario di bordo", lead: "Fai tutto dal sito, dal primo contatto al pagamento, senza bisogno di nessuno.", steps: [
      { t: "Parli con l'avatar", p: "Arrivi sul sito e parli con l'avatar, che ti spiega come funziona il Diario di bordo." },
      { t: "Ti registri", p: "Crei il tuo spazio personale dalla pagina dedicata." },
      { t: "Paghi online", p: "Il pagamento si fa online, in pochi passaggi." },
      { t: "Parli con il tuo companion", p: "Il companion si attiva e parli quando vuoi, al tuo ritmo." },
      { t: "Hai il tuo quaderno", p: "Alla fine ricevi il tuo quaderno. Puoi fermarti qui, continuare con una ricarica o passare ai percorsi con lo psicologo." },
    ] },
    { tag: "Con lo psicologo", name: "I marinai del tempo", lead: "Un percorso seguito da una persona, dal primo contatto al deposito del tuo archivio.", steps: [
      { t: "Ci contatti", p: "Ci scrivi o ci telefoni e ti rispondiamo noi." },
      { t: "Ti proponiamo uno psicologo", p: "Ti presentiamo lo psicologo che ti seguirà." },
      { t: "Prima intervista", p: "Incontri lo psicologo. Nello stesso incontro si fanno le riprese video." },
      { t: "Configuriamo il tuo companion", p: "Prepariamo il tuo companion dedicato." },
      { t: "Le interviste proseguono", p: "Gli incontri continuano e, tra uno e l'altro, parli con il tuo companion." },
      { t: "Chiusura del corpus", p: "Lo psicologo scrive la sintesi di ciò che è emerso e tu la rivedi." },
      { t: "Firma", p: "Quando la sintesi ti convince, la firmi." },
      { t: "Deposito e copia cartacea", p: "Il corpus viene depositato sul server e ne conserviamo anche una copia cartacea." },
    ] },
    { tag: "Il percorso più ampio", name: "I Capitani di lungo corso", lead: "Gli stessi passi dei marinai del tempo, con più ore di lavoro.", steps: [
      { t: "Più materiale, conservato con cura", p: "Oltre al racconto, possiamo conservare il materiale multimediale più complesso: registrazioni, pellicole, fotografie." },
    ] },
  ],
  whyK: "Perché dura tanto", whyT: "Il tempo non è un costo, è il metodo.",
  why1: "Trenta ore di intervista e trenta di raccolta possono sembrare tante. Sono quelle che ci servono per sapere come rispondi quando qualcuno ti interrompe, che cosa non dici mai, che cosa ripeti. Nessuna sintesi di un'ora riesce a restituire un carattere, e un avatar che non ha il carattere è un doppiatore, non una presenza.",
  why2: "Per questo ogni gradino conduce al successivo, e quanto hai già pagato viene scalato. Non vogliamo che tu decida tutto subito, vogliamo che tu possa fermarti dove ti senti a casa.",
  faqK: "Domande", faqT: "Le cose che ci chiedono sempre.",
  faq: [
    { q: "Posso fermarmi dopo il Diario di bordo?", a: "Sì, ed è per questo che esiste. Il Diario è un prodotto distinto da UltraRem e serve a capire se vuoi andare avanti. Se prosegui, quanto hai pagato viene scalato dal prezzo del gradino successivo." },
    { q: "Chi ascolta quello che racconto?", a: "Nel Diario, solo il companion. Nei percorsi certificati, anche lo psicologo che ti segue, che risponde di ciò che scrive e lo firma con il suo nome." },
    { q: "Chi può parlare con il mio avatar?", a: "Soltanto chi decidi tu. Nessuno è obbligato a dialogare (art. 17), nessuno riceve inviti non richiesti, e non è prevista alcuna pubblicità (art. 2)." },
    { q: "L'avatar può dire cose che non ho detto?", a: "Può elaborare, ma deve dirlo: ogni risposta è etichettata come Testimonianza (ciò che hai detto) o Elaborazione (ciò che il sistema ricostruisce), art. 15. E parla sempre dichiarandosi un sistema di intelligenza artificiale (art. 14)." },
    { q: "Quando i miei cari potranno usarlo?", a: "Non prima di novanta giorni dalla tua morte (art. 20). Il dolore ha i suoi tempi e l'avatar non deve occuparli." },
    { q: "E se un mio ricordo riguarda altre persone?", a: "Serve il loro consenso specifico (art. 18). Senza quello, il ricordo resta fuori." },
    { q: "Quanto costa tenere tutto?", a: "Nel Diario, 49 € l'anno dopo i primi dodici mesi. Nei percorsi certificati c'è un canone di custodia dal secondo anno (importi indicativi nella tabella qui sopra)." },
    { q: "Posso partecipare a una ricerca?", a: "Se vuoi, con un consenso separato e sempre facoltativo (art. 25). Non influisce in alcun modo sul tuo percorso." },
  ],
  ctaT: "Non sei sicuro di quale gradino?", ctaX: "Parti dal Diario di bordo: se basta, te lo diciamo noi. Per qualsiasi dubbio, scrivici.", ctaL: "Scrivici",
};

const en: ComeContent = {
  k: "How it works", titleA: "A ladder of three steps, ", titleB: "named after seafaring.",
  stepsK: "The three steps", stepsT: "What you get, and at what price.",
  tripK: "The journey", tripT: "How it works, step by step.",
  flows: [
    { tag: "Online, on your own", name: "Diario di bordo", lead: "You do everything on the site, from first contact to payment, without needing anyone.", steps: [
      { t: "You talk to the avatar", p: "You arrive on the site and talk to the avatar, who explains how the Diario di bordo works." },
      { t: "You register", p: "You create your personal space from the dedicated page." },
      { t: "You pay online", p: "Payment is made online, in a few steps." },
      { t: "You talk to your companion", p: "The companion is activated and you talk whenever you like, at your own pace." },
      { t: "You have your notebook", p: "At the end you receive your notebook. You can stop here, continue with a refill, or move on to the paths with the psychologist." },
    ] },
    { tag: "With the psychologist", name: "I marinai del tempo", lead: "A path followed by a person, from first contact to the deposit of your archive.", steps: [
      { t: "You contact us", p: "You write or call us and we answer ourselves." },
      { t: "We propose a psychologist", p: "We introduce you to the psychologist who will follow you." },
      { t: "First interview", p: "You meet the psychologist. The video recordings are made in the same meeting." },
      { t: "We set up your companion", p: "We prepare your dedicated companion." },
      { t: "The interviews continue", p: "The meetings go on and, between one and the next, you talk to your companion." },
      { t: "Closing the corpus", p: "The psychologist writes the summary of what has emerged and you review it." },
      { t: "Signature", p: "When the summary convinces you, you sign it." },
      { t: "Deposit and paper copy", p: "The corpus is deposited on the server and we also keep a paper copy." },
    ] },
    { tag: "The broadest path", name: "I Capitani di lungo corso", lead: "The same steps as the marinai del tempo, with more hours of work.", steps: [
      { t: "More material, kept with care", p: "Besides the narrative, we can keep the most complex multimedia material: recordings, film reels, photographs." },
    ] },
  ],
  whyK: "Why it takes so long", whyT: "Time is not a cost, it is the method.",
  why1: "Thirty hours of interviews and thirty of gathering may seem a lot. They are what we need to know how you answer when someone interrupts you, what you never say, what you repeat. No one-hour summary can render a character, and an avatar without character is a voice actor, not a presence.",
  why2: "This is why each step leads to the next, and what you have already paid is deducted. We do not want you to decide everything at once; we want you to be able to stop where you feel at home.",
  faqK: "Questions", faqT: "The things we are always asked.",
  faq: [
    { q: "Can I stop after the Diario di bordo?", a: "Yes, and that is why it exists. The Diario is a product distinct from UltraRem and helps you understand whether you want to go on. If you continue, what you have paid is deducted from the price of the next step." },
    { q: "Who listens to what I tell?", a: "In the Diario, only the companion. In the certified paths, also the psychologist who follows you, who answers for what they write and signs it with their name." },
    { q: "Who can talk to my avatar?", a: "Only the people you decide. Nobody is obliged to engage in dialogue (art. 17), nobody receives unsolicited invitations, and no advertising is allowed (art. 2)." },
    { q: "Can the avatar say things I did not say?", a: "It can elaborate, but it must say so: every answer is labelled either Testimony (what you said) or Elaboration (what the system reconstructs), art. 15. And it always speaks by declaring itself an artificial intelligence system (art. 14)." },
    { q: "When will my loved ones be able to use it?", a: "Not before ninety days after your death (art. 20). Grief has its own time and the avatar must not occupy it." },
    { q: "What if one of my memories concerns other people?", a: "Their specific consent is needed (art. 18). Without it, the memory stays out." },
    { q: "How much does it cost to keep everything?", a: "In the Diario, €49 a year after the first twelve months. In the certified paths there is a custody fee from the second year (indicative amounts in the table above)." },
    { q: "Can I take part in research?", a: "If you wish, with a separate consent that is always optional (art. 25). It does not affect your path in any way." },
  ],
  ctaT: "Not sure which step?", ctaX: "Start with the Diario di bordo: if it is enough, we will tell you. For any doubt, write to us.", ctaL: "Write to us",
};

const fr: ComeContent = {
  k: "Comment ça marche", titleA: "Une échelle de trois échelons, ", titleB: "avec les noms de la navigation.",
  stepsK: "Les trois échelons", stepsT: "Ce que vous obtenez, et à quel prix.",
  tripK: "Le parcours", tripT: "Comment ça marche, étape par étape.",
  flows: [
    { tag: "En ligne, seul", name: "Diario di bordo", lead: "Vous faites tout depuis le site, du premier contact au paiement, sans avoir besoin de personne.", steps: [
      { t: "Vous parlez à l'avatar", p: "Vous arrivez sur le site et parlez à l'avatar, qui vous explique comment fonctionne le Diario di bordo." },
      { t: "Vous vous inscrivez", p: "Vous créez votre espace personnel depuis la page dédiée." },
      { t: "Vous payez en ligne", p: "Le paiement se fait en ligne, en quelques étapes." },
      { t: "Vous parlez à votre companion", p: "Le companion s'active et vous parlez quand vous voulez, à votre rythme." },
      { t: "Vous avez votre cahier", p: "À la fin vous recevez votre cahier. Vous pouvez vous arrêter là, continuer avec une recharge ou passer aux parcours avec le psychologue." },
    ] },
    { tag: "Avec le psychologue", name: "I marinai del tempo", lead: "Un parcours suivi par une personne, du premier contact au dépôt de votre archive.", steps: [
      { t: "Vous nous contactez", p: "Vous nous écrivez ou nous appelez et nous répondons nous-mêmes." },
      { t: "Nous vous proposons un psychologue", p: "Nous vous présentons le psychologue qui vous suivra." },
      { t: "Premier entretien", p: "Vous rencontrez le psychologue. Les prises de vue vidéo se font lors de la même rencontre." },
      { t: "Nous configurons votre companion", p: "Nous préparons votre companion dédié." },
      { t: "Les entretiens se poursuivent", p: "Les rencontres continuent et, entre l'une et l'autre, vous parlez à votre companion." },
      { t: "Clôture du corpus", p: "Le psychologue rédige la synthèse de ce qui est ressorti et vous la relisez." },
      { t: "Signature", p: "Quand la synthèse vous convient, vous la signez." },
      { t: "Dépôt et copie papier", p: "Le corpus est déposé sur le serveur et nous en conservons aussi une copie papier." },
    ] },
    { tag: "Le parcours le plus large", name: "I Capitani di lungo corso", lead: "Les mêmes étapes que les marinai del tempo, avec plus d'heures de travail.", steps: [
      { t: "Plus de matériel, conservé avec soin", p: "Outre le récit, nous pouvons conserver le matériel multimédia le plus complexe : enregistrements, pellicules, photographies." },
    ] },
  ],
  whyK: "Pourquoi c'est si long", whyT: "Le temps n'est pas un coût, c'est la méthode.",
  why1: "Trente heures d'entretien et trente de collecte peuvent sembler beaucoup. Ce sont celles dont nous avons besoin pour savoir comment vous répondez quand on vous interrompt, ce que vous ne dites jamais, ce que vous répétez. Aucune synthèse d'une heure ne restitue un caractère, et un avatar sans caractère est un doubleur, pas une présence.",
  why2: "C'est pourquoi chaque échelon mène au suivant, et ce que vous avez déjà payé est déduit. Nous ne voulons pas que vous décidiez tout tout de suite, nous voulons que vous puissiez vous arrêter là où vous vous sentez chez vous.",
  faqK: "Questions", faqT: "Ce qu'on nous demande toujours.",
  faq: [
    { q: "Puis-je m'arrêter après le Diario di bordo ?", a: "Oui, et c'est pour cela qu'il existe. Le Diario est un produit distinct d'UltraRem qui sert à comprendre si vous voulez aller plus loin. Si vous poursuivez, ce que vous avez payé est déduit du prix de l'échelon suivant." },
    { q: "Qui écoute ce que je raconte ?", a: "Dans le Diario, seulement le companion. Dans les parcours certifiés, aussi le psychologue qui vous suit, qui répond de ce qu'il écrit et le signe de son nom." },
    { q: "Qui peut parler avec mon avatar ?", a: "Seulement les personnes que vous décidez. Personne n'est obligé de dialoguer (art. 17), personne ne reçoit d'invitations non sollicitées, et aucune publicité n'est prévue (art. 2)." },
    { q: "L'avatar peut-il dire des choses que je n'ai pas dites ?", a: "Il peut élaborer, mais il doit le dire : chaque réponse est étiquetée Témoignage (ce que vous avez dit) ou Élaboration (ce que le système reconstruit), art. 15. Et il parle toujours en se déclarant système d'intelligence artificielle (art. 14)." },
    { q: "Quand mes proches pourront-ils l'utiliser ?", a: "Pas avant quatre-vingt-dix jours après votre mort (art. 20). La douleur a son propre temps et l'avatar ne doit pas l'occuper." },
    { q: "Et si un de mes souvenirs concerne d'autres personnes ?", a: "Leur consentement spécifique est nécessaire (art. 18). Sans lui, le souvenir reste de côté." },
    { q: "Combien coûte la conservation ?", a: "Dans le Diario, 49 € par an après les douze premiers mois. Dans les parcours certifiés, des frais de conservation s'appliquent dès la deuxième année (montants indicatifs dans le tableau ci-dessus)." },
    { q: "Puis-je participer à une recherche ?", a: "Si vous le souhaitez, avec un consentement séparé et toujours facultatif (art. 25). Cela n'influe en rien sur votre parcours." },
  ],
  ctaT: "Vous ne savez pas quel échelon choisir ?", ctaX: "Commencez par le Diario di bordo : s'il suffit, nous vous le dirons. Pour tout doute, écrivez-nous.", ctaL: "Écrivez-nous",
};

const de: ComeContent = {
  k: "So funktioniert es", titleA: "Eine Leiter mit drei Stufen, ", titleB: "mit den Namen der Seefahrt.",
  stepsK: "Die drei Stufen", stepsT: "Was du bekommst, und zu welchem Preis.",
  tripK: "Der Weg", tripT: "So funktioniert es, Schritt für Schritt.",
  flows: [
    { tag: "Online, allein", name: "Diario di bordo", lead: "Du erledigst alles auf der Website, vom ersten Kontakt bis zur Zahlung, ohne jemanden zu brauchen.", steps: [
      { t: "Du sprichst mit dem Avatar", p: "Du kommst auf die Website und sprichst mit dem Avatar, der dir erklärt, wie das Diario di bordo funktioniert." },
      { t: "Du registrierst dich", p: "Du legst deinen persönlichen Bereich auf der dafür vorgesehenen Seite an." },
      { t: "Du zahlst online", p: "Die Zahlung erfolgt online, in wenigen Schritten." },
      { t: "Du sprichst mit deinem Companion", p: "Der Companion wird aktiviert und du sprichst, wann du willst, in deinem Tempo." },
      { t: "Du hast dein Heft", p: "Am Ende erhältst du dein Heft. Du kannst hier aufhören, mit einer Aufladung weitermachen oder zu den Wegen mit dem Psychologen wechseln." },
    ] },
    { tag: "Mit dem Psychologen", name: "I marinai del tempo", lead: "Ein Weg, der von einer Person begleitet wird, vom ersten Kontakt bis zur Hinterlegung deines Archivs.", steps: [
      { t: "Du nimmst Kontakt auf", p: "Du schreibst oder rufst uns an, und wir antworten selbst." },
      { t: "Wir schlagen dir einen Psychologen vor", p: "Wir stellen dir den Psychologen vor, der dich begleiten wird." },
      { t: "Erstes Interview", p: "Du triffst den Psychologen. Die Videoaufnahmen entstehen im selben Treffen." },
      { t: "Wir richten deinen Companion ein", p: "Wir bereiten deinen persönlichen Companion vor." },
      { t: "Die Interviews gehen weiter", p: "Die Treffen gehen weiter, und zwischen zwei Treffen sprichst du mit deinem Companion." },
      { t: "Abschluss des Korpus", p: "Der Psychologe schreibt die Zusammenfassung dessen, was sich gezeigt hat, und du prüfst sie." },
      { t: "Unterschrift", p: "Wenn dich die Zusammenfassung überzeugt, unterschreibst du sie." },
      { t: "Hinterlegung und Papierkopie", p: "Das Korpus wird auf dem Server hinterlegt, und wir bewahren auch eine Papierkopie auf." },
    ] },
    { tag: "Der umfassendste Weg", name: "I Capitani di lungo corso", lead: "Dieselben Schritte wie bei den marinai del tempo, mit mehr Arbeitsstunden.", steps: [
      { t: "Mehr Material, sorgfältig aufbewahrt", p: "Neben der Erzählung können wir auch das aufwendigste Multimediamaterial aufbewahren: Aufnahmen, Filmrollen, Fotografien." },
    ] },
  ],
  whyK: "Warum es so lange dauert", whyT: "Zeit ist kein Kostenfaktor, sie ist die Methode.",
  why1: "Dreißig Stunden Interview und dreißig Stunden Sammlung mögen viel erscheinen. Sie brauchen wir, um zu wissen, wie du antwortest, wenn dich jemand unterbricht, was du nie sagst, was du wiederholst. Keine einstündige Zusammenfassung kann einen Charakter wiedergeben, und ein Avatar ohne Charakter ist ein Synchronsprecher, keine Präsenz.",
  why2: "Deshalb führt jede Stufe zur nächsten, und was du schon bezahlt hast, wird abgezogen. Wir wollen nicht, dass du alles sofort entscheidest; wir wollen, dass du dort haltmachen kannst, wo du dich zu Hause fühlst.",
  faqK: "Fragen", faqT: "Was wir immer wieder gefragt werden.",
  faq: [
    { q: "Kann ich nach dem Diario di bordo aufhören?", a: "Ja, und genau dafür gibt es es. Das Diario ist ein von UltraRem getrenntes Produkt und hilft dir zu erkennen, ob du weitergehen möchtest. Wenn du weitermachst, wird das Bezahlte vom Preis der nächsten Stufe abgezogen." },
    { q: "Wer hört zu, was ich erzähle?", a: "Im Diario nur der Companion. In den zertifizierten Wegen auch der Psychologe, der dich begleitet, der für das Geschriebene einsteht und es mit seinem Namen unterzeichnet." },
    { q: "Wer kann mit meinem Avatar sprechen?", a: "Nur, wen du bestimmst. Niemand ist zum Dialog verpflichtet (Art. 17), niemand erhält ungebetene Einladungen, und Werbung ist nicht vorgesehen (Art. 2)." },
    { q: "Kann der Avatar Dinge sagen, die ich nicht gesagt habe?", a: "Er kann ausarbeiten, muss es aber sagen: Jede Antwort ist als Zeugnis (was du gesagt hast) oder Ausarbeitung (was das System rekonstruiert) gekennzeichnet, Art. 15. Und er spricht immer mit der Angabe, ein System künstlicher Intelligenz zu sein (Art. 14)." },
    { q: "Wann können meine Liebsten ihn nutzen?", a: "Nicht vor neunzig Tagen nach deinem Tod (Art. 20). Die Trauer hat ihre eigene Zeit, und der Avatar darf sie nicht besetzen." },
    { q: "Und wenn eine meiner Erinnerungen andere Personen betrifft?", a: "Es braucht deren ausdrückliche Einwilligung (Art. 18). Ohne sie bleibt die Erinnerung draußen." },
    { q: "Was kostet es, alles aufzubewahren?", a: "Im Diario 49 € pro Jahr nach den ersten zwölf Monaten. In den zertifizierten Wegen gibt es ab dem zweiten Jahr eine Aufbewahrungsgebühr (Richtwerte in der Tabelle oben)." },
    { q: "Kann ich an einer Studie teilnehmen?", a: "Wenn du möchtest, mit einer gesonderten, stets freiwilligen Einwilligung (Art. 25). Sie hat keinerlei Einfluss auf deinen Weg." },
  ],
  ctaT: "Unsicher, welche Stufe?", ctaX: "Beginne mit dem Diario di bordo: Wenn es genügt, sagen wir es dir. Bei jedem Zweifel schreib uns.", ctaL: "Schreib uns",
};

export const come: Record<Lang, ComeContent> = { it, en, fr, de };
