/*
724. Find Pivot Index
Easy
5.4K
566
Companies
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
 

Constraints:

1 <= nums.length <= 104
-1000 <= nums[i] <= 1000
 

Note: This question is the same as 1991: https://leetcode.com/problems/find-the-middle-index-in-array/
*/

/*
Given an array of numbers
Return the pivot index, which is the index at which the sum of all the values to the left of that index is equal to the sum of all the values to the right of that index.
Iterate through array from left to right.
    At each iteration, sum values to the left and sum values to the right.
        If sums are equal, return that index.
        Otherwise, keep iterating.
At end of iteration, return -1 (since there is no pivot index)
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute force
// var pivotIndex = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     let left = nums.slice(0, i)
//     let right = nums.slice(i + 1) || 0
//     if (sum(left) === sum(right)) {
//       return i
//     }
//   }
//   return -1
// }
// function sum(arr) {
//   return arr.reduce((a, c) => (a += c), 0)
// }

var pivotIndex = function (nums) {
  let sum = nums.reduce((a, c) => (a += c), 0)
  let leftSum = 0
  for (let i = 0; i < nums.length; i++) {
    if (leftSum === sum - nums[i]) {
      return i
    }
    leftSum += nums[i]
    sum -= nums[i]
  }
  return -1
}
