// 7 kyu
// Find the divisors!

// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

// Example:
// divisors(12); // should return [2,3,4,6]
// divisors(25); // should return [5]
// divisors(13); // should return "13 is prime"

// ----------------------
// parameters: arbitrary positive integer given
// return either array of parameter's divisors (excluding 1 and the parameter itself) or
// if parameter is a prime number, return string stating parameter is prime
// examples:
// divisors(12)     -->      [2, 3, 4, 6]
// divisors(13)     -->      "13 is prime"
// divisors(15)     -->      [3, 5]
// divisors(25)     -->      [5]
// pseudocode: create an array representing all integers up to the parameter
// filter the array to only include the numbers which are factors of parameter
// if the length is less than 3, the parameter is a prime number. return the string stating it as such
// otherwise, return the array, but without 1.

function divisors(integer) {
    let divisors = Array.from({length:integer},(_,i)=>i).filter(x=>integer%x===0);
    return divisors.length < 3 ? `${integer} is prime` : divisors.slice(1);
}