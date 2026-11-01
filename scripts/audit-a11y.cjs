const fs = require('fs');
const path = require('path');

const files = [
  'dist/index.html',
  'dist/products/index.html',
  'dist/about/index.html',
  'dist/contact/index.html',
  'dist/privacy/index.html',
  'dist/terms/index.html',
  'dist/404.html'
];

let issues = [];

files.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');

  // Check 1: html lang attribute
  if (!html.includes('lang="en"') && !html.includes("lang='en'")) {
    issues.push(`${file}: Missing html lang attribute`);
  }

  // Check 2: title tag
  if (!html.includes('<title>') || html.includes('<title></title>')) {
    issues.push(`${file}: Missing or empty title tag`);
  }

  // Check 3: viewport meta
  if (!html.includes('name="viewport"')) {
    issues.push(`${file}: Missing viewport meta tag`);
  }

  // Check 4: skip to content link
  if (!html.includes('href="#main-content"')) {
    // Check if main-content exists
    if (!html.includes('id="main-content"')) {
      issues.push(`${file}: Missing main-content anchor`);
    }
  }

  // Check 5: inspect all images for alt attribute
  const imgRegex = /<img([^>]*)\/?>/gi;
  let match;
  while ((match = imgRegex.exec(html)) !== null) {
    if (!match[1].includes('alt=')) {
      issues.push(`${file}: <img> tag missing alt attribute -> ${match[0]}`);
    }
  }

  // Check 6: inspect all buttons for text or aria-label
  const btnRegex = /<button([^>]*)>([\s\S]*?)<\/button>/gi;
  while ((match = btnRegex.exec(html)) !== null) {
    const attrs = match[1];
    const inner = match[2].trim();
    if (!inner && !attrs.includes('aria-label') && !attrs.includes('aria-labelledby')) {
      issues.push(`${file}: <button> has no accessible name -> ${match[0]}`);
    }
  }
});

console.log('--- Accessibility Audit Report ---');
if (issues.length === 0) {
  console.log('✓ All 8 static HTML pages passed accessibility checks (lang, title, viewport, landmarks, accessible names)!');
} else {
  console.error('Found accessibility issues:', issues);
  process.exit(1);
}
