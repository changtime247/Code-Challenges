// 7 kyu
// last digits of a number
// Your job is to implement a function which returns the last D digits of an integer N as a list.
// Special cases:
// If D > (the number of digits of N), return all the digits.
// If D <= 0, return an empty list.
// Example 1:
// N = 1
// D = 1
// result = [1]
// Example 2:
// N = 1234
// D = 2
// result = [3, 4]
// Example 3:
// N = 637547
// D = 6
// result = [6, 3, 7, 5, 4, 7]

// Given an integer, n, and another integer, d.
// Return the last d digits of n as an array.
// If d is less than or equal to 0, return an empty array.
// Ex:
// lastDigit(1,1),[1]
// lastDigit(123767,4),[3,7,6,7]
// lastDigit(0,1),[0]
// lastDigit(34625647867585,10),[5,6,4,7,8,6,7,5,8,5]
// lastDigit(1234,0),[]
// lastDigit(24134,-4),[]
// lastDigit(1343,5),[1,3,4,3]
// If d <= 0, immediately return empty array.
// Otherwise, take the string version of n and grab the last d digits as an array.

function lastDigit(n, d) {
  if (d <= 0) return []
  return n.toString().split``.slice(-d).map((c) => +c)
}
