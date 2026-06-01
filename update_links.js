const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const oldLinks = `    if (lnkNews) lnkNews.href = \`https://finance.naver.com/item/news.naver?code=\\${stockCode}\`;
    if (lnkResearch) lnkResearch.href = \`https://finance.naver.com/item/coinfo.naver?code=\\${stockCode}\`;
    if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\\${stockCode}\`;`;

const newLinks = `    const stockName = encodeURIComponent(db.name);
    if (lnkNews) lnkNews.href = \`https://search.naver.com/search.naver?where=news&query=\\${stockName}+주식\`;
    if (lnkResearch) lnkResearch.href = \`https://finance.naver.com/search/searchList.naver?query=\\${stockName}\`;
    if (lnkHankyung) lnkHankyung.href = \`https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=\\${stockName}\`;`;

if (content.includes(oldLinks)) {
    content = content.replace(oldLinks, newLinks);
    fs.writeFileSync('app.js', content, 'utf8');
    console.log('Update complete.');
} else {
    console.log('Error: Could not find old links logic block.');
}
