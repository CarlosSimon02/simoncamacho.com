import type { ScrollNumbersUITranslationsType } from "@/components/molecules/ScrollNumbers.astro";
import type { SocialsUITranslationsType } from "@/components/molecules/Socials.astro";
import type { FooterUITranslationsType } from "@/components/organisms/Footer.astro";
import type { HeaderUITranslationsType } from "@/components/organisms/Header.astro";
import type { MobileMenuUITranslationsType } from "@/components/organisms/MobileMenu.astro";
import type { LanguageKeys } from "@/i18n/languages";

export type UILayoutTranslationsType = {
  footer: FooterUITranslationsType;
  header: HeaderUITranslationsType;
  mobileMenu: MobileMenuUITranslationsType;
  scrollNumbers: ScrollNumbersUITranslationsType;
  skipToMainContent: string;
  socials: SocialsUITranslationsType;
};

const mobileMenuTranslations: {
  [K in LanguageKeys]: MobileMenuUITranslationsType;
} = {
  en: {
    langSelectLabel: "Select language",
    navLabels: {
      about: "About",
      connect: "Connect",
      intro: "Intro",
      projects: "Projects"
    },
    themeToggleLabels: {
      dark: "Toggle dark mode",
      light: "Toggle light mode"
    }
  },
  fil: {
    langSelectLabel: "Pumili ng Wika",
    navLabels: {
      about: "Tungkol",
      connect: "Kumonekta",
      intro: "Bungad",
      projects: "Mga Gawa"
    },
    themeToggleLabels: {
      dark: "Piliin ang dark mode",
      light: "Piliin ang light mode"
    }
  }
};

const socialsTranslations: {
  [K in LanguageKeys]: SocialsUITranslationsType;
} = {
  en: {
    socialsLabel: "List of sections to navigate"
  },
  fil: {
    socialsLabel: "Listahan ng mga seksyon na pwedeng puntahan"
  }
};

export const uiLayoutTranslations: {
  [K in LanguageKeys]: UILayoutTranslationsType;
} = {
  en: {
    footer: {
      attribution: "Designed and Built by Simon Camacho",
      ...socialsTranslations.en
    },
    header: {
      navigateToHomeLabel: "To home page",
      ...mobileMenuTranslations.en
    },
    mobileMenu: mobileMenuTranslations.en,
    scrollNumbers: {
      sectionsLabel: "List of sections to navigate"
    },
    skipToMainContent: "Skip to main content",
    socials: socialsTranslations.en
  },
  fil: {
    footer: {
      attribution: "Dinisenyo at Binuo ni Simon Camacho",
      ...socialsTranslations.fil
    },
    header: {
      navigateToHomeLabel: "Pumunta sa home page",
      ...mobileMenuTranslations.fil
    },
    mobileMenu: mobileMenuTranslations.fil,
    scrollNumbers: {
      sectionsLabel: "Listahan ng mga seksyon na pwedeng puntahan"
    },
    skipToMainContent: "Pumunta sa nilalaman",
    socials: socialsTranslations.fil
  }
};
