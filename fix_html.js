const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

html = html.replace('<script src="app.js"></script>', '<script src="stockCodes.js"></script>\n    <script src="app.js"></script>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Included stockCodes.js in index.html');
