// Renders the live /resume route to public/uzair-saleem-resume.pdf via headless
// Chromium, so the downloadable PDF always matches the on-site page.
//
//   npm run resume                       # spins up its own dev server
//   RESUME_URL=http://localhost:3000/resume npm run resume   # reuse a running one
//
// Page size + margins come from the CSS @page rule (preferCSSPageSize), keeping
// resume.css the single source of layout truth.

import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const OUT = resolve(ROOT, "public/uzair-saleem-resume.pdf");
const PORT = process.env.RESUME_PORT || "4329";
const URL = process.env.RESUME_URL || `http://localhost:${PORT}/resume`;

function waitForUrl(url, timeoutMs = 120000) {
  const start = Date.now();
  return new Promise((res, rej) => {
    const tick = async () => {
      try {
        const r = await fetch(url, { method: "GET" });
        if (r.ok) return res();
      } catch {
        /* server not up yet */
      }
      if (Date.now() - start > timeoutMs) return rej(new Error(`Timed out waiting for ${url}`));
      setTimeout(tick, 1000);
    };
    tick();
  });
}

async function main() {
  let server = null;

  if (!process.env.RESUME_URL) {
    console.log(`Starting dev server on port ${PORT}…`);
    server = spawn("npm", ["run", "dev", "--", "-p", PORT], {
      cwd: ROOT,
      detached: true,
      stdio: "ignore",
    });
  }

  try {
    console.log(`Waiting for ${URL}…`);
    await waitForUrl(URL);

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(URL, { waitUntil: "networkidle0", timeout: 120000 });
    await page.evaluateHandle("document.fonts.ready");

    await mkdir(dirname(OUT), { recursive: true });
    await page.pdf({
      path: OUT,
      printBackground: true,
      preferCSSPageSize: true,
    });

    await browser.close();
    console.log(`Wrote ${OUT}`);
  } finally {
    if (server?.pid) {
      try {
        process.kill(-server.pid, "SIGTERM");
      } catch {
        /* already gone */
      }
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
