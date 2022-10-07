// 7 kyu
// Last Survivor
// You are given a string of letters and an array of numbers.
// The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
// After each removal the size of the string decreases (there is no empty space).
// Return the only letter left.
// Example:
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
// Notes
// The given string will never be empty.
// The length of the array is always one less than the length of the string.
// All numbers are valid.
// There can be duplicate letters and numbers.

// ----------------------
// Parameter: Given a string and an array
// Return a string derived from removing letters from the argument that correspond to the array.
// The values in the array represent which letters to remove by indices. Remove the letter at the index from the resulting string at each removal process.
// Examples:
// lastSurvivor('abc', [1, 1]), 'a'
// lastSurvivor('kbc', [0, 1]), 'b'
// lastSurvivor('zbk', [2, 1]), 'z'
// lastSurvivor('zbk', [2, 1]), 'c'
// Pseudocode:
// Iterate through array.
// At each iteration, remove corresponding character of string as indicated by value of array.
// Return resulting string.

function lastSurvivor(letters, coords) {
  let arr = letters.split``
  for (let i = 0; i < coords.length; i++) {
    arr.splice(coords[i], 1)
  }
  return arr.join``
}
