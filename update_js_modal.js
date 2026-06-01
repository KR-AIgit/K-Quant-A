const fs = require('fs');

let js = fs.readFileSync('app.js', 'utf8');

// 1. Remove initCustomDropdown definition and its call
js = js.replace(/function initCustomDropdown\(\) \{[\s\S]*?function buildOptions\(\) \{[\s\S]*?\}\s*buildOptions\(\);\s*\}/, 'function initCustomDropdown() { /* removed */ }');

// 2. Add Modal Logic at the bottom
const modalLogic = `
function initSearchModal() {
    const modal = document.getElementById("search-modal");
    const openBtn = document.getElementById("open-search-modal");
    const closeBtn = document.getElementById("close-search-modal");
    const searchBtn = document.getElementById("modal-stock-search-btn");
    const searchInput = document.getElementById("modal-stock-search-input");
    const displayStockText = document.getElementById("current-selected-stock-display");
    
    if(!modal) return;

    // Open Modal
    if(openBtn) {
        openBtn.addEventListener("click", () => {
            modal.classList.add("active");
            if(searchInput) searchInput.focus();
        });
    }

    // Close Modal
    function closeModal() {
        modal.classList.remove("active");
    }
    if(closeBtn) closeBtn.addEventListener("click", closeModal);
    
    // Close on click outside
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Handle search action
    function handleSearch() {
        const input = searchInput.value.trim();
        if (!input) return;

        let code = input;
        if (!/^\\d{6}$/.test(code)) {
            const upperInput = input.toUpperCase().replace(/\\s+/g, '');
            
            const foreignStocks = ["애플", "테슬라", "엔비디아", "마이크로소프트", "마소", "아마존", "알파벳", "구글", "메타", "넷플릭스", "QQQ", "SPY", "TSLA", "AAPL", "NVDA", "MSFT", "AMZN", "GOOG", "META", "NFLX"];
            const isForeign = foreignStocks.some(f => upperInput.includes(f.toUpperCase()));
            if (isForeign) {
                alert("해당 서비스(해외주식)는 업데이트 후 제공될 예정입니다. 국내 상장 회사만 재검색 할 수 있도록 부탁드립니다.");
                return;
            }

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
        }

        currentStock = code;
        searchInput.value = "";
        closeModal();
        loadStockData(code);
    }

    if(searchBtn) searchBtn.addEventListener("click", handleSearch);
    if(searchInput) {
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") handleSearch();
        });
    }

    // Handle stock button clicks in KOSPI/KOSDAQ lists
    const stockBtns = document.querySelectorAll(".modal-stock-btn");
    stockBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currentStock = btn.dataset.code;
            closeModal();
            loadStockData(currentStock);
        });
    });
}
`;

js += "\n" + modalLogic;

// Call initSearchModal inside DOMContentLoaded
js = js.replace(/initCustomDropdown\(\);/, 'initCustomDropdown();\n    initSearchModal();');

// 3. Update updateUI to also change the display text
const displayUpdateStr = `    const db = STOCK_DATABASE[stockCode];`;
const newDisplayUpdateStr = `    const db = STOCK_DATABASE[stockCode] || { name: Object.keys(STOCK_NAME_MAP).find(k => STOCK_NAME_MAP[k] === stockCode) || "검색된 종목" };
    const displayStockText = document.getElementById("current-selected-stock-display");
    if(displayStockText) {
        displayStockText.textContent = \`[\${db.name}] 분석 중...\`;
    }
`;
js = js.replace(/const db = STOCK_DATABASE\[stockCode\];\s+if \(!db\) return;/, newDisplayUpdateStr);

fs.writeFileSync('app.js', js, 'utf8');
console.log('app.js updated');
