// 7 kyu
// Check for prime numbers
// In this kata you will create a function to check a non-negative input to see if it is a prime number.
// The function will take in a number and will return True if it is a prime number and False if it is not.
// A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Examples(input --> output)
// 0 --> false
// 1 --> false
// 2 --> true
// 11 --> true
// 12 --> false

// Given an integer.
// Return boolean indicating whether integer is a prime number.
// Ex:
// isPrime(61), true
// isPrime(571), true
// isPrime(573), false
// isPrime(25), false
// If any number from 2 to square root of number can divide the integer evenly, then return false.

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i == 0) return false
  }
  return n > 1
}
