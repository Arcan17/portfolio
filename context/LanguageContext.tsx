"use client";

import { createContext, useContext, useState } from "react";
import type { Lang } from "@/lib/translations";
import translations from "@/lib/translations";

interface LanguageContextType {
  lang: Lang;
  toggle: () => void;
  t: (typeof translations)[Lang];
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "es",
  toggle: () => {},
  t: translations.es,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
