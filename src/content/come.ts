import type { Lang } from "@/lib/i18n";

// Testi della pagina Come funziona (le schede dei tre gradini stanno in home*.ts).
export interface ComeContent {
  k: string; titleA: string; titleB: string;
  stepsK: string; stepsT: string;
  tripK: string; tripT: string;
  tappe: { n: string; t: string; p: string }[];
  whyK: string; whyT: string; why1: string; why2: string;
  faqK: string; faqT: string;
  faq: { q: string; a: string }[];
  ctaT: string; ctaX: string; ctaL: string;
}

const it: ComeContent = {
  k: "Come funziona", titleA: "Una scala di tre gradini, ", titleB: "con i nomi della navigazione.",
  stepsK: "I tre gradini", stepsT: "Che cosa ottieni, e a che prezzo.",
  tripK: "Il viaggio", tripT: "Dall'ora zero all'archivio, in sei tappe.",
  tappe: [
    { n: "1", t: "Cominci dal Diario", p: "Parli con il companion quando vuoi. Nessuna intervista, nessuno psicologo, nessun impegno oltre il primo pacchetto. Alla fine hai un quaderno in PDF della tua narrazione e, se vuoi, una voce che risponde solo con ciò che il diario contiene." },
    { n: "2", t: "Incontri lo psicologo", p: "Se decidi di proseguire, entri nel percorso certificato: 10 ore di intervista con uno psicologo iscritto all'Albo, formato sul protocollo di UltraRem, e 10 ore di raccolta con il companion tra un incontro e l'altro." },
    { n: "3", t: "Firmi il tuo progetto", p: "Lo psicologo redige la sintesi di ciò che è emerso e la firma (art. 7). Tu la leggi, la correggi, la approvi. Solo a quel punto è la tua identità, e non l'interpretazione di qualcuno." },
    { n: "4", t: "Scegli la tua forma", p: "La voce viene clonata (con tecnologia ElevenLabs, integrata da QBT) e puoi avere un avatar semplice. Nel percorso completo l'avatar è realizzato con riprese in studio, e su richiesta si può aggiungere l'elaborazione tridimensionale." },
    { n: "5", t: "Decidi chi può parlarti", p: "Stabilisci tu chi potrà dialogare con il tuo avatar e a quali condizioni. Quello che non decidi non accade (art. 3). In ogni caso, nei primi novanta giorni dopo la tua morte l'avatar non parla ai familiari (art. 20)." },
    { n: "6", t: "Custodiamo", p: "Il primo anno è compreso nei percorsi certificati. Dal secondo anno c'è un canone di custodia, che copre la conservazione sicura, la governance degli accessi e un uso interattivo ragionevole." },
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
  tripK: "The journey", tripT: "From hour zero to the archive, in six stages.",
  tappe: [
    { n: "1", t: "You start with the Diario", p: "You talk to the companion whenever you like. No interview, no psychologist, no commitment beyond the first package. At the end you have a PDF notebook of your narrative and, if you wish, a voice that answers only with what the diary contains." },
    { n: "2", t: "You meet the psychologist", p: "If you decide to continue, you enter the certified path: 10 hours of interviews with a psychologist registered with the professional Order, trained on UltraRem's protocol, and 10 hours of gathering with the companion between one meeting and the next." },
    { n: "3", t: "You sign your project", p: "The psychologist writes the summary of what has emerged and signs it (art. 7). You read it, correct it, approve it. Only then is it your identity, and not someone's interpretation." },
    { n: "4", t: "You choose your form", p: "Your voice is cloned (with ElevenLabs technology, integrated by QBT) and you can have a simple avatar. In the complete path the avatar is made with studio filming, and three-dimensional rendering can be added on request." },
    { n: "5", t: "You decide who can talk to you", p: "You establish who may talk with your avatar and under what conditions. What you do not decide does not happen (art. 3). In any case, in the first ninety days after your death the avatar does not speak to family members (art. 20)." },
    { n: "6", t: "We keep it safe", p: "The first year is included in the certified paths. From the second year there is a custody fee, which covers secure preservation, access governance and reasonable interactive use." },
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
  tripK: "Le voyage", tripT: "De l'heure zéro à l'archive, en six étapes.",
  tappe: [
    { n: "1", t: "Vous commencez par le Diario", p: "Vous parlez au companion quand vous voulez. Aucun entretien, aucun psychologue, aucun engagement au-delà du premier pack. À la fin vous avez un cahier PDF de votre narration et, si vous le souhaitez, une voix qui répond uniquement avec ce que contient le journal." },
    { n: "2", t: "Vous rencontrez le psychologue", p: "Si vous décidez de poursuivre, vous entrez dans le parcours certifié : 10 heures d'entretien avec un psychologue inscrit à l'Ordre, formé au protocole d'UltraRem, et 10 heures de collecte avec le companion entre deux rencontres." },
    { n: "3", t: "Vous signez votre projet", p: "Le psychologue rédige la synthèse de ce qui est ressorti et la signe (art. 7). Vous la lisez, la corrigez, l'approuvez. C'est seulement alors que c'est votre identité, et non l'interprétation de quelqu'un." },
    { n: "4", t: "Vous choisissez votre forme", p: "Votre voix est clonée (avec la technologie ElevenLabs, intégrée par QBT) et vous pouvez avoir un avatar simple. Dans le parcours complet, l'avatar est réalisé avec des prises de vue en studio, et la modélisation tridimensionnelle peut être ajoutée sur demande." },
    { n: "5", t: "Vous décidez qui peut vous parler", p: "Vous établissez qui pourra dialoguer avec votre avatar et à quelles conditions. Ce que vous ne décidez pas n'arrive pas (art. 3). Dans tous les cas, durant les quatre-vingt-dix premiers jours après votre mort, l'avatar ne parle pas à vos proches (art. 20)." },
    { n: "6", t: "Nous conservons", p: "La première année est comprise dans les parcours certifiés. À partir de la deuxième année, des frais de conservation couvrent la conservation sécurisée, la gouvernance des accès et un usage interactif raisonnable." },
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
  tripK: "Die Reise", tripT: "Von der Stunde null bis zum Archiv, in sechs Etappen.",
  tappe: [
    { n: "1", t: "Du beginnst mit dem Diario", p: "Du sprichst mit dem Companion, wann du willst. Kein Interview, kein Psychologe, keine Verpflichtung über das erste Paket hinaus. Am Ende hast du ein PDF-Heft deiner Erzählung und, wenn du möchtest, eine Stimme, die nur mit dem antwortet, was das Tagebuch enthält." },
    { n: "2", t: "Du triffst den Psychologen", p: "Wenn du dich zum Weitermachen entschließt, trittst du in den zertifizierten Weg ein: 10 Stunden Interview mit einem in der Berufskammer eingetragenen Psychologen, geschult im UltraRem-Protokoll, und 10 Stunden Sammlung mit dem Companion zwischen den Treffen." },
    { n: "3", t: "Du unterzeichnest dein Projekt", p: "Der Psychologe verfasst die Zusammenfassung dessen, was sich gezeigt hat, und unterzeichnet sie (Art. 7). Du liest sie, korrigierst sie, genehmigst sie. Erst dann ist es deine Identität und nicht die Deutung eines anderen." },
    { n: "4", t: "Du wählst deine Form", p: "Deine Stimme wird geklont (mit ElevenLabs-Technologie, von QBT integriert), und du kannst einen einfachen Avatar haben. Im kompletten Weg entsteht der Avatar mit Studioaufnahmen, und auf Wunsch kann eine dreidimensionale Ausarbeitung hinzukommen." },
    { n: "5", t: "Du entscheidest, wer mit dir sprechen darf", p: "Du legst fest, wer mit deinem Avatar sprechen darf und unter welchen Bedingungen. Was du nicht entscheidest, geschieht nicht (Art. 3). In jedem Fall spricht der Avatar in den ersten neunzig Tagen nach deinem Tod nicht zu den Angehörigen (Art. 20)." },
    { n: "6", t: "Wir bewahren auf", p: "Das erste Jahr ist in den zertifizierten Wegen inbegriffen. Ab dem zweiten Jahr gibt es eine Aufbewahrungsgebühr, die sichere Aufbewahrung, Zugriffssteuerung und eine angemessene interaktive Nutzung abdeckt." },
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
