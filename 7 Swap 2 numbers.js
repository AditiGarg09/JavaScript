// Using 3rd Variable

var a = 2;
var b = 3;
console.log("a:",a);
console.log("b:",b);
var c = a;
a = b;
b = c;
console.log("New a:",a);
console.log("New b:",b);

// Without using 3rd Variable

var x = 5;
var y = 6;
console.log("x:",x);
console.log("y:",y);

x = x + y;
y = x - y;
x = x - y;
console.log("New x:",x);
console.log("New y:",y);