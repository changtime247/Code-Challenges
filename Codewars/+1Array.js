// 6 kyu
// +1 Array
// Given an array of integers of any length, return an array that has 1 added to the value represented by the array.
// the array can't be empty
// only non-negative, single digit integers are allowed
// Return nil (or your language's equivalent) for invalid inputs.
// Examples
// Valid arrays
// [4, 3, 2, 5] would return [4, 3, 2, 6]
// [1, 2, 3, 9] would return [1, 2, 4, 0]
// [9, 9, 9, 9] would return [1, 0, 0, 0, 0]
// [0, 1, 3, 7] would return [0, 1, 3, 8]
// Invalid arrays
// [1, -9] is invalid because -9 is not a non-negative integer
// [1, 2, 33] is invalid because 33 is not a single-digit integer

// Given an array of integers.
// If any of the values contains a value other than a value between 0-9, or if array is empty, return null.
// Return a new array in which 1 is added to the last value of arg-array (accounting for any carry-over - from addition).
// Ex:
// upArray([4,3,2,5]), [4,3,2,6]
// upArray([2,3,9,9]), [2,4,0,0]
// upArray(    [9,9]),   [1,0,0]
// upArray(    [0,7]),     [0,8]
// upArray([1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,0]), [1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9,1]
// upArray([1,-9]), null
// upArray([1,10]), null
// Check if arg-array is empty.
// Create a variable, newArr, set to empty array.
// Create a carry variable set to 1.
// Iterate through array, from last index to first index.
//      Check if value is valid value (i.e. 0-9).
//      Add carry to value.
//      Unshift new value to newArr.
// After iteration, if there is still a carry, unshift to newArr.
// Return newArr.

function upArray(arr) {
  let ans = []
  if (arr.length === 0) return ans
  let carry = 1
  for (let i = 0; i < arr.length; i++) {
    let digit = arr[arr.length - 1 - i]
    if (digit > 9 || digit < 0) return null
    digit += carry
    ans.unshift(digit % 10)
    if (digit > 9) carry = 1
    else carry = 0
  }
  if (carry) ans.unshift(carry)
  return ans
}
