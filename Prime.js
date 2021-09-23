let args=process.argv;
let n=parseInt(args[2],10);
let flag=0;
for(let i=2;i*i<=n;i++)
{
    if(n%i==0)
    {
        flag=1;
        break;
    }
}
if(flag==1)
{
    console.log("Not a prime");
}
else
{
    console.log("Is a prime");
}