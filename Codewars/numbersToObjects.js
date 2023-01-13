// 7 kyu
// Numbers to Objects
// You will be given an array of numbers.
// For each number in the array you will need to create an object.
// The object key will be the number, as a string. The value will be the corresponding character code, as a string.
// Return an array of the resulting objects.
// All inputs will be arrays of numbers. All character codes are valid lower case letters. The input array will not be empty.

// Given an array of numbers.
// Return an array of objects, each with a key-value pair of number (as string) and letter from corresponding char code.
// Iterate through array. At each iteration:
//      create an object with number as key and letter from char code number as value.

function numObj(s) {
  return s.map((n) => ({ [n]: String.fromCharCode(n) }))
}
