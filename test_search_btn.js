const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

dom.window.addEventListener('error', (event) => {
  console.error("Global Error:", event.error);
});

setTimeout(() => {
  const doc = dom.window.document;
  const searchBtn = doc.getElementById('modal-stock-search-btn');
  console.log("searchBtn exists?", !!searchBtn);
  if(searchBtn) {
      console.log("Clicking searchBtn...");
      searchBtn.click();
      console.log("Clicked searchBtn.");
  }
  
  setTimeout(() => {
      console.log("Exiting.");
      process.exit(0);
  }, 500);
}, 1000);
