"use strict";

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");
*/

// const interface = "Audio";
// const private = 534;
// const if = 23;





// Lesson 1 Functions

/*
function logger() {
    console.log("My name is Faruk");
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");
*/





// Lesson 2 Function declarations vs expression

// function calcAge1(birthYear){ //declaration
//     return 2037 - birthYear;
// }
// const age1 = calcAge1(1999);   //declarations'da hoisting vardır.




// const calcAge2 = function(birthYear) {      
//     return 2037 - birthYear;  //expression
// }
// const age2 = calcAge2(1999);
// console.log(age1, age2);

// functions are value, we can store it in a variable.





// Lesson 3 Arrow Functions (expression function shorter)
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3(1999);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = 2037 - birthYear; // 38
//     const retirement = 65 - age; // 27
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;
// }

// console.log(yearUntilRetirement(1999, "Faruk"));
// console.log(yearUntilRetirement(1995, "Ömer"));





// Lesson 4 Functions Calling Other Functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges)

//     const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
//     return juice;
// }
// console.log(fruitProcessor(2, 3));





// Lesson 5 Reviewing Functions

// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = (birthYear, firstName) => {
//     const age = calcAge(birthYear)
//     const retirement = 65 - age; // 27

//     if(retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//     } else {
//         console.log(`${firstName} has already retired`);
//         return -1;
//     }
// }
// console.log(yearUntilRetirement(1999, "Faruk"));
// console.log(yearUntilRetirement(1950, "Ömer"));





// Coding Challenge #1
/*
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team ONLY wins if it has at least DOUBLE the average score of the other team. Otherwise, no team wins!

1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)".
4. Use the 'checkWinner' function to determine the winner for both DATA 1 and DATA 2.
5. Ignore draws this time.

TEST DATA 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
TEST DATA 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

HINT: To calculate average of 3 values, add them all together and divide by 3
HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉

GOOD LUCK 😀
*/

// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // Test 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins win the trophy (${avgDolphins} vs ${avgKoalas})`);
//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`Koalas win the trophy (${avgKoalas} vs ${avgDolphins})`);
//     } else {
//         console.log("No team wins...");
//     }
// }
// checkWinner(scoreDolphins, scoreKoalas);

// checkWinner(576, 111);


// // Test 2
// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);
// checkWinner(scoreDolphins, scoreKoalas);





// Lesson 6 Introduction to Arrays
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael","Steven", "Peter"];
// console.log(friends);

// const y = new Array(1991, 1984, 2008, 2020);
// console.log(y);

// console.log(friends[0]); // Michael
// console.log(friends[2]); // Peter

// console.log(friends.length); // 3
// console.log(friends[friends.length - 1]); // Peter

// friends[2] = "Faruk"
// console.log(friends); // Michael, Steven, Faruk
// // friends = ["Bob", "Alice"]

// const firstName = "Faruk";
// const faruk = ["firstname", "Yılmaz", 2037 - 1999, "sutdent", friends];
// console.log(faruk);
// console.log(faruk.length);

// // Exercise
// const calcAge = function(birthYear) {
//     return 2037 - birthYear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);





// Lesson 7 Basic Array Operations (Methods)
// Add elements
// push - end of
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");  // adds elements to the end of an array 
console.log(friends);
console.log(newLength);

// unshift - beginning
friends.unshift("John"); // add elements to the beginning of an array
console.log(friends);


// Remove elements
// pop - last element
friends.pop(); // Jay is gone
const popped = friends.pop(); // Peter is gone
console.log(popped);
console.log(friends);

// shift - first element
friends.shift(); // John is gone
console.log(friends); 

console.log(friends.indexOf("Steven")); // index at which this element is located (1)
console.log(friends.indexOf("Bob")); // -1


// return true if the element is in the array and false if it's not
friends.push(23);
console.log(friends.includes("Steven")); // true
console.log(friends.includes("Bob")); // false
console.log(friends.includes("23")); // false (coercion) "23" -> string, 23 -> number

if(friends.includes("Steven")) {
    console.log("You have a friend called Steven.");
}



