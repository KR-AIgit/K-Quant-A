const fs = require('fs');
const text = fs.readFileSync('stockCodes.js', 'utf8');
console.log(text.substring(0, 150));
