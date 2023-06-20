// 7 kyu
// Sum - Square Even, Root Odd
// Complete the function that takes a list of numbers (nums), as the only argument to the function. Take each number in the list and square it if it is even, or square root the number if it is odd. Take this new list and return the sum of it, rounded to two decimal places.
// The list will never be empty and will only contain values that are greater than or equal to zero.
// Good luck!

// Given an array of numbers.
// Return a single number rounded to two decimal places by summing all the square roots of odd numbers and squares of even numbers.
// Ex:
// sumSquareEvenRootOdd([4,5,7,8,1,2,3,0])), 91.61
// sumSquareEvenRootOdd([1,14,9,8,17,21])), 272.71
// Iterate through array to square evens and square root odds.
// Sum and get rounded number to two decimal places.

const sumSquareEvenRootOdd = (ns) => {
  return +ns
    .map((n) => (n % 2 ? Math.sqrt(n) : Math.pow(n, 2)))
    .reduce((a, c) => (a += c))
    .toFixed(2)
}
