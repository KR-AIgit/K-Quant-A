const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const html = fs.readFileSync('index.html', 'utf8');
const dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });

let errors = [];
dom.window.addEventListener('error', (event) => {
  errors.push("Global Error: " + event.error);
});

setTimeout(() => {
  const doc = dom.window.document;
  const buttons = doc.querySelectorAll('button, .tab-link, .period-btn, .modal-stock-btn, a');
  console.log(`Found ${buttons.length} clickable elements.`);
  
  buttons.forEach((btn, idx) => {
      try {
          btn.click();
      } catch (e) {
          errors.push(`Click error on element ${idx} (${btn.id || btn.className}): ${e.message}`);
      }
  });
  
  setTimeout(() => {
      if (errors.length > 0) {
          console.log("Errors found:");
          errors.forEach(e => console.log(e));
      } else {
          console.log("All clicks successful with no errors.");
      }
      process.exit(0);
  }, 1000);
}, 2000);
