// 1. While Loop

console.log("1. While Loop");

/*
var num = 10;
while(num<=10){
    console.log(num);      // Infinite Loop
}
*/

var num = 0;
while(num<=10){
    console.log(num);
    num++;
}

// 2. Do-While Loop
console.log("2. Do-While Loop");
var num1 = 0;

do{
    console.log(num1);
    num1++;
}while(num1 <= 10);

// 3. For Loop
console.log("3. For Loop");
for(var num2=0;num2<=10;num2++){
    console.log(num2);
}

myFriends = ["Aditi",22,"Jhanvi",21,"Ishika",22];

// 4. FOR IN Loop
for(let elements in myFriends){
    console.log(elements);              // Returns index number of all the elements
    console.log(myFriends[elements]);   // Returns elements of an Array
}

// 5. FOR OF Loop
for(let elements of myFriends){
    console.log(elements);              // Returns elements of an Array
}

// 6. Array.prototype.forEach() >> Calls a function for each element in an Array
myFriends.forEach(
    function(element,index,array){
        console.log("Element:",element,"Index:",index,"Array:",array);
    });