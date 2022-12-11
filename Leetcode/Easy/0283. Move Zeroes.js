/*
283. Move Zeroes
Easy
12K
302
Companies
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

Constraints:
1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
*/

/*
Given an array of numbers.
No return. Instead move all 0s to the end of the array while maintaining the relative order of the non-zero elements. 
Use the two pointer approach. The goal is to move all non-zeroes to the front, one at a time.
One pointer to hold the non-zero value's index value.
The other pointer is the iteration incrementer of the for-loop.
Iterate through loop. At each iteration,
    if value is non-zero,
        using the first pointer, swap positions of the non-zero value with the current iteration value
        and increment the first pointer by 1.
    if value is zero,
        do nothing (simply continue with next iteration)
*/

var moveZeroes = function (nums) {
  let c = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      ;[nums[c], nums[i]] = [nums[i], nums[c]]
      c++
    }
  }
}
