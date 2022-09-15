// Using repl in JavaScript file
const { exit } = require('process');
const local = require('repl');
local.start('$ '); // Starting a REPL session
process.on('exit',function(){
    console.log("Exiting REPL...");
});

