// news-image-20261122 — "The World in One Day — Sunday, 22 November 2026".
// The image is drawn at build time and shipped in this repository as
// entry.png; the program only copies it to the output directory, so both
// runs write byte-identical output. No network is used.
import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
