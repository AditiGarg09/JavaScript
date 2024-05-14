// splice() Method // can Add or Remove elements from an Array

const Month = ["Jan","march","April","June","July"];

// Add Dec at the end of an Array

const newMonth = Month.splice(5,0,"Dec");

console.log(newMonth);  // Returned empty array because we are not deleting anything.
console.log(Month);     // Return new array

// Replace "march" with "March"

const indexOfMarch = Month.indexOf("march");

if (indexOfMarch!=-1){
    Month.splice(indexOfMarch,1,"March");
    console.log(Month);
}
else{
    console.log("march element not found");
}

// Remove "June"

const indexOfJune = Month.indexOf("June");

if (indexOfMarch!=-1){
    Month.splice(indexOfJune,1);
    console.log(Month);
}
else{
    console.log("march element not found");
}

// Remove all elements after March

const indexOfMarch$ = Month.indexOf("March");

if (indexOfMarch!=-1){
    Month.splice(indexOfMarch$+1,Infinity);
    console.log(Month);
}
else{
    console.log("march element not found");
}