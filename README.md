# Tutorial Frontend (Astro)

This UI maps each lab folder from the repository to a route and each task to one or more REST API calls served by the Flask backend.

## Routes

- `/` lists all lab directories discovered by the API.
- `/:lab/` shows task cards for a specific lab directory.
- `/:lab/tasks/:task/` shows task source, marker status, and run controls.

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

## Deploy to Hostinger

```bash
npm run build
```

Upload the contents of `dist/` to the domain's `public_html` folder in
Hostinger (File Manager or FTP). It doesn't need a Node.js app slot.
