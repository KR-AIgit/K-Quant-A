const fs = require('fs');
const file = './app.js';
let content = fs.readFileSync(file, 'utf8');

// Update getDynamicComments block
const dynamicCommentsFunc = `
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

function getStockInfo(code) {`;

content = content.replace(/function getDynamicComments\(code\) {[\s\S]*?function getStockInfo\(code\) \{/, dynamicCommentsFunc);

// For Samsung (005930)
const samsungComments = `aiComments: [
            { author: "K-Stock Agent", sentiment: "bullish", text: "[08시 브리핑] 파운드리 수율 안정화 및 AI 메모리 수요 회복 뚜렷. 단기 하방 경직성 확보.", time: "오늘 08:00 KST" },
            { author: "Value Quant Bot", sentiment: "bullish", text: "[08시 브리핑] PBR 10년 밴드 최하단 진입. 배당 매력도 기반 강력한 장기 매수 우위 구간.", time: "오늘 08:05 KST" }
        ],`;
content = content.replace(/aiComments:\s*\[\s*\{\s*author:\s*"K-Stock Agent",\s*sentiment:\s*"bullish",\s*text:\s*"글로벌 AI 반도체 수요 회복과 파운드리 수율 안정화로 실적 턴어라운드가 가시화되고 있습니다. 외인 매수세가 지속 유입되는 긍정적 흐름입니다.",\s*time:\s*"10분 전"\s*},\s*\{\s*author:\s*"Value Quant Bot",\s*sentiment:\s*"bullish",\s*text:\s*"현재 PBR 및 역사적 밸류에이션을 고려할 때 하방 경직성이 매우 강합니다. 배당 매력도와 함께 장기 관점에서의 매수 우위 구간입니다.",\s*time:\s*"2시간 전"\s*\}\s*\],/, samsungComments);

// For SK Hynix (000660)
const hynixComments = `aiComments: [
            { author: "HBM Tracker", sentiment: "bullish", text: "[08시 브리핑] AI 반도체 밸류체인 독점적 지위 유지. 차세대 HBM 수요 폭발로 이익 컨센서스 상향.", time: "오늘 08:00 KST" },
            { author: "K-Stock Agent", sentiment: "neutral", text: "[08시 브리핑] 단기 급등 피로도 존재하나 중장기 펀더멘탈은 최상. 조정 시 분할 매수 유효.", time: "오늘 08:05 KST" }
        ],`;
content = content.replace(/aiComments:\s*\[\s*\{\s*author:\s*"HBM Tracker",\s*sentiment:\s*"bullish",\s*text:\s*"글로벌 AI 반도체 밸류체인에서 독점적 지위를 유지 중입니다. 주요 고객사들의 차세대 칩 수요 증가로 이익 컨센서스가 지속 상향되고 있습니다.",\s*time:\s*"1시간 전"\s*\},\s*\{\s*author:\s*"K-Stock Agent",\s*sentiment:\s*"neutral",\s*text:\s*"단기 급등에 따른 피로도와 차익 실현 매물이 일부 출회될 수 있으나, 중장기적 펀더멘탈은 매우 견고합니다.",\s*time:\s*"3시간 전"\s*\}\s*\],/, hynixComments);

// For Kodex 200 (069500)
const kodex200Comments = `aiComments: [
            { author: "Passive Investor AI", sentiment: "bullish", text: "[08시 브리핑] 기업 밸류업 프로그램 수혜 및 수출주 호실적. 코스피 200 멀티플 리레이팅 진행 중.", time: "오늘 08:00 KST" }
        ],`;
content = content.replace(/aiComments:\s*\[\s*\{\s*author:\s*"Passive Investor AI",\s*sentiment:\s*"bullish",\s*text:\s*"정부의 기업 밸류업 프로그램 수혜와 대형 수출주들의 실적 호조가 맞물려 코스피 200 전체의 멀티플 리레이팅이 진행 중입니다.",\s*time:\s*"30분 전"\s*\}\s*\],/, kodex200Comments);

// For Kodex Inverse (114800)
const kodexInvComments = `aiComments: [
            { author: "Hedge Master", sentiment: "neutral", text: "[08시 브리핑] 글로벌 매크로 불확실성 시 단기 헷지 수단 유효. 기술적 반등 시 비중 조절 권고.", time: "오늘 08:00 KST" }
        ],`;
content = content.replace(/aiComments:\s*\[\s*\{\s*author:\s*"Hedge Master",\s*sentiment:\s*"neutral",\s*text:\s*"글로벌 매크로 불확실성 확대 및 금리 인하 지연 우려 시 단기 헷지\(Hedge\) 수단으로 유효합니다. 기술적 반등 시 비중 조절이 필요합니다.",\s*time:\s*"15분 전"\s*\}\s*\],/, kodexInvComments);

fs.writeFileSync(file, content, 'utf8');
console.log('Briefing format update complete.');
