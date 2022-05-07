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

const now = 2022;
const ageFaruk = now - 1999;
const ageOmer = now - 1995;
console.log(ageFaruk, ageOmer);

console.log(ageFaruk * 2, ageOmer / 10, 2 ** 3);
//  2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Faruk";
const lastName = "Yılmaz";
console.log(firstName + ' ' + lastName); // added spaces (concatination)

// Assignment Operator (=)
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