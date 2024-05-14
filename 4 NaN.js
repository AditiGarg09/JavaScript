// NaN >> is Not a Number

var myPhoneNumber = 987654321;
var myName = "Aditi Garg";

console.log(isNaN(myName));           // TRUE
console.log(isNaN(myPhoneNumber));    // FALSE

console.log();

// To check whether mobile number is valid or not we can use NaN for that.

var myMobileNumber = "9876aditi54321";
if(isNaN(myMobileNumber)){
    console.log("Please Enter a Valid Mobile Number!");
}
else{
    console.log("Perfect Number!");
}

console.log();

console.log(NaN===NaN);
console.log(Number.NaN===NaN);
console.log(isNaN(NaN));
console.log(isNaN(Number.NaN));
console.log(Number.isNaN(NaN));