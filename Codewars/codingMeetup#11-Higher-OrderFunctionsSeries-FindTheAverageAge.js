// 7 kyu
// Coding Meetup #11 - Higher-Order Functions Series - Find the average age

// You will be given a sequence of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ];
// write a function that returns the average age of developers (rounded to the nearest integer). In the example above your function should return 50 (number).

// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return numeric value representing the average age of persons of list
// Examples:
// getAverageAge([
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ]) -->   25
// getAverageAge([
//     { firstName: 'Maria', lastName: 'Y.', country: 'Cyprus', continent: 'Europe', age: 30, language: 'Java' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 70, language: 'Python' },
// ]) --> 50  
// Pseudocode: use reduce method to get single value back from array
// use dot notation to get age of each object
// add to accumulator
// initial value set at 0
// divide reduce return value by number of persons on list
// Use Math.round on entire expression and return 

function getAverageAge(list) {
    return Math.round(list.reduce((a,k)=>a+=k.age,0)/list.length);
}