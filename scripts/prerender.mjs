import { readFile, writeFile, mkdir, rm, copyFile } from "node:fs/promises";
import { render, seoPages, getSeo, structuredData } from "../.prerender/entry-server.js";
const template = await readFile("dist/index.html", "utf8");
const escape = s => s.replaceAll("&", "&amp;").replaceAll('"', "&quot;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
const paths = [...Object.keys(seoPages), "/officina-immagini", "/404"];
await copyFile("opengraph.jpg", "dist/opengraph.jpg");
for (const path of paths) {
  const seo = getSeo(path);
  const head = `<link rel="canonical" href="${escape(seo.canonical)}" />
<meta name="robots" content="${seo.index ? "index,follow" : "noindex,follow"}" />
<meta property="og:site_name" content="UltraRem" />
<meta property="og:type" content="website" />
<meta property="og:title" content="${escape(seo.title)}" />
<meta property="og:description" content="${escape(seo.description)}" />
<meta property="og:url" content="${escape(seo.canonical)}" />
<meta property="og:image" content="https://ultrarem.eu/opengraph.jpg" />
<meta property="og:image:alt" content="UltraRem, la tua autobiografia interattiva" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="${escape(seo.title)}" />
<meta name="twitter:description" content="${escape(seo.description)}" />
<meta name="twitter:image" content="https://ultrarem.eu/opengraph.jpg" />
<link id="rivista-fonts" rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Archivo+Black&amp;family=Archivo+Narrow:wght@500;700&amp;family=Bodoni+Moda:ital,opsz,wght@0,6..96,700;0,6..96,900;1,6..96,500&amp;family=Source+Serif+4:ital,wght@0,400;0,600;1,400&amp;display=swap" />
<script id="seo-schema" type="application/ld+json">${JSON.stringify(structuredData(path)).replaceAll("<", "\\u003c")}</script>`;
  const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(seo.title)}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${escape(seo.description)}" />`)
    .replace("</head>", head + "\n</head>")
    .replace('<div id="root"></div>', () => `<div id="root">${render(path)}</div>`);
  const dir = path === "/" || path === "/404" ? "dist" : "dist" + path;
  await mkdir(dir, { recursive: true });
  await writeFile(dir + (path === "/404" ? "/404.html" : "/index.html"), html);
}
await writeFile("dist/sitemap.xml", `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${Object.keys(seoPages).map(path => `<url><loc>${escape(getSeo(path).canonical)}</loc></url>`).join("")}</urlset>\n`);
await writeFile("dist/robots.txt", "User-agent: *\nAllow: /\n\nSitemap: https://ultrarem.eu/sitemap.xml\n");
await rm(".prerender", { recursive: true, force: true });
console.log(`Prerendered ${paths.length} pages; generated sitemap and robots.txt.`);
