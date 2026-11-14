import { Page, Hero, Sec, Cols, Card, CtaBand, RED, INK } from "@/components/Mag";
import { useLang } from "@/lib/i18n";

export const CONTACT = {
  email: "contatti@ultrarem.eu",
  phone: "010 7776530",
  tel: "+390107776530",
  pec: "ultrarem@pecimprese.it",
  legal: ["Viale Cassala 30", "20143 Milano (MI)"],
  ops: ["Via Gabriele D'Annunzio 2, int. 26C", "16121 Genova (GE)"],
};

const T = {
  it: {
    k: "Contatti", a: "Scrivici, ", b: "ti rispondiamo noi.",
    lead: "Per informazioni, per un incontro o per cominciare dal Diario di bordo basta una mail o una telefonata. Se vuoi, ci vediamo a Milano o a Genova.",
    wK: "Come raggiungerci", wT: "Mail e telefono.",
    mail: "Scrivici", mailX: "Ti rispondiamo noi, di persona.", phone: "Telefono", phoneX: "Chiamaci, rispondiamo noi.",
    sK: "Dove siamo", sT: "Due sedi.", legal: "Sede legale", ops: "Sede operativa", map: "Apri la mappa",
    cK: "La società", cT: "UltraRem S.r.l.", cX: "Start-up innovativa. Partita IVA e codice fiscale 14404030968, REA MI-2780427. PEC: ",
    ctaT: "Preferisci cominciare subito?", ctaX: "Creazione del Diario: 290 € per dieci ore di raccolta, PDF e dodici mesi di conservazione. Consultazione separata: 20 €/mese. Altre dieci ore di raccolta: 200 €.", ctaA: "Inizia dal Diario di bordo", ctaB: "Scrivici",
  },
  en: {
    k: "Contact", a: "Write to us, ", b: "we reply in person.",
    lead: "For information, to arrange a meeting or to start with the Diario di bordo, an email or a phone call is enough. If you wish, we can meet in Milan or Genoa.",
    wK: "How to reach us", wT: "Email and phone.",
    mail: "Write to us", mailX: "We reply ourselves, in person.", phone: "Phone", phoneX: "Call us, we answer ourselves.",
    sK: "Where we are", sT: "Two offices.", legal: "Registered office", ops: "Operating office", map: "Open the map",
    cK: "The company", cT: "UltraRem S.r.l.", cX: "Innovative start-up. VAT and tax code 14404030968, REA MI-2780427. PEC: ",
    ctaT: "Would you rather start right away?", ctaX: "Diary creation: €290 for ten gathering hours, a PDF and twelve months of storage. Separate consultation: €20/month. Ten more gathering hours: €200.", ctaA: "Start with the Diario di bordo", ctaB: "Write to us",
  },
  fr: {
    k: "Contact", a: "Écrivez-nous, ", b: "nous répondons nous-mêmes.",
    lead: "Pour une information, un rendez-vous ou pour commencer par le Diario di bordo, un e-mail ou un appel suffit. Si vous le souhaitez, nous nous voyons à Milan ou à Gênes.",
    wK: "Pour nous joindre", wT: "E-mail et téléphone.",
    mail: "Écrivez-nous", mailX: "Nous répondons nous-mêmes.", phone: "Téléphone", phoneX: "Appelez-nous, nous répondons nous-mêmes.",
    sK: "Où nous trouver", sT: "Deux sites.", legal: "Siège social", ops: "Siège opérationnel", map: "Ouvrir la carte",
    cK: "La société", cT: "UltraRem S.r.l.", cX: "Start-up innovante. TVA et code fiscal 14404030968, REA MI-2780427. PEC : ",
    ctaT: "Vous préférez commencer tout de suite ?", ctaX: "Création du Diario : 290 € pour dix heures de collecte, PDF et douze mois de conservation. Consultation séparée : 20 €/mois. Dix heures supplémentaires : 200 €.", ctaA: "Commencer par le Diario di bordo", ctaB: "Écrivez-nous",
  },
  de: {
    k: "Kontakt", a: "Schreiben Sie uns, ", b: "wir antworten persönlich.",
    lead: "Für Auskünfte, ein Treffen oder den Einstieg mit dem Diario di bordo genügt eine E-Mail oder ein Anruf. Wenn Sie möchten, treffen wir uns in Mailand oder Genua.",
    wK: "So erreichen Sie uns", wT: "E-Mail und Telefon.",
    mail: "Schreiben Sie uns", mailX: "Wir antworten selbst, persönlich.", phone: "Telefon", phoneX: "Rufen Sie uns an, wir nehmen selbst ab.",
    sK: "Wo wir sind", sT: "Zwei Standorte.", legal: "Sitz der Gesellschaft", ops: "Operativer Sitz", map: "Karte öffnen",
    cK: "Die Gesellschaft", cT: "UltraRem S.r.l.", cX: "Innovatives Start-up. USt-IdNr. und Steuernummer 14404030968, REA MI-2780427. PEC: ",
    ctaT: "Lieber gleich beginnen?", ctaX: "Erstellung des Diario: 290 € für zehn Stunden Sammlung, PDF und zwölf Monate Aufbewahrung. Abfrage gesondert: 20 €/Monat. Weitere zehn Stunden Sammlung: 200 €.", ctaA: "Mit dem Diario di bordo beginnen", ctaB: "Schreiben Sie uns",
  },
};

export default function Contatti() {
  const { lang } = useLang();
  const t = (T as Record<string, typeof T.it>)[lang] ?? T.it;
  const big = { fontFamily: "'Bodoni Moda', serif", fontWeight: 900, fontSize: 24, lineHeight: 1.15, color: INK, textDecoration: "none", wordBreak: "break-word" as const };
  const map = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
  const sede = (label: string, lines: string[], red = false) => (
    <Card k={label} t={lines[0]} red={red}>
      <p style={{ margin: 0 }}>{lines[1]}</p>
      <a href={map(lines.join(", "))} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", fontWeight: 700 }}>{t.map}</a>
    </Card>
  );
  return (
    <Page>
      <Hero dark k={t.k} title={<>{t.a}<em style={{ color: "#ff3b52" }}>{t.b}</em></>} lead={t.lead} />

      <Sec k={t.wK} title={t.wT}>
        <Cols gap={20}>
          <Card k={t.wK} t={t.mail}>
            <p style={{ margin: 0 }}>{t.mailX}</p>
            <a href={`mailto:${CONTACT.email}`} style={{ ...big, color: RED }}>{CONTACT.email}</a>
          </Card>
          <Card k={t.wK} t={t.phone}>
            <p style={{ margin: 0 }}>{t.phoneX}</p>
            <a href={`tel:${CONTACT.tel}`} style={{ ...big, color: RED }}>{CONTACT.phone}</a>
          </Card>
        </Cols>
      </Sec>

      <Sec k={t.sK} title={t.sT} bg="#f2f2f2">
        <Cols gap={20}>
          {sede(t.legal, CONTACT.legal)}
          {sede(t.ops, CONTACT.ops, true)}
        </Cols>
      </Sec>

      <Sec k={t.cK} title={t.cT}>
        <p style={{ margin: 0, maxWidth: 760 }}>{t.cX}<a href={`mailto:${CONTACT.pec}`} style={{ color: RED, fontWeight: 700 }}>{CONTACT.pec}</a></p>
      </Sec>

      <CtaBand title={t.ctaT} text={t.ctaX} a={{ href: "/percorsi/diario-di-bordo", label: t.ctaA }} b={{ href: `mailto:${CONTACT.email}`, label: t.ctaB }} />
    </Page>
  );
}
