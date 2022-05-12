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

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges)

    const juice = `Juice with ${applePieces} piece of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
