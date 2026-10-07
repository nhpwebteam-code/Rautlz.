import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SITE = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.raultz.com').replace(/\/+$/, '');

const ROUTES = [
  { path: '', lastmod: '2026-10-07', priority: '1.0' },
  { path: '/services', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/website-development', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/app-development', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/ui-ux-design', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/website-design-hyderabad', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/website-design-warangal', lastmod: '2026-10-07', priority: '0.9' },
  { path: '/website-design-telangana', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/website-design-andhra-pradesh', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/portfolio', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/pricing', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/about', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/team', lastmod: '2026-10-07', priority: '0.7' },
  { path: '/contact', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/start-a-project', lastmod: '2026-10-07', priority: '0.8' },
  { path: '/portfolio/sartorial-atelier', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/portfolio/lumiere-bistro', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/portfolio/atelier-forma', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/portfolio/solaris-studio', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/portfolio/elysian-estates', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/portfolio/kaviar-menswear', lastmod: '2026-10-01', priority: '0.7' },
  { path: '/privacy', lastmod: '2026-09-15', priority: '0.3' },
  { path: '/terms', lastmod: '2026-09-15', priority: '0.3' },
  { path: '/cancellation', lastmod: '2026-09-15', priority: '0.3' },
];

const urls = ROUTES.map(
  (r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <priority>${r.priority}</priority>
  </url>`
).join('\n');

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

const outputPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(outputPath, sitemapContent.trim() + '\n', 'utf8');
console.log(`Generated public/sitemap.xml with ${ROUTES.length} real indexable routes.`);
