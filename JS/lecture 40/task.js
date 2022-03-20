//Custom flat
// Array.prototype.MyCustomFlat=function(targetDepth){
//     let value=this;
//     let res=[];
//     customFlat(value,targetDepth,res);
//     return res;
// }
// function customFlat(node,targetDepth,res)
// {
//     if(Array.isArray(node))
//     {
//         if(targetDepth>0)
//         {
//             for(let i=0;i<node.length;i++)
//             {
//                 customFlat(node[i],targetDepth-1,res);
//             }
//         }else
//         {
//             for(let i=0;i<node.length;i++)
//             {
//                 res.push(node[i]);
//             }
//         }
//     }else
//     {
//         res.push(node);
//     }
// }


// let arr=[10,20,[30,40,50,[60,70,[80,[90],100]],110],120,130,[140,150]];
// console.log(arr);

// let res1=arr.flat(1);   //[10,20,30,40,50,[60,70,[80,[90],100]],110,120,130,140,150]
// console.log(res1);

// let Myres1=arr.MyCustomFlat(1);   //[10,20,30,40,50,[60,70,[80,[90],100]],110,120,130,140,150]
// console.log(Myres1);

// let res2=arr.flat(2);   //[10,20,30,40,50,60,70,[80,[90],100],110,120,130,140,150]
// console.log(res2);

// let Myres2=arr.MyCustomFlat(2);   //[10,20,30,40,50,60,70,[80,[90],100],110,120,130,140,150]
// console.log(Myres2);

// let res3=arr.flat(3);   //[10,20,30,40,50,60,70,80,[90],100,110,120,130,140,150]
// console.log(res3);

// let Myres3=arr.MyCustomFlat(3);   //[10,20,30,40,50,60,70,80,[90],100,110,120,130,140,150]
// console.log(Myres3);

// let res4=arr.flat(4);   //[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
// console.log(res4);

// let Myres4=arr.MyCustomFlat(4);   //[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150]
// console.log(Myres4);

// let res5=arr.flat(Infinity);    //This will bring everything to the front
// console.log(res5);

// let Myres5=arr.MyCustomFlat(Infinity);    //This will bring everything to the front
// console.log(Myres5);


//Array.of
// let arr=Array.of(2,3,"rah");
// console.log(arr);   //[2,3,'rah']

// //Array.from
// let arr1=Array.from("HappyNewYear");    //work on Array like objects(for ex: String,NodeList,Arguments)
// console.log(arr1);  //['H', 'a', 'p', 'p','y', 'N', 'e', 'w','Y', 'e', 'a', 'r']

// //Array.fill
// let arr2=[12,42,67,93,46,15,45];
// arr2.fill(3,2,5); //[value,start,end-1]
// console.log(arr2);  //[12,42,3,3,3,15,45]

// arr2.fill('1',2); 
// console.log(arr2);  //[12,  42,  '1','1', '1', '1','1']

// arr2.fill(3);
// console.log(arr2);  //[3, 3, 3, 3,3, 3, 3]

let arr3=[64,6,2,75,21,5,8,99,654,32];
arr3.copyWithin(3,6,8); //[targetlocation,start,end-1]
console.log(arr3);  //[64,6,2,8,99,5,8,99,654,32]

arr3.copyWithin(0,6,8);
console.log(arr3);  //[8,99,2,8,99,5,8,99,654,32]