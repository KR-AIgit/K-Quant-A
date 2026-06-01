const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

// 1. Remove duplicate searchBtn listener
const dupRegex = /const searchBtn = document\.getElementById\("stock-search-btn"\);\s*const searchInput = document\.getElementById\("stock-search-input"\);\s*if \(searchBtn && searchInput\) \{[\s\S]*?STOCK_NAME_MAP\[input\] = code; \/\/ Add to map\s*\}\s*\}\s*const select = document\.getElementById\("stock-select"\);[\s\S]*?loadStockData\(code\);\s*\}/;
js = js.replace(dupRegex, '// Legacy search removed');

// 2. Clean up the weird else block in loadStockData
const elseRegex = /if \(lnkHankyung\) lnkHankyung\.href = `https:\/\/consensus\.hankyung\.com\/analysis\/list\?sdate=&edate=&search_text=\$\{stockCode\}`; else \{[\s\S]*?if \(lnkHankyung\) lnkHankyung\.href = `https:\/\/consensus\.hankyung\.com\/analysis\/list\?sdate=&edate=&search_text=\$\{stockName\}`;\s*\}/;
const cleanElse = `if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\${stockCode}\`;`;
js = js.replace(elseRegex, cleanElse);

fs.writeFileSync('app_v2.js', js, 'utf8');
console.log('Created app_v2.js');

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('<script src="app.js"></script>', '<script src="app_v2.js"></script>');
fs.writeFileSync('index.html', html, 'utf8');
console.log('Updated index.html to use app_v2.js');
