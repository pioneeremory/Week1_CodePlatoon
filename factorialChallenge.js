// Factorial Challenge
// In this exercise you are going to create a function that takes a number parameter and returns the factorial of it.
// Factorial has a very specific definition. Learn more here. As an overview though, a factorial is the result of multiplying a sequence 
// of descending numbers down to 0. Factorials are only defined for non-negative integer numbers. This definition includes zero. 
// Though 0! is equal to 1, so treat it as an edge case.
let num1 = Number(prompt('What number do you need the factor of?'));

function(num1) {
    let count = 1
    for (let i = num1; i = 0; i--) {
        factor = num1 * i
    }
    return factor
}

