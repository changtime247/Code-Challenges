// 7 kyu
// Fibonacci's FizzBuzz
// The goal of this kata is two-fold:
// 1.) You must produce a fibonacci sequence in the form of an array, containing a number of items equal to the input provided.
// 2.) You must replace all numbers in the sequence divisible by 3 with Fizz, those divisible by 5 with Buzz, and those divisible by both 3 and 5 with FizzBuzz.
// For the sake of this kata, you can assume all input will be a positive integer.
// Use Cases
// Return output must be in the form of an array, with the numbers as integers and the replaced numbers (fizzbuzz) as strings.
// Examples
// Input:
// fibsFizzBuzz(5)
// Output:
// [ 1, 1, 2, 'Fizz', 'Buzz' ]
// Input:
// fibsFizzBuzz(1)
// Output:
// [1]
// Input:
// fibsFizzBuzz(20)
// Output:
// [1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]

// Given an integer.
// Return a fibonacci sequence as an array
// in which all numbers divisible by 3 and 5 are replaced by "FizzBuzz",
// all numbers divisible by 3 are replaced by "Fizz",
// and all numbers divisible by 5 are replaced by "Buzz".
// Ex:
// fibsFizzBuzz(2),[ 1, 1 ]
// fibsFizzBuzz(5),[ 1, 1, 2, 'Fizz', 'Buzz' ]
// fibsFizzBuzz(20),[1,1,2,"Fizz","Buzz",8,13,"Fizz",34,"Buzz",89,"Fizz",233,377,"Buzz","Fizz",1597,2584,4181,"FizzBuzz"]
// Create an empty array.
// Create two variables to serve as current value (initialized to 1, since fibonacci sequences start with 1) and next value (initialized to 0, since it will be dynamically updated).
// Create a while loop to run as long as newly created array is less than arg-integer. Inside loop,
//      Determine next value to be pushed to array by adding previous value and current value.
//      (Next iteration, the current value will be the "next" value)
//      If number is divisible by 3 or 5 or both, then push respective string value into array.

var fibsFizzBuzz = function (n) {
  let curr = 1
  let next = 0
  let arr = []
  while (arr.length < n) {
    let temp = next
    next += curr
    curr = temp
    if (next % 3 == 0 && next % 5 == 0) arr.push('FizzBuzz')
    else if (next % 3 == 0) arr.push('Fizz')
    else if (next % 5 == 0) arr.push('Buzz')
    else arr.push(next)
  }
  return arr
}
