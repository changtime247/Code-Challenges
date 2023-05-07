// 7 kyu
// Next Prime
// Get the next prime number!
// You will get a numbern (>= 0) and your task is to find the next prime number.
// Make sure to optimize your code: there will numbers tested up to about 10^12.
// Examples
// 5   =>  7
// 12  =>  13

// Given a non-negative number (n)
// Return the next prime number (greater than the arg-number)
// Ex:
// nextPrime(0), 2
// nextPrime(2), 3
// nextPrime(3), 5
// nextPrime(11), 13
// nextPrime(17), 19
// nextPrime(2971), 2999
// Create a helper function which takes a single number as an argument and returns a boolean indicating whether that number is a prime number.
// Create a while loop to increment n as long as it is not prime.

function nextPrime(n) {
  function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i == 0) return false
    }
    return x > 1
  }

  let next = n + 1
  while (!isPrime(next)) {
    next++
  }
  return next
}
