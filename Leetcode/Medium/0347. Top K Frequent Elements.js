/*
347. Top K Frequent Elements
Medium
12.9K
475
Companies
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

Example 1:
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

Example 2:
Input: nums = [1], k = 1
Output: [1]

Constraints:
1 <= nums.length <= 105
-104 <= nums[i] <= 104
k is in the range [1, the number of unique elements in the array].
It is guaranteed that the answer is unique.

Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Given an array of numbers.
Of the most frequently occurring numbers, return the first k numbers.
See above for examples.
Create a hash map of values (the distinct numbers of nums) and keys (the number of occurrences of that number).
Get the first k values of the most frequently occurring numbers.
*/

var topKFrequent = function (nums, k) {
  return Object.entries(
    nums.reduce((a, c) => {
      if (a[c]) a[c] += 1
      else a[c] = 1
      return a
    }, {})
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num, _]) => +num)
}
