// 7 kyu
// That unites us
// You have two arrays of single letters, array1 and array2, where the elements are without duplicates(but the element of the first array can be equal to the element of the second array).
// Return a new array containing the first n elements from the two arrays in alphabetical order.
// For example:
// thatUnitesUs(['a', 'z', 'c'], ['b', 'f', 'z'], 3) => ['a', 'b', 'c']
// thatUnitesUs(['z', 'g', 'f'], ['g', 'f', 'c'], 3) => ['c', 'f', 'g']
// thatUnitesUs(['f', 'g', 'z'], ['c', 'f', 'g'], 2) => ['c', 'f']
// P.S. Array's length >= n

// Given two arrays consisting of single letters and a number, n.
// Return an array containing the first n letters of the sorted concatenated array of all the elements of both arrays.
// Put all unique letters of both arrays into a new array.
// Sort that array.
// Return an array of the first n elements of sorted array.

function thatUnitesUs(array1, array2, n) {
  return [
    ...new Set([...array1, ...array2].sort((a, b) => a.localeCompare(b))),
  ].slice(0, n)
}
