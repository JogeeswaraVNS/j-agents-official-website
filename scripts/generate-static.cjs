const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, '..', 'dist');
const templatePath = path.join(distDir, 'index.html');

if (!fs.existsSync(templatePath)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

const pages = [
  {
    route: '/',
    title: 'JAgents Labs',
    description: 'JAgents Labs builds focused, high-leverage software and AI products built alongside how businesses actually operate.',
    heading: 'We build software that fits the way you work.',
    content: 'Applied software and AI agents designed for operational realities, not theoretical workflows. Explore our products: Eschure (live AI copilot for real estate property brokers) and JAgents Studio (custom software and AI agents).'
  },
  {
    route: '/products',
    title: 'Products | JAgents Labs',
    description: 'Eschure is a live AI copilot for property brokers. JAgents Studio builds custom software and AI agents for real estate businesses.',
    heading: 'Two ways we work with real estate teams.',
    content: 'Eschure is our product, ready to use today. JAgents Studio builds custom software and AI agents around your business. Products include Eschure (live AI copilot for property brokers) and JAgents Studio (custom software and AI agents for real estate businesses).'
  },
  {
    route: '/about',
    title: 'About — JAgents Labs',
    description: 'About JAgents Labs Private Limited, an applied software company based in Hyderabad, India.',
    heading: 'About JAgents Labs',
    content: 'JAgents Labs Private Limited is an applied software studio based in Hyderabad, India. We build specialized software and AI products designed to eliminate operational friction. Corporate Details: CIN U62011TS2026PTC221182, GSTIN 36AAHCJ5628D1ZL.'
  },
  {
    route: '/contact',
    title: 'Contact — JAgents Labs',
    description: 'Get in touch with JAgents Labs directly via email or phone.',
    heading: 'Contact us',
    content: 'Reach us directly. No forms, queues, or gatekeepers. Email: hello@jagentslabs.com. Phone: +91 90633 16737. Registered address: Somajiguda, Hyderabad, Telangana, India.'
  },
  {
    route: '/privacy',
    title: 'Privacy Policy — JAgents Labs',
    description: 'Privacy policy for JAgents Labs Private Limited and the jagentslabs.com website.',
    heading: 'Privacy Policy',
    content: 'Data fiduciary: JAgents Labs Private Limited. Informational website with no contact form, no tracking analytics cookies, and no online billing. Direct inquiries via email/phone and standard hosting server logs.'
  },
  {
    route: '/terms',
    title: 'Terms of Service — JAgents Labs',
    description: 'Terms of service governing the use of jagentslabs.com.',
    heading: 'Terms of Service',
    content: 'Terms governing access to jagentslabs.com. Informational site with no online sales. Intellectual property of JAgents Labs Private Limited. Jurisdiction: Hyderabad, Telangana, India.'
  },
  {
    route: '/404',
    title: 'Page Not Found — JAgents Labs',
    description: 'The page you requested could not be found.',
    heading: 'Page not found',
    content: 'The page you requested could not be found on jagentslabs.com.'
  }
];

pages.forEach((page) => {
  const canonicalUrl = `https://jagentslabs.com${page.route === '/' ? '' : page.route}`;
  const ogImageUrl = 'https://jagentslabs.com/og-image.png';

  const headSnippet = `
    <title>${page.title}</title>
    <meta name="title" content="${page.title}" />
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:site_name" content="JAgents Labs" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
  `;

  // Semantic fallback content injected into #root for crawlers, non-JS browsers & search bots
  const bodySnippet = `
    <main id="main-content" style="max-width:1120px;margin:0 auto;padding:40px 24px;">
      <h1 style="font-size:36px;font-weight:600;margin-bottom:16px;">${page.heading}</h1>
      <p style="font-size:18px;line-height:1.6;color:#A1A1AA;">${page.content}</p>
    </main>
  `;

  let pageHtml = template;
  pageHtml = pageHtml.replace('<!--app-head-->', headSnippet);
  pageHtml = pageHtml.replace('<!--app-html-->', bodySnippet);

  let targetFile;
  if (page.route === '/') {
    targetFile = path.join(distDir, 'index.html');
  } else if (page.route === '/404') {
    targetFile = path.join(distDir, '404.html');
  } else {
    const dir = path.join(distDir, page.route.slice(1));
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    targetFile = path.join(dir, 'index.html');
  }

  fs.writeFileSync(targetFile, pageHtml, 'utf8');
  console.log(`✓ Generated static HTML: ${path.relative(distDir, targetFile)}`);
});

console.log('Static prerender generation completed.');
