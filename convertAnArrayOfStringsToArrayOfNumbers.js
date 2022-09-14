// 7 kyu
// Convert an array of strings to array of numbers
// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!
// You need to cast the whole array to the correct type.
// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
// ie:["1", "2", "3"] to [1, 2, 3]
// Note that you can receive floats as well.

// ----------------------
// Parameter: Given an array of numbers as type string.
// Return array of numbers as type number.
// Examples:
// toNumberArray(["1", "2", "3"], [1, 2, 3]
// toNumberArray(["1.1","2.2","3.3"]), [1.1,2.2,3.3]
// Pseudocode:
// Create new array.
// Iterate through argument array.
// At each iteration, convert each element into a number.
// Return new array.

function toNumberArray(stringarray) {
  return stringarray.map(parseFloat)
}
