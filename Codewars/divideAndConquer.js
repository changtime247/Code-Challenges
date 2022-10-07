// 7 kyu
// Divide and Conquer
// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.
// Return as a number.

// Parameter: Given a string.
// Return string but with an additional space in between each character.
// Example:
// divCon([9, 3, '7', '3']), 2
// divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14
// divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13
// Pseudocode:
// Create two separate variables to store the sums of two groups, group of numbers and group of strings.
// Iterate through every element of argument array.
// If element is a number, add to variable storing sum of numbers.
// If element is a string, add to variable storing sum of strings.
// Return difference of sum of numbers from sum of strings.

function divCon(x) {
  let sumNums = 0
  let sumStrs = 0
  x.forEach((e) => (e.toString() === e ? (sumStrs += +e) : (sumNums += e)))
  return sumNums - sumStrs
}
