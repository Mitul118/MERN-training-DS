function sInterest(amt:number,time: number) {
    var rate: number=10
    var result:number =amt*time*rate/100
    console.log("The simple interest is",result);
}

// sInterest(10,20,5)  //error
sInterest(10,20)


console.log("Part b");



function range (start:number, stop:number,step?:number): number{
    var diff:number=1;
    if (typeof step !=='undefined'){
        diff=step;
    }
    for(var i:number =start;i<=stop;i=i+diff)
        {
            console.log(i);
            
        }
    return 0;
    
}

range(1,5)
range(1,10,2)


console.log("Part c");

function sum(...numbers:number[]):number{
    var total : number = 0 
    numbers.forEach((num)=> total+=num);
    return total;
}

console.log(sum());
console.log(sum(1,2,3,4,5));
console.log(sum(10,20,33));


console.log("Part d");

interface NamedParameters{
    title:string, name: string, msg:string
}
function message({title, name, msg}: NamedParameters) {
    
    return`${title} ${name}\n${msg}`
    
}


console.log(message({title: 'Dr.', name: 'John', msg: 'Appointment please'}));

console.log(message({title: 'Miss', msg: 'Welcome home.', name:'Suzy'}));
