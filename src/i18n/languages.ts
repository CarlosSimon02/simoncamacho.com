export const allLanguages = {
  en: { name: "English", og: "en_US" },
  fil: { name: "Filipino", og: "fil_PH" }
} as const;

export type LanguageKeys = keyof typeof allLanguages;

export const DEFAULT_LANG = "en";
