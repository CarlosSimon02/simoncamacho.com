export const allLanguages = {
  en: { name: "English", og: "en_US", sitemap: "en-US" },
  fil: { name: "Filipino", og: "fil_PH", sitemap: "fil-PH" }
} as const;

export type LanguageKeys = keyof typeof allLanguages;

export const DEFAULT_LANG = "en";
