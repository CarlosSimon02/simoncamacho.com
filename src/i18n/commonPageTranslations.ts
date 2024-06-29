import type { MessgeFormUITranslationsType } from "@/components/molecules/MessageForm.astro";
import type { ProjectCardUITranslationsType } from "@/components/molecules/ProjectCard.astro";
import type { LanguageKeys } from "@/i18n/languages";

export const messageFormUITranslations: {
  [K in LanguageKeys]: MessgeFormUITranslationsType;
} = {
  en: {
    emailLabel: "Email",
    messageLabel: "Your Message",
    nameLabel: "Name",
    submitLabel: "Submit"
  },
  fil: {
    emailLabel: "Email",
    messageLabel: "Ang Iyong Mensahe",
    nameLabel: "Pangalan",
    submitLabel: "Ipadala"
  }
};

export const projectCardUITranslations: {
  [K in LanguageKeys]: ProjectCardUITranslationsType;
} = {
  en: {
    exploreAnchorLabel: "Explore",
    listOfTechUsedLabel: "List of technologies used on this project",
    screenshotAlt: "Screenshot of this project"
  },
  fil: {
    exploreAnchorLabel: "Galugarin",
    listOfTechUsedLabel:
      "Listahan ng mga teknolohiyang ginamit sa proyektong ito",
    screenshotAlt: "Screenshot ng proyektong ito"
  }
};
