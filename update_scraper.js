const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const regex = /\{\s*source:\s*"AI Web Scraper",\s*time:\s*"방금 전",\s*sentiment:\s*"neutral",\s*title:\s*"\[AI 자동 분석\].*?",\s*snippet:\s*".*?"\s*\}/;
content = content.replace(regex, `{ source: "AI Web Scraper", time: "오늘 07:50", sentiment: "neutral", title: "[08시 브리핑] 글로벌 매크로 지표 분석 완료 및 당일 증시 개장 준비", snippet: "간밤 글로벌 증시 동향 및 주요 지표 분석을 완료하였으며, 해당 종목의 실시간 딥러닝 트래킹을 개시합니다." }`);

fs.writeFileSync('app.js', content, 'utf8');
console.log('Done');
