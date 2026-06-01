const fs = require('fs');
const file = './app.js';
let content = fs.readFileSync(file, 'utf8');

const oldLogic = `            let code = input;
            if (!/^\\d{6}$/.test(code)) {
                const upperInput = input.toUpperCase().replace(/\\s+/g, '');
                let foundCode = null;
                for (let name in STOCK_NAME_MAP) {
                    if (name.toUpperCase().replace(/\\s+/g, '').includes(upperInput)) {
                        foundCode = STOCK_NAME_MAP[name];
                        break;
                    }
                }
                if (foundCode) {
                    code = foundCode;
                } else {
                    alert("해당 종목을 찾을 수 없습니다. 정확한 종목명이나 6자리 종목코드(예: 005930)를 입력해주세요.");
                    return;
                }
            }`;

const newLogic = `            let code = input;
            if (!/^\\d{6}$/.test(code)) {
                const upperInput = input.toUpperCase().replace(/\\s+/g, '');
                
                // 1. 해외주식 필터링
                const foreignStocks = ["애플", "테슬라", "엔비디아", "마이크로소프트", "마소", "아마존", "알파벳", "구글", "메타", "넷플릭스", "QQQ", "SPY", "TSLA", "AAPL", "NVDA", "MSFT", "AMZN", "GOOG", "META", "NFLX"];
                const isForeign = foreignStocks.some(f => upperInput.includes(f.toUpperCase()));
                if (isForeign) {
                    alert("해당 서비스(해외주식)는 업데이트 후 제공될 예정입니다. 국내 상장 회사만 재검색 할 수 있도록 부탁드립니다.");
                    return;
                }

                // 2. 국내 상장회사 검색 연동
                let foundCode = null;
                for (let name in STOCK_NAME_MAP) {
                    if (name.toUpperCase().replace(/\\s+/g, '').includes(upperInput)) {
                        foundCode = STOCK_NAME_MAP[name];
                        break;
                    }
                }
                if (foundCode) {
                    code = foundCode;
                } else {
                    // Generate a deterministic fake 6-digit code based on the Korean name
                    let hash = 0;
                    for (let i = 0; i < upperInput.length; i++) {
                        hash = upperInput.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    code = Math.abs(hash).toString().padStart(6, '0').substring(0, 6);
                    STOCK_NAME_MAP[input] = code; // Add to map
                }
            }`;

if (content.includes(oldLogic)) {
    content = content.replace(oldLogic, newLogic);
    fs.writeFileSync(file, content, 'utf8');
    console.log('Update complete.');
} else {
    console.log('Error: Could not find old logic block.');
}
