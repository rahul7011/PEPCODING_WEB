//count all primes using reduce
// let arr=[1,4,6,2,23,67,27,8,11,7,41];

// let count=arr.reduce(function(pv,cv,i,oarr){
//     let flag=0;
//     for(let i=2;i*i<=cv;i++)
//     {
//         if(cv%i==0)
//         {
//             flag=1;
//             break;
//         }
//     }
//     if(cv!=0&&cv!=1&&flag==0)
//     {
//         return pv+1;
//     }else
//     {
//         return pv;
//     }
// },0);
// console.log(count);

//flatten the 2d array(merge all the subarrays into an single array)
// let arr2d = [[2,8,10],[23],[],[4,3,34,23]];
// let merged=arr2d.reduce(function(pv,cv,i,oarr){
//     // return pv.concat(cv);
//     //      or
//     for(let i=0;i<cv.length;i++)
//     {
//         pv.push(cv[i]);
//     }
//     return pv;
// },[]);
// console.log(merged);

// //compound functions
// function f(x){
//     return 2*x;
// }
// function h(x){
//     return x+10;
// }
// function g(x){
//     return x*x;
// }
//we need to calculate f(g(h(x)))
// let cf=[f,g,h];
// let x=2;
// let cfa1=cf.reverse().reduce(function(pv,cv,i,oarr){
//     let cans=0;
//     if(cv==f)
//     {
//         cans=f(pv);
//     }
//     else if(cv==h)
//     {
//         cans=h(pv);
//     }
//     else
//     {
//         cans=g(pv);
//     }
//     console.log(pv+" "+cans);
//     return cans;
// },x);
// console.log(cfa1);

//better approach
// let cfa=cf.reverse().reduce(function(pv,cv,i,oarr){
//     // console.log(pv);
//     return cv(pv);
// },x);
// console.log(cfa);


//union
let arr=[[1,2,5,6,7,9],[1,3,4,5,6,8],[3,5,6,7,8,10]];
// let union=arr.reduce(function(pv,cv){
//     for(let i=0;i<cv.length;i++)
//     {
//         let flag=1;
//             for(let j=0;j<pv.length;j++)
//             {
//                 if(cv[i]==pv[j])
//                 {
//                     flag=0;
//                     break;
//                 }
//             }
//             if(flag==1)
//             {
//                 pv.push(cv[i]);
//             }
//     }
//     return pv;
// },[]);
// console.log(union);

//Intersection
let Intersection=arr.reduce(function(pv,cv,i,oarr){
    let npv=[];
    for(let i=0;i<pv.length;i++)
    {
        for(let j=0;j<cv.length;j++)
        {
            if(pv[i]==cv[j])
            {
             npv.push(pv[i]);   
            }
        }
    }
    return npv;
});
console.log(Intersection);