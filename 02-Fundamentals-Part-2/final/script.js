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

function calcAge1(birthYear){ //declaration
    return 2037 - birthYear;
}
const age1 = calcAge1(1999);   //declarations'da hoisting vardır.




const calcAge2 = function(birthYear) {      
    return 2037 - birthYear;  //expression
}
const age2 = calcAge2(1999);
console.log(age1, age2);

// functions are value, we can store it in a variable.