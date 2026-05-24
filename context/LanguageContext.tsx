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
  lang: "en",
  toggle: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
