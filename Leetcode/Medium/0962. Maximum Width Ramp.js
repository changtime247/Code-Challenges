/*
962. Maximum Width Ramp
A ramp in an integer array nums is a pair (i, j) for which i < j and nums[i] <= nums[j]. The width of such a ramp is j - i.
Given an integer array nums, return the maximum width of a ramp in nums. If there is no ramp in nums, return 0.

Example 1:
Input: nums = [6,0,8,2,1,5]
Output: 4
Explanation: The maximum width ramp is achieved at (i, j) = (1, 5): nums[1] = 0 and nums[5] = 5.

Example 2:
Input: nums = [9,8,1,0,1,9,4,0,4,1]
Output: 7
Explanation: The maximum width ramp is achieved at (i, j) = (2, 9): nums[2] = 1 and nums[9] = 1.

Constraints:
2 <= nums.length <= 5 * 104
0 <= nums[i] <= 5 * 104
*/

/*
Given an array of numbers.
Return the highest difference between the number of array such that the difference is between a lower-index number and a higher index number and difference is non-negative.
Ex:
maxWidthRamp([1,9,7,0,6,5,0,7,2,3]), 9
maxWidthRamp([277,227,215,172,164,236,144,11,212,158,46,256,47,114,32,56,54,8,1,107,11,298,179,191,175,86,78,90,218,1,65,284,210,184,15,295,265,248,35,7,23,114,265,138,220,58,27,93,52,16,206,299,52,285,34,263,127,214,291,34,99,104,108,84,68,60,225,143,262,7,36,262,69,123,170,30,154,297,212,72,230,234,168,263,216,118,284,298,175,84,280,12,50,233,73,139,193,158,49,181,236,90,170,297,189,87,270,34,186,149,124,101,58,128,114,247,23,101,53,271,40,233,42,219,242,232,199,104,116,206,170,249,200,89,142,177,5,3,212,17,134,78,1,163,215,262,241,110,130,23,264,90,105,43,99,210,91,259,68,121,173,263,223,131,136,112,1,217,21,85,19,224,116,81,16,51,286,64,81,27,225,266,295,247,58,273,129,185,124,191,264,55,146,264,91,176,56,165,14,132,127,38,30,251,287,181,45,285,71,48,54,163,48,151,210,40,179,234,172,15,85,0,298,121,159,171,263,31,147,186,98,220,160,186,259,2,92,68,136,277,195,170,150,49,290,112,186,215,35,9,238,287,80,210,158,49,62,280,208,85,288,26,35,8,270,272,204,248,181,142,259,38,198,194,255,183,48,109,196,14,269,272,64,7,113,172,182,134,207,276,293,251,188,270,123,184,79,30,33,195]), 296
1. Initialize an empty stack.
2. Iterate through the array from left to right:
  - If the stack is empty or the current number is less than or equal to the number at the top of the stack, push the current index onto the stack.
3. Initialize maxWidth to 0.
4. Iterate through the array from right to left:
  - While the stack is not empty and the current number is greater than or equal to the number at the top of the stack:
    - Pop the stack and calculate the ramp width.
    - Update maxWidth if this ramp width is larger than the current maxWidth.
5. Return maxWidth.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  let s = []
  let max = 0
  nums.forEach((num, i) => {
    if (s.length == 0 || num <= nums[s[s.length - 1]]) s.push(i)
  })
  for (let i = nums.length - 1; i >= 0; i--) {
    while (s.length > 0 && nums[s[s.length - 1]] <= nums[i]) {
      max = Math.max(max, i - s.pop())
    }
  }
  return max
}
