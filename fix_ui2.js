const fs = require('fs');

// 2. Update styles.css
let css = fs.readFileSync('styles.css', 'utf8');
const cssFix2 = `
body.excel-mode .comment-author,
body.excel-mode .comment-text,
body.excel-mode .comment-time,
body.excel-mode .breakdown-item {
    color: #111111 !important;
}
`;
css = css.replace(/body\.excel-mode #ai-tech-desc,/, `${cssFix2}\nbody.excel-mode #ai-tech-desc,`);
fs.writeFileSync('styles.css', css, 'utf8');

console.log('Update successful');
