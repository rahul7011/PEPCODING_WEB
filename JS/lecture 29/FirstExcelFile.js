//node FirstExcelFile.js --source=teams.json --dest=teams.csv

let minimist = require("minimist");
let fs = require("fs");

let excel = require("excel4node");

let clargs = minimist(process.argv);

fs.readFile(clargs.source, "utf-8", function (err, json) {
  if (err) {
    console.log(err);
  } else {
    // Create a new instance of a Workbook class
    let wb = new excel.Workbook();

    var wbStyle = wb.createStyle({
      font: {
        color: "blue",
        size: 15,
        bold: true,
      },
      fill: {
        type: "pattern",
        patternType: "solid",
        fgColor: "Pink",
      },
    });

    teams = JSON.parse(json);
    // Add Worksheets to the workbook
    for (let i = 0; i < teams.length; i++) {
      let sheet = wb.addWorksheet(teams[i].team);
      let rank = teams[i].rank;
      sheet.cell(1, 1).string("Rank:").style(wbStyle);
      sheet.cell(1, 2).number(rank).style(wbStyle);
      sheet.cell(2, 1).string("VS").style(wbStyle);
      sheet.cell(2, 2).string("Result").style(wbStyle);
      for (let j = 0; j < teams[i].matches.length; j++) {
        sheet.cell(3 + j, 1).string(teams[i].matches[j].vs);
        sheet.cell(3 + j, 2).string(teams[i].matches[j].result);
      }
    }
    wb.write(clargs.dest);
  }
});
