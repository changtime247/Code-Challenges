/*
412. Fizz Buzz
Easy

1036

168

Add to List

Share
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104
*/

/*
Given an integer
Return a string array with numbers but with a caveat.
Caveat: 'FizzBuzz' if num is divisble by 5 and 3, or 'Fizz' if divisble by 3, or 'Buzz' if divible by 5.
Iterate through and check if divsible by 5 and 3 or by 5 or by 3. If so, return corresponding string.
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  return Array.from({ length: n }, (_, i) => {
    return (i + 1) % 3 === 0 && (i + 1) % 5 === 0
      ? 'FizzBuzz'
      : (i + 1) % 3 === 0
      ? 'Fizz'
      : (i + 1) % 5 === 0
      ? 'FizzBuzz'
      : `${i + 1}`
  })
}
