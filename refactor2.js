const fs = require('fs');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.css')) { 
      results.push(file);
    }
  });
  return results;
}
const files = walk('./src');
let changes = 0;
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let newContent = content;

  // 1. Kill Massive Gradients (Remove floating blurry blobs)
  newContent = newContent.replace(/<div className="absolute[^>]*blur-\[[0-9]+px\][^>]*><\/div>\s*/g, '');
  newContent = newContent.replace(/<div className="absolute inset-0 bg-gradient-to-r[^>]*><\/div>\s*/g, '');

  // 2. Refine Brand Color (sky/blue -> indigo)
  newContent = newContent.replace(/\bsky-700\b/g, 'indigo-700');
  newContent = newContent.replace(/\bsky-600\b/g, 'indigo-600');
  newContent = newContent.replace(/\bsky-500\b/g, 'indigo-500');
  newContent = newContent.replace(/\bsky-200\b/g, 'indigo-200');
  newContent = newContent.replace(/\bsky-50\b/g, 'indigo-50');
  newContent = newContent.replace(/\bblue-600\b/g, 'indigo-600');
  newContent = newContent.replace(/\bblue-500\b/g, 'indigo-500');
  newContent = newContent.replace(/\bblue-50\b/g, 'indigo-50');

  // Fix remnants of teal/emerald if any
  newContent = newContent.replace(/\bteal-300\b/g, 'indigo-300');
  newContent = newContent.replace(/\bteal-[0-9]+\b/g, 'indigo-600');
  newContent = newContent.replace(/\bemerald-[0-9]+\b/g, 'indigo-600');

  // 3. Section Alternation (The Human Touch)
  // Let's explicitly set the outer section wrappers.
  if (file.includes('WhyChooseUs.jsx') || file.includes('Blog.jsx') || file.includes('StatsSection.jsx') || file.includes('QuickTrackSection.jsx')) {
    newContent = newContent.replace(/bg-white dark:bg-slate-900/g, 'bg-slate-50 dark:bg-slate-800/50');
    newContent = newContent.replace(/bg-slate-50 dark:bg-slate-900/g, 'bg-slate-50 dark:bg-slate-800/50');
  } else if (file.includes('HowItWorks.jsx') || file.includes('Faq.jsx') || file.includes('CustomerFeedback.jsx') || file.includes('PopularBrands.jsx')) {
    newContent = newContent.replace(/bg-slate-50 dark:bg-slate-800\/50/g, 'bg-white dark:bg-slate-900');
    newContent = newContent.replace(/bg-slate-50 dark:bg-slate-900/g, 'bg-white dark:bg-slate-900');
  }

  // 4. Invisible Borders & Softer Cards
  newContent = newContent.replace(/dark:border-slate-700/g, 'dark:border-white/5');
  newContent = newContent.replace(/border-slate-200/g, 'border-slate-100');
  newContent = newContent.replace(/border-transparent/g, 'border-slate-100 dark:border-white/5');

  // 5. Typography Refinement (Paragraphs softer)
  newContent = newContent.replace(/text-slate-600/g, 'text-slate-500');
  newContent = newContent.replace(/dark:text-slate-300/g, 'dark:text-slate-400');

  // 6. 'How It Works' Timeline
  if (file.includes('HowItWorks.jsx')) {
    newContent = newContent.replace(
      /<div className="hidden md:block absolute top-12 left-\[15%\] right-\[15%\] h-1 bg-slate-100 dark:bg-slate-800 rounded-full z-0 overflow-hidden">\s*<div className="absolute top-0 left-0 h-full bg-gradient-to-r from-[^>]*><\/div>\s*<\/div>/,
      '<div className="hidden md:block absolute top-12 left-[15%] right-[15%] border-t-2 border-dashed border-slate-200 dark:border-white/10 z-0"></div>'
    );
    // Also remove the blurry bg on the HowItWorks section
    newContent = newContent.replace(/<div className="absolute top-0 right-0 -mr-40 -mt-40 w-\[600px\] h-\[600px\] bg-slate-50 dark:bg-slate-900 rounded-full blur-3xl opacity-50 pointer-events-none"><\/div>\s*/, '');
  }

  // Also remove the CtaBanner background gradients entirely if they were hardcoded differently
  if (file.includes('CtaBanner.jsx')) {
    newContent = newContent.replace(/bg-gradient-to-r from-indigo-600\/40 to-indigo-600\/40 mix-blend-overlay/g, '');
  }
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changes++;
  }
});
console.log('Updated ' + changes + ' files.');
