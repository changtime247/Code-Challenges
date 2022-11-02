// 6 kyu
// Find the unique number
// There is an array with some numbers. All numbers are equal except for one. Try to find it!
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.
// The tests contain some very huge arrays, so think about performance.
// This is the first kata in series:
// Find the unique number (this kata)
// Find the unique string
// Find The Unique

// Given an array of numbers, where all numbers are equal except one number
// Return that one number
// findUniq([ 1, 0, 0 ]), 1
// findUniq([ 0, 1, 0 ]), 1
// findUniq([ 0, 0, 1 ]), 1
// findUniq([ 1, 1, 1, 2, 1, 1 ]), 2
// findUniq([ 1, 1, 2, 1, 1 ]), 2
// findUniq([ 3, 10, 3, 3, 3 ]), 10
// Iterate through array
// At each iteration check whether the number is equal to the previous number and the last number (three comparisons are being made)
// If all three are equal, keep iterating.
// If not, return the odd one out.

function findUniq(arr) {
  let i = 0
  while (i < arr.length) {
    let a = arr[i]
    let b = arr[i + 1]
    let z = arr[arr.length - 1]
    if (a === b && b === z) {
      i++
    } else {
      if (a === b && a !== z) return z
      if (b === z && b !== a) return a
      if (z === a && z !== b) return b
    }
  }
}
