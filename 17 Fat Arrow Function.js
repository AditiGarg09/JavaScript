// Traditional Way of writing Function

function sum(){
    let a = 5, b = 6;
    return `Sum of a+b is ${a+b}`;
}
console.log(sum());

// Fat Arrow Function

const add = () => `Sum of a+b is ${(a=2)+(b=3)}`; // => Fat Arrow Symbol
console.log(add());