const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

// 1. Fix DOMContentLoaded closing
js = js.replace(/initSearchModal\(\);\s+loadStockData\(currentStock\);\s+\}\);\s+\}\s+function initCustomDropdown\(\)/, `initSearchModal();\n    \n    loadStockData(currentStock);\n});\n\nfunction initCustomDropdown()`);

// 2. Fix setupEventListeners
js = js.replace(/function setupEventListeners\(\) \{\s+const stockSelect = document\.getElementById\("stock-select"\);\s+if\(stockSelect\) \{\s+stockSelect\.addEventListener\("change", \(e\) => \{\s+currentStock = e\.target\.value;\s+loadStockData\(currentStock\);\s+\}\);/, `function setupEventListeners() {\n    // stockSelect removed`);

fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed syntax errors');
