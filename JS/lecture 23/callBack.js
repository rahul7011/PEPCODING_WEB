//t1=read a file(disk)
//t2=calculate prime(CPU)
//t2 will  be done in parallel with t1 using callback method

function IsPrime(x) {
  let isPrime = true;
  for (let i = 2; i * i < x; i++) {
    if (x % i == 0) {
      isPrime = false;
      break;
    }
  }
  return isPrime;
}

//importing minimist and fs(file system)
let minimist = require("minimist");
let fs = require("fs");

let args = minimist(process.argv);

//task1 begins here
let t1 = Date.now();
console.log("Starting task1 at " + (t1 % 100000));

//callback method
fs.readFile(args.source, function (data) {
  let t2 = Date.now();
  console.log("Finishing task1 at " + (t2 % 100000));
  console.log(t2 - t1); //total time taken
});

//task1 ends here

//task2 begins here
let t3 = Date.now();
console.log("starting task2 at " + (t3 % 100000));
let arr = [];
for (let i = 2; i <= args.n; i++) {
  let isPrime = IsPrime(i);
  if (isPrime == true) {
    arr.push(i);
  }
}
let t4 = Date.now();
console.log("Finishing task2 at " + (t4 % 100000));
console.log(t4 - t3);


//command:
//node callBack.js --source=f1.txt --n=50000