//node HackerRankAutomation.js --url=https://www.hackerrank.com/

let minimist = require("minimist");
let puppeteer = require("puppeteer");

let clargs = minimist(process.argv);
// console.log(clargs.url);

async function HackerRank() {
  let browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  let pages = await browser.pages();
  let page = pages[0];
  await page.goto(clargs.url);
  await page.waitFor(3000);
  await page.click("div[data-node='5d7c1d1ca21cb']");
  await page.waitFor(3000);
  await page.click("a[href='/auth/login']");
  await page.waitFor(3000);
  for (let i = 0; i < 3; i++) {
    await page.keyboard.press("Tab", {
      delay: 500,
    });
  }
  //login procedure
  await page.keyboard.type("email@gmail.com", { delay: 100 });
  await page.keyboard.press("Tab");
  await page.keyboard.type("password", { delay: 100 });
  await page.click("button[data-analytics='LoginPassword']");
  //for the administration part
  await page.waitFor(5000);
  await page.click("div[data-analytics='NavBarProfileDropDown']");
  await page.waitFor(1000);
  await page.click("a[data-analytics='NavBarProfileDropDownAdministration']");
  await page.waitFor(3000);
  await page.click('a[href="/administration/challenges"]');
  await page.waitFor(3000);

  // createChallenge(page);
  addmods(page);
}
HackerRank();

async function addmods(page) {
  for (let k = 1; k <= 3; k++) {
    for (let j = 0; j < 10; j++) {
      await page.waitFor(2000);
      await page.click("a[data-page=" + '"' + k + '"' + "]");
      await page.waitFor(2000);
      for (let i = 0; i < 6 + j; i++) {
        await page.keyboard.press("Tab", {
          delay: 10,
        });
      }
      await page.keyboard.press("Tab", {
        delay: 100,
      });
      await page.keyboard.press("Enter");
      await page.waitFor(2000);
      await page.click('li[data-tab="moderators"]');
      await page.waitFor(3000);
      await page.keyboard.press("Tab");
      await page.keyboard.type("cetadi6362", { delay: 100 });
      await page.keyboard.press("Enter");
      await page.click("button.save-challenge");
      await page.waitFor(3000);
      await page.click('a[href="/administration/challenges"]');
      await page.waitFor(1000);
    }
  }
}

async function createChallenge(page) {
  //challenge creation
  for (let i = 0; i < 10; i++) {
    await page.click('button[href="/administration/challenges/create"]');
    await page.waitFor(3000);

    await page.click("div.profile-input>input#name");
    let name = "T" + i;
    await page.keyboard.type(name, { delay: 10 });
    await page.click("div.profile-input>textarea#preview");
    let desc = "This is the description " + i;
    await page.keyboard.type(desc, { delay: 10 });
    await page.click("div#problem_statement-container");
    let pStat = "This is the Problem Statement " + i;
    await page.keyboard.type(pStat, { delay: 10 });

    await page.click("div#input_format-container");
    let iFormat = "This is the Input Format " + i;
    await page.keyboard.type(iFormat, { delay: 10 });

    await page.click("div#constraints-container");
    let cons = "This is the Constraint " + i;
    await page.keyboard.type(cons, { delay: 10 });

    await page.click("div#output_format-container");
    let oFormat = "This is the Output Format " + i;
    await page.keyboard.type(oFormat, { delay: 10 });

    await page.click("div.tagsinput");
    await page.keyboard.type(name, { delay: 10 });
    await page.keyboard.press("Enter");

    //save
    await page.click("button.save-challenge");
    //back to challenges
    await page.waitFor(5000);
    await page.click('a[href="/administration/challenges"]');
    await page.waitFor(3000);
  }
}
