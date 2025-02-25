// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db()],
  adapter: netlify(),
  output: "server",
});
