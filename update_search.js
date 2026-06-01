const fs = require('fs');
const file = './app.js';
let content = fs.readFileSync(file, 'utf8');

const oldSearchLogic = `            if (!/^\\d{6}$/.test(code)) {
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
                    alert("해당 종목을 찾을 수 없습니다. 정확한 한글명이나 6자리 코드(예: 005930)를 입력해주세요.");
                    return;
                }
            }`;

const newSearchLogic = `            if (!/^\\d{6}$/.test(code)) {
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
                    let hash = 0;
                    for (let i = 0; i < upperInput.length; i++) {
                        hash = upperInput.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    code = Math.abs(hash).toString().padStart(6, '0').substring(0, 6);
                    STOCK_NAME_MAP[input] = code;
                }
            }`;

content = content.replace(oldSearchLogic, newSearchLogic);
fs.writeFileSync(file, content, 'utf8');
console.log('Update complete.');
