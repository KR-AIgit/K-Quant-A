const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const updatedDB = `const STOCK_DATABASE = {
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

const STOCK_NAME_MAP`;

content = content.replace(/const STOCK_DATABASE = \{[\s\S]*?const STOCK_NAME_MAP/g, updatedDB);

fs.writeFileSync('app.js', content, 'utf8');
console.log('Static comments update complete');
