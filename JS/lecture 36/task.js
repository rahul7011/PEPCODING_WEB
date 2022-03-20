let arr=[1,6,4,3,5,9,36,49,4,25,94,23,65,12,68,22,12,11];
// let arr=[1,2,3,4,5,6,7];
// let arr=[2,3,5,7,11,13];
// console.log(arr.slice(0));
// console.log(arr.slice(-arr.length));
// console.log(arr.slice(-6));
// console.log(arr.slice(-3,-1));
// console.log(arr.slice(3,-2));
// console.log(arr.slice(3,-3));   //not working
// console.log(arr.slice(3));
// console.log(arr.slice(-1));
// console.log(arr.slice(-1,-1));  //not working

//print all subarrays using slice function
// console.log(arr);
// for(let i=0;i<arr.length;i++)
// {
//     for(let j=i;j<arr.length;j++)
//     {
//         console.log(arr.slice(i,j+1));
//     }
// }
console.log(arr);
//remove all prime numbers from an array
for(let i=arr.length-1;i>=0;i--)
{
    if(isprime(arr[i])==true)
    {
        arr.splice(i,1);
    }
}
console.log("after removal of primes:"+arr);

function isprime(num)
{
    if(num==1 || num==0)
    {
        return false;
    }
    let i=2;
    while(i*i<=num)
    {
        if(num%i==0)
        {
            return false;
        }
        i++;
    }
    return true;
}