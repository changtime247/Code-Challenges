// 6 kyu
// Array combinations
// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].
// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.
// See test cases for more examples.

// Given an array of subarrays, in which each subarray contains integers.
// Return the total possible of unique arrays that can be formed by picking exactly one element from each subarray.
// solve([[1,2],[4],[5,6]]),4
// solve([[1,2],[4,4],[5,6,6]]),4
// solve([[1,2],[3,4],[5,6]]),8
// solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72
// Iterate through array and get the number of unique elements in each subarray.
// Multiplying all the subarrays will result in the total number of unique combinations possible.

function solve(arr) {
  return arr.reduce((a, c) => [...new Set(c)].length * a, 1)
}
