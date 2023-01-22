// 7 kyu
// Array Array Array
// You are given an initial 2-value array (x). You will use this to calculate a score.
// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
// For example:
// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

// Given an array of two values, possibly a number or a string.
// Return an array of subarrays corresponding to the sum of the numbers in the argument array
// (if no numbers in arg-array, then return 'Void!'. if 0, return an empty array)
// Ex:
// explode([9, 3]), [[9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3], [9, 3]]
// explode(['a', 3]), [['a', 3], ['a', 3], ['a', 3]]
// explode([6, 'c']), [[6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c'], [6, 'c']]
// explode(['a', 'b']), 'Void!'
// explode(["a", 0]), []
// Create an empty array.
// Create a variable to hold the sum of numbers of arg-array.
// If both numbers are non-numbers, return 'Void!'.
// Otherwise, set newly created variable to hold sum of number(s).
// Create a while-loop, to push corresponding subarrays into empty array.
// Return the created array.

function explode(x) {
  let arr = []
  let sum = 0
  if (x[0] !== parseFloat(x[0]) && x[1] !== parseFloat(x[1])) return 'Void!'
  if (x[0] === parseFloat(x[0])) sum += x[0]
  if (x[1] === parseFloat(x[1])) sum += x[1]
  while (sum > 0) {
    arr.push(x)
    sum--
  }
  return arr
}
