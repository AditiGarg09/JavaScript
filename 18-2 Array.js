// Searching and Filter in an Array

/* --------------------- SEARCHING --------------------- */

var myFriends = ["Vinod","Bahadur","Thapa","ThapaTechnical","Thapa"];

// Array.prototype.indexOf()

console.log(myFriends.indexOf("Thapa"));     // 2

console.log(myFriends.indexOf("Thapa",2));   // 2

console.log(myFriends.indexOf("Thapa",3));   // 4

console.log(myFriends.indexOf("thapa",1));   // -1 (means Not Found) (Case-Sensitive) 

// Array.prototype.lastIndexOf()

console.log(myFriends.lastIndexOf("Thapa"));   // 4

console.log(myFriends.lastIndexOf("Thapa",3)); // 2

console.log(myFriends.lastIndexOf("thapa",2)); // -1

// Array.prototype.includes()

console.log(myFriends.includes("Thapa"));

console.log(myFriends.includes("thapa"));

console.log(myFriends.includes("Vinod"));

console.log(myFriends.includes("Vinod",1));

// Array.prototype.find()

const prices = [200,300,400,450,500,600];

// Method 1
const findElem = prices.find((elem) => {
    return elem < 400;
});
console.log(findElem);

// Method 2
console.log(prices.find((elem) => elem >400));

/* --------------------- FILTERING --------------------- */

const price = [200,300,400,450,500,600];

// Array.prototype.findIndex()

console.log(price.find((elem) => elem<400));        // 200

console.log(price.findIndex((elem) => elem<400));   // 0

console.log(price.findIndex((elem) => elem>1400));  // -1


// Array.prototype.filter()

console.log(price.filter((elem) => elem<450));      // [200,300,400]

console.log(price.filter((elem) => elem>1400));     // []