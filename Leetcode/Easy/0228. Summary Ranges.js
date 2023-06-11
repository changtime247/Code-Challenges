/*
228. Summary Ranges
Easy
You are given a sorted unique integer array nums.
A range [a,b] is the set of all integers from a to b (inclusive).
Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.
Each range [a,b] in the list should be output as:
"a->b" if a != b
"a" if a == b

Example 1:
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"

Example 2:
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"

Constraints:
0 <= nums.length <= 20
-231 <= nums[i] <= 231 - 1
All the values of nums are unique.
nums is sorted in ascending order.
*/

/*
Given an array of unique numbers, some of which may be consecutive.
Return an array of strings representing the ranges of the arg-array.
See above for examples.
Create an empty array to act as the result.
Iterate through the arg-array:
    If current iteration value is consecutive (i.e. prev val + 1),
        this value does not need to be recorded as it is within a range.
    Otherwise,
        push range, which is the first and last values of range concatenated with '->' in between,
        as string to newly created array.
*/

/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  let n = nums.slice()
  n.push(n[n.length - 1])
  let arr = []
  let temp = [n[0]]
  for (let i = 1; i < n.length; i++) {
    if (n[i - 1] + 1 != n[i]) {
      if (temp.length == 1) {
        arr.push(`${temp[0]}`)
      } else {
        arr.push(`${temp[0]}->${temp[temp.length - 1]}`)
      }
      temp = [n[i]]
    } else {
      temp.push(n[i])
    }
  }
  return arr
}
