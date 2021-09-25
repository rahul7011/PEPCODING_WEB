let clargs = process.argv;
let n = parseInt(clargs[2]);
let arr = [];
for (let i = 0; i < n; i++) {
  let val = parseInt(clargs[i + 3]);
  arr[i] = val;
}

//printing the value
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
console.log(arr);
console.log("array length: " + arr.length);
