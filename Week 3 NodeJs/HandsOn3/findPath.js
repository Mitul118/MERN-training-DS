var path = require("path")

var file = "D:\\NodeJs\\nodehandson3\\readit.txt";

dname=path.dirname(file);
bname=path.basename(file);
ext=path.extname(file);

console.log("Directory name:",dname);
console.log("Base name:",bname);
console.log("Extension name:",ext);