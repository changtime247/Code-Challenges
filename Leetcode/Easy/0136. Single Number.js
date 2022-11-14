/*
136. Single Number
Easy
12.1K
456
Companies
Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
Example 2:

Input: nums = [4,1,2,1,2]
Output: 4
Example 3:

Input: nums = [1]
Output: 1
 

Constraints:

1 <= nums.length <= 3 * 104
-3 * 104 <= nums[i] <= 3 * 104
Each element in the array appears twice except for one element which appears only once.
*/

/*
Given an array of integers in which every int appears twice except one int. 
Return that int.
Use XOR. Any time we XOR a number twice by the same number, we get the same original number. 
For example: 4 ^ 1 = 5 and 5 ^ 1 = 4. Another way to say this is: 4 ^ 1 ^ 1 = 4.
Note also any number XOR 0 is the number itself, example: 0 ^ 5 = 5
Exact explanation: The bitwise XOR operator (^) returns a 1 in each bit position
for which the corresponding bits of either but not both operands are 1s.
Simplified explanation: (a XOR a) XOR (b XOR b) XOR (c XOR c) XOR d = d
(each pair in line above evaluates to 0)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  if (nums.length === 1) return nums[0]
  let result = 0
  nums.forEach((element) => (result = result ^ element))
  return result
}
