// Prefix a site-relative path with Astro's base, so links keep working when
// the site is served from a subfolder (set `base` in astro.config.mjs).
// Folder paths point at their index.html explicitly: Hugging Face static
// Spaces don't resolve directory indexes and redirect them to huggingface.co.
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const file = path.replace(/^\//, "").replace(/(^|\/)$/, "$1index.html");
  return `${base}/${file}`;
}
