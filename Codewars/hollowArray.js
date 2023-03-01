// 6 kyu
// Hollow array
// An array is said to be hollow if it contains 3 or more 0s in the middle that are preceded and followed by the same number of non-zero elements. Furthermore, all the zeroes in the array must be in the middle of the array.
// Write a function named isHollow/is_hollow/IsHollow that accepts an integer array and returns true if it is a hollow array,else false.

// Given an array of integers.
// Retun a boolean indicating whether the array has at least three consecutive 0s in the middle of the array, surrounded by non-0s on either side.
// Iterate through array, transforming each value to 'z' for 0, 'n' for anything other than 0.
// As long as the new array contains an 'n', pop and shift (working from outer edges inward).
//      Pop and shift must be not be 'z'. If 'z', immediately return false.
// Once all the 'n's are eliminated, check if length is at least 3. Return true. Otherwise, false.

function isHollow(x) {
  let newX = x.map((v) => (v === 0 ? 'z' : 'n'))
  while (newX.includes('n')) {
    let popped = newX.pop()
    let shifted = newX.shift()
    if (shifted === 'z' || popped === 'z') return false
  }
  if (newX.length >= 3) return true
  else return false
}
