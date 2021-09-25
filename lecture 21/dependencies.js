//npm install minimist
let parser = require("minimist"); //getting the package
//node dependencies.js -x 1 -y 3 -z 34 --name="rahul" --age="20"
let clargs = parser(process.argv);
console.log(clargs);
console.log(clargs.name);//acting as an object
console.log(clargs.age);