# Tutorial Frontend (Astro)

A static site that turns each lab folder of the `ai-agents-basic` repo into a
page, and each task into a page showing its source and recorded run output.

## Routes

- `/` lists all labs in the snapshot.
- `/:lab/` shows the lab overview and its task cards.
- `/:lab/tasks/:task/` shows the task source, completion marker status, and
  recorded output.

Lab overviews and per-task summaries are hand-written in `src/data/labs.ts`;
update them when a lab's tasks change.

## Data source

The site is fully static and doesn't call an API. Lab lists, task sources,
completion markers and run output come from `src/data/snapshot.json`, which is
generated from the `ai-agents-basic` repo:

```bash
npm run snapshot                       # reads ../ai-agents-basic by default
node scripts/snapshot-labs.mjs <path>  # or point at another checkout
```

Run output is taken from each lab's `markers/task<N>_log.txt`, so run the
tasks locally first to refresh it. Re-run the snapshot whenever labs change,
and commit the updated `snapshot.json`.

## Run locally

```bash
npm install
npm run dev
```

Default URL: `http://localhost:4321`

## Deploy to Hugging Face Spaces

The site is hosted on the private static Space
[`Agfont/ai-lab-tutorial`](https://huggingface.co/spaces/Agfont/ai-lab-tutorial).
GitHub is the source of truth; the Space holds only build output.

Deployment is handled entirely by GitHub Actions. Every push to `main` runs
`.github/workflows/deploy-space.yml`, which:

1. builds the site with Node 26,
2. copies `space/README.md` (the Space config) into `dist/`,
3. uploads `dist/` as the Space's full contents, with the source commit hash
   as the commit message. Files in the Space that are no longer in `dist/`
   are deleted.

It can also be started by hand from the repo's Actions tab ("Run workflow").
Don't edit the Space directly, because the next deploy overwrites it.

The workflow needs a Hugging Face **write** token, fine-grained to this Space
only, saved as the repository secret `HF_TOKEN` (Settings → Secrets and
variables → Actions).

Internal links are built with `url()` from `src/utils/url.ts` rather than
hard-coded `/` paths, so the site keeps working if `base` is ever set in
`astro.config.mjs`.
