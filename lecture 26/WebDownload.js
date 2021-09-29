//downloading data from the url
//and storing it into the file
// node WebDownload.js --dest=downloaded.html --url='https://github.com/rahul7011'

let minimist = require("minimist");
let fs = require("fs");
let axios = require("axios");
let clargs=minimist(process.argv);

let downloadedFile=axios.get(clargs.url);

downloadedFile.then(function (response){
    console.log(response);
    let html=response.data;
    fs.writeFileSync(clargs.dest,html,"utf-8");
}).catch(function(err){
    console.log(err);
})
