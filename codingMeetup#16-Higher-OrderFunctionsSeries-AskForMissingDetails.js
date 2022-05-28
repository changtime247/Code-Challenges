// 6 kyu
// Coding Meetup #16 - Higher-Order Functions Series - Ask for missing details

// You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

// Given the following input array:

// var list1 = [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ];
// write a function that

// adds the question property to each object in the input array where the developer has not provided the relevant details (marked with a null value in JavaScript, with the default value in COBOL). The value of the question property should be the following string:
// Hi, could you please provide your <property name>.

// and returns only the developers with missing details:
// [
//   { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', 
//   question: 'Hi, could you please provide your firstName.' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, 
//   question: 'Hi, could you please provide your language.' }
// ]
// Notes:

// At most only one of the values will be null / empty.
// Preserve the order of the original list.
// Return an empty array [] if there is no developer with missing details.
// The input array will always be valid and formatted as in the example above.

// ----------------------
// Parameters: Given an array of objects, representing persons with various properties.
// Return an array of person-objects who have null as a value for a property value, 
// Examples:
// askForMissingDetails([
//     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null },
//     { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ])
// --> [
//     { firstName: null, lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java', question: 'Hi, could you please provide your firstName.' },
//     { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: null, question: 'Hi, could you please provide your language.' }
// ]
// askForMissingDetails([
//   { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
//   { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
//   { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
// ])
// --> [];
// Pseudocode: 
// First, filter the array for objects that have null as a property value (could be any one of the properties)
// For each of the filtered array objects, add an additional property with a value as a string, which contains the property name in it
// To get the property which has the null value, use a for...of loop within forEach loop. 
// Within the for...of loop, create new property for that object with value as the string (see two lines above)
// Return the filtered array

function askForMissingDetails(list) {
    let missings = list.filter(e=>Object.values(e).includes(null));
    missings.forEach(e=>{
        for(const [k,v] of Object.entries(e)){
            if(!v) 
            e.question=`Hi, could you please provide your ${k}.`
        }
    })
    return missings;
}