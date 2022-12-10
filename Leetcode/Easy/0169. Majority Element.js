/*
169. Majority Element
Easy
13K
417
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

Example 1:
Input: nums = [3,2,3]
Output: 3

Example 2:
Input: nums = [2,2,1,1,1,2,2]
Output: 2

Constraints:
n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

/*
Given an array of numbers.
Return the element that appears the most frequently.
Create an object with keys as the unique values of the array and values as the count of that unique value (i.e. the number of times it appears).
Return the unique value with highest count of appearances.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = (obj[nums[i]] || 0) + 1
  }
  return Object.entries(obj).sort((a, b) => b[1] - a[1])[0][0]
}
