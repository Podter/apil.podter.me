import { defineConfig } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://apil.podter.me",
  output: "static",
  integrations: [svelte(), sitemap(), robotsTxt()],
});
