// 6 kyu
// Pyramid Array
// 2285792% of 1,5993,574 of 14,351sahglie1 Issue Reported
//  JavaScript
// Node v18.x
// VIM
// EMACS
// Instructions
// Output
// Write a function that when given a number >= 0, returns an Array of ascending length subarrays.

// pyramid(0) => [ ]
// pyramid(1) => [ [1] ]
// pyramid(2) => [ [1], [1, 1] ]
// pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
// Note: the subarrays should be filled with 1s

// Given an integer, n.
// If non-negative, return an array of length n, in which each value is a subarray of length i filled with 1s.
// Else return an empty array.
// See examples above.
// Create an array of subarrays of length i+1 consisting of 1s.

function pyramid(n) {
  return n >= 0 ? Array.from({ length: n }, (_, i) => Array(i + 1).fill(1)) : []
}
