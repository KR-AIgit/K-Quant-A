const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const regex = /<article class="glass-card selector-card" data-mobile-view="dashboard">[\s\S]*?<\/article>/;

const newSelector = `                <article class="glass-card selector-card" data-mobile-view="dashboard">
                    <div class="search-trigger-btn" id="open-search-modal">
                        <i class="fa-solid fa-magnifying-glass" style="color: var(--accent-purple);"></i>
                        <span id="current-selected-stock-display">종목 검색 및 분석 종목 선택...</span>
                    </div>
                </article>`;

html = html.replace(regex, newSelector);

const modalHtml = `
    <!-- Search Modal -->
    <div class="search-modal-overlay" id="search-modal">
        <div class="search-modal-container glass-card">
            <button class="close-modal-btn" id="close-search-modal"><i class="fa-solid fa-xmark"></i></button>
            <div class="modal-search-header">
                <div class="modal-search-input-group">
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input type="text" id="modal-stock-search-input" placeholder="종목명 또는 6자리 코드 입력 (예: 오뚜기, 005930)" />
                    <button id="modal-stock-search-btn">검색</button>
                </div>
            </div>
            
            <div class="modal-stock-lists">
                <!-- KOSPI Column -->
                <div class="stock-list-column">
                    <h4 class="list-column-title"><i class="fa-solid fa-building"></i> 국내 시가총액 Top 10 종목</h4>
                    <div class="stock-grid" id="kospi-grid">
                        <button class="modal-stock-btn" data-code="005930">1. 삼성전자</button>
                        <button class="modal-stock-btn" data-code="000660">2. SK하이닉스</button>
                        <button class="modal-stock-btn" data-code="373220">3. LG에너지솔루션</button>
                        <button class="modal-stock-btn" data-code="207940">4. 삼성바이오로직스</button>
                        <button class="modal-stock-btn" data-code="005380">5. 현대차</button>
                        <button class="modal-stock-btn" data-code="000270">6. 기아</button>
                        <button class="modal-stock-btn" data-code="068270">7. 셀트리온</button>
                        <button class="modal-stock-btn" data-code="105560">8. KB금융</button>
                        <button class="modal-stock-btn" data-code="005490">9. POSCO홀딩스</button>
                        <button class="modal-stock-btn" data-code="035420">10. NAVER</button>
                    </div>
                </div>
                <!-- KOSDAQ/ETF Column -->
                <div class="stock-list-column">
                    <h4 class="list-column-title"><i class="fa-solid fa-layer-group"></i> 거래량/시가총액 Top 10 ETF</h4>
                    <div class="stock-grid" id="kosdaq-grid">
                        <button class="modal-stock-btn" data-code="069500">1. KODEX 200</button>
                        <button class="modal-stock-btn" data-code="357870">2. TIGER CD금리투자</button>
                        <button class="modal-stock-btn" data-code="122630">3. KODEX 레버리지</button>
                        <button class="modal-stock-btn" data-code="114800">4. KODEX 인버스</button>
                        <button class="modal-stock-btn" data-code="360750">5. TIGER 미국S&P500</button>
                        <button class="modal-stock-btn" data-code="381180">6. TIGER 미국테크TOP10</button>
                        <button class="modal-stock-btn" data-code="252670">7. KODEX 200선물인버스2X</button>
                        <button class="modal-stock-btn" data-code="430220">8. KODEX KOFR금리액티브</button>
                        <button class="modal-stock-btn" data-code="305080">9. TIGER 2차전지테마</button>
                        <button class="modal-stock-btn" data-code="251340">10. KODEX 코스닥150선물인버스</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>`;

html = html.replace('</body>', modalHtml);

fs.writeFileSync('index.html', html, 'utf8');
console.log('index.html updated');
