import { DEFAULT_LANG, allLanguages } from "@/i18n/languages";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

const createSitemapLocales = () => {
  let sitemapLocales = {};

  for (const key in allLanguages) {
    if (allLanguages.hasOwnProperty(key)) {
      sitemapLocales[key] = allLanguages[key].sitemap;
    }
  }

  return sitemapLocales;
};

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fil"]
  },
  integrations: [
    tailwind(),
    sitemap({
      i18n: {
        defaultLocale: DEFAULT_LANG,
        locales: createSitemapLocales()
      }
    })
  ],
  site: "https://simoncamacho.com",
  trailingSlash: "never"
});
