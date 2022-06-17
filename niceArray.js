// 7 kyu
// Nice Array

// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// examples:

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5
// Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.

// ----------------------
// Parameters: Given an array of integers.
// Return boolean value:
// True, if, for every element in array, there is another element in the array either one greater or one less;
// False, otherwise.
// Examples:
// isNice([4, 5, 1, 2])       -->      true
// isNice([4, 8, 9, 3])       -->      true
// isNice([2, 10, 9, 3])      -->      true
// isNice([3, 4, 5, 7])       -->      false
// Pseudocode:
// If array is empty, return empty array. If not empty, proceed.
// Use every method on array and check if for every element, there is another element one greater or one less.
// Use indexOf method to check.
// Return entire expression.

function isNice(arr) {
  return arr.length > 0
    ? arr.every((e) => arr.indexOf(e + 1) !== -1 || arr.indexOf(e - 1) !== -1)
    : false
}
