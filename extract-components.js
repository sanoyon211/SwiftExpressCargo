const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const appDir = path.join(srcDir, 'app');
const componentsDir = path.join(srcDir, 'components');

const pagesToProcess = [
  { file: 'page.jsx', folder: 'home', name: 'Home' },
  { file: 'cost-calculator/page.jsx', folder: 'calculator', name: 'CostCalculator' },
  { file: 'tracking/page.jsx', folder: 'tracking', name: 'Tracking' },
  { file: 'about/page.jsx', folder: 'about', name: 'About' },
  { file: 'services/page.jsx', folder: 'services', name: 'Services' },
  { file: 'rates/page.jsx', folder: 'rates', name: 'Rates' },
  { file: 'contact/page.jsx', folder: 'contact', name: 'Contact' },
  { file: 'blog/page.jsx', folder: 'blog', name: 'Blog' },
  { file: 'shop/page.jsx', folder: 'shop', name: 'Shop' },
  { file: 'read-more/page.jsx', folder: 'read-more', name: 'ReadMore' }
];

function toPascalCase(str) {
  return str
    .replace(/[^a-zA-Z0-9]/g, ' ')
    .split(' ')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

// Special extraction for Home Page since it has useState and useEffect
function extractHome() {
  const filePath = path.join(appDir, 'page.jsx');
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // We know Home has the hero logic at the top. 
  // Let's extract the return block
  const returnIndex = content.indexOf('return (');
  if (returnIndex === -1) return;
  
  const logicBlock = content.substring(content.indexOf('export default function Home() {') + 32, returnIndex).trim();
  
  let jsxBlock = content.substring(returnIndex);
  jsxBlock = jsxBlock.substring(0, jsxBlock.lastIndexOf('}')); // remove trailing }
  
  // Remove <> and </>
  jsxBlock = jsxBlock.replace(/^return\s*\(\s*<>\s*/, '');
  jsxBlock = jsxBlock.replace(/\s*<\/>\s*\);\s*$/, '');
  
  processSections('page.jsx', 'home', 'Home', jsxBlock, logicBlock);
}

function processSections(relPath, folderName, componentName, jsxContent, logicContent = '') {
  const compDir = path.join(componentsDir, folderName);
  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  // Regex to find section boundaries
  const sectionRegex = /{\/\*\s*=====\s*(.*?)\s*=====\s*\*\/}/g;
  
  let matches = [];
  let match;
  while ((match = sectionRegex.exec(jsxContent)) !== null) {
    matches.push({
      name: match[1].trim(),
      start: match.index,
      length: match[0].length
    });
  }

  if (matches.length === 0) {
    // Wrap entire page in one component if no sections
    matches.push({ name: 'Main Content', start: 0, length: 0 });
  }

  const generatedComponents = [];
  
  for (let i = 0; i < matches.length; i++) {
    let sectionNameRaw = matches[i].name;
    let compName = toPascalCase(sectionNameRaw);
    
    // Prevent duplicate component names
    if (generatedComponents.includes(compName)) compName += 'Section';
    if (generatedComponents.includes(compName)) compName += i;
    
    // Calculate start and end of this section's JSX
    let startIdx = matches[i].start + matches[i].length;
    let endIdx = (i + 1 < matches.length) ? matches[i+1].start : jsxContent.length;
    
    let sectionJsx = jsxContent.substring(startIdx, endIdx).trim();
    if (!sectionJsx) continue;
    
    generatedComponents.push(compName);
    
    let compContent = `import React from 'react';\nimport Link from 'next/link';\n\n`;
    
    if (compName === 'HeroHeader' && folderName === 'home') {
      compContent = `"use client";\nimport React, { useState, useEffect } from 'react';\nimport Link from 'next/link';\n\n`;
      compContent += `export default function ${compName}() {\n  ${logicContent}\n\n  return (\n    <>\n      ${sectionJsx}\n    </>\n  );\n}\n`;
    } else {
      compContent += `export default function ${compName}() {\n  return (\n    <>\n      ${sectionJsx}\n    </>\n  );\n}\n`;
    }
    
    fs.writeFileSync(path.join(compDir, `${compName}.jsx`), compContent);
    console.log(`Created: ${folderName}/${compName}.jsx`);
  }

  // Now rewrite the page.jsx
  let newPageContent = `import React from 'react';\n`;
  generatedComponents.forEach(comp => {
    newPageContent += `import ${comp} from '@/components/${folderName}/${comp}';\n`;
  });
  
  newPageContent += `\nexport default function ${componentName}() {\n  return (\n    <>\n`;
  generatedComponents.forEach(comp => {
    newPageContent += `      <${comp} />\n`;
  });
  newPageContent += `    </>\n  );\n}\n`;

  fs.writeFileSync(path.join(appDir, relPath), newPageContent);
  console.log(`Updated page: ${relPath}`);
}

pagesToProcess.forEach(pageDef => {
  const filePath = path.join(appDir, pageDef.file);
  if (!fs.existsSync(filePath)) return;
  
  if (pageDef.file === 'page.jsx') {
    extractHome();
  } else {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract JSX block
    const returnMatch = content.match(/return\s*\(\s*<>\s*([\s\S]*?)\s*<\/>\s*\);/);
    if (returnMatch && returnMatch[1]) {
      processSections(pageDef.file, pageDef.folder, pageDef.name, returnMatch[1]);
    }
  }
});
