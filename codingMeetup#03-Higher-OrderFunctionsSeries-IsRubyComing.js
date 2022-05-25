// 7 kyu
// Coding Meetup #3 - Higher-Order Functions Series - Is Ruby coming?

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return:

// true if at least one Ruby developer has signed up; or
// false if there will be no Ruby developers.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
//   { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
//   { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
// ];
// your function should return true.

// Notes:

// The input array will always be valid and formatted as in the example above.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return boolean value. 
// If the array includes at least one object with property value pair of "language: 'Ruby'", true
// (otherwise, false)
// Examples:
// input --> output
// isRubyComing([
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ]) --> true
// 
// isRubyComing([
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' } 
// ]) --> false
// Pseudocode: use some method on array to get boolean value back
// if at least one object within the array has the language property set to 'Ruby', some method will return true
// otherwise, if none found, false is returned

function isRubyComing(list) {
    return list.some(o=>o.language==='Ruby');
}