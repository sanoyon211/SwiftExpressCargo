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

  // Colors
  newContent = newContent.replace(/\bteal-600\b/g, 'sky-700');
  newContent = newContent.replace(/\bteal-500\b/g, 'sky-600');
  newContent = newContent.replace(/\bteal-400\b/g, 'sky-500');
  newContent = newContent.replace(/\bteal-100\b/g, 'sky-200');
  newContent = newContent.replace(/\bteal-50\b/g, 'sky-50');
  newContent = newContent.replace(/\bemerald-500\b/g, 'blue-600');
  newContent = newContent.replace(/\bemerald-400\b/g, 'blue-500');
  newContent = newContent.replace(/\bemerald-50\b/g, 'blue-50');

  // Typographic tracking
  newContent = newContent.replace(/<h([1-6])(.*?)className="([^"]*)"/g, (match, p1, p2, p3) => {
    if (!p3.includes('tracking-')) {
      return `<h${p1}${p2}className="${p3} tracking-tight"`;
    }
    return match;
  });

  // Mobile responsiveness
  newContent = newContent.replace(/\bpy-12 md:py-24\b/g, 'py-10 md:py-20');
  newContent = newContent.replace(/\bpy-10 md:py-20\b/g, 'py-8 md:py-16');
  
  // Specific fix for WhyChooseUs hover shadow/borders
  newContent = newContent.replace(/\bhover:border-teal-500\/10\b/g, 'hover:border-slate-200');
  newContent = newContent.replace(/\bshadow-teal-500\/5\b/g, 'shadow-slate-500/5');
  newContent = newContent.replace(/\bshadow-teal-500\/20\b/g, 'shadow-slate-500/10');
  newContent = newContent.replace(/\bhover:shadow-teal-500\/5\b/g, 'hover:shadow-slate-500/5');
  
  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    changes++;
  }
});
console.log('Updated ' + changes + ' files.');
