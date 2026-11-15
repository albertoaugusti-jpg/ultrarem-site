import { renderToString } from "react-dom/server";
import App from "./App";
import { seoPages, getSeo, structuredData } from "./content/seo";
import "./content/guides";
export { seoPages, getSeo, structuredData };
export function render(path: string) { return renderToString(<App ssrPath={path} />); }
