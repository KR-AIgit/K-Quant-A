const fs = require('fs');
const file = './app.js';
let content = fs.readFileSync(file, 'utf8');

const dynamicCommentsFunc = `
function getDynamicComments(code) {
    const comments = {
        "373220": [
            { author: "Eco-Trend Bot", sentiment: "neutral", text: "전기차 수요 둔화 우려가 선반영되었으며, 북미 주요 고객사향 수주 물량 확대 시 반등 모멘텀이 기대됩니다.", time: "20분 전" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "IRA 보조금 수혜와 원통형 배터리 경쟁력 강화를 통한 중장기 점유율 확대가 긍정적입니다.", time: "1시간 전" }
        ],
        "207940": [
            { author: "Bio Tracker", sentiment: "bullish", text: "공장 풀가동 및 추가 공장 조기 완공 기대감으로 글로벌 CDMO 1위 경쟁력이 부각되고 있습니다.", time: "15분 전" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "글로벌 빅파마들과의 대규모 장기 공급 계약 수주가 이어지며 견조한 현금흐름을 창출 중입니다.", time: "2시간 전" }
        ],
        "005380": [
            { author: "Value Quant Bot", sentiment: "bullish", text: "글로벌 친환경차 및 SUV 믹스 개선으로 역대 최대 수준의 실적을 경신 중입니다.", time: "5분 전" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "적극적인 주주환원 정책과 인도 법인 등 글로벌 거점 가치 부각으로 밸류에이션 재평가가 지속되고 있습니다.", time: "30분 전" }
        ],
        "000270": [
            { author: "Value Quant Bot", sentiment: "bullish", text: "하이브리드(HEV) 중심의 판매 호조로 글로벌 완성차 업계 최고 수준의 영업이익률을 기록 중입니다.", time: "10분 전" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "저PBR 매력과 함께 배당 수익률이 매우 뛰어나 안정적이고 매력적인 장기 투자처입니다.", time: "1시간 전" }
        ],
        "068270": [
            { author: "Bio Tracker", sentiment: "bullish", text: "신제품의 글로벌 직판 체제 안착 및 처방 증가로 하반기 실적 개선세가 뚜렷합니다.", time: "25분 전" },
            { author: "K-Stock Agent", sentiment: "bullish", text: "합병 이후 원가율 개선 시너지가 본격화되며 바이오시밀러 시장 내 입지가 더욱 견고해지고 있습니다.", time: "2시간 전" }
        ],
        "105560": [
            { author: "K-Stock Agent", sentiment: "bullish", text: "압도적인 자본력을 바탕으로 한 주주환원율 확대와 밸류업 프로그램의 대표 수혜주로 꼽힙니다.", time: "10분 전" },
            { author: "Value Quant Bot", sentiment: "neutral", text: "비은행 계열사 이익 기여도가 높아 이익 안정성이 우수합니다. 금리 인하 시기 순이자마진(NIM) 방어가 관건입니다.", time: "1시간 전" }
        ],
        "005490": [
            { author: "K-Stock Agent", sentiment: "neutral", text: "글로벌 철강 업황의 바닥 통과 기대감과 함께 친환경 미래소재 기업으로의 체질 개선이 진행 중입니다.", time: "40분 전" },
            { author: "Eco-Trend Bot", sentiment: "bullish", text: "2차전지 소재 밸류체인 수직 계열화가 완성 단계에 접어들어 장기 성장 동력을 확보했습니다.", time: "2시간 전" }
        ],
        "035420": [
            { author: "K-Stock Agent", sentiment: "bullish", text: "클라우드 기반 B2B AI 솔루션 수익화와 커머스 부문의 견고한 성장이 플랫폼 가치를 견인하고 있습니다.", time: "15분 전" },
            { author: "Value Quant Bot", sentiment: "bullish", text: "웹툰 글로벌 상장 등 자회사 지분 가치 재평가 시 밸류에이션 매력이 부각될 수 있습니다.", time: "3시간 전" }
        ],
        "035720": [
            { author: "K-Stock Agent", sentiment: "neutral", text: "광고 및 커머스 사업의 회복세가 나타나고 있으나, 주요 계열사들의 실적 개선 속도 확인이 필요합니다.", time: "20분 전" }
        ]
    };
    
    if (comments[code]) return comments[code];
    
    return [
        { author: "K-Stock Agent", sentiment: "neutral", text: "현재 해당 종목의 섹터 및 거시경제 지표를 바탕으로 실시간 딥러닝 분석을 진행 중입니다.", time: "1분 전" },
        { author: "Value Quant Bot", sentiment: "neutral", text: "최근 수급 동향과 펀더멘탈 데이터를 퀀트 모델에 업데이트하고 있습니다.", time: "5분 전" }
    ];
}

function getStockInfo(code) {`;

content = content.replace(/function getStockInfo\(code\) {/, dynamicCommentsFunc);

content = content.replace(/aiComments:\s*\[\s*\{\s*author:\s*"System Bot"[^\]]+\]/, "aiComments: getDynamicComments(code)");

const samsungRegex = /aiComments:\s*\[\s*\{\s*author:\s*"K-Stock Agent",\s*sentiment:\s*"bullish",\s*text:\s*"하방 경직성이 확보된 상태에서 외인 수급이 연속으로 들어오고 있어 단기 8만 전자 돌파 시도가 매우 유력합니다.",\s*time:\s*"10분 전"\s*},\s*\{\s*author:\s*"Value Quant Bot",\s*sentiment:\s*"bullish",\s*text:\s*"현재 PBR은 과거 10년 밴드 최하단에 위치합니다. 배당수익률을 고려할 때 현 구간은 매우 안전한 장기 매집 구간입니다.",\s*time:\s*"2시간 전"\s*\}\s*\]/;
content = content.replace(samsungRegex, `aiComments: [
            { author: "K-Stock Agent", sentiment: "bullish", text: "글로벌 AI 반도체 수요 회복과 파운드리 수율 안정화로 실적 턴어라운드가 가시화되고 있습니다. 외인 매수세가 지속 유입되는 긍정적 흐름입니다.", time: "10분 전" },
            { author: "Value Quant Bot", sentiment: "bullish", text: "현재 PBR 및 역사적 밸류에이션을 고려할 때 하방 경직성이 매우 강합니다. 배당 매력도와 함께 장기 관점에서의 매수 우위 구간입니다.", time: "2시간 전" }
        ]`);

const hynixRegex = /aiComments:\s*\[\s*\{\s*author:\s*"HBM Tracker",\s*sentiment:\s*"bullish",\s*text:\s*"글로벌 AI 반도체 체인에서 SK하이닉스의 독점적 지위는 당분간 깨지기 힘듭니다. 조정 시 적극 매수 관점 유지.",\s*time:\s*"1시간 전"\s*\}\s*\]/;
content = content.replace(hynixRegex, `aiComments: [
            { author: "HBM Tracker", sentiment: "bullish", text: "글로벌 AI 반도체 밸류체인에서 독점적 지위를 유지 중입니다. 주요 고객사들의 차세대 칩 수요 증가로 이익 컨센서스가 지속 상향되고 있습니다.", time: "1시간 전" },
            { author: "K-Stock Agent", sentiment: "neutral", text: "단기 급등에 따른 피로도와 차익 실현 매물이 일부 출회될 수 있으나, 중장기적 펀더멘탈은 매우 견고합니다.", time: "3시간 전" }
        ]`);

const kodex200Regex = /aiComments:\s*\[\s*\{\s*author:\s*"Passive Investor AI",\s*sentiment:\s*"bullish",\s*text:\s*"정부 밸류업 모멘텀으로 저PBR 가치주들이 재평가 받으면서 코스피 200 전체의 멀티플 상향이 이루어지고 있습니다.",\s*time:\s*"30분 전"\s*\}\s*\]/;
content = content.replace(kodex200Regex, `aiComments: [
            { author: "Passive Investor AI", sentiment: "bullish", text: "정부의 기업 밸류업 프로그램 수혜와 대형 수출주들의 실적 호조가 맞물려 코스피 200 전체의 멀티플 리레이팅이 진행 중입니다.", time: "30분 전" }
        ]`);

const kodexInvRegex = /aiComments:\s*\[\s*\{\s*author:\s*"Hedge Master",\s*sentiment:\s*"neutral",\s*text:\s*"코스피가 전고점 저항에 부딪힌 상태입니다. 현 구간에서 비중 10~20% 정도는 인버스로 단기 헷지를 걸어두는 것이 AI 손익비 모델상 합리적입니다.",\s*time:\s*"15분 전"\s*\}\s*\]/;
content = content.replace(kodexInvRegex, `aiComments: [
            { author: "Hedge Master", sentiment: "neutral", text: "글로벌 매크로 불확실성 확대 및 금리 인하 지연 우려 시 단기 헷지(Hedge) 수단으로 유효합니다. 기술적 반등 시 비중 조절이 필요합니다.", time: "15분 전" }
        ]`);

fs.writeFileSync(file, content, 'utf8');
console.log('Update complete.');
