//JSON JavaScript Object Notation
//JSON means saving data in the same format as of javascript objects

//node FirstWritingJSON.js --dest=teams.json

let minimist = require("minimist");
let fs = require("fs");

let clargs = minimist(process.argv);
let teams = [
  {
    team: "India",
    rank: 1,
    matches: [
      {
        vs: "Australia",
        result: "Win",
      },
      {
        vs: "England",
        result: "Win",
      },
    ],
  },
  {
    team: "Australia",
    rank: 1,
    matches: [
      {
        vs: "India",
        result: "lost",
      },
      {
        vs: "England",
        result: "Win",
      },
    ],
  },
  {
    team: "England",
    rank: 1,
    matches: [
      {
        vs: "India",
        result: "lost",
      },
      {
        vs: "Australia",
        result: "lost",
      },
    ],
  },
];

// stringify convert JSO to JSON. JSO can't be printed or saved.
// It has to be converted to json via JSON.stringify so that it can be printed or saved.

let json = JSON.stringify(teams);
// console.log(json);

fs.writeFileSync(clargs.dest, json, "utf-8");
