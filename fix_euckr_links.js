const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const regex = /const isOriginal = !!STOCK_DATABASE\[stockCode\];[\s\S]*?if \(isOriginal\) \{[\s\S]*?\} else \{[\s\S]*?\}/;

const replacement = `const isOriginal = !!STOCK_DATABASE[stockCode];
      
      // Remove any previous onclick handlers
      if (lnkResearch) lnkResearch.onclick = null;
      if (lnkNews) lnkNews.onclick = null;

      if (isOriginal) {
          if (lnkNews) lnkNews.href = \`https://finance.naver.com/item/news.naver?code=\${stockCode}\`;
          if (lnkResearch) lnkResearch.href = \`https://finance.naver.com/item/main.naver?code=\${stockCode}\`; // Link to comprehensive info (Image 4)
          if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\${stockCode}\`;
      } else {
          if (lnkNews) lnkNews.href = \`https://search.naver.com/search.naver?where=news&query=\${stockName}+주식\`;
          
          if (lnkResearch) {
              lnkResearch.href = "#";
              lnkResearch.onclick = (e) => {
                  e.preventDefault();
                  // Create a hidden form to submit the query in EUC-KR encoding to Naver Finance Search
                  const form = document.createElement('form');
                  form.action = 'https://finance.naver.com/search/searchList.naver';
                  form.method = 'get';
                  form.target = '_blank';
                  form.acceptCharset = 'euc-kr';
                  
                  const input = document.createElement('input');
                  input.type = 'hidden';
                  input.name = 'query';
                  input.value = db.name; // e.g., "펄어비스"
                  
                  form.appendChild(input);
                  document.body.appendChild(form);
                  form.submit();
                  document.body.removeChild(form);
              };
          }
          
          if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\${stockName}\`;
      }`;

js = js.replace(regex, replacement);
fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed links to use EUC-KR form submission for Image 4');
