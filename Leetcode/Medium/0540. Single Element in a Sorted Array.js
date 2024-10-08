/*
540. Single Element in a Sorted Array
Medium
You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.
Return the single element that appears only once.
Your solution must run in O(log n) time and O(1) space.

Example 1:
Input: nums = [1,1,2,3,3,4,4,8,8]
Output: 2

Example 2:
Input: nums = [3,3,7,7,10,11,11]
Output: 10

Constraints:
1 <= nums.length <= 105
0 <= nums[i] <= 105
*/

/*
Given an sorted array of integers. Each integer-value appears twice except one integer-value.
Return the integer-value that appears only once.
Iterate through array, two values at a time.
    If the two values are the same, move onto the next two values.
    If the values are not the same, return the first of the two values.
*/

var singleNonDuplicate = function (nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === nums[i + 1]) {
      i += 2
    } else return nums[i]
  }
}
