const fs = require('fs');
const path = require('path');
function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      results.push(file);
    }
  });
  return results;
}
const files = walk('d:\\React\\Github\\portfolio\\vijayathiraj-next\\src').filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'));

files.forEach(file => {
  let contentBuffer = fs.readFileSync(file);
  let content = "";
  if (contentBuffer[0] === 0xFF && contentBuffer[1] === 0xFE) {
     content = contentBuffer.toString('utf16le');
  } else {
     content = contentBuffer.toString('utf8');
  }
  
  // Clean up any potential BOM characters
  if (content.charCodeAt(0) === 0xFEFF) {
      content = content.slice(1);
  }

  let modified = false;
  if (content.includes('import { Link } from "react-router";') || content.includes('import {Link} from "react-router";')) {
      content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*"react-router";?/g, 'import Link from "next/link";');
      modified = true;
  }
  if (content.includes('import { Link } from "react-router-dom";')) {
    content = content.replace(/import\s*\{\s*Link\s*\}\s*from\s*"react-router-dom";?/g, 'import Link from "next/link";');
    modified = true;
  }
  
  // replace to= with href= inside <Link ...>
  if (/<Link([^>]*)\bto=(['"{])/g.test(content)) {
      content = content.replace(/<Link([^>]*)\bto=(['"{])/g, '<Link$1href=$2');
      modified = true;
  }
  
  if (modified || (contentBuffer[0] === 0xFF && contentBuffer[1] === 0xFE)) {
      fs.writeFileSync(file, content, 'utf8');
      console.log("Updated: " + file);
  }
});
console.log("Done fixing links");
