// 6 kyu
// Persistent Bugger.
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
// For example (Input --> Output):
// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)

// ----------------------
// Parameter: Given a number.
// Return the number of steps it takes for the argument number to be 'turned' into a single digit number.
// 'Turning' process: split number into individual digits and multiply those digit values. The product is the new number.
// Examples:
// persistence(39)      -->     3
// persistence(4)       -->     0
// persistence(25)      -->     2
// persistence(999)     -->     4
// Pseudocode:
// Create a loop that sets the num value to the new value output from the 'turning' process.
// Record each iteration of that loop.
// Return the number of iterations it took to satisfy condition (where the length of the new num is exactly 1)

function persistence(num) {
  let i = 0
  while (num.toString().length !== 1) {
    num = num.toString().split``.reduce((a, k) => {
      return (a *= k)
    }, 1)
    i++
  }
  return i
}
