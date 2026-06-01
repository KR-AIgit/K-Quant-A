const fs = require('fs');
let js = fs.readFileSync('app.js', 'utf8');

const targetStr = `const db = getStockInfo(stockCode);
    if (!db) return;

    document.getElementById("info-coin-title").textContent = \`\${db.name} (\${stockCode})\`;`;

const replacement = `const db = getStockInfo(stockCode);
    if (!db) return;

    const displayStockText = document.getElementById("current-selected-stock-display");
    if(displayStockText) {
        displayStockText.innerHTML = \`<i class="fa-solid fa-check" style="color:var(--sentiment-bullish);"></i> <b>[\${db.name}]</b> 종목 분석 중...\`;
    }

    document.getElementById("info-coin-title").textContent = \`\${db.name} (\${stockCode})\`;`;

js = js.replace(targetStr, replacement);
fs.writeFileSync('app.js', js, 'utf8');
console.log('Update UI display');
