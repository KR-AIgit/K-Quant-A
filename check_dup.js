const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const lines = text.split('\n');
const idx = lines.findIndex(l => l.includes('searchBtn.addEventListener("click", () => {'));
for(let i=idx-5; i<idx+5; i++) console.log(i + ": " + lines[i]);
