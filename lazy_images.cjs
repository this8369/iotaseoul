const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'src', 'components');

const files = fs.readdirSync(componentsDir).filter(file => file.endsWith('.jsx'));

let totalUpdated = 0;
files.forEach(file => {
  const filePath = path.join(componentsDir, file);
  // Exclude early-load files
  if (file === 'Section1.jsx' || file === 'Header.jsx' || file === 'HoverImage.jsx') return; 
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Notice the global flag 'g' and single-line /s flag proxy or [\s\S]
  const updatedContent = content.replace(/<img([\s\S]*?)>/g, (match, p1) => {
    // If loading is already defined, ignore
    if (p1.includes('loading=')) return match;
    
    // Add loading="lazy"
    if (match.endsWith('/>')) {
        let inside = p1.replace(/\/\s*$/, ''); // Remove trailing slash
        return `<img${inside} loading="lazy" />`;
    }
    return `<img${p1} loading="lazy">`;
  });
  
  if (content !== updatedContent) {
    fs.writeFileSync(filePath, updatedContent);
    console.log(`Updated images in ${file}`);
    totalUpdated++;
  }
});
console.log(`Total files updated: ${totalUpdated}`);
