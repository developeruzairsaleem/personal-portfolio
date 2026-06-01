// Measures the printed resume height against the one-page budget.
// Letter content box = 11in - 2*0.5in margins = 10in = 960px at 96dpi.
import puppeteer from "puppeteer";

const URL = process.env.RESUME_URL || "http://localhost:3210/resume";
const BUDGET = 960;

const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 720, height: 1056, deviceScaleFactor: 1 });
await page.emulateMediaType("print");
await page.goto(URL, { waitUntil: "networkidle0" });
await page.evaluateHandle("document.fonts.ready");

const h = await page.evaluate(() => {
  const el = document.querySelector(".resume");
  return Math.ceil(el.getBoundingClientRect().height);
});

console.log(`content height: ${h}px / ${BUDGET}px budget — ${h <= BUDGET ? "FITS one page" : `OVER by ${h - BUDGET}px`}`);
await browser.close();
