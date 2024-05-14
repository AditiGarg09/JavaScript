let fName = "Aditi";
let lName = 'Garg';

let ytName = new String("Thapa Technical"); // Don't use this

console.log(fName);
console.log(lName);

console.log(ytName);

// To check lenth of the string

console.log(ytName.length);

//--------------------------------Escape Character---------------------------------//

// Backslash Escape Character
// \" OR \' OR \\

let txt1 = "My name is \"Aditi Garg\".";
console.log(txt1);

let txt2 = 'My name is "Aditi Garg".';
console.log(txt2);

//--------------------------------Finding a String in a String---------------------------------//

// String.prototype.indexOf(searchValue[,fromIndex])

const myBioData = "I am the Thapa Technical";

console.log(myBioData.indexOf("Thapa"));
console.log(myBioData.indexOf("thapa"));

console.log(myBioData.indexOf("T"));
console.log(myBioData.indexOf("T",10));
console.log(myBioData.indexOf("T",-1));

// String.prototype.lastIndexOf(searchValue[,fromIndex])

console.log(myBioData.lastIndexOf("Thapa"));
console.log(myBioData.lastIndexOf("thapa"));

console.log(myBioData.lastIndexOf("T"));
console.log(myBioData.lastIndexOf("T",10));
console.log(myBioData.lastIndexOf("T",-1));

//--------------------------------Searching for a String in a String---------------------------------//

// String.prototype.search(regExp)

// This is similar to indexOf() method. 
// Difference is that search() can't take second start position argument.

let sData = myBioData.search("Thapa");
console.log(sData);

console.log(myBioData.search("thapa"));

//--------------------------------Ectracting String Parts---------------------------------//

// slice() method

// slice(start,end)

let str = "Apple, Banana, Kiwi";

let res = str.slice(0,4);
console.log(res);

console.log(str.slice(0,5));
console.log(str);               // Original String will not change

console.log(str.slice(7));
console.log(str.slice(7,-2));  // Will ignore last 2 characters of the String

// Display only 280 characters of a string like the one used in the twitter.

let tweet = "Lorem ipsum dolor sit amet. A magni nulla est enim dignissimos et tempore provident qui iste porro. Aut galisum omnis qui repellendus voluptates et nihil animi qui tempora itaque in quisquam nihil et minima architecto. Aut magnam expedita et asperiores voluptatem ut voluptatem dolorem vel cumque iusto et soluta sint. A dicta magni et dolorum consequatur ut facere eligendi non nesciunt alias sed sunt excepturi et recusandae temporibus.";

console.log(tweet.slice(0,280));
console.log(tweet.slice(0,280).length);

// substring() method

// substring(start,end) >> similar to slice but end will not take -ve values.

console.log(str.substring(7));
console.log(str.substring(0,5));
console.log(str.substring(7,-2)); // If we give -ve value then the characters are counted from the 0th position.

// substr() method

// substr(start,length) >> similar to slice but second parameter specifies the length of the extracted part.

console.log(str.substr(0,5));
console.log(str.substr(7,-2));
console.log(str.substr(-10)); // returns last 10 characters of the String.

//--------------------------------Replacing String Content---------------------------------//

// String.prototype.replace(searchFor,replaceWith)

let myName = "I am aditi garg jiya garg";

console.log(myName.replace("garg","Garg")); 
console.log(myName.replace("Aditi","Jiya")); // Case-Sensitive >> No change done
console.log(myName); // No changes into the source string

//--------------------------------Extracting String Characters---------------------------------//

// charAt() method

// charAt(position)

let txt = "HELLO WORLD";

console.log(txt.charAt(0));
console.log(txt.charAt(11)); // 11 index doesnot exist so NO OUTPUT

// charCodeAt()

// charCodeAt(position)

console.log(txt.charCodeAt(0));
console.log(txt.charCodeAt(11)); // 11 index doesnot exist so NaN (Not a Number)

console.log(txt.charCodeAt(txt.length-1));

// Property access [ ]

console.log(txt[0]);
console.log(txt[1]);

//------------------------------------------------------------------------------------------------//

// Convert string to Upper Case

let bName = "Sahil Garg";

console.log(bName.toUpperCase());
console.log(bName);

// Convert string to Lower Case

console.log(bName.toLowerCase());
console.log(bName);

// concat() method >> to join two strings

console.log(fName + lName);
console.log(`${fName} ${lName}`);

console.log(fName.concat(lName));
console.log(fName.concat(" ",lName));

// String.trim() >> Remove whitespaces from starting and ending of the string.

let randomTxt1 = "             Hello World            ";

console.log(randomTxt1.trim());
console.log(randomTxt1);

let randomTxt2 = "             Hello         World            ";

console.log(randomTxt2.trim());
console.log(randomTxt2);

// String.split() >> Convert a String to Array

var text = "a, b, c,|d, e";

console.log(text.split(","));
console.log(text.split(" "));
console.log(text.split("|"));