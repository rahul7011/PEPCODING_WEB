//function to prime all the primes upto n
let args = process.argv;
let n = parseInt(args[2]);
for (let i = 2; i <= n; i++) {
  isprime = IsPrime(i);
  if (isprime == true) {
    console.log(i);
  }
}
function IsPrime(x) {
  let isprime = true;
  for (let i = 2; i * i <= x; i++) {
    if (x % i == 0) {
      isprime = false;
      break;
    }
  }
  return isprime;
}
