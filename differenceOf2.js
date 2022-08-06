// 6 kyu
// Difference of 2
// The objective is to return all pairs of integers from a given array of integers that have a difference of 2.
// The result array should be sorted in ascending order of values.
// Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
// Examples
// [1, 2, 3, 4]  should return [[1, 3], [2, 4]]
// [4, 1, 2, 3]  should also return [[1, 3], [2, 4]]
// [1, 23, 3, 4, 7] should return [[1, 3]]
// [4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

// ----------------------
// Parameter: Given an array of integers.
// Return an array of subarrays (each subarray must contain a pair of integers), in which each subarray contains integers (from the argument array) that have a difference of two.
// Examples:
// twosDifference([])            -->  []
// twosDifference([1,2,3,4])     -->  [ [1,3], [2,4] ]
// twosDifference([1,3,4,6])     -->  [ [1,3], [4,6] ]
// twosDifference([4,1,2,3])     -->  [ [1,3], [2,4] ]
// twosDifference([1,23,3,4,7])  -->  [ [1,3] ]
// twosDifference([4,3,1,5,6])   -->  [ [1,3], [3,5], [4,6] ]
// Pseudocode:
// Create container array, which will eventually hold all pairs that have a difference of 2.
// Iterate through argument array.
// For each value, if there is a corresponding value in same array that will give a difference of 2, then push the two numbers as an array to the newly created array.
// Return the array of subarrays.

function twosDifference(input) {
  let ans = []
  for (let i = 0; i < input.length; i++) {
    input.includes(input[i] + 2) ? ans.push([input[i], input[i] + 2]) : ans
  }
  return ans
}
