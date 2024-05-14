//1. Assignment Operator
console.log("1. Assignment Operator\n");

var x=5;
var y=6;

console.log("is both x and y are equal"+x == y);
console.log("is both x and y are equal", x==y);
console.log(`is both x and y are equal ${x==y}`);

//2. Arithmetic Operator
console.log("\n2. Arithmetic Operator\n");

console.log(5+6);
console.log(5-9);
console.log(8/2);
console.log(3*4);
console.log(10%3);
console.log(3**2);

//2.1. Increment and Decrement Operator
console.log("\n2.1. Increment and Decrement Operator\n");

var num=15;
var newNum1 = num++;
console.log("num:",num);
console.log("newNum++:",newNum1);

var newNum2 = ++num;
console.log("num:",num);
console.log("++newNum:",newNum2);

var newNum3 = num--;
console.log("num:",num);
console.log("newNum--:",newNum3);

var newNum4 = --num;
console.log("num:",num);
console.log("--newNum:",newNum4);

//3. Comparison Operator
console.log("\n3. Comparison Operator\n");

console.log(3=="3");
console.log(3==="3");
console.log(5!=4);
console.log(11>16);
console.log(16>=9);
console.log(3<2);
console.log(2<=5);

//4. Logical Operator
console.log("\n4. Logical Operator\n");

console.log("AND: &&");
console.log("OR:  ||");
console.log("NOT: !");

//5. String (Cancatenation) Operator (+)
console.log("\n5. String (Cancatenation) Operator (+)\n");

console.log("Hello"+"World");

//6. Conditional (Ternary) Operator
console.log("\n6. Conditional (Ternary) Operator\n");

var age = 15;
(age>=18) ? console.log("You are eligible to vote in upcoming elections 😊"):console.log("You can vote once you'll be 18 years old 😉");