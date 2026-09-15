import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "it" | "en";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangCtx>({ lang: "it", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      return (localStorage.getItem("ultrarem-lang") as Lang) || "it";
    } catch {
      return "it";
    }
  });

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
