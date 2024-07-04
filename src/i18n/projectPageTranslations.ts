import type { AboutThisProjectSectionUITranslationsType } from "@/components/organisms/project-page/AboutThisProject.astro";
import type { MessageMeSectionUITranslationsType } from "@/components/organisms/project-page/MessageMe.astro";
import type { OtherProjectsSectionUITranslationsType } from "@/components/organisms/project-page/OtherProjects.astro";
import type { ProjectInsightsSectionUITranslationsType } from "@/components/organisms/project-page/ProjectInsights.astro";
import type { LanguageKeys } from "@/i18n/languages";

import {
  messageFormUITranslations,
  projectCardUITranslations
} from "@/i18n/commonPageTranslations";

type ProjectPageTranslationsType = {
  aboutThisProject: AboutThisProjectSectionUITranslationsType;
  messageMe: MessageMeSectionUITranslationsType;
  otherProjects: OtherProjectsSectionUITranslationsType;
  projectInsights: ProjectInsightsSectionUITranslationsType;
};

export const projectPageTranslationsType: {
  [K in LanguageKeys]: ProjectPageTranslationsType;
} = {
  en: {
    aboutThisProject: {
      descriptionLabel: "Description",
      listOfTechUsedLabel: "List of technologies used on this project",
      previewProjectLabel: "Preview Project",
      thumbnailAlt: "Screenshot of this project",
      title: "About This Project",
      viewCodeLabel: "View Code",
      webStackAndExplanationLabel: "Web Stack and Explanation"
    },
    messageMe: {
      letsBuildTogetherContent:
        "Got an idea you want to bring to life? Let's team up and make something amazing. Whether it's a web app, an online store, or a personal portfolio, I have the experience and passion to help you make it happen.",
      letsBuildTogetherLabel: "Let's Build Something Together",
      messageForm: messageFormUITranslations.en,
      title: "Message Me"
    },
    otherProjects: {
      projectCardUI: projectCardUITranslations.en,
      title: "Other Projects"
    },
    projectInsights: {
      lessonsLearnedLabel: "Lessons Learned",
      problemsAndThoughtProcessLabel: "Problems and Thought Process",
      purposeAndGoalLabel: "Purpose and Goal",
      title: "Project Insights"
    }
  },
  fil: {
    aboutThisProject: {
      descriptionLabel: "Deskripsyon",
      listOfTechUsedLabel:
        "Listahan ng mga teknolohiyang ginamit sa proyektong ito",
      previewProjectLabel: "Silipin ang Proyekto",
      thumbnailAlt: "<i>Screenshot</i> ng proyektong ito",
      title: "Tungkol sa Proyektong Ito",
      viewCodeLabel: "Tingnan ang <i>Code</i>",
      webStackAndExplanationLabel: "<i>Web Stack</i> at Paliwanag"
    },
    messageMe: {
      letsBuildTogetherContent:
        "May ideya ka ba na gusto mong maisakatuparan? Magtulungan tayo at gumawa ng kahanga-hangang proyekto. Kung ito man ay isang <i>web app</i>, <i>online store</i>, o personal na <i>portfolio</i>, mayroon akong karanasan at dedikasyon upang matulungan kang mangyari ito.",
      letsBuildTogetherLabel: "Bumuo Tayo ng Proyekto",
      messageForm: messageFormUITranslations.fil,
      title: "Magmensahe"
    },
    otherProjects: {
      projectCardUI: projectCardUITranslations.fil,
      title: "Ibang mga Gawa"
    },
    projectInsights: {
      lessonsLearnedLabel: "Mga Aral na Natutunan",
      problemsAndThoughtProcessLabel: "Mga Problema at Proseso ng Pag-iisip",
      purposeAndGoalLabel: "Layunin at Mithiin",
      title: "Nabatid sa Proyekto"
    }
  }
};
