/*
66. Plus One
Easy

5640

4536

Add to List

Share
You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

Increment the large integer by one and return the resulting array of digits.

 

Example 1:

Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Incrementing by one gives 123 + 1 = 124.
Thus, the result should be [1,2,4].
Example 2:

Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.
Incrementing by one gives 4321 + 1 = 4322.
Thus, the result should be [4,3,2,2].
Example 3:

Input: digits = [9]
Output: [1,0]
Explanation: The array represents the integer 9.
Incrementing by one gives 9 + 1 = 10.
Thus, the result should be [1,0].
 

Constraints:

1 <= digits.length <= 100
0 <= digits[i] <= 9
digits does not contain any leading 0's.
Accepted
1,427,718
Submissions
3,294,639
*/

/*
Given an array of integers, where the array represents an integer.
Return the array after incrementing it by 1. 
Add one to the last digit of array. Carry the one to the next significant digit (if need be). 
Easier to work with digits array using reverse()
*/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  digits = digits.reverse()
  for (let i = 0; i < digits.length; i++) {
    if (i === 0) digits[i]++
    if (digits[i] > 9) {
      if (digits[i + 1]) {
        digits[i + 1] += 1
      } else {
        digits.push(1)
      }
    }
  }
  return digits.reverse()
}
