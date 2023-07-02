import { defineConfig, sharpImageService } from "astro/config";

import svelte from "@astrojs/svelte";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:3000",
  integrations: [svelte(), sitemap(), robotsTxt()],
  experimental: {
    assets: true,
  },
  image: {
    service: sharpImageService(),
  },
});
