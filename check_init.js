const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const lines = text.split('\n');
const start = lines.findIndex(l => l.includes('function initSearchModal'));
for (let i = start; i < start + 90; i++) {
  console.log(i + ": " + lines[i]);
}
