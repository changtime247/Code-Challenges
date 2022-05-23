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




// This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return parameter but with an additional property added to each object of parameter array
// additional property name is username and value is composed of combinations of values derived from properties firstName, lastName, and age
// return parameter
// Examples:
// addUsername([
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ]) -->   
// [
//     { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//       username: 'emilyn1990' },
//     { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//       username: 'nore2000' }
// ]
// Pseudocode: iterate through each element of array using forEach method
// create new property of each element/ object of array. 
// use dot notation to give each object the new property username with value derived from:
// entire firstName value in lowecase + first letter of lastName in lowercase + difference new Date object from age
// return the array