/*
55. Jump Game
Medium
14.6K
759
Companies
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:
Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.

Example 2:
Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

Constraints:
1 <= nums.length <= 104
0 <= nums[i] <= 105
*/

/*
Given an array of integers, where each integer represents the number of steps you can take from that index toward the end of the array.
Return a boolean, indicating whether you can reach the end of the array if starting from index 0.
The goal is to reach the end of the array.
Iterate through array from last index to first index to regressively re-set goal value to earlier indices. 
At each iteration,
    if the number of steps you can take plus the index value >= the goal
        set the new goal to the index
After iteration, if the goal is 0, then it is possible to reach the end from index 0.
Otherwise, it is not possible to reach end.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var canJump = function (nums) {
  let goal = nums.length - 1
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] + i >= goal) goal = i
  }
  if (goal == 0) return true
  return false
}
