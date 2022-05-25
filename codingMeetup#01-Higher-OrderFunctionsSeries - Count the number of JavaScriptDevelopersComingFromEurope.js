// 7 kyu
// Coding Meetup #1 - Higher-Order Functions Series - Count the number of JavaScript developers coming from Europe

// You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.

// Your task is to return the number of JavaScript developers coming from Europe.

// For example, given the following list:

// var list1 = [
//   { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//   { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//   { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//   { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ];
// your function should return number 1.

// If, there are no JavaScript developers from Europe then your function should return 0.

// Notes:

// The format of the strings will always be Europe and JavaScript.
// All data will always be valid and uniform as in the example above.

// ----------------------
// Parameters: array of objects, each representing a person's profile, including the continent where person is from and the programming language that the person knows
// Return the count of persons who (a) is from Europe AND (b) knows JavaScript (if none, return 0)
// Examples:
// countDevelopers([
//     { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
//     { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
//     { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
//     { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
// ])    -->     1
// countDevelopers([
    // {"firstName":"Louise","lastName":"F.","country":"France","continent":"Europe","age":22,"language":"Java"},
    // {"firstName":"Fatemeh","lastName":"Z.","country":"Iran","continent":"Asia","age":29,"language":"Java"},
    // {"firstName":"Mehdi","lastName":"H.","country":"Tunisia","continent":"Africa","age":42,"language":"Python"},
    // {"firstName":"Emilija","lastName":"S.","country":"Lithuania","continent":"Europe","age":19,"language":"Python"},
    // {"firstName":"Agustin","lastName":"V.","country":"Uruguay","continent":"Americas","age":19,"language":"JavaScript"},
    // {"firstName":"George","lastName":"B.","country":"England","continent":"Europe","age":21,"language":"C"},
    // {"firstName":"Piotr","lastName":"C.","country":"Poland","continent":"Europe","age":55,"language":"PHP"},
    // {"firstName":"Seoyeon","lastName":"J.","country":"South Korea","continent":"Asia","age":29,"language":"Ruby"},
    // {"firstName":"Madison","lastName":"U.","country":"United States","continent":"Americas","age":32,"language":"Ruby"},
    // {"firstName":"Liam","lastName":"D.","country":"Faroe Islands","continent":"Europe","age":28,"language":"Python"},
    // {"firstName":"Emma","lastName":"U.","country":"Belgium","continent":"Europe","age":39,"language":"Python"},
    // {"firstName":"Stevenson","lastName":"O.","country":"Haiti","continent":"Americas","age":22,"language":"Ruby"},
    // {"firstName":"Kseniya","lastName":"T.","country":"Belarus","continent":"Europe","age":29,"language":"JavaScript"},
    // {"firstName":"Margret","lastName":"M.","country":"Iceland","continent":"Europe","age":28,"language":"Java"}
// ])    -->     1
// Pseudocode: reduce array to get a single numeric return value
// within reduce method, using ternary operator, check the object's keys' named 'continent' and 'language' to see if corresponding values are 'Europe' and 'JavaScript', respectively
// if true, add one to accumulator. else, just give back accumulator
// initial value is 0
// return entire expression

const countDevelopers=list=>list.reduce((a,k)=>k['continent']==='Europe'&&k['language']==='JavaScript'?a+1:a,0);