const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const regex = /let foundCode = null;\s+for \(let name in STOCK_NAME_MAP\) \{\s+if \(name\.toUpperCase\(\)\.replace\(\/\\s\+\/g, ''\)\.includes\(upperInput\)\) \{\s+foundCode = STOCK_NAME_MAP\[name\];\s+break;\s+\}\s+\}\s+if \(foundCode\)/g;

const replacement = `let foundCode = null;
              // 먼저 기존 즐겨찾기 DB 검사
              for (let name in STOCK_NAME_MAP) {
                  if (name.toUpperCase().replace(/\\s+/g, '').includes(upperInput)) {
                      foundCode = STOCK_NAME_MAP[name];
                      break;
                  }
              }
              
              // 전체 KRX 상장사 DB에서 검색
              if (!foundCode && typeof ALL_KRX_STOCKS !== 'undefined') {
                  for (let name in ALL_KRX_STOCKS) {
                      if (name.toUpperCase().replace(/\\s+/g, '') === upperInput) {
                          foundCode = ALL_KRX_STOCKS[name];
                          break;
                      }
                  }
                  if (!foundCode) {
                      for (let name in ALL_KRX_STOCKS) {
                          if (name.toUpperCase().replace(/\\s+/g, '').includes(upperInput)) {
                              foundCode = ALL_KRX_STOCKS[name];
                              break;
                          }
                      }
                  }
              }
              
              if (foundCode)`;

js = js.replace(regex, replacement);
fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed handleSearch to use ALL_KRX_STOCKS');
