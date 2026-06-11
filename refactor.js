const fs = require('fs');
const path = require('path');

const replacements = {
  '\\[#6DA015\\]': 'teal-500',
  '\\[#46C0A2\\]': 'teal-400',
  '\\[#333333\\]': 'slate-900',
  '\\[#333\\]': 'slate-900',
  '\\[#606060\\]': 'slate-500',
  '\\[#F9FAFC\\]': 'slate-50',
  '\\[#DCE8C6\\]': 'slate-200',
  '\\[#0B2A77\\]': 'slate-900',
  '\\[#E1F0E7\\]': 'teal-50',
  'rounded-2xl': 'rounded-[24px]',
  'rounded-3xl': 'rounded-[32px]',
  'shadow-sm': 'shadow-sm', // keep as is, or remove
  // Convert custom gradient to Tailwind gradient where possible
  'bg-gradient-to-r from-teal-500 to-teal-400': 'bg-gradient-to-r from-teal-500 to-emerald-400',
  'bg-gradient-to-br from-teal-500/20 to-teal-400/20': 'bg-teal-50',
  'bg-gradient-to-r from-teal-500/20 to-teal-400/20': 'bg-teal-50',
  'bg-gradient-to-r from-teal-500/10 to-teal-400/10': 'bg-teal-50',
};

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function refactorFile(filePath) {
  if (!filePath.endsWith('.jsx') && !filePath.endsWith('.js')) return;
  
  // Skip files we already redesigned properly
  const skipList = ['Navbar.jsx', 'Footer.jsx', 'HeroHeader.jsx', 'StatsSection.jsx', 'WhyChooseUs.jsx', 'PopularBrands.jsx', 'HowItWorks.jsx', 'QuickTrackSection.jsx', 'Faq.jsx', 'CustomerFeedback.jsx', 'CtaBanner.jsx', 'layout.js', 'about\\\\MainContent.jsx', 'about/MainContent.jsx', 'services\\\\MainContent.jsx', 'services/MainContent.jsx'];
  
  for (let skip of skipList) {
    if (filePath.includes(skip)) {
      console.log('Skipping manually redesigned file:', filePath);
      return;
    }
  }

  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  for (const [key, value] of Object.entries(replacements)) {
    const regex = new RegExp(key, 'g');
    content = content.replace(regex, value);
  }

  // Also replace inline styles that use the hex codes
  content = content.replace(/#6DA015/g, '#14B8A6'); // teal-500 hex
  content = content.replace(/#46C0A2/g, '#2DD4BF'); // teal-400 hex
  content = content.replace(/#333333/g, '#0F172A');
  content = content.replace(/#333/g, '#0F172A');
  content = content.replace(/#606060/g, '#64748B');

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Refactored:', filePath);
  }
}

walkDir('./src/components', refactorFile);
walkDir('./src/app', refactorFile);
console.log('Refactoring complete.');
