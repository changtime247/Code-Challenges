// 6 kyu
// Is a number prime?
// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.
// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
// Example
// is_prime(1)  /* false */
// is_prime(2)  /* true  */
// is_prime(-1) /* false */

// Given a number.
// Return boolean indicating whether number is a prime.
// Ex:
// isPrime(0),   false, "0 is not prime"
// isPrime(1),   false, "1 is not prime"
// isPrime(2),   true,  "2 is prime"
// isPrime(73),  true,  "73 is prime"
// isPrime(75),  false, "75 is not prime"
// isPrime(-1),  false, "-1 is not prime"
// isPrime(4),   false, "4 is not prime"
// isPrime(6),   false, "6 is not prime"
// isPrime(8),   false, "8 is not prime"
// isPrime(9),   false, "9 is not prime"
// isPrime(45),  false, "45 is not prime"
// isPrime(-5),  false, "-5 is not prime"
// isPrime(-8),  false, "-8 is not prime"
// isPrime(-41), false, "-41 is not prime"
// Iterate from 2 to square root of the number (square root because anything beyond that is redundant).
// If any number from 2 up to square root divides the arg-num evenly, return false.
// Return whether the number is greater than 1 (since 2 is the "first" prime number).

function isPrime(num) {
  for (let i = 2; i <= ~~Math.sqrt(num); i++) {
    if (num % i === 0) return false
  }
  return num > 1
}
