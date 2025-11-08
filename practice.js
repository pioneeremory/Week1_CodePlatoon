//this is week1 intermediate js

//CONSTANTS you cannot change the value of a constant
const num = 1;
num2 = 42;
// results in ERROR

//VARIABLES you can change the value of a variable

let num1 = 1;
num2 = 42;

// FUNCTIONS

makeFullName(firstName, lastName);

function makeFullName(firstName,lastName) {
    return firstName + ' ' + lastName;
}

// run file with node [file.name]
//Note that you were able to call the function (seemingly) before it was declared. 
// This is because of a feature in JS called 'hoisting', which pulls all function definitions to the top of the file 
// before any other code is ran.

//String Interpolation
const firstName = "Tom";
console.log(`My first name is ${firstName}`);

// To find the data type of something
typeof 5; //number
typeof true; //bool

// MATH

Math.floor(5.23); //5 (rounds a number to the nearest whole)


