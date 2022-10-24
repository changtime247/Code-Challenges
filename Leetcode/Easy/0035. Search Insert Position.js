/*
35. Search Insert Position
Easy

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1
Example 3:

Input: nums = [1,3,5,6], target = 7
Output: 4
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums contains distinct values sorted in ascending order.
-104 <= target <= 104
Accepted
1,774,198
Submissions
4,224,997
*/

/*
Given an array of distinct integers and a target number.
Return the index of the array value that is equal to the target number value. 
If the target number is not within the array, return the index value of where the target would be (sorted)
Pseudocode: 
Iterate through array to find index of target number. If not within the array, find index of the first number larger than the target number.
If not found, return array length.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let index = nums.findIndex((n) => n === target)
  if (index !== -1) {
    return index
  } else {
    const nothere = nums.findIndex((n) => n > target)
    if (nothere !== -1) {
      return nothere
    } else {
      return nums.length
    }
  }
}
