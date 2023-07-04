/*
137. Single Number II
Medium
Given an integer array nums where every element appears three times except for one, which appears exactly once. Find the single element and return it.
You must implement a solution with a linear runtime complexity and use only constant extra space.

Example 1:
Input: nums = [2,2,3,2]
Output: 3

Example 2:
Input: nums = [0,1,0,1,0,1,99]
Output: 99

Constraints:
1 <= nums.length <= 3 * 104
-231 <= nums[i] <= 231 - 1
Each element in nums appears exactly three times except for one element which appears once.
*/

/*
Given an array of elements. Every element appears three times except one element that only appears once.
Return the element that appears only once.
Ex:
singleNumber([2,2,3,2]), 3
singleNumber([0,1,0,1,0,1,99]), 99
singleNumber([5,5,5,6,6,6,7]), 7
Create a hash map to get value to number of occurrences of that value. 
Iterate through the hash map to return the element which only occurs once.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let obj = nums.reduce((a, c) => {
    a[c] = (a[c] || 0) + 1
    return a
  }, {})
  for (const val in obj) {
    if (obj[val] === 1) return val
  }
}
