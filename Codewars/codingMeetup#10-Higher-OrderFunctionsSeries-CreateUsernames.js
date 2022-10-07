// 6 kyu
// Coding Meetup #10 - Higher-Order Functions Series - Create usernames

// Given the following input array:

// var list1 = [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure' }
// ];
// write a function that adds the username property to each object in the input array:

// [
//   { firstName: 'Emily', lastName: 'N.', country: 'Ireland', continent: 'Europe', age: 30, language: 'Ruby', 
//     username: 'emilyn1990' },
//   { firstName: 'Nor', lastName: 'E.', country: 'Malaysia', continent: 'Asia', age: 20, language: 'Clojure', 
//     username: 'nore2000' }
// ]
// The value of the username property is composed by concatenating:

// firstName in lower-case;
// first letter of the lastName in lower-case; and
// the birth year which for the purpose of this kata is calculated simply by subtracting age from the current year. Please make sure that your function delivers the correct birth year irrespective of when it will be executed, for example it should also work correctly for a meetup organised in 10-years-time. The example above assumes that the function is run in year 2020.
// Notes:

// The input array will always be valid and formatted as in the example above.
// Age is represented by a number which can be any positive integer.
// Lastname will always be one upper-cased letter followed by dot, e.g. 'N.'
// Order of the objects in the array should be maintained but order of the properties in the individual objects does not matter.

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

function addUsername(list) {
    list.forEach(o=>{
      o.username = `${o.firstName.toLowerCase()}${o.lastName.slice(0,1).toLowerCase()}${(new Date()).getFullYear()-(o.age)}`
    })
    return list;
}