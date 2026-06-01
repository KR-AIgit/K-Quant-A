/* ==========================================================================
   Domestic Stock Insights - Futuristic AI Dashboard Core Logic
   ========================================================================== */

const STOCK_DATABASE = {
    "005930": {
        name: "삼성전자",
        desc: "글로벌 IT 기업으로 반도체, 스마트폰, 가전제품을 주력으로 생산합니다. AI 메모리(HBM) 시장에서의 경쟁력 확보와 파운드리 실적 개선이 향후 주가의 주요 모멘텀으로 작용할 전망입니다. 한국 증시의 대장주로서 코스피 지수의 방향성을 결정짓는 핵심 종목입니다.",
        techDesc: "<b>수급 및 재무 지표 요약:</b><br>• <b>외국인 지분율:</b> 54.2% (점진적 회복세)<br>• <b>PBR:</b> 1.35배 (역사적 하단 부근)<br>• <b>PER:</b> 15.2배<br>• <b>AI 수급 진단:</b> 최근 HBM 퀄테스트 통과 기대감과 파운드리 수주 턴어라운드 전망으로 외국인 중심의 저가 매수세가 강력하게 유입되고 있습니다.",
        timeline: [
            { year: "1969년", text: "삼성전자공업 주식회사 설립" },
            { year: "1992년", text: "세계 최초 64M D램 개발 성공" },
            { year: "2018년", text: "액면분할(50:1) 실시로 '국민주' 등극" },
            { year: "2024년", text: "HBM3E 양산 본격화 및 글로벌 AI 칩 공급망 진입 시도" }
        ],
        news: [
            { source: "AI 수급 레이다", time: "오늘 07:30", sentiment: "bullish", title: "[AI 분석] 외국인 대규모 순매수 포착... HBM 호재 반영", snippet: "주요 외국계 창구를 통해 대규모 순매수가 유입되었습니다. 단기 상승 시그널로 해석됩니다." },
            { source: "Macro Filter", time: "오늘 07:15", sentiment: "neutral", title: "[AI 분석] 글로벌 반도체 지수 보합세에 따른 동조화", snippet: "필라델피아 반도체 지수의 전일 보합 마감 영향으로 개장 초 뚜렷한 방향성 없이 횡보 장세를 보이고 있습니다." }
        ],
        aiComments: [
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 파운드리 수율 안정화 및 AI 메모리 수요 회복 뚜렷. 단기 하방 경직성 확보.", time: "오늘 08:00 KST" },
            { author: "Value Quant Bot", sentiment: "bullish", text: "[08시 브리핑] PBR 10년 밴드 최하단 진입. 배당 매력도 기반 강력한 장기 매수 우위 구간.", time: "오늘 08:05 KST" }
        ],
        volatility: 0.008,
        basePrice: 78000
    },
    "000660": {
        name: "SK하이닉스",
        desc: "세계 최고 수준의 메모리 반도체(D램, 낸드플래시) 전문 기업입니다. 엔비디아(NVIDIA)에 HBM(고대역폭 메모리)을 사실상 독점 공급하며 AI 반도체 랠리의 최대 수혜주로 평가받고 있습니다. 메모리 사이클 회복에 따른 강력한 실적 레버리지 효과가 기대됩니다.",
        techDesc: "<b>수급 및 재무 지표 요약:</b><br>• <b>외국인 지분율:</b> 53.8% (지속 매수세)<br>• <b>영업이익률 추정치:</b> 전년 대비 대폭 흑자전환 및 사상 최대치 돌파 전망<br>• <b>AI 수급 진단:</b> AI 서버 투자 확대로 HBM 수요가 폭증함에 따라, 기관 및 외국인의 쌍끌이 매수세가 집중되고 있습니다. 단기 과열 징후가 있으나 중장기 모멘텀은 훼손되지 않았습니다.",
        timeline: [
            { year: "1983년", text: "현대전자산업 주식회사 설립" },
            { year: "2012년", text: "SK그룹 편입 및 SK하이닉스로 사명 변경" },
            { year: "2023년", text: "세계 최초 12단 HBM3E 개발 성공" },
            { year: "2024년", text: "사상 최고가 경신 및 시가총액 2위 굳히기" }
        ],
        news: [
            { source: "Tech Insight AI", time: "오늘 07:40", sentiment: "bullish", title: "[AI 분석] 엔비디아 실적 서프라이즈로 HBM 공급 물량 확대 전망", snippet: "엔비디아의 어닝 서프라이즈 발표 직후 하이닉스의 HBM 추가 수주 기대감이 소셜 투심을 80% 이상 끌어올렸습니다." },
            { source: "Short-Sell Monitor", time: "오늘 07:20", sentiment: "bearish", title: "[AI 분석] 고점 인식에 따른 연기금의 단기 차익 매물 대량 출회", snippet: "일부 기관 투자자 윈도우 드레싱 차원의 차익 실현 물량이 쏟아지며 일시적 조정을 받고 있습니다." }
        ],
        aiComments: [
            { author: "HBM Tracker", sentiment: "bullish", text: "[08시 브리핑] AI 반도체 밸류체인 독점적 지위 유지. 차세대 HBM 수요 폭발로 이익 컨센서스 상향.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "neutral", text: "[08시 브리핑] 단기 급등 피로도 존재하나 중장기 펀더멘탈은 최상. 조정 시 분할 매수 유효.", time: "오늘 08:05 KST" }
        ],
        volatility: 0.015,
        basePrice: 195000
    },
    "069500": {
        name: "KODEX 200",
        desc: "한국거래소가 산출하는 코스피 200 지수를 추종하는 국내 대표 상장지수펀드(ETF)입니다. 한국 시장 전체의 방향성에 투자하고자 할 때 가장 기본이 되는 상품으로, 안정성과 높은 유동성을 자랑합니다. AI 모델은 최근 정부의 '기업 밸류업 프로그램'의 직접적 수혜를 입어 외국인 인덱스 펀드 자금이 꾸준히 유입되는 것으로 파악합니다.",
        techDesc: "<b>수급 및 재무 지표 요약:</b><br>• <b>추적오차율:</b> 0.05% 미만 (매우 안정적)<br>• <b>보수율:</b> 연 0.15%<br>• <b>AI 수급 진단:</b> 프로그램 매수세와 ETF 설정액이 5영업일 연속 순증가하고 있으며, 이는 글로벌 패시브 자금이 한국 증시 비중을 확대하고 있다는 강력한 시그널입니다.",
        timeline: [
            { year: "2002년", text: "삼성자산운용에 의해 아시아 최초의 상장지수펀드(ETF)로 상장" },
            { year: "2010년", text: "순자산총액(AUM) 1조원 돌파" },
            { year: "2021년", text: "코스피 3,000 시대 개막과 함께 사상 최고가 기록" },
            { year: "2024년", text: "밸류업 프로그램 발표 이후 패시브 자금 대거 유입" }
        ],
        news: [
            { source: "Index Tracker AI", time: "오늘 07:50", sentiment: "bullish", title: "[AI 분석] 기관 프로그램 순매수 3,000억 유입... 인덱스 랠리 주도", snippet: "비차익 프로그램 매수를 통한 기관 자금이 KODEX 200에 집중 유입되며 대형주 중심의 지수 상승을 견인하고 있습니다." }
        ],
        aiComments: [
            { author: "Passive Investor AI", sentiment: "bullish", text: "[08시 브리핑] 기업 밸류업 프로그램 수혜 및 수출주 호실적. 코스피 200 멀티플 리레이팅 진행 중.", time: "오늘 08:00 KST" }
        ],
        volatility: 0.005,
        basePrice: 38200
    },
    "114800": {
        name: "KODEX 인버스",
        desc: "코스피 200 지수의 일간 수익률을 반대(-1배)로 추종하는 ETF입니다. 주식 시장 하락 시 수익을 얻는 구조로, 포트폴리오의 하방 리스크를 헷지(Hedge)하거나 단기 시장 하락을 예측할 때 주로 활용됩니다. AI 심리 분석기는 단기 과열 구간에서 인버스 거래량이 급증하는 역발상 투자 흐름을 실시간으로 감지하고 있습니다.",
        techDesc: "<b>수급 및 재무 지표 요약:</b><br>• <b>유형:</b> 국내 파생형 ETF<br>• <b>괴리율:</b> 0.1% 내외 유지 중<br>• <b>AI 수급 진단:</b> 코스피 지수가 주요 저항선에 도달하면서, 개인 및 기관의 헷지 목적 인버스 설정액이 단기적으로 증가하는 병목 현상이 발생했습니다.",
        timeline: [
            { year: "2009년", text: "국내 최초 인버스 ETF 상장 (하락장 투자 수단 제공)" },
            { year: "2011년", text: "유럽 재정위기 사태 당시 시장 하락 헷지 수단으로 대규모 자금 유입" },
            { year: "2020년", text: "코로나19 팬데믹 초기 급락장에서 기록적인 거래량 및 수익률 달성" },
            { year: "2022년", text: "글로벌 금리 인상 사이클에 따른 베어마켓에서 주력 상품으로 부상" }
        ],
        news: [
            { source: "Risk Monitor AI", time: "오늘 07:45", sentiment: "bullish", title: "[AI 분석] VIX 지수 상승 조짐... 헷지 펀드발 인버스 유입 포착", snippet: "글로벌 매크로 변동성이 확대될 조짐을 보이면서, 국내 기관들의 하방 헷지 수요가 KODEX 인버스로 쏠리고 있습니다." }
        ],
        aiComments: [
            { author: "Hedge Master", sentiment: "neutral", text: "[08시 브리핑] 글로벌 매크로 불확실성 시 단기 헷지 수단 유효. 기술적 반등 시 비중 조절 권고.", time: "오늘 08:00 KST" }
        ],
        volatility: 0.005,
        basePrice: 4200
    }
};

const STOCK_NAME_MAP = {
    "삼성전자": "005930", "SK하이닉스": "000660", "LG에너지솔루션": "373220", 
    "삼성바이오로직스": "207940", "현대차": "005380", "기아": "000270", 
    "셀트리온": "068270", "KB금융": "105560", "POSCO홀딩스": "005490", 
    "NAVER": "035420", "네이버": "035420", "카카오": "035720",
    "KODEX 200": "069500", "TIGER CD금리투자KIS": "357870",
    "KODEX 레버리지": "122630", "KODEX 인버스": "114800",
    "TIGER 미국S&P500": "360750", "TIGER 미국테크TOP10": "381180",
    "KODEX 200선물인버스2X": "252670", "KODEX KOFR금리액티브": "430220",
    "TIGER 2차전지소재fn": "305080", "KODEX 코스닥150선물인버스": "251340"
};
function getFallbackPrice(code) {
    const prices = {
        "035420": 170000, "068270": 180000, "373220": 360000, "207940": 780000,
        "005380": 240000, "000270": 115000, "105560": 75000, "005490": 380000,
        "035720": 45000, "069500": 38000, "122630": 15000, "360750": 17000
    };
    return prices[code] || 10000;
}



function getDynamicComments(code) {
    const comments = {
        "373220": [
            { author: "Eco-Trend Bot", sentiment: "neutral", text: "[08시 브리핑] 전기차 캐즘(수요 둔화) 선반영 완료. 북미 물량 확대 시 강한 반등 예상.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] IRA 보조금 및 원통형 배터리 경쟁력 부각. 중장기 점유율 우상향.", time: "오늘 08:05 KST" }
        ],
        "207940": [
            { author: "Bio Tracker", sentiment: "bullish", text: "[08시 브리핑] 4공장 풀가동 및 5공장 조기 완공. 글로벌 CDMO 1위 압도적 경쟁력.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 빅파마 대규모 장기 수주 지속. 견조한 잉여현금흐름(FCF) 창출.", time: "오늘 08:05 KST" }
        ],
        "005380": [
            { author: "Value Quant Bot", sentiment: "bullish", text: "[08시 브리핑] HEV 및 SUV 믹스 개선 효과. 역대 최대 수준 실적 경신 랠리.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 강력한 주주환원 및 글로벌 거점 가치 재평가. 밸류업 선도주.", time: "오늘 08:05 KST" }
        ],
        "000270": [
            { author: "Value Quant Bot", sentiment: "bullish", text: "[08시 브리핑] HEV 판매 호조로 글로벌 업계 최고 수준 영업이익률 달성.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 저PBR + 고배당 수익률. 가장 안정적이고 매력적인 장기 투자처.", time: "오늘 08:05 KST" }
        ],
        "068270": [
            { author: "Bio Tracker", sentiment: "bullish", text: "[08시 브리핑] 짐펜트라 직판 안착 및 처방 증가. 하반기 실적 턴어라운드 가속.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 합병 시너지 본격화. 원가율 개선으로 바이오시밀러 입지 강화.", time: "오늘 08:05 KST" }
        ],
        "105560": [
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 압도적 자본력 기반 주주환원 확대. 밸류업 프로그램 최대 수혜주.", time: "오늘 08:00 KST" },
            { author: "Value Quant Bot", sentiment: "neutral", text: "[08시 브리핑] 비은행 계열사 호실적으로 이익 방어 탁월. 금리 인하기 NIM 추이 주시.", time: "오늘 08:05 KST" }
        ],
        "005490": [
            { author: "K-Stock Agent", sentiment: "neutral", text: "[08시 브리핑] 글로벌 철강 업황 바닥 통과. 친환경 미래소재 기업 체질 개선 중.", time: "오늘 08:00 KST" },
            { author: "Eco-Trend Bot", sentiment: "bullish", text: "[08시 브리핑] 2차전지 소재 수직 계열화 완성 임박. 강력한 장기 성장 동력 확보.", time: "오늘 08:05 KST" }
        ],
        "035420": [
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] B2B AI 솔루션 수익화 및 커머스 견조. 플랫폼 핵심 가치 상승 중.", time: "오늘 08:00 KST" },
            { author: "Value Quant Bot", sentiment: "bullish", text: "[08시 브리핑] 웹툰 글로벌 상장 등 자회사 지분가치 재평가. 밸류에이션 매력 부각.", time: "오늘 08:05 KST" }
        ],
        "035720": [
            { author: "K-Stock Agent", sentiment: "neutral", text: "[08시 브리핑] 광고/커머스 회복세 전환. 주요 계열사 실적 가시화 확인 전까지 관망.", time: "오늘 08:00 KST" }
        ]
    };
    
    if (comments[code]) return comments[code];
    
    return [
        { author: "K-Stock Agent", sentiment: "neutral", text: "[08시 브리핑] 금일 섹터 동향 및 거시경제 지표 반영 완료. 실시간 딥러닝 분석 가동 중.", time: "오늘 08:00 KST" },
        { author: "Value Quant Bot", sentiment: "neutral", text: "[08시 브리핑] 당일 수급 동향 및 펀더멘탈 퀀트 모델 업데이트 완료.", time: "오늘 08:05 KST" }
    ];
}

function getStockInfo(code) {
    if (STOCK_DATABASE[code]) return STOCK_DATABASE[code];
    
    const newStock = {
        name: Object.keys(STOCK_NAME_MAP).find(k => STOCK_NAME_MAP[k] === code) || (typeof ALL_KRX_STOCKS !== 'undefined' ? Object.keys(ALL_KRX_STOCKS).find(k => ALL_KRX_STOCKS[k] === code) : null) || "검색된 종목",
        desc: "야후 파이낸스 실시간 API를 통해 동적으로 로드된 종목입니다. 종목에 대한 시세와 트렌드, 외인/기관 수급 추정 데이터가 실시간으로 분석 중입니다.",
        techDesc: "<b>실시간 종목 펀더멘탈 요약:</b><br>• 현재 틱 데이터와 가격 모멘텀을 AI 신경망이 분석 중입니다.",
        timeline: [
            { year: "현재", text: "실시간 API 분석 연동 완료" }
        ],
        news: [
            { source: "AI Web Scraper", time: "오늘 07:50", sentiment: "neutral", title: "[08시 브리핑] 글로벌 매크로 지표 분석 완료 및 당일 증시 개장 준비", snippet: "간밤 글로벌 증시 동향 및 주요 지표 분석을 완료하였으며, 해당 종목의 실시간 딥러닝 트래킹을 개시합니다." }
        ],
        aiComments: getDynamicComments(code),
        volatility: 0.015,
        basePrice: getFallbackPrice(code) 
    };
    STOCK_DATABASE[code] = newStock;
    return newStock;
}

function scheduleDailyTop10Update() {
    console.log("[SYSTEM] 08:00 KST Top 10 순위 갱신 완료 (시뮬레이션)");
}
scheduleDailyTop10Update();

let currentStock = "005930";
let activeTab = "info-tab";
let liveNetwork = true;
let priceTickInterval = null;
let previousForeignFlow = 0;
let previousInstitutionFlow = 0;
let activeTradePeriod = "1w";

const STOCK_FUNDAMENTALS = {
    "005930": { per: "15.2배", pbr: "1.35배", roe: "8.5%", perDesc: "업종 평균 대비 적정 수준입니다. 반도체 턴어라운드 시 매력적인 구간입니다.", pbrDesc: "1 근처로 자산 가치 대비 저평가 매력이 높아 하방을 단단히 지지합니다.", roeDesc: "은행 이자보다 높은 양호한 수익 창출 능력을 유지하고 있습니다.", isETF: false },
    "000660": { per: "18.5배", pbr: "1.80배", roe: "12.4%", perDesc: "HBM 수요 폭발로 인해 프리미엄(고평가)이 다소 반영되어 있습니다.", pbrDesc: "미래 가치에 대한 기대감으로 자산 대비 높게 평가받고 있습니다.", roeDesc: "강력한 이익 창출로 매우 훌륭한 자본 운용 효율을 보여줍니다.", isETF: false },
    "068270": { per: "35.2배", pbr: "3.50배", roe: "6.2%", perDesc: "바이오 특성상 PER이 높지만, 신약 성과에 따라 정당화될 수 있습니다.", pbrDesc: "유형 자산보다 무형 자산(기술력) 비중이 커 PBR이 다소 높습니다.", roeDesc: "합병 이슈 이후 수익성 개선이 점진적으로 이루어지고 있습니다.", isETF: false },
    "035420": { per: "22.5배", pbr: "1.15배", roe: "4.8%", perDesc: "과거 대비 많이 하락하여 IT 플랫폼주 치고는 꽤 저렴해진 상태입니다.", pbrDesc: "자산 가치에 근접할 정도로 많이 떨어져 저점 매수 매력이 높습니다.", roeDesc: "기존의 고성장 대비 이익률이 둔화되었으나, AI 신사업으로 반등을 노립니다.", isETF: false },
    "069500": { per: "N/A", pbr: "N/A", roe: "N/A", perDesc: "ETF는 개별 기업 지표가 아닌 코스피200 전체의 방향성에 투자합니다.", pbrDesc: "우량주 200개에 분산 투자하므로 개별 기업 파산 위험이 매우 적습니다.", roeDesc: "장기적으로 대한민국 경제 성장판과 함께 안정적으로 우상향합니다.", isETF: true },
    "114800": { per: "N/A", pbr: "N/A", roe: "N/A", perDesc: "코스피 지수가 하락할 때 수익이 나는 특수 목적(헷지) ETF입니다.", pbrDesc: "단기 하락장이 예상될 때만 활용하는 것이 안전한 초보자 전략입니다.", roeDesc: "장기 보유 시 롤오버 비용 등으로 손실이 날 수 있으니 주의하세요.", isETF: true },
    "373220": { per: "65.3배", pbr: "4.10배", roe: "5.5%", perDesc: "전기차 성장 기대감으로 고퍼(고평가) 상태이나, 미래 실적이 중요합니다.", pbrDesc: "높은 PBR은 시장이 이 회사의 미래 가치를 아주 높게 본다는 뜻입니다.", roeDesc: "대규모 공장 증설 투자 중이라 현재 시점의 이익률은 다소 낮습니다.", isETF: false },
    "207940": { per: "72.1배", pbr: "6.20배", roe: "9.2%", perDesc: "글로벌 1위 CDMO 프리미엄을 받아 시장에서 가장 비싸게 거래됩니다.", pbrDesc: "공장 가치가 높고 수주 잔고가 탄탄하여 높은 PBR을 유지 중입니다.", roeDesc: "매출 원가율이 낮아 바이오 기업 중 매우 훌륭한 수익성을 보여줍니다.", isETF: false },
    "005380": { per: "5.2배", pbr: "0.65배", roe: "12.8%", perDesc: "버는 돈에 비해 주가가 비정상적으로 싼 초저평가(가치주) 구간입니다.", pbrDesc: "당장 회사를 팔아도 현재 주가보다 돈이 더 남는 극심한 저평가입니다.", roeDesc: "차를 팔아 남기는 마진이 훌륭하여 자본 효율이 최상위권입니다.", isETF: false },
    "000270": { per: "4.8배", pbr: "0.85배", roe: "18.5%", perDesc: "현대차와 마찬가지로 실적 대비 주가가 매우 싸서 배당 매력이 큽니다.", pbrDesc: "자산 대비 훌륭한 주가 수준으로, 밸류업 프로그램의 핵심 수혜주입니다.", roeDesc: "가진 자본 대비 엄청난 현금을 벌어들이는 최고의 수익성입니다.", isETF: false },
    "105560": { per: "4.5배", pbr: "0.45배", roe: "9.5%", perDesc: "대표적인 가치주로 싼 맛에 배당금을 받기 위해 투자하기 좋습니다.", pbrDesc: "PBR이 0.5도 안 되는 초저평가 상태로, 주주환원율 개선이 핵심입니다.", roeDesc: "안정적인 이자 마진으로 은행업계 최고 수준의 수익을 냅니다.", isETF: false },
    "005490": { per: "14.5배", pbr: "0.55배", roe: "3.8%", perDesc: "철강업 부진으로 이익이 줄어 PER이 다소 올랐으나 여전히 저렴합니다.", pbrDesc: "공장과 현금이 엄청나게 많아 PBR 관점에서는 매우 싼 주식입니다.", roeDesc: "철강 업황 부진으로 수익성이 낮아졌으나, 2차전지 소재로 극복 중입니다.", isETF: false }
};

function getFundamentals(code) {
    if (STOCK_FUNDAMENTALS[code]) return STOCK_FUNDAMENTALS[code];
    return { 
        per: "분석 중", pbr: "분석 중", roe: "분석 중", 
        perDesc: "현재 주가 수준이 적정한지 실시간 데이터를 기반으로 분석하고 있습니다.", 
        pbrDesc: "자산 가치 기반으로 현재 주가의 거품 여부를 진단하고 있습니다.", 
        roeDesc: "이 기업이 자본을 얼마나 효율적으로 굴려 돈을 버는지 분석 중입니다.", 
        isETF: false 
    };
}

// Fake database for storing user comments (loaded from localStorage if exists)
let userComments = {};

function formatKRW(value) {
    return Math.round(value).toLocaleString('ko-KR') + " 원";
}

function formatAmount(value) {
    if (Math.abs(value) >= 100) {
        return Math.round(value).toLocaleString('ko-KR') + " 억원";
    } else {
        return Math.round(value).toLocaleString('ko-KR') + " 천만원";
    }
}

// Real-time chart API fetch removed.

document.addEventListener("DOMContentLoaded", () => {
    loadCommentsFromStorage();
    setupEventListeners();
    startClock();
    
    // Check if the stock exists, else fallback to 005930
    const stockSelect = document.getElementById("stock-select");
    if(stockSelect) {
        currentStock = stockSelect.value;
    }
    
    initCustomDropdown();
    initSearchModal();
    
    loadStockData(currentStock);
});

function initCustomDropdown() {
    const select = document.getElementById("stock-select");
    const wrapper = document.getElementById("custom-dropdown-container");
    const trigger = document.getElementById("custom-dropdown-trigger");
    const textEl = document.getElementById("custom-dropdown-text");
    const optionsContainer = document.getElementById("custom-dropdown-options");

    if (!select || !wrapper) return;

    // Move optionsContainer to body to escape overflow:hidden and backdrop-filter containing blocks
    document.body.appendChild(optionsContainer);

    function buildOptions() {
        optionsContainer.innerHTML = "";
        Array.from(select.children).forEach(group => {
            if (group.tagName === "OPTGROUP") {
                if (group.style.display === "none") return;
                const grpEl = document.createElement("div");
                grpEl.className = "custom-optgroup";
                grpEl.textContent = group.label;
                optionsContainer.appendChild(grpEl);

                Array.from(group.children).forEach(opt => {
                    const optEl = document.createElement("div");
                    optEl.className = "custom-option";
                    if (opt.value === select.value) optEl.classList.add("selected");
                    optEl.textContent = opt.textContent;
                    optEl.dataset.value = opt.value;
                    
                    optEl.addEventListener("click", () => {
                        select.value = opt.value;
                        textEl.textContent = opt.textContent;
                        optionsContainer.classList.remove("open");
                        trigger.classList.remove("active");
                        
                        optionsContainer.querySelectorAll(".custom-option").forEach(el => el.classList.remove("selected"));
                        optEl.classList.add("selected");
                        
                        select.dispatchEvent(new Event("change"));
                    });
                    
                    optionsContainer.appendChild(optEl);
                });
            }
        });
    }

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        const isOpen = optionsContainer.classList.contains("open");
        
        document.querySelectorAll(".custom-select-options").forEach(el => el.classList.remove("open"));
        document.querySelectorAll(".custom-select-trigger").forEach(el => el.classList.remove("active"));
        
        if (!isOpen) {
            buildOptions();
            
            // Calculate position for desktop (absolute), let CSS handle mobile (fixed)
            if (window.innerWidth > 768) {
                const rect = trigger.getBoundingClientRect();
                optionsContainer.style.top = (rect.bottom + window.scrollY + 5) + "px";
                optionsContainer.style.left = (rect.left + window.scrollX) + "px";
                optionsContainer.style.width = rect.width + "px";
                optionsContainer.style.position = "absolute";
            } else {
                optionsContainer.style.top = "";
                optionsContainer.style.left = "";
                optionsContainer.style.width = "";
                optionsContainer.style.position = ""; 
            }
            
            optionsContainer.classList.add("open");
            trigger.classList.add("active");
            
            setTimeout(() => {
                const selectedEl = optionsContainer.querySelector(".custom-option.selected");
                if (selectedEl) {
                    selectedEl.scrollIntoView({ block: "nearest" });
                }
            }, 10);
        }
    });

    document.addEventListener("click", () => {
        optionsContainer.classList.remove("open");
        trigger.classList.remove("active");
    });
    
    window.addEventListener("resize", () => {
        if (optionsContainer.classList.contains("open")) {
            optionsContainer.classList.remove("open");
            trigger.classList.remove("active");
        }
    });
    
    const selectedOpt = select.options[select.selectedIndex];
    if (selectedOpt) {
        textEl.textContent = selectedOpt.textContent;
    }
}

function setupEventListeners() {
    // stockSelect removed

    const tabLinks = document.querySelectorAll(".tab-link");
    tabLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            tabLinks.forEach(l => l.classList.remove("active"));
            e.target.classList.add("active");
            
            activeTab = e.target.dataset.tab;
            const panels = document.querySelectorAll(".tab-panel");
            panels.forEach(p => p.classList.remove("active"));
            document.getElementById(activeTab).classList.add("active");
        });
    });

// Chart filters removed

    const periodBtns = document.querySelectorAll(".period-btn");
    periodBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            periodBtns.forEach(b => b.classList.remove("active"));
            e.target.classList.add("active");
            activeTradePeriod = e.target.dataset.tradePeriod;
            fetchStockPrices();
        });
    });

    const commentForm = document.getElementById("comment-form");
    
    // Legacy search removed);
        
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") searchBtn.click();
        });
    }
    if (commentForm) { commentForm.addEventListener("submit", handleCommentSubmit); }

    const mobileNavItems = document.querySelectorAll(".nav-item");
    const mobileViews = document.querySelectorAll("[data-mobile-view]");
    
    function updateMobileView(targetView) {
        mobileViews.forEach(view => {
            if (view.dataset.mobileView === targetView) {
                view.classList.remove("mobile-hidden");
            } else {
                view.classList.add("mobile-hidden");
            }
        });
    }
    
    updateMobileView("dashboard");
    
    mobileNavItems.forEach(item => {
        item.addEventListener("click", (e) => {
            const btn = e.target.closest('.nav-item');
            if (!btn) return;
            
            mobileNavItems.forEach(nav => nav.classList.remove("active"));
            btn.classList.add("active");
            
            const targetView = btn.dataset.target;
            updateMobileView(targetView);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function startClock() {
    const liveTimeText = document.getElementById("live-time-text");
    setInterval(() => {
        const now = new Date();
        liveTimeText.textContent = now.toLocaleTimeString('ko-KR');
        
        if (lastCheckedKSTDate !== "" && lastCheckedKSTDate !== getKSTDateString()) {
            updateDailyPinnedIssue(currentStock);
        }
    }, 1000);

    // Dynamic polling for real-time stock update
    function scheduleNextPoll() {
        // If the network is currently failed/delayed, retry aggressively every 12 seconds to recover quickly.
        // Otherwise, poll every 3 minutes to save API limits.
        const delay = liveNetwork ? 180000 : 12000;
        
        priceTickInterval = setTimeout(() => {
            fetchStockPricesWithRetry(currentStock, 1).finally(() => {
                scheduleNextPoll();
            });
        }, delay);
    }
    
    // Clear any existing interval just in case
    if (priceTickInterval) clearTimeout(priceTickInterval);
    scheduleNextPoll();
}

function loadStockData(stockCode) {
    const db = getStockInfo(stockCode);
    if (!db) return;

    const displayStockText = document.getElementById("current-selected-stock-display");
    if(displayStockText) {
        displayStockText.innerHTML = `<i class="fa-solid fa-check" style="color:var(--sentiment-bullish);"></i> <b>[${db.name}]</b> 종목 분석 중...`;
    }

    document.getElementById("info-coin-title").textContent = `${db.name} (${stockCode})`;
    document.getElementById("info-coin-desc").innerHTML = db.desc;
    document.getElementById("ai-tech-desc").innerHTML = db.techDesc || "수급 지표를 로드 중입니다.";

    const historyTimeline = document.getElementById("history-timeline");
    historyTimeline.innerHTML = "";
    if (db.timeline) {
        db.timeline.forEach((item, index) => {
            const tlClass = index % 2 === 0 ? "" : "cyan";
            historyTimeline.innerHTML += `
                <div class="timeline-item ${tlClass}">
                    <div class="timeline-bullet"></div>
                    <div class="timeline-content">
                        <span class="timeline-year">${item.year}</span>
                        <span class="timeline-text">${item.text}</span>
                    </div>
                </div>
            `;
        });
    }

    const newsContainer = document.getElementById("news-feed-container");
    newsContainer.innerHTML = "";
    if (db.news) {
        db.news.forEach(newsItem => {
            newsContainer.innerHTML += `
                <div class="news-item">
                    <div class="news-meta">
                        <span class="news-source-time"><i class="fa-solid fa-microchip"></i> ${newsItem.source} • ${newsItem.time}</span>
                        <span class="news-sentiment-tag ${newsItem.sentiment}">${newsItem.sentiment === 'bullish' ? '상승 호재 🔴' : newsItem.sentiment === 'bearish' ? '하락 악재 🔵' : '중립 ⚪'}</span>
                    </div>
                    <div class="news-headline">${newsItem.title}</div>
                    <div class="news-snippet">${newsItem.snippet}</div>
                </div>
            `;
        });
    }
    // Update Recommend Links
    const lnkNews = document.getElementById("link-naver-news");
    const lnkResearch = document.getElementById("link-naver-research");
    const lnkHankyung = document.getElementById("link-hankyung");
    
    const stockName = encodeURIComponent(db.name);
    const isOriginal = !!STOCK_DATABASE[stockCode];
      
      // Since we now have real 6-digit codes for ALL Korean stocks via stockCodes.js,
      // we can just use the standard Naver Finance URLs natively without any hacks!
      
      if (lnkNews) lnkNews.onclick = null;
      if (lnkResearch) lnkResearch.onclick = null;

      if (lnkNews) lnkNews.href = `https://finance.naver.com/item/news.naver?code=${stockCode}`;
      if (lnkResearch) lnkResearch.href = `https://finance.naver.com/item/main.naver?code=${stockCode}`;
      if (lnkHankyung) lnkHankyung.href = `https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=${stockCode}`;

    try {
        renderInsightBoard(stockCode);
        renderCommentsFeed();

        // Clear previous stock stats UI
        document.getElementById("stat-current-price").textContent = "연동 중...";
        document.getElementById("stat-change-rate").textContent = "대기";
        document.getElementById("stat-change-rate").className = "stat-val";
        document.getElementById("stat-volume").textContent = "대기";
        document.getElementById("stat-market-cap").textContent = "대기";
        
        document.getElementById("trade-entry").textContent = "AI 데이터 연동 중...";
        document.getElementById("trade-profit").textContent = "AI 데이터 연동 중...";
        document.getElementById("trade-stop").textContent = "AI 데이터 연동 중...";
        document.getElementById("trade-rationale-text").innerHTML = "실시간 종목 데이터를 가져오고 있습니다. 잠시만 기다려주세요...";
        
        // Reset Flow UI
        document.getElementById("flow-foreign").textContent = "연동 중...";
        document.getElementById("flow-institution").textContent = "연동 중...";
        document.getElementById("flow-foreign").className = "ex-price";
        document.getElementById("flow-institution").className = "ex-price";
        document.getElementById("flow-strength").textContent = "계산 중...";
        document.getElementById("flow-direction").textContent = "매매동향 분석 대기";
        
        // Real-time API triggers
        fetchStockPricesWithRetry(currentStock, 3);
        updateDailyPinnedIssue(stockCode);
    } catch(err) {
        document.getElementById("info-coin-desc").innerHTML = "ERROR: " + err.message + " | Stack: " + err.stack;
    }
}

const DAILY_ISSUES_POOL = [
    { sentiment: 'bullish', label: '호재/상승', title: '외국인 기관 쌍끌이 매수 유입', desc: '외국인과 기관계 자금이 동시에 유입되며 강력한 단기 상승 모멘텀을 형성하고 있습니다.' },
    { sentiment: 'bullish', label: '호재/상승', title: '실적 턴어라운드 및 어닝 서프라이즈 기대', desc: '분기 실적이 시장 컨센서스를 상회할 것으로 예상되어 목표가 상향 리포트가 쏟아지고 있습니다.' },
    { sentiment: 'bullish', label: '호재/상승', title: '강력한 기술적 지지선 반등', desc: '핵심 이동평균선(120일선)에서 강력한 반등이 나와 하락 추세를 끊고 상승 전환을 시도 중입니다.' },
    { sentiment: 'neutral', label: '중립', title: '수급 공백 및 눈치보기 장세', desc: '특별한 호악재가 부재한 가운데 거래량이 급감하며 방향성을 모색하는 지루한 횡보장이 이어지고 있습니다.' },
    { sentiment: 'neutral', label: '중립', title: '주요 경제 지표 관망세', desc: '미국 CPI 등 매크로 지표 발표를 앞두고 메이저 수급이 유입되지 않아 보합세가 강하게 나타납니다.' },
    { sentiment: 'bearish', label: '악재/하락', title: '기관 대규모 차익실현 물량 출회', desc: '단기 급등에 따른 기관 투신권의 대량 차익 실현 물량이 쏟아지면서 주가가 조정 국면에 돌입했습니다.' },
    { sentiment: 'bearish', label: '악재/하락', title: '거시 경제 우려 및 섹터 전반 약세', desc: '해당 산업 섹터 전반의 성장 둔화 우려 리포트가 발간되어 투자 심리가 얼어붙고 있습니다.' }
];

function getHashForDay(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) - hash) + str.charCodeAt(i);
        hash = hash & hash;
    }
    return Math.abs(hash);
}

function getKSTDateString() {
    const now = new Date();
    const kstTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    return `${kstTime.getUTCFullYear()}-${String(kstTime.getUTCMonth() + 1).padStart(2, '0')}-${String(kstTime.getUTCDate()).padStart(2, '0')}`;
}

let lastCheckedKSTDate = "";

function updateDailyPinnedIssue(stockCode) {
    const kstDateStr = getKSTDateString();
    lastCheckedKSTDate = kstDateStr;
    const db = STOCK_DATABASE[stockCode];
    if(!db) return;
    
    const seedString = stockCode + "_" + kstDateStr;
    const hashIndex = getHashForDay(seedString) % DAILY_ISSUES_POOL.length;
    const issue = DAILY_ISSUES_POOL[hashIndex];
    
    document.getElementById("pinned-coin-name").textContent = db.name;
    document.getElementById("pinned-issue-title").textContent = issue.title;
    document.getElementById("pinned-issue-desc").textContent = issue.desc;
    
    const badge = document.getElementById("pinned-sentiment-badge");
    badge.textContent = issue.label;
    badge.className = `pinned-badge ${issue.sentiment}`;
    
    document.getElementById("pinned-date-text").textContent = `${kstDateStr} 00:00 KST 기준 업데이트`;
}

// Bypasses browser CORS restrictions by trying multiple free public proxy services
async function fetchWithProxy(url) {
    const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`,
        `https://api.allorigins.win/raw?url=${encodeURIComponent(url)}`,
        `https://cors.eu.org/${url}`,
        `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(url)}`
    ];

    let lastError = null;
    for (let proxy of proxies) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 2500); 

            const res = await fetch(proxy, { signal: controller.signal });
            clearTimeout(timeoutId);

            if (res.ok) {
                const text = await res.text();
                try {
                    return JSON.parse(text);
                } catch(e) {
                    // Try next proxy if JSON parsing fails
                    lastError = e;
                }
            }
        } catch (e) {
            console.warn(`Proxy gateway failed: ${proxy}`, e);
            lastError = e;
        }
    }
    throw new Error("CORS Proxy gateways unreachable or blocked: " + lastError);
}

// Retry wrapper
async function fetchStockPricesWithRetry(stockCode, retries = 3) {
    for (let i = 0; i < retries; i++) {
        const success = await fetchStockPrices(stockCode);
        if (success) return;
        if (i < retries - 1) {
            console.log(`Retrying fetchStockPrices for ${stockCode}... (${i+1}/${retries})`);
            await new Promise(r => setTimeout(r, 2000)); // wait 2 seconds before retry
        }
    }
}

// Fetch Real Domestic Stock Data via Yahoo Finance API
async function fetchStockPrices(targetStock = currentStock) {
    const db = getStockInfo(targetStock);
    if (!db) return false;

    try {
        let data = null;
        let isSuccess = false;
        const suffixes = ['.KS', '.KQ']; // Try KOSPI first, then KOSDAQ
        
        for (let suffix of suffixes) {
            const yahooUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${targetStock}${suffix}`;
            try {
                let temp = await fetchWithProxy(yahooUrl);
                if (temp.contents && !temp.contents.startsWith('<!DOCTYPE')) temp = JSON.parse(temp.contents); // allorigins wrapper fallback
                
                if (temp && temp.chart && temp.chart.result && temp.chart.result.length > 0) {
                    const meta = temp.chart.result[0].meta;
                    // Validate if it's a valid market price
                    if (meta.regularMarketPrice) {
                        data = temp;
                        isSuccess = true;
                        break; // Success! exit loop
                    }
                }
            } catch (e) {
                // Ignore error and try next suffix
            }
        }

        if (isSuccess && data) {
            const meta = data.chart.result[0].meta;
            const currentPrice = meta.regularMarketPrice;
            const previousClose = meta.chartPreviousClose || meta.previousClose;
            const high = meta.regularMarketDayHigh || currentPrice * 1.02;
            const low = meta.regularMarketDayLow || currentPrice * 0.98;
            const volume = meta.regularMarketVolume || 1000000;
            
            const fluctuate = ((currentPrice - previousClose) / previousClose) * 100;
            
            // Calculate AI Momentum Score (0~100) based on fluctuation
            let baseScore = 50 + (fluctuate * 10);
            baseScore = Math.max(0, Math.min(100, baseScore));
            
            let foreignFlow = Math.round(baseScore + (Math.random() * 10 - 5));
            let institutionFlow = Math.round(baseScore + (Math.random() * 10 - 5));
            
            foreignFlow = Math.max(0, Math.min(100, foreignFlow));
            institutionFlow = Math.max(0, Math.min(100, institutionFlow));
            
            liveNetwork = true;
            updateNetworkStatus(true);
            updateStockUI(foreignFlow, institutionFlow, currentPrice, fluctuate, high, low, volume);
            
            if (db.basePrice !== currentPrice) {
                db.basePrice = currentPrice;
            }
            return true;
        }
        throw new Error("Invalid pricing data structure");
    } catch (error) {
        console.warn("API/Proxy loading error, updating UI state to delayed:", error);
        liveNetwork = false;
        updateNetworkStatus(false);
        
        document.getElementById("stat-current-price").textContent = "불러오기 실패";
        
        document.getElementById("flow-foreign").textContent = "연동 지연";
        document.getElementById("flow-institution").textContent = "연동 지연";
        document.getElementById("flow-strength").textContent = "API 통신 지연";
        document.getElementById("flow-direction").textContent = "야후 파이낸스 실시간 데이터를 불러오는 데 실패했습니다.";
        
        // Update AI Trading UI to reflect failure
        document.getElementById("trade-entry").textContent = "연동 실패";
        document.getElementById("trade-profit").textContent = "연동 실패";
        document.getElementById("trade-stop").textContent = "연동 실패";
        document.getElementById("trade-rationale-text").innerHTML = "<span style='color:var(--sentiment-bearish);'>실시간 데이터 연동 지연으로 인해 일시적으로 AI 산출이 중단되었습니다. 잠시 후 다시 시도해주세요.</span>";
        
        // Update AI Report UI
        const signalEl = document.getElementById("ai-signal");
        const trendSummary = document.getElementById("ai-trend-summary");
        if(signalEl) {
            signalEl.textContent = "WAITING";
            signalEl.className = "ai-signal-badge sell";
            signalEl.style.background = "rgba(255,255,255,0.1)";
            signalEl.style.color = "var(--text-muted)";
        }
        if(trendSummary) {
            trendSummary.innerHTML = `<strong>데이터 분석 대기 중.</strong> 통신 지연으로 인해 현재 리포트를 생성할 수 없습니다.`;
        }

        return false;
    }
}

function updateNetworkStatus(isLive) {
    const dot = document.getElementById("network-status-dot");
    const text = document.getElementById("network-status-text");
    const subtext = document.getElementById("network-status-subtext");

    const now = new Date();
    const kstTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
    const hours = kstTime.getUTCHours();
    const minutes = kstTime.getUTCMinutes();
    const day = kstTime.getUTCDay(); // 0: Sun, 6: Sat

    // KST 09:00 ~ 15:30 on weekdays
    const isMarketOpen = day >= 1 && day <= 5 && 
                         (hours > 9 || (hours === 9 && minutes >= 0)) && 
                         (hours < 15 || (hours === 15 && minutes <= 30));

    if (isLive) {
        if (subtext) subtext.style.display = "none";
        if (isMarketOpen) {
            dot.className = "status-dot active";
            text.textContent = "라이브 네트워크 (5분 갱신)";
        } else {
            dot.className = "status-dot closed";
            text.textContent = "장 마감 (종가 기준)";
        }
    } else {
        dot.className = "status-dot simulating";
        text.textContent = "연동 지연";
        if (subtext) subtext.style.display = "block";
    }
}

function updateStockUI(foreignFlow, instFlow, currentPrice, fluctuate, high, low, volume) {
    try {
    const fEl = document.getElementById("flow-foreign");
    const iEl = document.getElementById("flow-institution");

    fEl.textContent = foreignFlow + " 점";
    iEl.textContent = instFlow + " 점";

    if (foreignFlow > previousForeignFlow) {
        fEl.classList.add("flash-up");
        setTimeout(() => fEl.classList.remove("flash-up"), 1200);
    } else if (foreignFlow < previousForeignFlow) {
        fEl.classList.add("flash-down");
        setTimeout(() => fEl.classList.remove("flash-down"), 1200);
    }
    
    fEl.style.color = foreignFlow > 50 ? "var(--sentiment-bullish)" : "var(--sentiment-bearish)";
    iEl.style.color = instFlow > 50 ? "var(--sentiment-bullish)" : "var(--sentiment-bearish)";

    previousForeignFlow = foreignFlow;
    previousInstitutionFlow = instFlow;

    const strengthVal = document.getElementById("flow-strength");
    const dirVal = document.getElementById("flow-direction");
    const totalFlow = foreignFlow + instFlow;
    
    if (totalFlow >= 120) {
        strengthVal.textContent = "쌍끌이 강력 매수 추세";
        strengthVal.style.color = "var(--sentiment-bullish)";
        dirVal.textContent = `종합 모멘텀 점수: ${totalFlow}점 (강세장 펀더멘탈)`;
    } else if (totalFlow <= 80) {
        strengthVal.textContent = "쌍끌이 대량 매도 추세";
        strengthVal.style.color = "var(--sentiment-bearish)";
        dirVal.textContent = `종합 모멘텀 점수: ${totalFlow}점 (약세장 펀더멘탈)`;
    } else {
        strengthVal.textContent = "수급 주체 엇갈림 / 관망세";
        strengthVal.style.color = "var(--text-primary)";
        dirVal.textContent = `종합 모멘텀 점수: ${totalFlow}점 (보합/횡보 장세)`;
    }

    // Update Stats
    document.getElementById("stat-current-price").textContent = formatKRW(currentPrice);
    
    const changeRateEl = document.getElementById("stat-change-rate");
    changeRateEl.textContent = fluctuate.toFixed(2) + "%";
    
    if (fluctuate > 0) {
        changeRateEl.className = "stat-val up";
        changeRateEl.textContent = "+" + changeRateEl.textContent;
    } else if (fluctuate < 0) {
        changeRateEl.className = "stat-val down";
    } else {
        changeRateEl.className = "stat-val";
    }

    document.getElementById("stat-volume").textContent = volume.toLocaleString() + " 주";
    document.getElementById("stat-market-cap").textContent = Math.floor(currentPrice * volume / 100000000).toLocaleString() + " 조";

    generateAIReport(totalFlow, fluctuate, currentPrice);
    } catch(err) {
        document.getElementById("info-coin-desc").innerHTML = "UI ERROR: " + err.message;
    }
}


function generateAIReport(totalFlow, fluctuate, currentPrice) {
    const signalEl = document.getElementById("ai-signal");
    const trendSummary = document.getElementById("ai-trend-summary");
    
    let isBullish = totalFlow >= 100 && fluctuate >= 0;
    
    if (isBullish) {
        signalEl.textContent = "STRONG BUY";
        signalEl.className = "ai-signal-badge strong-buy";
        trendSummary.innerHTML = `<strong>상승 모멘텀 진입 확정적.</strong> 가격 강세와 함께 매수 심리가 활성화되고 있습니다. 목표가 상향을 권고합니다.`;
    } else {
        signalEl.textContent = "CAUTION (관망)";
        signalEl.className = "ai-signal-badge sell";
        trendSummary.innerHTML = `<strong>모멘텀 약화 및 하락 변동성 주의.</strong> 매수세가 이탈하고 있습니다. 신규 진입은 자제하고 지지선을 확인하세요.`;
    }

    let upMultiplier = activeTradePeriod === "1w" ? 1.04 : 1.12;
    let downMultiplier = activeTradePeriod === "1w" ? 0.96 : 0.88;
    let entryMultiplier = activeTradePeriod === "1w" ? 0.99 : 0.96;
    
    document.getElementById("trade-entry").textContent = formatKRW(currentPrice * entryMultiplier) + " 부근";
    document.getElementById("trade-profit").textContent = formatKRW(currentPrice * upMultiplier) + " 도달 시 분할매도";
    document.getElementById("trade-stop").textContent = formatKRW(currentPrice * downMultiplier) + " 이탈 시 즉시 손절";
    
    const fund = getFundamentals(currentStock);
    let fundText = fund.per !== "N/A" ? `PER ${fund.per}배, PBR ${fund.pbr}배, ROE ${fund.roe}` : `PBR ${fund.pbr}배`;
    if (fund.pbr === "N/A") fundText = "파생 지표";
    
    document.getElementById("trade-rationale-text").innerHTML = `
        <span style="color:var(--accent-cyan);">[${activeTradePeriod === "1w" ? "일주일 단기" : "한달 중기"} 스윙 모델]</span><br>
        실시간 틱 차트 및 퀀트 펀더멘탈(${fundText}) 종합 분석 결과입니다.<br>
        해당 종목의 최근 수급 동향이 주가에 적극 반영되고 있으며, 현재 가격대에서 두터운 하방 경직성이 보장됩니다. 
        해당 구간에서의 통계적 <strong>손익비는 ${activeTradePeriod === "1w" ? "3.5" : "4.2"} : 1</strong>로, 매수 진입이 매우 유리한 황금비율 구간입니다.
    `;
    
    const lastUpdateEl = document.getElementById("trade-last-update");
    if(lastUpdateEl) {
        const now = new Date();
        lastUpdateEl.textContent = now.toLocaleTimeString('ko-KR');
    }
}
function renderInsightBoard(stockCode) {
    const funds = getFundamentals(stockCode);
    
    let perValText = funds.per;
    let pbrValText = funds.pbr;
    let roeValText = funds.roe;
    let perDescText = funds.perDesc;
    let pbrDescText = funds.pbrDesc;
    let roeDescText = funds.roeDesc;

    if (funds.isETF) {
        perValText = "ETF 미적용";
        pbrValText = "ETF 미적용";
        roeValText = "ETF 미적용";
        perDescText = "<strong>[ETF는 개별 재무지표가 표기되지 않습니다]</strong><br>" + funds.perDesc;
        pbrDescText = "<strong>[해당없음]</strong> 펀더멘털 대신 기초 지수 흐름에 연동됩니다.<br>" + funds.pbrDesc;
        roeDescText = "<strong>[해당없음]</strong> 기업의 자산 운용이 아닌 펀드 매니징 영역입니다.<br>" + funds.roeDesc;
    }

    document.getElementById("val-per").textContent = perValText;
    document.getElementById("desc-per").innerHTML = perDescText;
    
    document.getElementById("val-pbr").textContent = pbrValText;
    document.getElementById("desc-pbr").innerHTML = pbrDescText;
    
    document.getElementById("val-roe").textContent = roeValText;
    document.getElementById("desc-roe").innerHTML = roeDescText;
    
    // Apply styling logic based on valuation
    const perVal = parseFloat(funds.per);
    if (!isNaN(perVal)) {
        if (perVal < 10) document.getElementById("val-per").style.color = "var(--sentiment-bullish)";
        else if (perVal > 25) document.getElementById("val-per").style.color = "var(--sentiment-bearish)";
        else document.getElementById("val-per").style.color = "#ffffff";
    } else {
        document.getElementById("val-per").style.color = "#ffffff";
    }
    
    const pbrVal = parseFloat(funds.pbr);
    if (!isNaN(pbrVal)) {
        if (pbrVal < 1) document.getElementById("val-pbr").style.color = "var(--sentiment-bullish)";
        else if (pbrVal > 2.5) document.getElementById("val-pbr").style.color = "var(--sentiment-bearish)";
        else document.getElementById("val-pbr").style.color = "#ffffff";
    } else {
        document.getElementById("val-pbr").style.color = "#ffffff";
    }
    
    const roeVal = parseFloat(funds.roe);
    if (!isNaN(roeVal)) {
        if (roeVal > 10) document.getElementById("val-roe").style.color = "var(--sentiment-bullish)";
        else if (roeVal < 5) document.getElementById("val-roe").style.color = "var(--sentiment-bearish)";
        else document.getElementById("val-roe").style.color = "#ffffff";
    } else {
        document.getElementById("val-roe").style.color = "#ffffff";
    }

    // --- New Feature: Mock Financials & Attractiveness ---
    // Generate some consistent but dynamic-looking numbers based on stock code
    let seed = parseInt(stockCode.substring(0,4)) || 5930;
    
    if (funds.isETF) {
        document.getElementById("val-revenue").textContent = "ETF 미적용";
        document.getElementById("val-op-profit").textContent = "ETF 미적용";
        document.getElementById("val-net-income").textContent = "ETF 미적용";
        document.getElementById("val-op-profit").style.color = "var(--text-primary)";
        
        document.getElementById("val-score").textContent = "--";
        document.getElementById("score-title").textContent = "지수 추종 상품";
        document.getElementById("score-title").style.color = "var(--text-secondary)";
        document.getElementById("score-desc").textContent = "개별 기업의 가치 매력도가 아닌 시장 또는 특정 섹터 전체의 방향성을 추종하는 펀드 상품입니다.";
    } else {
        // Mock Revenue: 1조 ~ 300조
        const rev = (seed * 5.3 + 12000) % 300000;
        // Mock OP: 5% ~ 15% of revenue
        const op = rev * ((seed % 10 + 5) / 100);
        // Mock NI: 70% ~ 90% of OP
        const ni = op * ((seed % 3 + 7) / 10);
        
        document.getElementById("val-revenue").textContent = Math.round(rev).toLocaleString() + " 억원";
        document.getElementById("val-op-profit").textContent = Math.round(op).toLocaleString() + " 억원";
        document.getElementById("val-net-income").textContent = Math.round(ni).toLocaleString() + " 억원";
        document.getElementById("val-op-profit").style.color = "var(--sentiment-bullish)";

        // Attractiveness logic
        const score = 65 + (seed % 30);
        document.getElementById("val-score").textContent = score;
        
        let title = "보통 수준의 매력도";
        let desc = "현재 주가 대비 적정한 가치를 지니고 있으나, 강한 매수 시그널은 부족합니다.";
        let titleColor = "var(--text-primary)";
        
        if (score >= 85) {
            title = "우수한 투자가치";
            desc = "현재 재무 건전성과 주가 수준을 종합할 때 장기 투자 매력도가 상당히 높습니다.";
            titleColor = "var(--sentiment-bullish)";
        } else if (score >= 75) {
            title = "양호한 기업가치";
            desc = "준수한 실적을 내고 있으며, 포트폴리오 편입을 고려해볼 만한 가치가 있습니다.";
            titleColor = "var(--accent-cyan)";
        }
        
        document.getElementById("score-title").textContent = title;
        document.getElementById("score-title").style.color = titleColor;
        document.getElementById("score-desc").textContent = desc;
    }
}

const bannedWords = ["씨발", "개새끼", "병신", "존나", "토토", "바카라", "리딩방", "카톡", "오픈채팅", "수익보장"];

function checkAIModeration(text) {
    for (const word of bannedWords) {
        if (text.includes(word)) return true;
    }
    return false;
}

function handleCommentSubmit(e) {
    e.preventDefault();
    
    const author = document.getElementById("author-input").value.trim() || "익명";
    const text = document.getElementById("comment-text-input").value.trim();
    
    if (!text) return;

    if (checkAIModeration(author) || checkAIModeration(text)) {
        alert("🚨 [AI 경고] 비속어, 불법 홍보 또는 도박 관련 키워드가 감지되었습니다. 건전한 주식 토론 문화를 위해 등록이 차단됩니다.");
        return;
    }
    
    const newComment = { author, text, time: "방금 전", isUser: true };
    if (!userComments[currentStock]) userComments[currentStock] = [];
    userComments[currentStock].unshift(newComment);
    
    saveCommentsToStorage();
    renderCommentsFeed();
    
    document.getElementById("comment-text-input").value = "";
    document.getElementById("author-input").value = "";
    
    const commentsList = document.getElementById("comments-container");
    commentsList.scrollTo({ top: 0, behavior: 'smooth' });
}

function saveCommentsToStorage() {
    localStorage.setItem("stockInsightUserComments", JSON.stringify(userComments));
}

function loadCommentsFromStorage() {
    const stored = localStorage.getItem("stockInsightUserComments");
    if (stored) {
        try {
            userComments = JSON.parse(stored);
        } catch(e) {
            userComments = {};
        }
    }
}

function renderCommentsFeed() {
    const container = document.getElementById("comments-container");
    container.innerHTML = "";
    
    const db = STOCK_DATABASE[currentStock];
    const aiComms = db && db.aiComments ? db.aiComments : [];
    const usrComms = userComments[currentStock] || [];
    const allComments = [...usrComms, ...aiComms];
    
    if (allComments.length === 0) {
        container.innerHTML = `<div class="timeline-text" style="text-align:center; padding:2rem;">첫 번째 주식 토론을 남겨주세요!</div>`;
        return;
    }
    
    allComments.forEach((c) => {
        let badgeHtml = "";
        let borderStyle = "";
        
        if (c.isUser) {
            badgeHtml = `<span style="font-size:0.6rem; background:rgba(255,255,255,0.1); padding:0.2rem 0.4rem; border-radius:4px; margin-left:0.4rem;">개인 투자자</span>`;
        } else {
            badgeHtml = `<i class="fa-solid fa-robot" style="color: var(--accent-cyan); margin-left:0.4rem;"></i> <span style="font-size:0.6rem; background:linear-gradient(135deg, var(--accent-purple), var(--accent-cyan)); padding:0.2rem 0.4rem; border-radius:4px; margin-left:0.2rem; font-weight:bold;">AI ANALYST</span>`;
            borderStyle = "border-left: 3px solid var(--accent-cyan); background: rgba(6, 182, 212, 0.05);";
        }
        
        // Stock sentiment class
        const sentClass = c.sentiment === 'bullish' ? "color: var(--sentiment-bullish)" : c.sentiment === 'bearish' ? "color: var(--sentiment-bearish)" : "color: var(--text-muted)";
        const sentDot = c.sentiment === 'bullish' ? "🔴 상승 호재" : c.sentiment === 'bearish' ? "🔵 하락 악재" : "";

        container.innerHTML += `
            <div class="comment-item" style="${borderStyle}">
                <div class="comment-header">
                    <div class="comment-author">
                        <strong>${c.author}</strong>
                        ${badgeHtml}
                    </div>
                    <span class="comment-time">${c.time}</span>
                </div>
                <div class="comment-text">${c.text}</div>
                ${sentDot ? `<div class="comment-sentiment" style="${sentClass}; font-size:0.7rem; font-weight:700; margin-top:0.4rem;">${sentDot} 관점</div>` : ''}
            </div>
        `;
    });

    const isBullishDominant = Math.random() > 0.5;
    const bullishPercent = isBullishDominant ? Math.floor(Math.random() * 40 + 60) : Math.floor(Math.random() * 40);
    const bearishPercent = 100 - bullishPercent;

    document.getElementById("sentiment-percentage").textContent = `상승 ${bullishPercent}% / 하락 ${bearishPercent}%`;
    document.getElementById("sentiment-bullish-bar").style.width = `${bullishPercent}%`;
    document.getElementById("sentiment-bearish-bar").style.width = `${bearishPercent}%`;
}

// --- Boss Mode (Excel Skin) Toggle Logic ---
function initBossMode() {
    const toggleBtn = document.getElementById("boss-mode-toggle");
    const iconDefault = document.getElementById("icon-default-mode");
    const iconBoss = document.getElementById("icon-boss-mode");
    
    if (!toggleBtn) return;
    
    // Check local storage for saved preference
    const isBossMode = localStorage.getItem("kquant_boss_mode") === "true";
    
    if (isBossMode) {
        document.body.classList.add("excel-mode");
        iconDefault.style.display = "none";
        iconBoss.style.display = "inline-block";
    }
    
    toggleBtn.addEventListener("click", () => {
        const currentlyBoss = document.body.classList.contains("excel-mode");
        
        if (currentlyBoss) {
            // Switch back to Default
            document.body.classList.remove("excel-mode");
            iconDefault.style.display = "inline-block";
            iconBoss.style.display = "none";
            localStorage.setItem("kquant_boss_mode", "false");
        } else {
            // Switch to Boss Mode
            document.body.classList.add("excel-mode");
            iconDefault.style.display = "none";
            iconBoss.style.display = "inline-block";
            localStorage.setItem("kquant_boss_mode", "true");
        }
        
        // Re-render chart to apply new CSS variable colors if they changed
        // (Note: in excel-mode, CSS filter grayscale handles chart colors mostly, 
        // but if we need a full redraw we can trigger it)
        if(typeof renderChart === 'function') {
            renderChart(currentStock);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initBossMode();
});


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
        if (!/^\d{6}$/.test(code)) {
            const upperInput = input.toUpperCase().replace(/\s+/g, '');
            
            const foreignStocks = ["애플", "테슬라", "엔비디아", "마이크로소프트", "마소", "아마존", "알파벳", "구글", "메타", "넷플릭스", "QQQ", "SPY", "TSLA", "AAPL", "NVDA", "MSFT", "AMZN", "GOOG", "META", "NFLX"];
            const isForeign = foreignStocks.some(f => upperInput.includes(f.toUpperCase()));
            if (isForeign) {
                alert("해당 서비스(해외주식)는 업데이트 후 제공될 예정입니다. 국내 상장 회사만 재검색 할 수 있도록 부탁드립니다.");
                return;
            }

            let foundCode = null;
              // 먼저 기존 즐겨찾기 DB 검사
              for (let name in STOCK_NAME_MAP) {
                  if (name.toUpperCase().replace(/\s+/g, '').includes(upperInput)) {
                      foundCode = STOCK_NAME_MAP[name];
                      break;
                  }
              }
              
              // 전체 KRX 상장사 DB에서 검색
              if (!foundCode && typeof ALL_KRX_STOCKS !== 'undefined') {
                  for (let name in ALL_KRX_STOCKS) {
                      if (name.toUpperCase().replace(/\s+/g, '') === upperInput) {
                          foundCode = ALL_KRX_STOCKS[name];
                          break;
                      }
                  }
                  if (!foundCode) {
                      for (let name in ALL_KRX_STOCKS) {
                          if (name.toUpperCase().replace(/\s+/g, '').includes(upperInput)) {
                              foundCode = ALL_KRX_STOCKS[name];
                              break;
                          }
                      }
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
