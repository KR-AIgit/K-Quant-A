const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const regex = /if \(lnkNews\) lnkNews\.href = `https:\/\/search\.naver\.com\/search\.naver\?where=news&query=\$\{stockName\}\+주식`;\s+if \(lnkResearch\) \{[\s\S]*?if \(lnkHankyung\)/;

const replacement = `          if (lnkNews) {
              lnkNews.href = "#";
              lnkNews.onclick = (e) => {
                  e.preventDefault();
                  const form = document.createElement('form');
                  form.action = 'https://finance.naver.com/search/searchList.naver';
                  form.method = 'get';
                  form.target = '_blank';
                  form.acceptCharset = 'euc-kr';
                  const input = document.createElement('input');
                  input.type = 'hidden';
                  input.name = 'query';
                  input.value = db.name;
                  form.appendChild(input);
                  document.body.appendChild(form);
                  form.submit();
                  document.body.removeChild(form);
              };
          }
          
          if (lnkResearch) {
              lnkResearch.href = "#";
              lnkResearch.onclick = (e) => {
                  e.preventDefault();
                  const form = document.createElement('form');
                  form.action = 'https://finance.naver.com/search/searchList.naver';
                  form.method = 'get';
                  form.target = '_blank';
                  form.acceptCharset = 'euc-kr';
                  const input = document.createElement('input');
                  input.type = 'hidden';
                  input.name = 'query';
                  input.value = db.name;
                  form.appendChild(input);
                  document.body.appendChild(form);
                  form.submit();
                  document.body.removeChild(form);
              };
          }
          
          if (lnkHankyung)`;

js = js.replace(regex, replacement);
fs.writeFileSync('app.js', js, 'utf8');
console.log('Fixed lnkNews to use Naver Finance form as well');
