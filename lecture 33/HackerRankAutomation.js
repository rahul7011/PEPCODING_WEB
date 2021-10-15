//node HackerRankAutomation.js --url=https://www.hackerrank.com/
let minimist = require("minimist");
let puppeteer = require("puppeteer");

let clargs = minimist(process.argv);
// console.log(clargs.url);

//Without the use of async and await

// let browserPromise = puppeteer.launch({
//   headless: false,
//   defaultViewport: null,
//   args: ["--start-maximized"],
// });
// browserPromise.then(function (browser) {
//   let pagePromise = browser.newPage();
//   pagePromise.then(function (page) {
//     let gotoPromise = page.goto(clargs.url);
//     gotoPromise.then(function (goto) {
//       //   let closePromise = browser.close();
//       //   closePromise.then(function (close) {
//       //     console.log("closed");
//       //   });
//     });
//   });
// });

//With the use of Async and Await
async function HackerRank() {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let page = await browser.newPage();
  await page.goto(clargs.url);
}
HackerRank();
