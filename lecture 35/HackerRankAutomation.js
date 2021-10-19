//We will be automating the moderators adding process.

//node HackerRankAutomation.js --info=info.json --url="https://www.hackerrank.com"

let minimist=require("minimist");
let puppeteer=require("puppeteer");
let fs=require("fs");
let clargs=minimist(process.argv);

//getting credentials
let infoJSON=fs.readFileSync(clargs.info,"utf-8");
let infoJSO=JSON.parse(infoJSON);

async function HackerRankAutomation(){
    let browser= await puppeteer.launch(
        {
            headless:false,
            defaultViewport:null,
            args: ["--start-maximized"]

        }
    );
    let pages=await browser.pages();
    let page=pages[0];
    await page.goto(clargs.url);
    await page.waitFor(5000);

    //for login procedure
    await getLoggedIn(page,browser);
    
    //getting into the contest/challenges page
    await page.waitForSelector("a[data-analytics='NavBarContests']");
    await page.click("a[data-analytics='NavBarContests']");
    await page.waitForSelector("a[href='/administration/contests/']");
    await page.click("a[href='/administration/contests/']");
    await page.waitForSelector("a[href='/administration/challenges']");
    await page.click("a[href='/administration/challenges']");
    
    //getting total number of pages
    await page.waitForSelector("a[data-attr1='Last']");
    let totalPages=await page.$eval("a[data-attr1='Last']",function(atags){
        let pages= parseInt(atags.getAttribute("data-page"));
        return pages;
    })

    //for each page
    for(let i=1;i<=totalPages;i++)
    {
        //adding moderators inside each challenges
        await handleChallenge(page,browser);

        if(i!=totalPages)
        {
            await page.waitForSelector("a[data-attr1='Right']");
            await page.click("a[data-attr1='Right']");
        }
    }
}
async function handleChallenge(page,browser)
{
    //finding all the challenges present in a single page
    await page.waitForSelector("a.backbone.block-center");
    let challengeurls = await page.$$eval("a.backbone.block-center",function(atags){
        let urls=[];
        for(let i=0;i<atags.length;i++)
        {
            let url=atags[i].getAttribute("href");
            urls.push(url);
        }
        return urls;
    })

    for(let i=0;i<challengeurls.length;i++)
    {
        let newTab=await browser.newPage();
        await addMods(newTab,clargs.url+challengeurls[i],infoJSO.moderator);
        await newTab.close();
        await page.waitFor(3000);
    }

}
async function addMods(newTab,url,mod)
{
    //visiting url
    await newTab.goto(url);
    await newTab.waitFor(3000);
    //switching to moderator 
    await newTab.waitForSelector("li[data-tab='moderators']");
    await newTab.click("li[data-tab='moderators']");
    //adding moderator
    await newTab.waitForSelector("input#moderator");
    await newTab.type("input#moderator",mod,{delay:30});
    await newTab.keyboard.press("Enter");
    await newTab.waitForSelector("button.save-challenge.btn.btn-green");
    await newTab.click("button.save-challenge.btn.btn-green");
    await newTab.waitFor(3000);
}

async function getLoggedIn(page)
{
    await page.waitForSelector("a[data-event-action='Login']");
    await page.click("a[data-event-action='Login']");
    await page.waitForSelector("a[href='https://www.hackerrank.com/login']");
    await page.click("a[href='https://www.hackerrank.com/login']");

    //TYPING CREDENTIALS
    await page.waitForSelector("input[name='username']");
    await page.type("input[name='username']",infoJSO.id,{delay:10});
    await page.waitForSelector("input[name='password']");
    await page.type("input[name='password']",infoJSO.password,{delay:10});

    await page.waitFor(3000);
    //Entering the dashboard
    await page.waitForSelector("button[data-analytics='LoginPassword']");
    await page.click("button[data-analytics='LoginPassword']");
}

HackerRankAutomation(); //calling for the function
