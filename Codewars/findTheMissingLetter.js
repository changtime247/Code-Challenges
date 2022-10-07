// 6 kyu
// Find the missing letter
// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.
// Example:
// ['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'
// ["a","b","c","d","f"] -> "e"
// ["O","Q","R","S"] -> "P"
// (Use the English alphabet with 26 letters!)
// Have fun coding it and please don't forget to vote and rank this kata! :-)

// ----------------------
// Parameter: Given an array of single letters in alphabetical order - arbitrary length. One letter will be missing.
// Elements will be either all upper case or all lower case.
// Return the one missing letter.
// Examples:
// findMissingLetter(['a', 'b', 'c', 'd', 'f'])     -->  'e'
// findMissingLetter(['c', 'd', 'e', 'g', 'h'])     -->  'f'
// findMissingLetter(['O', 'Q', 'R', 'S'])          -->  'P'
// findMissingLetter(['X', 'Z'])                    -->  'Y'
// Pseudocode:
// Use reduce on array to get a single value, the missing letter.
// Inside reduce method, compare charCodes.
// If the next element's charCode is not +1 the previous', then set initial value to that (since that's the missing letter).
// Return entire reduce expression.

function findMissingLetter(array) {
  return array.reduce((a, k, i, r) => {
    return i < r.length - 1 && k.charCodeAt(0) + 1 !== r[i + 1].charCodeAt(0)
      ? (a = String.fromCharCode(k.charCodeAt(0) + 1))
      : a && a
  }, '')
}
