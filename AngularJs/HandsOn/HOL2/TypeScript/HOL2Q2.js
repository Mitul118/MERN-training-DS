function greet(person) {
    var Person = person.toUpperCase();
    return "Hello ".concat(Person);
}
console.log(greet("Ross"));
// console.log(greet(123));  //Gives error
