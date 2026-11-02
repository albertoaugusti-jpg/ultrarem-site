import { useLang } from "@/lib/i18n";
import { it } from "./home";
import { en } from "./home.en";
import { fr } from "./home.fr";
import { de } from "./home.de";

const all = { it, en, fr, de };

// Contenuti della Home nella lingua scelta.
export function useHome() {
  const { lang } = useLang();
  return all[lang] ?? it;
}

// Indirizzi delle pagine dei tre percorsi, nello stesso ordine di ladder.steps.
export const SLUGS = ["diario-di-bordo", "i-marinai-del-tempo", "i-capitani-di-lungo-corso"];
