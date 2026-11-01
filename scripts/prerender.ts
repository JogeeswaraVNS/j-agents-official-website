import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p: string) => path.resolve(__dirname, "..", p);

const routesToPrerender = [
  { url: "/", title: "JAgents Labs", description: "JAgents Labs builds focused, high-leverage software and AI products built alongside how businesses actually operate." },
  { url: "/products", title: "Products | JAgents Labs", description: "Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents for real estate businesses." },
  { url: "/approach", title: "Our Approach — JAgents Labs", description: "How JAgents Labs designs and builds software: diagnosing operational realities before writing a single line of code." },
  { url: "/about", title: "About — JAgents Labs", description: "About JAgents Labs Private Limited, an applied software company based in Hyderabad, India." },
  { url: "/contact", title: "Contact — JAgents Labs", description: "Get in touch with JAgents Labs directly via email or phone." },
  { url: "/privacy", title: "Privacy Policy — JAgents Labs", description: "Privacy policy for JAgents Labs Private Limited and the jagentslabs.com website." },
  { url: "/terms", title: "Terms of Service — JAgents Labs", description: "Terms of service governing the use of jagentslabs.com." },
  { url: "/404", title: "Page Not Found — JAgents Labs", description: "The page you requested could not be found." },
];

async function prerender() {
  const distDir = toAbsolute("dist");
  const templatePath = path.join(distDir, "index.html");

  if (!fs.existsSync(templatePath)) {
    throw new Error("dist/index.html does not exist. Run 'vite build' first.");
  }

  const template = fs.readFileSync(templatePath, "utf-8");

  // Dynamically import the SSR bundle
  // @ts-ignore
  const { render } = await import(toAbsolute("dist/server/entry-server.js"));

  for (const route of routesToPrerender) {
    const helmetContext: any = {};
    const { html: appHtml } = render(route.url, helmetContext);
    const { helmet } = helmetContext;

    let headHtml = "";
    if (helmet) {
      headHtml = `
        ${helmet.title ? helmet.title.toString() : `<title>${route.title}</title>`}
        ${helmet.meta ? helmet.meta.toString() : `<meta name="description" content="${route.description}" />`}
        ${helmet.link ? helmet.link.toString() : ""}
      `;
    } else {
      headHtml = `<title>${route.title}</title><meta name="description" content="${route.description}" />`;
    }

    const html = template
      .replace("<!--app-head-->", headHtml)
      .replace("<!--app-html-->", appHtml);

    let filePath: string;
    if (route.url === "/") {
      filePath = path.join(distDir, "index.html");
    } else if (route.url === "/404") {
      filePath = path.join(distDir, "404.html");
    } else {
      const routeDir = path.join(distDir, route.url.replace(/^\//, ""));
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      filePath = path.join(routeDir, "index.html");
    }

    fs.writeFileSync(filePath, html, "utf-8");
    console.log(`✓ Prerendered ${route.url} -> ${path.relative(distDir, filePath)}`);
  }

  console.log("All routes successfully prerendered into physical static HTML files!");
}

prerender().catch((err) => {
  console.error("Prerendering failed:", err);
  process.exit(1);
});
