// map(), reduce(), filter()

//---------------------------------- Array.prototype.map() -----------------------------------//

// SYNTAX

// let newArray = arr.map(callback(currval,[,index[,array]])){
//    return element for newArray after executing something
// }[,thisArg]);

const array1 = [1,4,9,16,25];

// map() is similar to forEach()

let newArray = array1.map((curVal,index,arr) => {
    return curVal<9;
})
console.log(newArray);

// To check what's coming into the current Value, index and array.

let newArr = array1.map((curVal,index,arr)=> `CurVal is ${curVal}, index is ${index}, arr is ${arr}`);
console.log(newArr);

// forEach()

let newArray1 = array1.forEach((currVal,i,arr) => {
    return currVal;
} ) 
console.log(newArray1);

// Find the SquareRoot of each element in an array [25,36,49,64,81].

let arr = [25,36,49,64,81,90];

let arrSqr = arr.map((curVal) => {
    return Math.sqrt(curVal);
});
console.log(arrSqr);

//-------------------------------- filter() -------------------------------------------//

// Multiply each element by 2 and return only those elements which are greater than 10.

let arr1 = [2,3,4,5,6,8];

// In Map() we can use chaining too

// let arr2= arr1.map( (currVal) => {
//     return currVal*2;
// }).filter( (currVal) => {
//     return currVal>10;
// });

// console.log(arr2);

let arr2= arr1.map((currVal) => currVal*2).
               filter((currVal) => currVal>10);

console.log(arr2);

//-------------------------------------------- reduce() -----------------------------------------//

// Flatten an array means to convert the 3D or 2D array into a 1D array.

// OR

// reduce() method executes a reducer function 
// (that you provide) on each element of the array,
// resulting in single output value.

// reduce() takes 4 arguments:
// 1. accumulator
// 2. current value
// 3. current index
// 4. source array

let arrReduce = [5,6,2];

// let sum = arrReduce.reduce((accumulator,currVal,i,arr) => {
//     return accumulator+=currVal;
// });

let sum = arrReduce.reduce((accumulator,currVal,i,arr) => accumulator+=currVal);

console.log(sum);

// Multiply each element by 2 and return sum of only those elements which are greater than 10.

let array2 = [2,3,4,5,6,7];

let newArray2 = array2.map((currVal)=>currVal*2).
                       filter((currVal)=>currVal>10).
                       reduce((acc,currVal)=>acc+=currVal);

console.log(newArray2);

// We can assign a accumulator value also.

let sum1 = arrReduce.reduce((accumulator,currVal,i,arr) => {
    return accumulator+=currVal;
},7);  // 7 is the inital value of accumulator
console.log(sum1);

// Fatten an Array >> convert 2D, 3D Array to 1D, 2D Array respectively

const arrFatten = [['zone_1','zone_2'],['zone_3','zone_4'],['zone_5','zone_6']];

const newArrFatten = arrFatten.reduce((acc,currVal)=>{
    return acc.concat(currVal);
});

console.log(arrFatten);
console.log(newArrFatten);

const arrFatten1 = [
                    ['zone_1','zone_2'],
                    [
                        ['zone_3','zone_4'],
                        ['zone_5','zone_6']
                    ]
                   ];

const newArrFatten1 = arrFatten1.reduce((acc,currVal)=>{
    return acc.concat(currVal);
});

console.log(newArrFatten1);