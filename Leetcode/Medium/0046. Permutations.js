/*
46. Permutations
Medium
14.1K
237
Companies
Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

Example 1:
Input: nums = [1,2,3]
Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

Example 2:
Input: nums = [0,1]
Output: [[0,1],[1,0]]

Example 3:
Input: nums = [1]
Output: [[1]]

Constraints:
1 <= nums.length <= 6
-10 <= nums[i] <= 10
All the integers of nums are unique.
*/

/*
Given an array of values
Return an array of all possible permutations of argument-array.
Create a variable set to an empty array to hold all possible permutations.
Create a helper function that recursively generates possible permutations by using ith value as an "anchor" for each iteration
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = []
  const permutator = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        permutator(curr.slice(), m.concat(next))
      }
    }
  }
  permutator(nums)
  return result
}
