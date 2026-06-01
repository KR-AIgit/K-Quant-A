const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const oldLinks = "    const stockName = encodeURIComponent(db.name);\n    if (lnkNews) lnkNews.href = `https://search.naver.com/search.naver?where=news&query=${stockName}+주식`;\n    if (lnkResearch) lnkResearch.href = `https://finance.naver.com/search/searchList.naver?query=${stockName}`;\n    if (lnkHankyung) lnkHankyung.href = `https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=${stockName}`;";

const newLinks = "    const stockName = encodeURIComponent(db.name);\n    const isOriginal = !!STOCK_DATABASE[stockCode];\n    \n    if (isOriginal) {\n        if (lnkNews) lnkNews.href = `https://finance.naver.com/item/news.naver?code=${stockCode}`;\n        if (lnkResearch) lnkResearch.href = `https://finance.naver.com/item/coinfo.naver?code=${stockCode}`;\n        if (lnkHankyung) lnkHankyung.href = `https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=${stockCode}`;\n    } else {\n        if (lnkNews) lnkNews.href = `https://search.naver.com/search.naver?where=news&query=${stockName}+주식`;\n        if (lnkResearch) lnkResearch.href = `https://m.stock.naver.com/search/custom?keyword=${stockName}`;\n        if (lnkHankyung) lnkHankyung.href = `https://consensus.hankyung.com/analysis/list?sdate=&edate=&search_text=${stockName}`;\n    }";

if (content.includes(oldLinks)) {
    content = content.replace(oldLinks, newLinks);
    fs.writeFileSync('app.js', content, 'utf8');
    console.log('Update complete.');
} else {
    console.log('Error: Could not find old links logic block.');
}
