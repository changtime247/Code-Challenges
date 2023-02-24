// 6 kyu
// Almost Even
// We need the ability to divide an unknown integer into a given number of even parts — or at least as even as they can be. The sum of the parts should be the original value, but each part should be an integer, and they should be as close as possible.
// Example code:
// splitInteger(20, 6)  // returns [3, 3, 3, 3, 4, 4]
// Complete the function so that it returns an array of integer representing the parts. Ignoring the order of the parts, there is only one valid solution for each input to your function!
// (Also, there is no reason to test for edge cases: the input to your function will always be valid for this kata.)

// Given an integer, num, representing a number to be divided. Also given another integer, parts, representing the number of parts the first integer is to be divided.
// Return an array of values equal in value (or as close as possible) that sum up to num, the first arg-integer.
// Ex:
// splitInteger(10, 1), [10]
// splitInteger(2, 2), [1,1]
// splitInteger(20, 5), [4,4,4,4,4]
// splitInteger(20, 6), [3,3,3,3,4,4]
// Split num into parts and round down.
// If the product of parts and the calculated value does not equal num, then set the difference to a variable.
// Create an array of calculated values, except the last value(s) will account for the variable difference.

var splitInteger = function (num, parts) {
  const rep = ~~(num / parts)
  let leftover = num - rep * parts
  return Array.from({ length: parts }, (n) => {
    if (leftover > 0) {
      n = rep + 1
      leftover -= 1
    } else {
      n = rep
    }
    return n
  }).reverse()
}
