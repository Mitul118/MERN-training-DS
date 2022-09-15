const fs = require("fs");

console.log("Reading file");
var data=fs.readFileSync('./readit','utf-8');
console.log(data);
