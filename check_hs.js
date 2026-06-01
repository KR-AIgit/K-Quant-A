const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const lines = text.split('\n');
const startIndex = lines.findIndex(l => l.includes('function handleSearch'));
for (let i = startIndex; i < startIndex + 50; i++) {
  console.log(i + ": " + lines[i]);
}
