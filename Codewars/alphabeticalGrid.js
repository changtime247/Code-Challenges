// 7 kyu
// Alphabetical Grid
// You need to write a function grid that returns an alphabetical grid of size NxN, where a = 0, b = 1, c = 2....
// Examples:
// grid(4)
// a b c d
// b c d e
// c d e f
// d e f g
// grid(10)
// a b c d e f g h i j
// b c d e f g h i j k
// c d e f g h i j k l
// d e f g h i j k l m
// e f g h i j k l m n
// f g h i j k l m n o
// g h i j k l m n o p
// h i j k l m n o p q
// i j k l m n o p q r
// j k l m n o p q r s
// Notes:
// After "z" comes "a"
// If function receive N < 0 should return:
// null

// Given an integer, N.
// Return a string as a NxN grid of the letters of the alphabet, such that row i begins with the ith alphabet (0-based index).
// If N is 0, return an empty string.
// If N is negative, return null.
// See above for examples.
// Create a string initialized to an empty string. This will eventually be the alphabetical grid.
// The ith row begins with the ith alphabet. So, iterate N times:
//      each iteration, concatenate the corresponding row to the string.

function grid(N) {
  let abc = 'abcdefghijklmnopqrstuvwxyz'
  let res = ''
  let len = N
  while (len > 0) {
    res += abc
      .slice(N - len, N + (N - len))
      .split('')
      .join(' ')
    if (len > 1) res += '\n'
    len--
  }
  return N < 0 ? null : res
}
