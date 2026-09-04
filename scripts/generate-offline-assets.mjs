import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const assets = [
  "./",
  "./audio/",
  "./audio/app.js",
  "./audio/index.html",
  "./audio/style.css",
  "./icons/icon.svg",
  "./index.html",
  "./manifest.webmanifest",
  "./offline-assets.js",
  "./picturebook/",
  "./picturebook/a4_books.js",
  "./picturebook/app.js",
  "./picturebook/index.html",
  "./picturebook/style.css",
  "./pwa.js",
  "./shared/config.js",
  "./sw.js",
];

async function collectFiles(relativeDirectory) {
  const absoluteDirectory = path.join(root, relativeDirectory);
  const entries = await readdir(absoluteDirectory, { withFileTypes: true });
  for (const entry of entries) {
    const relativePath = path.join(relativeDirectory, entry.name);
    if (entry.isDirectory()) {
      await collectFiles(relativePath);
    } else if (!entry.name.startsWith(".")) {
      assets.push(`./${relativePath.split(path.sep).join("/")}`);
    }
  }
}

await collectFiles("picturebook/assets");
await collectFiles("picturebook/audio");

const contents = `self.ECCR_OFFLINE_ASSETS = ${JSON.stringify([...new Set(assets)].sort(), null, 2)};\n`;
await writeFile(path.join(root, "offline-assets.js"), contents);
