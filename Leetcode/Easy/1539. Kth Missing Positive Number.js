/*
1539. Kth Missing Positive Number
Easy
4.4K
297
Companies
Given an array arr of positive integers sorted in a strictly increasing order, and an integer k.

Return the kth positive integer that is missing from this array.

Example 1:
Input: arr = [2,3,4,7,11], k = 5
Output: 9
Explanation: The missing positive integers are [1,5,6,8,9,10,12,13,...]. The 5th missing positive integer is 9.

Example 2:
Input: arr = [1,2,3,4], k = 2
Output: 6
Explanation: The missing positive integers are [5,6,7,...]. The 2nd missing positive integer is 6.

Constraints:
1 <= arr.length <= 1000
1 <= arr[i] <= 1000
1 <= k <= 1000
arr[i] < arr[j] for 1 <= i < j <= arr.length

Follow up:
Could you solve this problem in less than O(n) complexity?
*/

/*
Given an array of positive integers, arr, and a positive integer, k.
Return the kth missing integer from arr
Note: The complete integer we're cross-referencing starts from 1 (i.e. [1,2,3,4,5...])
Create a variable to track every single positive integer from 1 onward.
Create an variable, idx, set to 0, to track index.
While k is greater than 0 (incrementing count from 1 onward),
    Check if arr value at idx is same as count.
        If same, decrement idx.
        If not same, decrement k.
*/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
  let count = 1
  let i = 0
  while (k > 0) {
    if (arr[i] == count) i++
    else k--
    count++
  }
  return count - 1
}
