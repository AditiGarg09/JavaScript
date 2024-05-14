// Insert, Add, Replace and Delete elements in an Array (CRUD >> Create, Read, Update, Delete)

// Array.prototype.push()  >> add element at the end of an Array

const animals = ["Cow","Camel","Dog"];

animals.push("Goat");      // console.log(animals.push("Goat")); >> return length of Array.
console.log(animals);

animals.push("Pig","Sheep");
console.log(animals);

console.log(animals.length);

// Array.prototype.unshift()  >> add element at the starting of an Array

const animal = ["Cow","Camel","Dog"];

animal.unshift("Chicken");
console.log(animal);

animal.unshift("Pig","Sheep");
console.log(animal);

const num = [5,3,1,7];

num.unshift(9);
console.log(num);

// Array.prototype.pop()  >> remove last element from an Array

const plants = ["broccoli","cauliflower","kale","tomato"];

console.log(plants);
console.log(plants.pop());
console.log(plants);

// Array.prototype.shift()  >> remove first element from an Array

console.log(plants);
console.log(plants.shift());
console.log(plants);