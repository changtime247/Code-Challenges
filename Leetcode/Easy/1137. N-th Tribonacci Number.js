/*
1137. N-th Tribonacci Number
Easy
3.2K
150
Companies
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.

Example 1:
Input: n = 4
Output: 4
Explanation:
T_3 = 0 + 1 + 1 = 2
T_4 = 1 + 1 + 2 = 4

Example 2:
Input: n = 25
Output: 1389537


Constraints:

0 <= n <= 37
The answer is guaranteed to fit within a 32-bit integer, ie. answer <= 2^31 - 1.
*/

/*
Given an integer, n, representing the nth term of a tribonacci sequence.
Return the value of the nth term.
Create an array with first three terms pre-defined as [0, 1, 1] (by definition)
While array length is less than or equal to n, take the sum of the last three values of the array and push it back into array.
Return nth value of array (0-based index)
*/

var tribonacci = function (n) {
  let arr = [0, 1, 1]
  while (arr.length <= n) {
    arr.push(arr.slice(-3).reduce((a, c) => ((a += c), a), 0))
  }
  return arr[n]
}
