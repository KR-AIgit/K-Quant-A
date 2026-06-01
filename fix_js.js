const fs = require('fs');
let content = fs.readFileSync('app.js', 'utf8');

const regex = /commentForm\.addEventListener\("submit", handleCommentSubmit\);/;
content = content.replace(regex, `if (commentForm) { commentForm.addEventListener("submit", handleCommentSubmit); }`);

fs.writeFileSync('app.js', content, 'utf8');
console.log('Fixed Type Error');
