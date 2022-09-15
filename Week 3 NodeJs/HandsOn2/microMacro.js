console.log("Start");

setTimeout(function () {
    console.log("This is SettimeOut function running after 1000ms ");
}, 1000)


var prom = new Promise(function (resolve, reject) {
    console.log("Hey!");
    if (true) {
        resolve("Resolved");
    }
    else {
        reject("Rejected");
    }

})

prom.then(function (result) {
    console.log(result);

    process.nextTick(() => {
        console.log('nextick in then');
    });


})
console.log("End");

