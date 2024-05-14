var myFriends = new Array; // to create Array >> this is optional as JS already indentify array when we use [] (square brackets)

myFriends = ["Aditi",22,"Jhanvi",21,"Ishika",22];

console.log("Original Array:",myFriends);

// 1. Traversal in Array

console.log("3rd Element of an Array:",myFriends[2]);

console.log("Length of an Array:",myFriends.length);

console.log("Last Element of an Array:",myFriends[myFriends.length - 1]);

console.log("All Elements with their DataType:");

// FOR Loop
for(let i=0;i<myFriends.length;i++){
    console.log(myFriends[i],typeof(myFriends[i]));
}

// FOR IN Loop
for(let elements in myFriends){
    console.log(elements);              // Returns index number of all the elements
    console.log(myFriends[elements]);   // Returns elements of an Array
}

// FOR OF Loop
for(let elements of myFriends){
    console.log(elements);              // Returns elements of an Array
}

// Array.prototype.forEach() >> Calls a function for each element in an Array
myFriends.forEach(
    function(element,index,array){
        console.log("Element:",element,"Index:",index,"Array:",array);
});

// Fat Arrow Function
myFriends.forEach((elem,i,arr) => {
    console.log(elem);
});