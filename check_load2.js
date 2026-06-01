const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const lines = text.split('\n');
const startIndex = lines.findIndex(l => l.includes('function loadStockData'));
for (let i = startIndex + 75; i < startIndex + 105; i++) {
  console.log(i + ": " + lines[i]);
}
