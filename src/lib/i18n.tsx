import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { it, type Dict } from "./locales/it";
import { en } from "./locales/en";
import { fr } from "./locales/fr";
import { de } from "./locales/de";

export type Lang = "it" | "en" | "fr" | "de";
export const LANGS: Lang[] = ["it", "en", "fr", "de"];

const dicts: Record<Lang, Dict> = { it, en, fr, de };

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangCtx>({ lang: "it", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const stored = localStorage.getItem("ultrarem-lang") as Lang | null;
      return stored && LANGS.includes(stored) ? stored : "it";
    } catch {
      return "it";
    }
  });

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const handleSet = (l: Lang) => {
    try {
      localStorage.setItem("ultrarem-lang", l);
    } catch {}
    setLang(l);
  };

  return <LangContext.Provider value={{ lang, setLang: handleSet }}>{children}</LangContext.Provider>;
}

export function useLang() {
  return useContext(LangContext);
}

// Dizionario della lingua corrente: d.nav.project, d.footer.tagline, ...
export function useDict(): Dict {
  const { lang } = useLang();
  return dicts[lang];
}
