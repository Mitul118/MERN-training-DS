var fs =require("fs")

fs.writeFileSync('writeit',"This is written synchronously");

//comment oout below commands to see syncronous writing
fs.writeFile('writeit',"This is written by async write file",()=> {
console.log("Written");
});

