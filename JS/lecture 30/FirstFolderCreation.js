//node FirstFolderCreation.js --source=teams.json --dest=WorldCup
//Manually make a folder first
let minimist=require("minimist");
let fs=require("fs");

//To make folder paths ,never append slashes yourself
let path=require("path");

let clargs=minimist(process.argv);
let teamsJSON=fs.readFileSync(clargs.source,"utf-8");
let teams=JSON.parse(teamsJSON);

for(let i=0;i<teams.length;i++)
{
    let folderName=path.join(clargs.dest,teams[i].team);
    //making directory
    fs.mkdirSync(folderName);
}