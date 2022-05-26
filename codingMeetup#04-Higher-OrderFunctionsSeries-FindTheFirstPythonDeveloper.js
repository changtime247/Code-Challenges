// 7 kyu
// Coding Meetup #4 - Higher-Order Functions Series - Find the first Python developer

// You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend the next coding meetup that you are organising. The list is ordered according to who signed up first.

// Your task is to return one of the following strings:

// < firstName here >, < country here > of the first Python developer who has signed up; or
// There will be no Python developers if no Python developer has signed up.
// For example, given the following input array:

// var list1 = [
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ];
// your function should return Victoria, Puerto Rico.

// Notes:

// The input array will always be valid and formatted as in the example above.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return string stating the first object with property-value pair of language: Python.
// If there are no such matches, return the string 'There will be no Python developers'
// Examples:
// input --> output
// getFirstPython([
//   { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//   { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//   { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ]) --> 'Victoria, Puerto Rico'
// getFirstPython([
//   { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 29, language: 'JavaScript' },
//   { firstName: 'Amar', lastName: 'V.', country: 'Bosnia and Herzegovina', continent: 'Europe', age: 32, language: 'Ruby' },
// ]) --> 'There will be no Python developers'
// Pseudocode: use find method to get first element which satifies the condition.
// inside find method, condition to satisfy is that the object property is equal to 'Python'.
// set the return value of the method to a new variable
// if none is found, find method returns undefined, in which case, the defult string should be returned
// use ternary to return first object's first name and country. else return default string.

function getFirstPython(list) {
  let obj = list.find(x=>x.language=='Python');
  return obj?`${obj.firstName}, ${obj.country}`:'There will be no Python developers';
}