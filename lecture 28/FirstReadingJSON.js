//Reading a json

//node FirstReadingJSON.js --source=teams.json

let minimist = require("minimist");
let fs = require("fs");

let clargs = minimist(process.argv);

fs.readFile(clargs.source, "utf-8", function (err, json) {
  if (err) {
    console.log(err);
  } else {
    let teams=JSON.parse(json);
    console.log(teams);
    console.log(teams[2].matches[0].vs+" Result: "+teams[2].matches[0].result);
  }
});

// JSO
// if you want to print or save a JSO, convert the JSO to JSON using JSON.stringify
// if you want to manipulate a JSON, convert the JSON to JSO using JSON.parse