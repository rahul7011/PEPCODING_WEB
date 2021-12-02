//node FirstWritingPDF.js --source=teams.json --dest=WorldCup

let minimist = require("minimist");
let fs = require("fs");
let path = require("path");

let pdf = require("pdf-lib");

let clargs = minimist(process.argv);

let teamsJSON = fs.readFileSync(clargs.source, "utf-8");
let teams = JSON.parse(teamsJSON);

fs.mkdirSync(clargs.dest);
for (let i = 0; i < teams.length; i++) {
  let teamFolder = path.join(clargs.dest, teams[i].team);
  fs.mkdirSync(teamFolder);

  for (let j = 0; j < teams[i].matches.length; j++) {
    let MatchFileName = path.join(teamFolder, teams[i].matches[j].vs + ".pdf");
    CreateScoreCard(teams[i].team, teams[i].matches[j], MatchFileName);
  }
}

function CreateScoreCard(teamName, Match, MatchFileName) {
  let t1 = teamName;
  let t2 = Match.vs;
  let result = t1 + " " + Match.result;
  let templateBytes = fs.readFileSync("Template.pdf");
  let pdfDocPromise = pdf.PDFDocument.load(templateBytes);
  pdfDocPromise.then(function (pdfDoc) {
    let page = pdfDoc.getPage(0);
    page.drawText(t1, {
      x: 320,
      y: 700,
      size: 20,
    });
    page.drawText(t2, {
      x: 320,
      y: 654,
      size: 20,
    });
    page.drawText(result, {
      x: 320,
      y: 610,
      size: 22,
    });

    let finalPDFBytesKaPromise = pdfDoc.save();
    finalPDFBytesKaPromise.then(function (finalPDFBytes) {
      fs.writeFileSync(MatchFileName, finalPDFBytes);
    });
  });
}
