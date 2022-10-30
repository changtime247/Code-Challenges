/*
69. Sqrt(x)
Easy

5121

3639

Add to List

Share
Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
 

Example 1:

Input: x = 4
Output: 2
Explanation: The square root of 4 is 2, so we return 2.
Example 2:

Input: x = 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
 

Constraints:

0 <= x <= 231 - 1
Accepted
1,252,427
Submissions
3,381,636
*/

/*
Given an integer.
Return the square root of the argument integer, that is rounded down to the nearest integer.
The Catch: cannot use any built-in exponent functions or operators
Create a variable set to the argument
While that variable multiplied by itself is greater than the argument,
    set the variable to a new value, which is half the sum of the variable and argument divided by the variable, rounded down
    (aka Integer division for Newton Method)
Return the variable once the condition is met
*/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let r = x
  while (r * r > x) r = ((r + x / r) / 2) | 0
  return r
}
