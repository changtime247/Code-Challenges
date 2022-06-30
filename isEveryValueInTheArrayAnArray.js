// 7 kyu
// Is every value in the array an array?
// This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.
// Examples:
// [[1],[2]] => true
// ['1','2'] => false
// [{1:1},{2:2}] => false

// ----------------------
// Parameter: Given an array.
// Return boolean.
// True, if all elements are also arrays.
// False, if at least one element is not an array
// Examples:
// arrCheck([])                         -->  true
// arrCheck([['string']])               -->  true
// arrCheck([[], {}])                   -->  false
// arrCheck([[1], [2], [3]])            -->  true
// arrCheck(['A', 'R', 'R', 'A', 'Y'])  -->  false
// Pseudocode:
// Use every method on argument.
// If every value is an array, return true.

const arrCheck = (value) => value.every(Array.isArray)
