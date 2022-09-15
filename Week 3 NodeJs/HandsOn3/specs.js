 const { count } = require("console");
var os= require("os" )

 console.log("Total memory",os.totalmem());
 console.log("Free memory",os.freemem());
 var cpus=os.cpus();
 console.log("CPU count",cpus.length);
 console.log("CPU Model",cpus[1].model);
 console.log("CPU Speed",cpus[1].speed);