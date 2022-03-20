//Map is itself a fn
// Map takes as input a callback fn
// The callback fn takes 3 parameter (v, i, oarr)
// map will call the callback multiple times (once for each value)
// for each run of callback, map will pass v, i and original array to callback
// callback will process the value and index and return a single value
// Single value returned by each run of callback will be collected in a new array by map
// Map returns that new array
// length of returned array is equal to original array

//TASK-1

// let arr=[
//     "Rahul Maurya",
//     "Rahul Kumar Maurya",
//     "Sandeep Kumar",
//     "Check ",
//     " Check",
//     "Sanjeev Singh"
// ]
// //use the map function to generate [R.M, R.K.M, S.K, S.S]
// let requiredArr=arr.map(function(v,i,oarr){
//     let n=v.length;
//     let str="";
//     for(let i=0;i<n;i++)
//     {
//         if(i==0&&v[i]!=' ')
//         {
//             str=str+v[0]+".";
//         }else if(v[i-1]==' ')
//         {
//             str=str+v[i]+".";
//         }
//     }
//     // console.log(oarr);
//     return str;
// });
// console.log(requiredArr);

//TASK-2

// let arr = [
//   {
//     gender: "M",
//     age: 24,
//   },
//   {
//     gender: "F",
//     age: 34,
//   },
//   {
//     gender: "F",
//     age: 28,
//   },
//   {
//     gender: "M",
//     age: 74,
//   },
//   {
//     gender: "F",
//     age: 31,
//   },
//   {
//     gender: "M",
//     age: 47,
//   },
//   {
//     gender: "F",
//     age: 26,
//   },
//   {
//     gender: "M",
//     age: 47,
//   },
//   {
//     gender: "F",
//     age: 47,
//   },
//   {
//     gender: "F",
//     age: 19,
//   },
//   {
//     gender: "M",
//     age: 20,
//   },
//   {
//     gender:"F",
//     age:23
//   }
// ];

// // Use the map function to produce the below output
// // return an array with true and false for females between 20 and 30
// // let us say xyz corp wants to hire females between age >= 20 and <= 30

// let desiredArr=arr.map(function(v,i,oarr){
//     if(v.gender=='F'&&(v.age>=20 && v.age<=30))
//     {
//         return true;
//     }else
//     {
//         return false;
//     }
// });
// console.log(desiredArr);

//custom map implementation

// Array.prototype.MyCustomMap=function(callback){
//     let res=[];
//     for(let i=0;i<this.length;i++)
//     {
//         let value=this[i];
//         let returnValue=callback(value,i,this);
//         res.push(returnValue);
//     }
//     return res;
// }

// let arr=[1,4,7,3,8];
// let sqarr=arr.map((v,i,oarr)=> v*v);
// console.log(sqarr);
// let sqarr2=arr.MyCustomMap((v,i,oarr)=> v*v);
// console.log("Brought to you by custom map made by me: "+sqarr2);
// let oddeven=arr.MyCustomMap(function(v,i,oarr){
//     if(v%2==0)
//     {
//         return "EVEN";
//     }else
//     {
//         return "ODD";
//     }
// })
// console.log(oddeven);

//FILTER

// Filter is itself a fn
// Filter takes as input a callback fn
// The callback fn takes 3 parameter (v, i, oarr)
// filter will call the callback multiple times (once for each value)
// for each run of callback, filter will pass v, i and original array to callback
// callback will process the value and index and return a single boolean value for each call to it from filter
// Single value returned by each run of callback will be used by filter
// Whenever a true is received by filter (returned by callback) then filter adds the v to a new array
// Filter returns that new array
// length of returned array is equal to number of trues returned by callback

// let arr=[1,5,7,2,4,8,9,3,6,45]

//Building my own coustomfilter

// Array.prototype.MyCustomFilter=function(callback){
//     let res=[];
//     for(let i=0;i<this.length;i++)
//     {
//         let value=this[i];
//         let rbv=callback(value,i,this);
//         if(rbv==true)
//         {
//             res.push(value);
//         }
//     }
//     return res;
// };

// let oddarr=arr.MyCustomFilter(function(v,i,oarr){
//     if(v%2==1)
//     return true;
//     else
//     return false;
// });
// console.log(oddarr);

//TASK-3
//return the ages of the ladies whom age lie's in 20 and 30 inclusive

let arr = [
  { gender: "M", age: 24,name: 'foo2' },
  { gender: "F", age: 34,name: 'foo3' },
  { gender: "F", age: 28,name: 'foo4' },
  { gender: "M", age: 74,name: 'foo5' },
  { gender: "F", age: 31,name: 'foo6' },
  { gender: "M", age: 47,name: 'foo7' },
  { gender: "F", age: 26,name: 'foo8' },
  { gender: "M", age: 47,name: 'foo9' },
  { gender: "F", age: 47,name: 'foo21' },
  { gender: "F", age: 19,name: 'foo123' },
  { gender: "F", age: 20,name: 'foo212' },
];

// let desiredArr=arr.filter(function(v,i,oarr){
//     if(v.gender=='F')
//     {
//         return true;
//     }else
//     {
//         return false;
//     }
// }).map(function(v,i,oarr){
//     return v.age;
// });
let desiredArr=arr.filter(v=>v.gender=='F').map(v=>v.age);

console.log(desiredArr)