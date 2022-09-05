// Prime Number Finder
// Create a primeFinder() function that takes in a number, n, and returns all the prime numbers from 1 to n (inclusive). As a reminder, a prime number is a number that is only divisible by 1 and itself.
// For example, primeFinder(11) should return [2, 3, 5, 7, 11].

// Parameter: Given a positive integer.
// Return an array of integers from 2 to argument that are prime numbers.
// Example:
// primeFinder(11), [2, 3, 5, 7, 11]
// Pseudocode: Create an empty array.
// Create a loop that goes from 2 to n.
// At each iteration check if number is prime.
// If prime, push to newly created array.
// Return the array.

function primeFinder(n) {
  let primesOnly = []
  for (let i = 2; i <= n; i++) {
    if (checkIfPrime(i)) primesOnly.push(i)
  }
  return primesOnly
}

const checkIfPrime = (n) => {
  for (let i = 2, s = Math.sqrt(n); i <= s; i++) {
    if (n % i === 0) return false
  }
  return n > 1
}
