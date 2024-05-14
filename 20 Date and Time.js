// Date Methods (get and set)
// Time Methods (get and set)

// ------------------------------------------------ DATE METHODS -------------------------------------------
// 1. new Date()

let currDate = new Date();
console.log(currDate);

console.log(new Date());

console.log(new Date().toLocaleString());

console.log(new Date().toString());

console.log(Date.now()); // Returns MilliSeconds

// 2. new Date(year, month, hours, mins, secs, milliseconds)

var d1 = new Date(2023, 6, 24, 10, 33, 30, 0);
console.log(d1.toLocaleString());

var d2 = new Date(2021,0);
console.log(d2);

// 3. new Date(dateString)

var d = new Date("July 24, 2023 15:02:00");
console.log(d);

// 4. new Date(milliSeconds)

var x = new Date(1690194104108);
console.log(x.toLocaleString());

// ------------------------------------------------ DATE GET METHODS --------------------------------------

const currDate1 = new Date();

console.log(currDate1.toLocaleString());
console.log(currDate1.getFullYear());
console.log(currDate1.getMonth());
console.log(currDate1.getDate());
console.log(currDate1.getDay());

// ------------------------------------------------ DATE SET METHODS --------------------------------------

console.log(currDate1.setFullYear(2024));
console.log(currDate1.setMonth(10));
console.log(currDate1.setDate(5));
// console.log(currDate1.setFullYear(2023,10,5));
console.log(currDate1.toLocaleString());

// ------------------------------------------------ TIME GET METHODS --------------------------------------

const currTime = new Date();

console.log(currTime.getTime());
console.log(currTime.getHours());
console.log(currTime.getMinutes());
console.log(currTime.getSeconds());
console.log(currTime.getMilliseconds());

// ------------------------------------------------ TIME SET METHODS --------------------------------------

const setTime = new Date();

// console.log(setTime.setTime());
console.log(setTime.setHours(5));
console.log(setTime.setMinutes(10));
console.log(setTime.setSeconds(15));
console.log(setTime.setMilliseconds(150));

// Display Only Time

console.log(new Date().toLocaleTimeString());

// Display Only Date
console.log(new Date().toLocaleDateString());

// Display Both Date and Time
console.log(new Date().toLocaleString());