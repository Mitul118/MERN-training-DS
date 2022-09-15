// Usage of format specifier
// the counting element example
// line to  clearing the console
//Trace function

const { clear, trace, time } = require("console");

console.log("Statement before clear");
console.clear();// clears the console
console.log("This is the %d console log format specifier example for numeric ", 2 - 1);
console.log("This is the %d console log format specifier example for numeric" , '2-1');
console.log("This is the %o console log format specifier example for string type", '2-1',trace());//calling Trace
console.log("This is the %s console log format specifier example for object type", '2-1');


const numbers = ['One', 'Two', 'Three', 'One']

console.time("Loop time");

numbers.forEach(number => {
    console.count(number) //counting the elements
  
}
)
console.timeEnd("Loop time");
console.log(numbers);


