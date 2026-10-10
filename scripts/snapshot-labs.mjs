// Snapshot lab metadata, task sources and recorded run output from the
// ai-agents-basic repo into src/data/snapshot.json, so the site needs no API.
//
// Usage: node scripts/snapshot-labs.mjs [path-to-ai-agents-basic]
// Recorded output comes from each lab's markers/task<N>_log.txt, written when
// the task was last run locally.
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

const LAB_DIR_PATTERN = /^\d+-/;
const TASK_FILE_PATTERN = /^task_(\d+)_.*\.py$/;

const backendDir = resolve(process.argv[2] ?? process.env.BACKEND_DIR ?? "../ai-agents-basic");
const outFile = resolve("src/data/snapshot.json");

function readText(path) {
  return existsSync(path) ? readFileSync(path, "utf-8") : "";
}

function listFiles(dir) {
  return existsSync(dir)
    ? readdirSync(dir, { withFileTypes: true }).filter((e) => e.isFile()).map((e) => e.name).sort()
    : [];
}

function taskTitle(filename) {
  return filename
    .replace(/\.py$/, "")
    .replace(/^task_\d+_/, "")
    .replace(/_/g, " ")
    .trim()
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const labs = readdirSync(backendDir, { withFileTypes: true })
  .filter((e) => e.isDirectory() && LAB_DIR_PATTERN.test(e.name))
  .map((e) => e.name)
  .sort()
  .map((directory) => {
    const labPath = join(backendDir, directory);
    const markersDir = join(labPath, "markers");
    const markers = listFiles(markersDir);
    const readme = readText(join(labPath, "README.md"));
    const title = readme.split("\n")[0]?.replace(/^#+\s*/, "").trim() || directory;

    const tasks = listFiles(labPath)
      .map((filename) => ({ filename, match: filename.match(TASK_FILE_PATTERN) }))
      .filter(({ match }) => match)
      .map(({ filename, match }) => {
        const id = Number(match[1]);
        const completePattern = new RegExp(`task_?${id}(?!\\d).*complete.*\\.txt$`, "i");
        const logFile = markers.find((name) => new RegExp(`^task_?${id}_log\\.txt$`, "i").test(name));
        return {
          id,
          filename,
          title: taskTitle(filename),
          marker_complete: markers.some((name) => completePattern.test(name)),
          source: readText(join(labPath, filename)),
          output: logFile ? readText(join(markersDir, logFile)) : null,
        };
      })
      .sort((a, b) => a.id - b.id);

    return { slug: directory, title, directory, tasks };
  });

if (labs.length === 0) {
  console.error(`No labs found in ${backendDir}`);
  process.exit(1);
}

writeFileSync(outFile, JSON.stringify({ labs }, null, 2) + "\n");
const taskCount = labs.reduce((n, lab) => n + lab.tasks.length, 0);
const missing = labs.flatMap((lab) => lab.tasks.filter((t) => !t.output).map((t) => `${lab.slug}/task ${t.id}`));
console.log(`Wrote ${labs.length} labs / ${taskCount} tasks to ${outFile}`);
if (missing.length) console.log(`No recorded output for: ${missing.join(", ")}`);
