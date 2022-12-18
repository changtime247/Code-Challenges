/*
238. Product of Array Except Self
Medium
15.7K
871
Companies
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

Example 1:
Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

Constraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

/*
Given an array of numbers
Return an array of numbers, where each number is the product of all the numbers in the argument array except the value of the number in question.
First create variable equal to the product of all the values in argument array.
Use map to return an array found by getting the product of all numbers except current iteration value.
  If there are more than one 0, then all values are 0.
  If there is only one 0 and the current iteration value is 0, then find product of all numbers except the current iteration value (since we cannot divide a number by 0)
  Otherwise, return product of all divided by current iteration value.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  let moreThanOneZero = nums.indexOf(0) === nums.lastIndexOf(0) ? false : true
  const productAll = nums.reduce((a, c) => (a *= c), 1)

  return nums.map((n, idx) => {
    if (moreThanOneZero) {
      return 0
    } else if (productAll === 0 && n === 0) {
      return [
        ...(nums.slice(0, idx) || 1),
        ...(nums.slice(idx + 1) || 1),
      ].reduce((a, c) => (a *= c), 1)
    } else {
      return productAll / n
    }
  })
}
