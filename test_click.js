const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

dom.window.addEventListener('error', (event) => {
  console.error("DOM Error:", event.error);
});

setTimeout(() => {
  console.log("Ready to click...");
  const searchInput = dom.window.document.getElementById('modal-stock-search-input');
  const searchBtn = dom.window.document.getElementById('modal-stock-search-btn');
  const openBtn = dom.window.document.getElementById('open-search-modal');
  
  if(openBtn) { openBtn.click(); console.log("Clicked open modal"); }
  if(searchInput && searchBtn) {
      searchInput.value = "펄어비스";
      searchBtn.click();
      console.log("Clicked search");
  } else {
      console.log("Elements not found", !!searchInput, !!searchBtn);
  }
  
  setTimeout(() => {
      console.log("Done checking clicks.");
      process.exit(0);
  }, 1000);
}, 1000);
