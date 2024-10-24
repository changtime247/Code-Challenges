/*
3190. Find Minimum Operations to Make All Elements Divisible by Three
Easy

You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.

Example 1:
Input: nums = [1,2,3,4]
Output: 3
Explanation:
All array elements can be made divisible by 3 using 3 operations:
Subtract 1 from 1.
Add 1 to 2.
Subtract 1 from 4.

Example 2:
Input: nums = [3,6,9]

Output: 0

Constraints:
1 <= nums.length <= 50
1 <= nums[i] <= 50
*/

/*
Given an array of numbers.
Return the number of operations (addition or subtration of 1) required to make each number divisible by 3. 
Example:
minimumOperations([1]), 1
minimumOperations([3]), 0
minimumOperations([30]), 0
minimumOperations([1,3,31]), 1
Create a variable to keep count.
Iterate through and increment count for each number indivisible by 3.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  let opCount = 0
  for (let num of nums) {
    if (num % 3) opCount++
  }
  return opCount
}
