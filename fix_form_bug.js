const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

js = js.replace(/form\.submit\(\);\s+document\.body\.removeChild\(form\);/g, `form.submit();\n                  setTimeout(() => document.body.removeChild(form), 2000);`);

fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed form removal bug');
