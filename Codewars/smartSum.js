// 6 kyu
// Smart Sum
// Your task is to write a function, smartSum, that returns the sum of an arbitrary number of arguments. But be careful, some of your arguments can be arrays of numbers or nested arrays.
// smartSum(1,2,3,[4,5],6); // returns 21
// smartSum(1,2,[[3,4],5],6); // returns 21

// Given an undetermined number of arguments, which can be number(s) and/or array(s) of number(s).
// Return the sum of all the numbers (including numbers within deeply nested arrays)
// Iterate through all the arrays, adding all the values to a sum.
// Use recursion if need be.

function smartSum(...args) {
  return [].concat(...args).reduce((a, c) => {
    Array.isArray(c) ? (a += smartSum(c)) : (a += +c)
    return a
  }, 0)
}
