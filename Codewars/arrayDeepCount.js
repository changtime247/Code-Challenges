// 6 kyu
// Array Deep Count
// You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
// Examples
// []                   -->  0
// [1, 2, 3]            -->  3
// ["x", "y", ["z"]]    -->  4
// [1, 2, [3, 4, [5]]]  -->  7
// The input will always be an array.

// Given an array, with possible subarrays nested within.
// Return the number of all elements within the array.
// Note: having a subarray nested within counts as an extra element.
// See above for examples.
// Create a counter variable set to 0.
// Iterate through all values of the arg-array and for every non-array element, increment counter by 1.
// If the element is a nested array, increment by 1 for the subarray itself and increment by 1 for every element within it.

function deepCount(a) {
  let total = 0

  function count(someVal) {
    if (someVal.length < 1) return 0
    if (!Array.isArray(someVal)) {
      total += 1
    } else {
      for (const v of someVal) {
        if (Array.isArray(v)) total += 1
        count(v)
      }
    }
  }

  count(a)
  return total
}
