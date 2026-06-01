const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

// 1. Revert link logic in loadStockData
const linkRegex = /const isOriginal = !!STOCK_DATABASE\[stockCode\];[\s\S]*?if \(lnkHankyung\)\s*lnkHankyung\.href = `https:\/\/consensus\.hankyung\.com[\s\S]*?`\s*;\s*\}/;

const revertLinkLogic = `const isOriginal = !!STOCK_DATABASE[stockCode];
      
      // Since we now have real 6-digit codes for ALL Korean stocks via stockCodes.js,
      // we can just use the standard Naver Finance URLs natively without any hacks!
      
      if (lnkNews) lnkNews.onclick = null;
      if (lnkResearch) lnkResearch.onclick = null;

      if (lnkNews) lnkNews.href = \`https://finance.naver.com/item/news.naver?code=\${stockCode}\`;
      if (lnkResearch) lnkResearch.href = \`https://finance.naver.com/item/main.naver?code=\${stockCode}\`;
      if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\${stockCode}\`;`;

js = js.replace(linkRegex, revertLinkLogic);

// 2. Update search logic in initSearchModal (which uses handleSearch?)
// Actually, earlier output showed searchBtn.addEventListener("click", () => { ...
// but then it showed if(searchBtn) searchBtn.addEventListener("click", handleSearch); 
// Wait, the file might have BOTH because of some duplicate code.
// Let's replace the whole upperInput finding logic.

const searchRegex = /\/\/ 2\. 국내 상장회사 검색 연동[\s\S]*?if \(foundCode\) \{/g;
const newSearchLogic = `// 2. 국내 상장회사 검색 연동 (자체 2,500여개 KRX DB 활용)
                  let foundCode = null;
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
                  
                  if (foundCode) {`;

js = js.replace(searchRegex, newSearchLogic);

fs.writeFileSync('app.js', js, 'utf8');
console.log('Applied ALL_KRX_STOCKS integration to app.js');
