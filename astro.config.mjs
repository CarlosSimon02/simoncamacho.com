import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fil"]
  },
  integrations: [tailwind(), sitemap()],
  site: "https://simoncamacho.com",
  trailingSlash: "never"
});
