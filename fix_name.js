const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const regex = /name: Object\.keys\(STOCK_NAME_MAP\)\.find\(k => STOCK_NAME_MAP\[k\] === code\) \|\| ".*?된 종목",/;
const replacement = `name: Object.keys(STOCK_NAME_MAP).find(k => STOCK_NAME_MAP[k] === code) || (typeof ALL_KRX_STOCKS !== 'undefined' ? Object.keys(ALL_KRX_STOCKS).find(k => ALL_KRX_STOCKS[k] === code) : null) || "검색된 종목",`;

js = js.replace(regex, replacement);
fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed getStockInfo to use ALL_KRX_STOCKS');
