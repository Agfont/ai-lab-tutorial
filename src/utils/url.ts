// Prefix a site-relative path with Astro's base, so links keep working when
// the site is served from a subfolder (set `base` in astro.config.mjs).
export function url(path = ""): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return `${base}/${path.replace(/^\//, "")}`;
}
