function sInterest(amt, time) {
    var rate = 10;
    var result = amt * time * rate / 100;
    console.log("The simple interest is", result);
}
// sInterest(10,20,5)  //error
sInterest(10, 20);
console.log("Part b");
function range(start, stop, step) {
    var diff = 1;
    if (typeof step !== 'undefined') {
        diff = step;
    }
    for (var i = start; i <= stop; i = i + diff) {
        console.log(i);
    }
    return 0;
}
range(1, 5);
range(1, 10, 2);
console.log("Part c");
function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var total = 0;
    numbers.forEach(function (num) { return total += num; });
    return total;
}
console.log(sum());
console.log(sum(1, 2, 3, 4, 5));
console.log(sum(10, 20, 33));
console.log("Part d");
function message(_a) {
    var title = _a.title, name = _a.name, msg = _a.msg;
    return "".concat(title, " ").concat(name, "\n").concat(msg);
}
console.log(message({ title: 'Dr.', name: 'John', msg: 'Appointment please' }));
console.log(message({ title: 'Miss', msg: 'Welcome home.', name: 'Suzy' }));
