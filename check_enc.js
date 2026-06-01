const fs = require('fs');
const text = fs.readFileSync('app.js', 'utf8');
const match = text.match(/STOCK_NAME_MAP = \{\s*"(.*?)"/);
console.log(match[1]);
console.log(Buffer.from(match[1]).toString('hex'));
