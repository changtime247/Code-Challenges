// 7 kyu
// Coding Meetup #5 - Higher-Order Functions Series - Prepare the count of languages

// You will be given an array of objects (associative arrays in PHP, table in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object (associative array in PHP, table in COBOL) which includes the count of each coding language represented at the meetup.

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//   { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ];
// your function should return the following object (associative array in PHP, table in COBOL):

// { C: 2, JavaScript: 1, Ruby: 1 }
// Notes:

// The order of the languages in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return an object with properties for each unique programming langauge found in the objects within the list parameter
// the return object's properties have numeric values corresponding to the number of times the programming lanaguage appears in parameter objects
// Examples:
// input --> output
// countLanguages([
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
//     { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
// ]) --> { C: 2, JavaScript: 1, Ruby: 1 }
// Pseudocode: reduce the array, initial value is an empty object
// the object will have properties corresponding to the language(s) found in parameter objects
// those properties will have values corresponding to count of the language(s) found in parameter objects
// within the reduce method, use ternary operator to check if accumulator has a property 'language'.
// if it does, then simply add one to the value
// if not, initialize the value as 1 (which will also create the property)
// return the accumulator
// return entire reduce expression

function countLanguages(list) {
    return list.reduce((a,k)=>(a[k.language] ? a[k.language]++ : a[k.language]=1)&&a,{});
}