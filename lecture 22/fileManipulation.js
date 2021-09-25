//read a file,capitalize every word,write the file
let parser = require("minimist");
let clargs = parser(process.argv);
let fs = require("fs");
const { consumers } = require("stream");
//reading the file

let stext = fs.readFileSync(clargs.source, "utf-8");
// console.log(stext);

//spilting into array
let words = stext.split(" ");
// console.log(words);

//changing it into upperCase
for (let i = 0; i < words.length; i++) {
  words[i] = words[i].toUpperCase();
}
// console.log(words);

//joining them back into single text
let dtext = words.join(" ");
// console.log(dtext);

//writing them back into a new file

fs.writeFileSync(clargs.dest,dtext,"utf-8");
