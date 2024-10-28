/*
2501. Longest Square Streak in an Array
Medium

You are given an integer array nums. A subsequence of nums is called a square streak if:

The length of the subsequence is at least 2, and
after sorting the subsequence, each element (except the first element) is the square of the previous number.
Return the length of the longest square streak in nums, or return -1 if there is no square streak.

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [4,3,6,16,8,2]
Output: 3
Explanation: Choose the subsequence [4,16,2]. After sorting it, it becomes [2,4,16].
- 4 = 2 * 2.
- 16 = 4 * 4.
Therefore, [4,16,2] is a square streak.
It can be shown that every subsequence of length 4 is not a square streak.

Example 2:
Input: nums = [2,3,5,6,7]
Output: -1
Explanation: There is no square streak in nums so return -1.

Constraints:
2 <= nums.length <= 105
2 <= nums[i] <= 105
*/

/*
Given an array of numbers.
Return the longest streak of squares (or -1 if no streak).
    Meaning, a number may have a square root or square in the array. The square root may have a square root of itself in the array or the square may have a square of itself in the array. Given the constraints (2 <= nums.length <= 105 and 2 <= nums[i] <= 105) return the longest sreak.
Ex: 
longestSquareStreak([4,3,6,16,8,2]), 3
longestSquareStreak([4,3,6,16,8,2,256,65536]), 5
Create a set from array.
Iterate through set.
    If current value's square is there, check if square of square is there, and so on.
      Record how many levels in.
    If current value's square root is there, check if square root of square root is there, and so on.
      Record how many levels in.
Return longest streak.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  let s = new Set(nums)
  let streak = 0
  let max = 0
  let rt = 0
  let sq = 0
  for (const value of s) {
    rt = Math.sqrt(value)
    sq = value * value
    while (s.has(rt) && Number.isInteger(rt)) {
      streak++
      rt = Math.sqrt(rt)
    }
    while (s.has(sq) && sq < 100000) {
      streak++
      sq = sq * sq
    }
    if (streak > max) max = streak
    streak = 0
  }
  return max == 0 ? -1 : max + 1
}
