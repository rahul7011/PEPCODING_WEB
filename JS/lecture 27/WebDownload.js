//downloading file from the web

//node WebDownload.js --url="https://www.espncricinfo.com/series/icc-cricket-world-cup-2019-1144415/match-results" --dest=download.html

let minimist = require("minimist");
let axios = require("axios");
let fs = require("fs");

let clargs = minimist(process.argv);

let promise = axios.get(clargs.url);
promise
  .then(function (response) {
    let html = response.data;
    fs.writeFileSync(clargs.dest, html, "utf-8");
  })
  .catch(function (err) {
    console.log(err);
  });
