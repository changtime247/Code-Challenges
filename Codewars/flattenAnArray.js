// Flatten an Array
// Write a function, flattenArray(), that takes in a 2-dimensional array, flattens it into a 1-dimensional array, and returns it. You can assume that you will only be given one or two-dimensional arrays
// For example, flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]) should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Parameter: Given an array, possibly multi-dimensional
// Return a flattened version of argument array.
// Example:
// flattenArray([1, 2, [3, 4, 5], 6, [7, 8], 9]), [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Pseudocode: use the spread operator and concat method to get all non-array elements into an empty array.

function flattenArray(arr) {
  return [].concat(...arr)
}
