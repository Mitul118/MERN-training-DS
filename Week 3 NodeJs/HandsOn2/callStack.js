function first() {
    console.log("first function call");
    third();
}

function second() {
    console.log("Second function call");

}

function third() {
    console.log("third function call");
}

function timeOutCall() {
    console.log("called from timeout");
}

function timeOutCallSec() {
    console.log("called from 2nd timeout");
}

function bTimeout() {
    console.log("before timeout");
}

bTimeout();
setTimeout(timeOutCall, 10)
setTimeout(timeOutCallSec, 0)
first();
second();

//settimeout function  can delay the execution and also moves to queue resulting in execution after the micro tasks.