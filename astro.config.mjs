import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
// import vercelStatic from "@astrojs/vercel";

import partytown from "@astrojs/partytown";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  // output: "static",
  // adapter: vercelStatic(),
  integrations: [tailwind(), partytown()],

  output: "static",
  adapter: vercel(),
});