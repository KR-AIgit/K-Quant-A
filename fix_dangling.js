const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

js = js.replace(/\}\+주식`;\s+if \(lnkResearch\) lnkResearch\.href = `https:\/\/m\.stock\.naver\.com\/search\/custom\?keyword=\$\{stockName\}`;\s+if \(lnkHankyung\) lnkHankyung\.href = `https:\/\/consensus\.hankyung\.com\/analysis\/list\?sdate=&edate=&search_text=\$\{stockName\}`;\s+\}/, '}');

fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed dangling code');
