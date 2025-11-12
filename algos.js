// SIMPLE ITERATION Write a function countEvens(arr) that takes an array of numbers and returns how many of them are even.
let arr = [1,2,3,4,5,6,7,8,9,10];
evenCount = 0;

function countEvens(arr) {

    for (let i = 0; i <= arr.length; i++){
        arr[i] % 2 === 0 ? evenCount++ : null;
        //console.log(i);
    }

    return evenCount;
}
countEvens(arr);
console.log(`There are ${evenCount} even numbers in that array`);

// FIBONACCI PATTERN Write a function tribonacci(n) that returns the nth Tribonacci number —
// each term is the sum of the previous 3 terms, starting with [0, 1, 1]

let answer;

function tribonacci(n) {
    let a = 0;
    let b = 1;
    let c = 1;

    for (i = 3; i <= n; i++) {

    }

    return answer;
}

tribonacci(n);
console.log(`The nth number in the tribonacci sequence is ${answer}`);