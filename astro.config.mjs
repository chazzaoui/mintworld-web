import { defineConfig } from "astro/config";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
import react from "@astrojs/react";

// https://astro.build/config
import rome from "astro-rome";

// https://astro.build/config

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://mintworldgame.com",
  integrations: [
    tailwind(),
    react(),
    prefetch(),
    rome(),
    partytown(),
    mdx(),
    image(),
    sitemap(),
    robotsTxt(),
  ],
});
