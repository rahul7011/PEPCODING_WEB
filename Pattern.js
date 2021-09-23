let args=process.argv;
let n=args[2];
n=parseInt(n);
for(let i=1;i<=n;i++)
{
    let str="";
    for(let j=1;j<=i;j++)
    {
        str=str+"*\t";
    }
    console.log(str);
}