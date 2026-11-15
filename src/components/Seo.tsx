import { useEffect } from "react";
import { useLocation } from "wouter";
import { getSeo, structuredData } from "@/content/seo";
import "@/content/guides";

export default function Seo() {
  const [path] = useLocation();
  useEffect(() => {
    const seo = getSeo(path);
    document.title = seo.title;
    const meta = (key: string, content: string, property = false) => {
      const attr = property ? "property" : "name";
      let tag = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) { tag = document.createElement("meta"); tag.setAttribute(attr, key); document.head.appendChild(tag); }
      tag.content = content;
    };
    meta("description", seo.description);
    meta("robots", seo.index ? "index,follow" : "noindex,follow");
    meta("og:title", seo.title, true); meta("og:description", seo.description, true);
    meta("og:url", seo.canonical, true); meta("og:type", "website", true);
    meta("twitter:card", "summary_large_image");
    meta("twitter:title", seo.title); meta("twitter:description", seo.description);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement("link"); canonical.rel = "canonical"; document.head.appendChild(canonical); }
    canonical.href = seo.canonical;
    let data = document.getElementById("seo-schema") as HTMLScriptElement | null;
    if (!data) { data = document.createElement("script"); data.id = "seo-schema"; data.type = "application/ld+json"; document.head.appendChild(data); }
    data.textContent = JSON.stringify(structuredData(path));
  }, [path]);
  return null;
}
