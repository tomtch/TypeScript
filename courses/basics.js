"use strict";
console.log('Your code goes here...');
// Core Type
// number
// string
// boolean
// object
// Array
// Tuple
// Enum
// Any
// literal type + / toString()
// Function
// return type void undefined
// never
function add(n1, n2, showResult, phrase) {
    if (typeof n1 !== 'number'
        || typeof n2 !== 'number') {
        throw new Error('Incorrect input!');
    }
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
let number1;
number1 = 5;
const number2 = 2.8;
const printResult = true;
let resultPhrase = 'Result is: ';
resultPhrase = 0;
const addResult = add(number1, number2, printResult, resultPhrase);
// console.log(addResult);
