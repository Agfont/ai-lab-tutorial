import { defineConfig } from "astro/config";

// Fully static output: `npm run build` produces dist/, which the GitHub Action in
// .github/workflows/deploy-space.yml uploads to the Hugging Face Space.
export default defineConfig({
  output: "static",
  trailingSlash: "always"
});
