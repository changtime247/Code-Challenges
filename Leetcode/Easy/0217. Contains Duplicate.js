/*
217. Contains Duplicate
Easy
7.6K
1.1K
Companies
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

/*
Given an array of numbers
Return boolean indicating whether the array contains any duplicate values.
Create a set from the array and whether lengths are different.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  return [...new Set(nums)].length !== nums.length
}
