import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const indexPath = resolve(__dirname, 'index.html');
const outPath = resolve(__dirname, 'proposal.pdf');

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();

await page.goto(`file://${indexPath}`, { waitUntil: 'networkidle0' });

await page.evaluateHandle('document.fonts.ready');
await new Promise(r => setTimeout(r, 1000));

await page.evaluate(() => {
  document.querySelectorAll('[data-reveal]').forEach(el => el.classList.add('is-revealed'));
});

await page.pdf({
  path: outPath,
  format: 'Letter',
  landscape: true,
  printBackground: true,
  preferCSSPageSize: true,
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});

await browser.close();
console.log(`Wrote ${outPath}`);
