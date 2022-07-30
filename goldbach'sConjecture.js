// 6 kyu
// Goldbach's Conjecture
// Goldbach's conjecture is amongst the oldest and well-known unsolved mathematical problems out there. In correspondence with Leonhard Euler in 1742, German mathematician Christian Goldbach made a conjecture stating that:
// "Every even integer greater than 2 can be written as the sum of two primes"
// which is known today as the (strong) Goldbach's conjecture.
// Even though it's been thoroughly tested and analyzed and seems to be true, it hasn't been proved yet (thus, remaining a conjecture.)
// Your task is to implement the function in the starter code, taking into account the following:
// If the argument isn't even and greater than two, return an empty array/tuple.
// For arguments even and greater than two, return a two-element array/tuple with two prime numbers whose sum is the given input.
// The two prime numbers must be the farthest ones (the ones with the greatest difference)
// The first prime number must be the smallest one.

// ----------------------
// Parameter: Given a number.
// If the number is even and greater than 2, then it can be represented as the sum of two prime numbers.
// If even and > 2, then return an array of the smaller and larger prime factors of the argument number.
// Otherwise, just return an empty array.
// Examples:
// checkGoldbach(2)    -->     []
// checkGoldbach(5)    -->     []
// checkGoldbach(4)    -->     [2, 2]
// checkGoldbach(6)    -->     [3, 3]
// checkGoldbach(14)   -->     [3, 11]
// Pseudocode:
// First, we will need a helper function that returns true for prime numbers.
// Since prime numbers have only one factor (excluding 1), if a number, n, is evenly divisible by any number between 2 and a (where a is the sqrt of n), then the number, n, is not a prime number.
// Back in the main function, if the argument is either odd or less than 3, immediately return an empty array (as the conjecture only works for even numbers greater than 2).
// Create two variables, representing the argument split into two parts, a smaller part (initialized to 2) and larger part.
// Loop through possible pairs that sum up to the argument number, beginning with 2 as the smaller part number and the larger as the remainder.
// While either number is a not prime number, increment the smaller part number by 1 and decrement the larger part number by 1.
// Only way to break out of loop is if both numbers are prime.
// Return the two parts in an array.

var checkGoldbach = function (number) {
  if (!(number > 2 && number % 2 === 0)) return []
  let smaller = 2
  let larger = number - smaller
  while (!isPrime(smaller) || !isPrime(larger)) {
    smaller++
    larger--
  }
  return [smaller, larger]
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}
