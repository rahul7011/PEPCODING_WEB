// let products = [
//     { price: 24,name: 'foo2' },
//     { price: 34,name: 'doo3' },
//     { price: 28,name: 'eoo4' },
//     { price: 74,name: 'goo5' },
//     { price: 31,name: 'hoo6' },
//     { price: 47,name: 'ioo7' },
//     { price: 26,name: 'joo8' },
//     { price: 47,name: 'koo9' },
//     { price: 47,name: 'loo21' },
//     { price: 19,name: 'moo123' },
//     { price: 20,name: 'noo212' },
//   ];
// //   let ans=products.filter(v=>v.price>=30).map(v=>v.name.toUpperCase());
// let ans=products.map(function(v,i,oarr){
//     if(v.price>=30)
//     {
//         return v.name.toUpperCase();
//     }else
//     {
//         return v.name.toLowerCase();
//     }
// });
// console.log(ans);

// //TASK-2

// //return cubes of values whose squares are less than 1000
// let arr1=[5,16,22,71,12,82,34,49,74,51,61,30,26];
// // let ans2=arr1.filter(v=>v*v<=1000).map(v=>v*v*v);
// let ans2=arr1.map(v=>v*v*v).filter(v=>v<=10000);
// console.log(ans2);

//SOME and Every function in js

//custom some function
// Array.prototype.MyCustomSome=function(callback){
//     for(let i=0;i<this.length;i++)
//     {
//         let value=this[i];
//         let rbv=callback(value,i,this);
//         if(rbv==true)
//         {
//             return true;
//         }
//     }
//     return false;
// };

//custom every function
// Array.prototype.MyCustomEvery=function(callback){
//     for(let i=0;i<this.length;i++)
//     {
//         let value=this[i];
//         let rbv=callback(value,i,this);
//         if(rbv==false)
//         {
//             return false;
//         }
//     }
//     return true;
// };

// let arr = [
//     { gender: "M", age: 24,name: 'foo2' },
//     { gender: "F", age: 34,name: 'foo3' },
//     { gender: "F", age: 28,name: 'foo4' },
//     { gender: "M", age: 74,name: 'foo5' },
//     { gender: "F", age: 31,name: 'foo6' },
//     { gender: "M", age: 47,name: 'foo7' },
//     { gender: "F", age: 26,name: 'foo8' },
//     { gender: "M", age: 47,name: 'foo9' },
//     { gender: "F", age: 47,name: 'foo21' },
//     { gender: "F", age: 19,name: 'foo123' },
//     { gender: "F", age: 20,name: 'foo212' },
//   ];

//returns true if any of the value is true

// let isThereAnyValidCandidate=arr.some(function(v,i,oarr){
//     if(v.gender=='F'&&v.age>=20&&v.age<=30)
//     {
//         return true;
//     }else
//     {
//         return false;
//     }
// });
// let isThereAnyValidCandidate2=arr.MyCustomSome(function(v,i,oarr){
//     if(v.gender=='F'&&v.age>=20&&v.age<=30)
//     {
//         return true;
//     }else
//     {
//         return false;
//     }
// });
// console.log(isThereAnyValidCandidate);
// console.log(isThereAnyValidCandidate2);

//returns flase if any of the value is false
// let isThereAnyValidCandidate=arr.filter(v=>v.gender=='F').every(v=>v.age>=100&&v.age<=300);
// let isThereAnyValidCandidate2=arr.filter(v=>v.gender=='F').MyCustomEvery(v=>v.age>=100&&v.age<=300);

// console.log(isThereAnyValidCandidate);
// console.log(isThereAnyValidCandidate2);

//FOREACH
//custom foreach
Array.prototype.MyCustomForEach=function(callback){
    for(let i=0;i<this.length;i++)
    {
        let value=this[i];
        callback(value,i,this);
    }
};
let arr=[3,5,1,52,55,72,135];
let sum=0;
arr.MyCustomForEach(v=>sum+=v);
console.log(sum);