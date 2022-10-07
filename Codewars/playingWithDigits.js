// 6 kyu
// Playing with digits

// Some numbers have funny properties. For example:

// 89 --> 8¹ + 9² = 89 * 1

// 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

// 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

// we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.
// In other words:

// Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

// If it is the case we will return k, if not return -1.

// Note: n and p will always be given as strictly positive integers.

// digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
// digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
// digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
// digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

// ----------------------
// Parameters: Given two positive numbers:
// first, the funny number
// second, the number to which each digit (of first parameter) is raised, incrementally (by +1)
// So, beginning with the value at the ones digit of the first parameter, that is raised to the power of value of second parameter:
// the tens digit is raised to power of second parameter's value +1
// the hundreds digit is raised to power of second parameter's value +1 +1
// With the sum of all the results of previous step (for each digit, there's a number) as the dividend.
// And the first parameter as the divisor.
// Return the quotient, if it is an integer. Otherwise, return -1.
// Examples:
// digPow(89, 1)       -->      1
// digPow(92, 1)       -->     -1
// digPow(46288, 3)    -->      51
// Pseudocode:
// In order to find the sum of all the digits of first argument (n), starting with the ones digit, raised to the power of the value of second argument (p), starting at value of arguement and incrementing by 1,
// split stringified n. Use reduce to find sum of each digit raise to the power of p + i (i, being the index, starting at 0)
// Divide the return value from reduce by first argument and store in new variable.
// If variable is an integer, return that variable.
// Else return -1.

function digPow(n, p) {
  const quo =
    n.toString().split``.reduce((a, k, i, r) => Math.pow(+k, p + i) + a, 0) / n
  return Number.isInteger(quo) ? quo : -1
}
