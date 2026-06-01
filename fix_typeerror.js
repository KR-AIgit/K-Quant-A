const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

js = js.replace(/const stockSelect = document\.getElementById\("stock-select"\);\s+stockSelect\.addEventListener\("change", \(e\) => \{/, `const stockSelect = document.getElementById("stock-select");
    if(stockSelect) {
        stockSelect.addEventListener("change", (e) => {`);

js = js.replace(/loadStockData\(currentStock\);\s+\}\);/, `loadStockData(currentStock);
        });
    }`);

fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed stockSelect TypeError');
