// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";
import auth from "auth-astro";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), db(), auth()],
  adapter: netlify(),
  output: "server",
});
