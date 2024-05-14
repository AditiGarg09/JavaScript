var myName = "Aditi Garg"; // string
var myAge = 22;           // number
var oct2000 = true;      // boolean
var gurgaon = false;    // boolean

// console.log(myName);

console.log(typeof(myName));
console.log(typeof(myAge));
console.log(typeof(oct2000));
console.log(typeof(gurgaon));

console.log();

// null

var iAmUseless = null;
console.log(iAmUseless);
console.log(typeof(iAmUseless));   // object >> object is no such datatype so this is also a BUG

console.log();

// undefined

var standBy;
console.log(standBy);
console.log(typeof(standBy));     // undefined >> as we haven't initialise any value to the variable but we can assign value later also.