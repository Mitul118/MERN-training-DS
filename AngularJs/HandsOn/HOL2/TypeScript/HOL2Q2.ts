function greet(person: string): string{
    var Person: string = person.toUpperCase()
    return `Hello ${Person}`
}

console.log(greet("Ross"));
// console.log(greet(123));  //Gives error

