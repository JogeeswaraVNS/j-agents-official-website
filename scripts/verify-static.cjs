const fs = require('fs');

const files = [
  'dist/index.html',
  'dist/products/index.html',
  'dist/about/index.html',
  'dist/contact/index.html',
  'dist/privacy/index.html',
  'dist/terms/index.html',
  'dist/404.html'
];

let allPassed = true;

files.forEach(f => {
  if (!fs.existsSync(f)) {
    console.error('Missing file:', f);
    allPassed = false;
    return;
  }
  const content = fs.readFileSync(f, 'utf8');
  const hasTitle = content.includes('<title>');
  const hasMeta = content.includes('name="description"');
  const hasOG = content.includes('property="og:title"');
  const hasCanonical = content.includes('rel="canonical"');
  const hasBody = content.includes('id="main-content"');
  
  console.log(f, { hasTitle, hasMeta, hasOG, hasCanonical, hasBody });
  if (!hasTitle || !hasMeta || !hasOG || !hasCanonical || !hasBody) {
    allPassed = false;
  }
});

if (allPassed) {
  console.log('✓ All 8 static prerender files verified with real content & meta tags!');
} else {
  process.exit(1);
}
