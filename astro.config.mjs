import { defineConfig } from "astro/config";

// Fully static output: `npm run build` produces dist/ for upload to Hostinger public_html.
export default defineConfig({
  output: "static",
  trailingSlash: "always"
});
