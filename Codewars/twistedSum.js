// 6 kyu
// Twisted Sum
// Find the sum of the digits of all the numbers from 1 to N (both ends included).
// Examples
// # N = 4
// 1 + 2 + 3 + 4 = 10
// # N = 10
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
// # N = 12
// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

// ----------------------
// Parameter: Given a positive integer (n).
// Return the sum of all the integer digits from 1 to n.
// Examples:
// twistedSum(3)    -->    6
// twistedSum(10)   -->    46
// twistedSum(11)   -->    48
// twistedSum(12)   -->    51
// Pseudocode:
// Create an array from 1 to n.
// Reduce the array to the sum of all the digits.
// To sum the digits for numbers greater than 9, add the individual digits to the aggregrate sum.
// Return entire expression.

function twistedSum(n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce((a, k) => {
    a += k > 9 ? k.toString().split``.reduce((ia, ik) => (ia += +ik), 0) : k
    return a
  }, 0)
}
