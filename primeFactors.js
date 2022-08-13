// 6 kyu
// Prime Factors
// Inspired by one of Uncle Bob's TDD Kata
// Write a function that generates factors for a given number.
// The function takes an integer on the standard input and returns a list of integers (ObjC: array of NSNumbers representing integers). That list contains the prime factors in numerical sequence.
// Examples
// 1  ==>  []
// 3  ==>  [3]
// 8  ==>  [2, 2, 2]
// 9  ==>  [3, 3]
// 12 ==>  [2, 2, 3]

// ----------------------
// Parameter: Given a positive integer.
// Return an array of all prime factors of argument.
// Examples:
// primeFactors(4)       -->  [(2, 2)]
// primeFactors(51557)   -->  [(11, 43, 109)]
// primeFactors(374696)  -->  [(2, 2, 2, 7, 6691)]
// primeFactors(593738)  -->  [(2, 307, 967)]
// Pseudocode:
// Create helper function to check if numbers are prime or not.
//      - a number (n) is prime if n cannot be evenly divided by any number between 2 and square root of number.
//      - (square root because n = Math.sqrt(n) * Math.sqrt(n) )
// In main function, create a loop that runs while the argument is greater than 1.
// Create a divisor, initially set to 2, and divide the argument by divisor ONLY IF
// (a) divisor is a prime number and
// (b) divisor divides dividend evenly.
// Otherwise increment divisor (which started at 2) by 1.
// At each iteration, collect divisor, if any, in an array.
// Return array of prime factors.

function primeFactors(n) {
  let primeFactorsOnly = [],
    i = 2
  while (n > 1) {
    if (isPrime(i) && n / i === ~~(n / i)) {
      primeFactorsOnly.push(i)
      n /= i
      i = 2
    } else {
      i++
    }
  }
  return primeFactorsOnly
}

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++)
    if (num % i === 0) return false
  return num > 1
}
