// Lesson 1 - Values and Variables

/*
let js = "amazing";
console.log(40+8+23-10);

console.log("Faruk");
console.log(23);

let firstName = "Faruk";

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = "JM";
let $function = 27;

let person = "Faruk";
let PI = 3.14159265;

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";
let job2 = "Teacher";

console.log(myFirstJob);
*/





// Lesson 2 - Data Types

// Primitive
// Number
    // let age = 23;

// String
    // let firstName = "Faruk"

// Boolean (logical)
    // let fullAge = true;
    

// Undefined
    // let children;

// Null (empty value)
    // 

// Symbol (ES2015)

// BigInt (ES2020)
// -----------------------------------------------
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true); //boolean
console.log(typeof javascriptIsFun); //boolean
console.log(typeof 23); //number
console.log(typeof "Faruk"); //string

javascriptIsFun = "YES"; 
console.log(typeof javascriptIsFun); //string

let year; // empty value 
console.log(year); //undefined 
console.log(typeof year); //undefined

year = 1991;
console.log(typeof year); //number

console.log(typeof null); //object
*/





// Lesson 3 - let(mutate variable, reassigned), const(cannot be changed, immutable(birthYear)) and var(old way, dont use it)

/*
let age = 30;
age = 31;
console.log(age);

const birthYear = 1999;
// birthYear = 2000;
// const job;

var job = "Programmer";
job = "teacher";

lastName = "Yılmaz";
console.log(lastName);
*/





// Lesson 4 - Basic Operators

/*
const now = 2022;
const ageFaruk = now - 1999;
const ageOmer = now - 1995;
console.log(ageFaruk, ageOmer);

console.log(ageFaruk * 2, ageOmer / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Faruk";
const lastName = "Yılmaz";
console.log(firstName + ' ' + lastName); // added spaces (concatination)
*/

// Assignment Operator (=)

/*
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x += 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
console.log(x);

// Comparison Operators
console.log(ageFaruk > ageOmer); // >, <, >=, <=
console.log(ageOmer >= 18);

const isFullage = ageOmer >= 18;

console.log(now - 1995 > now - 1999);
*/





// Lesson 5 - Operator Precedence
/*
const now = 2022;
const ageOmer = now - 1995;
const ageFaruk = now - 1999;

console.log(now - 1995 > now - 1999);

console.log(25-10-5);

let x, y;
x = y = 25-10-5; // x = y = 10, x = 10
console.log(x, y);

const averageAge = (ageFaruk + ageOmer) / 2
console.log(ageFaruk, ageOmer, averageAge);
*/





// Practice Assignments
/*
let country = "Turkey";
console.log(country);

let continent = "Europe";
console.log(continent);

let population = "84.680.273";
console.log(population);
*/





// Coding Challenge
/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/

// Test Data 1
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;



// Test Data 2
// const massMark = 95;
// const heightMark = 1.99;

// const massJohn = 85;
// const heightJohn = 1.76;

/*
const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / ( heightJohn * heightJohn );
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);
*/





// Lesson 6 - Strings and Template Literals
/*
const firstName = "Faruk";
const job = "student";
const birthYear = 1999;
const year = 2037;

const Faruk = "I'm " + firstName + ', a ' + (year - birthYear) + " year old " + job + "!";
console.log(Faruk);

const farukNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(farukNew);

console.log(`Just a regular string...`);

console.log("String with \n\
multiple \n\
lines");

console.log(`String
multiple
lines`);
*/





// Lesson 7 if-else statements
/*
const age = 13;

if(age >= 18) {
    console.log("Faruk can start driving license");
} else {
    const yearsLeft = 18 - age;
    console.log(`Faruk is too young. Wait another ${yearsLeft} years :)`);
}


const birthYear = 1999;

let century;
if(birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/





// Coding Challenge 2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// Test Data 1
// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJohn = 1.95;



// Test Data 2
// const massMark = 95;
// const heightMark = 1.88;

// const massJohn = 85;
// const heightJohn = 1.76;


// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / ( heightJohn * heightJohn );
// console.log(BMIMark, BMIJohn);

// if(BMIMark > BMIJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
// } else {
//     console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})`);
// }





// Lesson 8 Type Conversion and Coercion

// type conversion 
// const inputYear = "1999";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// console.log(Number("Faruk"));
// console.log(typeof NaN);

// console.log(String(23), 23);


// type coercion
// console.log("I am " + 23 + " years old");
// console.log("23" - "10" - 3);
// console.log("23" * "2");
// console.log("23" / "2");

// let n = "1" + 1; // "11"
// n = n - 1; // 11 = 11 - 1 ------> 10
// console.log(n); // 10





// Lesson 9 Truthy and Falsy Values
// 5 falsy values : 0, "", undefined, null, NaN
/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Faruk"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 100;
if(money) {
    console.log("Dont' spend it all ;)");
} else {
    console.log("You should get a job!");
}

let height = 150;
if(height) {
    console.log("YAY! Height is defined");
} else {
    console.log("Height is UNDEFINED");
}
*/





// Lesson 10 Equality Operators
// === strict equality operator (does not perform type coercion)
// == loose equality operator 
/*
const age = "18";
if(age === 18) console.log("You just became an adult :D (strict)");

if(age == 18) console.log("You just became an adult :D (loose)");

 const favourite = Number(prompt("What's your favourite number?"));
 console.log(favourite);
 console.log(typeof favourite);

 if (favourite === 23) { // "23" == 23
     console.log("Cool! 23 is an amazing number!");
 } else if (favourite === 7) {
     console.log("7 is also cool number!");
 } else if (favourite === 9) {
     console.log("9 is also cool number!");
 } else {
     console.log("Number is not 23, 7 or 9");
 }

 if (favourite !== 23) console.log("Why not 23?");
*/





// Lesson 11 Boolean Logic: and, or & not

// let age = 16;

// if(age >= 16) {
//     console.log("false");
// }





// Lesson 12 Logical Operators

const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);


// if(hasDriversLicense && hasGoodVision) {
//     console.log("Faruk is able to drive!");
// } else {
//     console.log("Someone else should drive...");
// }

const isTired = false; // C
console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && !isTired) {
    console.log("Faruk is able to drive!");
} else {
    console.log("Someone else should drive...");
}

