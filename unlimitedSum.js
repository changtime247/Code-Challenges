// 7 kyu
// Unlimited Sum

// Write a function sum that accepts an unlimited number of integer arguments, and adds all of them together.

// The function should reject any arguments that are not integers, and sum the remaining integers.

// sum(1, 2, 3)   // -> 6
// sum(1, "2", 3) // -> 4

// ----------------------
// Parameters: Given an undetermined number of parameters
// Return a single numeric value derived from summing up all the integers passed in as arguments (if not an integer, please ignore)
// Examples:
// sum(1,11,111)                                      --> 123
// sum(4,true,4,"A",4,"99")                           --> 12
// sum(1)                                             --> 1
// sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 8)  --> 99
// sum(-1, 2, -3)                                     --> -2
// sum(1 1)                                           --> 1
// Pseudocode:
// Use spread operator to capture all parameters
// Use spread operator to put all arguments passed in
// Turn into array and use reduce method to get a single number back, with initial value set to 0.
// If the current element is an integer, add to the accumulator.
// Return entire expression.

function sum(...a){
    return [...a].reduce((a,k)=>Number.isInteger(k)?a+k:a,0);
}