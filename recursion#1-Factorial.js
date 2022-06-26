// 7 kyu
// Recursion #1 - Factorial

// Do you know recursion?
// This is a kata series that you can only solve using recursion.
// ##1 - Factorial

// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example,

// 5! = 5 * 4 * 3 * 2 * 1 = 120.

// The value of 0! is 1.

// #Your task

// You have to create the function factorial that receives n and returns n!. You have to use recursion.

// ----------------------
// Parameter: Given a non-negative integer n.
// Return
// Examples:
// factorial(0)     -->     1
// factorial(1)     -->     1
// factorial(2)     -->     2
// factorial(3)     -->     6
// factorial(4)     -->     24
// factorial(5)     -->     120
// Pseudocode:
// In order to use recursion, a base case must be established (how else will JS know to stop executing)
// Base case: if n is 0, return 1.
// If n is greater than 0, return n multiplied by the same function expression,
// except this time the argument passed in is one less than the argument passed in.
// This will call the function again, with new parameter. If that new parameter is not

// factorial(5) = 5 * factorial(4)
// factorial(4) = 4 * factorial(3)
// factorial(3) = 3 * factorial(2)
// factorial(2) = 2 * factorial(1)
// factorial(1) = 1 * factorial(0)
// factorial(0) = 1
// OR factorial(5) = 5 * 4 * 3 * 2 * 1 * 1

const factorial = (n) => {
  return n === 0 ? 1 : n * factorial(n - 1)
}
