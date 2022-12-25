/*
2389. Longest Subsequence With Limited Sum
Easy
1.2K
104
Companies
You are given an integer array nums of length n, and an integer array queries of length m.

Return an array answer of length m where answer[i] is the maximum size of a subsequence that you can take from nums such that the sum of its elements is less than or equal to queries[i].

A subsequence is an array that can be derived from another array by deleting some or no elements without changing the order of the remaining elements.

Example 1:
Input: nums = [4,5,2,1], queries = [3,10,21]
Output: [2,3,4]
Explanation: We answer the queries as follows:
- The subsequence [2,1] has a sum less than or equal to 3. It can be proven that 2 is the maximum size of such a subsequence, so answer[0] = 2.
- The subsequence [4,5,1] has a sum less than or equal to 10. It can be proven that 3 is the maximum size of such a subsequence, so answer[1] = 3.
- The subsequence [4,5,2,1] has a sum less than or equal to 21. It can be proven that 4 is the maximum size of such a subsequence, so answer[2] = 4.

Example 2:
Input: nums = [2,3,4,5], queries = [1]
Output: [0]
Explanation: The empty subsequence is the only subsequence that has a sum less than or equal to 1, so answer[0] = 0.

Constraints:
n == nums.length
m == queries.length
1 <= n, m <= 1000
1 <= nums[i], queries[i] <= 106
*/

/*
Given an array of numbers (nums) and another array of numbers (queries).
Return an array of numbers (of length of queries) where each value is the maximum size of a subsequence taken from nums,
such that the sum of the subsequence elements is <= queries value.
Create a new array that takes the nums array, sorts it and turns it into a prefix sum array.
Iterate through the queries array. At each iteration:
    look for the index that most satisfies the condition.
    Or if none satisfies the condition, then see if the last value of prefix sum array satisfies condition.
    Otherwise, 0
*/

/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function (nums, queries) {
  const numsPreFixed = nums
    .sort((a, b) => a - b)
    .map((n, i, r) => (n += r.slice(0, i).reduce((a, c) => ((a += c), a), 0)))

  return queries.map((n, i) => {
    let ans = numsPreFixed.findIndex((x) => x > n)
    if (ans !== -1) {
      return ans
    } else if (numsPreFixed[nums.length - 1] <= n) {
      return nums.length
    } else return 0
  })
}
