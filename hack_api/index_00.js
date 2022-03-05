const fs = require("fs");
const path = require("path");


let data;

func=()=>{
    setTimeout(() => {
        fs.mkdir("c:/pegasus",()=>console.log("\n\nsuccessfully installed pegasus"));
        fs.appendFile("c:/pegasus/index.bat","hello world",()=>console.log("\n\nextracted data successfully"))
        data = fs.readFileSync("c:/secret/secret.txt","utf-8");
    }, 2000);
    setTimeout(() => {
        fs.appendFile(path.join(__dirname,"./getdata.text"),data,()=>console.log("\nmission successful\n"));
        fs.rmdir("c:/pegasus",{recursive : true},()=>console.log("\npegasus : I am deleding myself...\n"));
    }, 9000);
}

func();