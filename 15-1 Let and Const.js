// var >> global scope
// let and const >> block scope

// VAR 

var myName = "Aditi Garg";
console.log("Name:",myName);

myName = "A G";
console.log("Updated Name:",myName);

// LET

let myAge = 22;
console.log("Age:",myAge);

myAge = 23;
console.log("Updated Age:",myAge);

// CONST (CONSTANT)

const dob = "Oct2000";
console.log("DOB:",dob);

/*
dob = "July2023"; >> TypeError: Assignment to constant variable.
console.log("Updated DOB:",dob);
*/