//processing data from web

//node ProcessingData.js --source=download.html

let minimist = require("minimist");
let jsdom = require("jsdom");
let fs = require("fs");

let clargs = minimist(process.argv);

fs.readFile(clargs.source, "utf-8", function (err, html) {
  let dom = new jsdom.JSDOM(html);
  let document = dom.window.document;
  let query = document.querySelectorAll("div.match-info>div.description");
  for (let i = 0; i < query.length; i++) {
    console.log(query[i].textContent);
  }
});
