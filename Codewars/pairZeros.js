// 7 kyu
// Pair Zeros
// For a given list of digits 0 to 9, return a list with the same digits in the same order, but with all 0s paired. Pairing two 0s generates one 0 at the location of the first one.

// Example 1
// input: [0, 1, 0, 2]
// paired: ^-----^
//     -> [0, 1,   2]
//   kept: ^

// Example 2
// input: [0, 1, 0, 0]
// paired: ^-----^
//     -> [0, 1,    0]
//   kept: ^        ^

// Example 3
// input: [1, 0, 7, 0, 1]
// paired:    ^-----^
//     -> [1, 0, 7,    1]
//   kept:    ^

// Example 4
// input: [0, 1, 7, 0, 2, 2, 0, 0, 1, 0]
// paired: ^--------^        ^--^
//     -> [0, 1, 7,    2, 2, 0,    1, 0]
//   kept: ^                 ^        ^
// Notes
// Pairing happens from left to right. For each pairing, the second 0 will always be paired towards the first ( right to left )
// 0s generated by pairing can NOT be paired again
// ( void where not applicable: ) Don't modify the input array or you may fail to pass the tests

// Given an array of integers.
// Return a new array of same integers, except, every other 0 in the array should not be included.
// See above examples.
// Iterate through array. At each iteration:
//      Push value into new array if first 0 (of a pair of 0s) or an integer 1-9.

function pairZeros(arr) {
  let pair = false
  return arr.reduce((a, c) => {
    if (!pair && c === 0) {
      a.push(c)
      pair = true
    } else if (pair && c === 0) {
      pair = false
    } else {
      a.push(c)
    }
    return a
  }, [])
}
