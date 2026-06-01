const fs = require('fs');

// 1. Update index.html
let html = fs.readFileSync('index.html', 'utf8');
const formRegex = /<form class="comment-form" id="comment-form">[\s\S]*?<\/form>/;
html = html.replace(formRegex, '');
fs.writeFileSync('index.html', html, 'utf8');

// 2. Update styles.css
let css = fs.readFileSync('styles.css', 'utf8');
const cssFix = `
body.excel-mode #ai-tech-desc,
body.excel-mode .news-title,
body.excel-mode .news-snippet,
body.excel-mode .timeline-content h4,
body.excel-mode .timeline-content p,
body.excel-mode .news-source-time {
    color: #111111 !important;
}
`;
css = css.replace(/body\.excel-mode #stock-search-input::placeholder \{ color: #888 !important; \}/, `body.excel-mode #stock-search-input::placeholder { color: #888 !important; }${cssFix}`);
fs.writeFileSync('styles.css', css, 'utf8');

console.log('Update successful');
