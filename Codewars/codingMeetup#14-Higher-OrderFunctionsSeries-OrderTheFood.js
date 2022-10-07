// 7 kyu
// Coding Meetup #14 - Higher-Order Functions Series - Order the food

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Your task is to return an object which includes the count of food options selected by the developers on the meetup sign-up form..

// For example, given the following input array:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//     meal: 'vegetarian' },
//   { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//     meal: 'standard' },
//   { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//     meal: 'vegan' },
//   { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//     meal: 'vegetarian' },
// ];
// your function should return the following object (the order of properties does not matter):

// { vegetarian: 2, standard: 1, vegan: 1 }
// Notes:

// The order of the meals count in the object does not matter.
// The count value should be a valid number.
// The input array will always be valid and formatted as in the example above.
// there are 5 possible meal options and the strings representing the selected meal option will always be formatted in the same way, as follows: 'standard', 'vegetarian', 'vegan', 'diabetic', 'gluten-intolerant'.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties
// Return an object with properties, found in meal property of objects in parameter, with values as the count (how many such meal in array)
// Examples:
// orderFood([
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C', 
//       meal: 'vegetarian' },
//     { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript', 
//       meal: 'standard' },
//     { firstName: 'Ramona', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby', 
//       meal: 'vegan' },
//     { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C', 
//       meal: 'vegetarian' },
// ]) --> { vegetarian: 2, standard: 1, vegan: 1 }
// Pseudocode: 
// reduce array to an object
// object will have properties determined by the meal-property value(s) found in parameter's objects
// those properties will have values determined by how many such meal-property value was found
// within reduce method, set initial value as empty object
// if property already exists in initial value, add one
// use OR operator to see if already exists
// otherwise, if it doesn't exist, set initial value to 0
// at end of each iteration of reduce method, return accumulator
// return entire reduce expression

function orderFood(list) {
    return list.reduce((a,k)=>(a[k.meal] = (a[k.meal]||0) + 1)&&a,{});
}