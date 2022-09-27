// 7 kyu
// Max-min arrays
// In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.
// For example:
// solve([15,11,10,7,12]) = [15,7,12,10,11]
// The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on.

// ----------------------
// Parameter: Given an array of unsorted integers.
// Return an array with the integers sorted in an alternating max-min manner.
// Examples:
// solve([15,11,10,7,12]), [15,7,12,10,11]
// solve([91,75,86,14,82]), [91,14,86,75,82]
// solve([84,79,76,61,78]), [84,61,79,76,78]
// solve([52,77,72,44,74,76,40]), [77,40,76,44,74,52,72]
// solve([1,6,9,4,3,7,8,2]), [9,1,8,2,7,3,6,4]
// solve([78,79,52,87,16,74,31,63,80]), [87,16,80,31,79,52,78,63,74]
// Pseudocode:
// Sort argument.
// Create an empty array.
// Iterate through sorted argument from outer to inner.
// At each iteration, add to newly created array, max value and then min value.
// Each iteration will grab two values from sorted argument.
// After iteration, check for length. If the argument is of odd length, then the last value added to newly created array is a duplicate.

function solve(arr) {
  const sorted = arr.sort((a, b) => a - b)
  let alternate = []
  for (let i = 0; i < arr.length / 2; i++) {
    alternate.push(arr[arr.length - 1 - i])
    alternate.push(arr[i])
  }
  arr.length % 2 && alternate.pop()
  return alternate
}
