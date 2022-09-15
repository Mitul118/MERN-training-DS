var host = require("os")

var platform = host.platform();
var hostname = host.hostname();
var OSystem = host.release();

console.log("platform:",platform);
console.log("hostname",hostname);
console.log("Operating System",OSystem);