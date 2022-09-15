function firstFn() {
    console.log("First Function ");
}

function secondFn() {
    console.log("Second Function");
}

function thirdFn() {
    console.log("Third Function");
}

function fourthFn() {
    console.log("Fourth Function");
    
}
// console.log("before third fn call");
// setTimeout(thirdFn,0);
// console.log("before second fn call");
// setTimeout(secondFn,0);
// firstFn();

console.log("start");
setTimeout(function cb() {
    console.log("callback");    
}, 0);

console.log("end");