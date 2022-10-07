// 7 kyu
// Lost number in number sequence
// An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
// Example:
// The starting array sequence is [1,2,3,4,5,6,7,8,9]
// The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
// Your function should return the int 5.
// If no number was deleted from the starting array, your function should return the int 0.
// Note: N may be 1 or less (in the latter case, the first array will be []).

// ----------------------
// Parameter: Given two arrays.
// First one, an array of numbers, from 1 to N.
// Second one, an array of numbers, from 1 to N, with one number possibly missing.
// Return which number is missing. If none missing, return 0.
// Examples:
// findDeletedNumber([1,2,3,4,5], [3,4,1,5]), 2
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [1,9,7,4,6,2,3,8]), 5
// findDeletedNumber([1,2,3,4,5,6,7,8,9], [5,7,6,9,4,8,1,2,3]), 0
// Pseudocode:
// Create a variable set to 0. This will serve as our missing number.
// Loop through the first array. At each iteration, search second array for the iteration element.
// If that element does not exist in second array, set the missing number variable to that element value.
// Return the missing number variable.

function findDeletedNumber(arr, mixArr) {
  let missing = 0
  for (let i = 0; i < arr.length; i++) {
    if (!mixArr.includes(arr[i])) missing = arr[i]
  }
  return missing
}
