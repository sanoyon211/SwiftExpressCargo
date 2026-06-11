const fs = require('fs');
const path = require('path');

function styleToObjStr(styleStr) {
  const rules = styleStr.split(';').map(r => r.trim()).filter(Boolean);
  const obj = {};
  for (const rule of rules) {
    const [key, ...valParts] = rule.split(':');
    if (!key) continue;
    let camelKey = key.trim().split('-').map((part, i) => i === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)).join('');
    let val = valParts.join(':').trim().replace(/'/g, '"');
    obj[camelKey] = val;
  }
  return Object.entries(obj).map(([k, v]) => `'${k}': '${v}'`).join(', ');
}

function convertToJsx(html) {
  let jsx = html;
  // Fix self-closing tags (img, input, br, hr)
  jsx = jsx.replace(/<(img|input|br|hr)([^>]*?)(?<!\/)>/g, '<$1$2 />');
  
  // class to className
  jsx = jsx.replace(/\bclass="/g, 'className="');
  // for to htmlFor
  jsx = jsx.replace(/\bfor="/g, 'htmlFor="');
  
  // comments
  jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
  
  // style attributes
  jsx = jsx.replace(/style="([^"]*)"/g, (match, p1) => {
    return `style={{ ${styleToObjStr(p1)} }}`;
  });
  
  // ./assets to /assets
  jsx = jsx.replace(/\.\/assets/g, '/assets');
  
  // links
  jsx = jsx.replace(/href="\.\/index\.html"/g, 'href="/"');
  jsx = jsx.replace(/href="\.\/About\.html"/g, 'href="/about"');
  jsx = jsx.replace(/href="\.\/contact\.html"/g, 'href="/contact"');
  jsx = jsx.replace(/href="\.\/services\.html"/g, 'href="/services"');
  jsx = jsx.replace(/href="\.\/rates\.html"/g, 'href="/rates"');
  jsx = jsx.replace(/href="\.\/tracking\.html"/g, 'href="/tracking"');
  jsx = jsx.replace(/href="\.\/cost-calculator copy\.html"/g, 'href="/cost-calculator"');
  jsx = jsx.replace(/href="\.\/all-blog\.html"/g, 'href="/blog"');
  jsx = jsx.replace(/href="\.\/popular-shop\.html"/g, 'href="/shop"');
  jsx = jsx.replace(/href="\.\/read-more\.html"/g, 'href="/read-more"');
  
  // extract body content
  const bodyMatch = jsx.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (bodyMatch) {
    jsx = bodyMatch[1];
  }
  
  // remove scripts
  jsx = jsx.replace(/<script[\s\S]*?<\/script>/gi, '');
  
  return jsx;
}

const filesToConvert = [
  { file: 'index.html', component: 'Home', outDir: 'src/app', outFile: 'page.jsx' },
  { file: 'About.html', component: 'About', outDir: 'src/app/about', outFile: 'page.jsx' },
  { file: 'contact.html', component: 'Contact', outDir: 'src/app/contact', outFile: 'page.jsx' },
  { file: 'services.html', component: 'Services', outDir: 'src/app/services', outFile: 'page.jsx' },
  { file: 'rates.html', component: 'Rates', outDir: 'src/app/rates', outFile: 'page.jsx' },
  { file: 'tracking.html', component: 'Tracking', outDir: 'src/app/tracking', outFile: 'page.jsx' },
  { file: 'cost-calculator copy.html', component: 'CostCalculator', outDir: 'src/app/cost-calculator', outFile: 'page.jsx' },
  { file: 'all-blog.html', component: 'Blog', outDir: 'src/app/blog', outFile: 'page.jsx' },
  { file: 'popular-shop.html', component: 'Shop', outDir: 'src/app/shop', outFile: 'page.jsx' },
  { file: 'read-more.html', component: 'ReadMore', outDir: 'src/app/read-more', outFile: 'page.jsx' }
];

filesToConvert.forEach(({ file, component, outDir, outFile }) => {
  const inPath = path.join('legacy_backup', file);
  if (!fs.existsSync(inPath)) return;
  
  const html = fs.readFileSync(inPath, 'utf8');
  let jsx = convertToJsx(html);
  
  const content = `"use client";\nimport React from 'react';\nimport Link from 'next/link';\n\nexport default function ${component}() {\n  return (\n    <>\n${jsx}\n    </>\n  );\n}\n`;
  
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, outFile), content, 'utf8');
  console.log(`Converted ${file} to ${outDir}/${outFile}`);
});
