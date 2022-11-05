/*
88. Merge Sorted Array
Easy
8.2K
721
Companies
You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

Merge nums1 and nums2 into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

 

Example 1:

Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
Output: [1,2,2,3,5,6]
Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
Example 2:

Input: nums1 = [1], m = 1, nums2 = [], n = 0
Output: [1]
Explanation: The arrays we are merging are [1] and [].
The result of the merge is [1].
Example 3:

Input: nums1 = [0], m = 0, nums2 = [1], n = 1
Output: [1]
Explanation: The arrays we are merging are [] and [1].
The result of the merge is [1].
Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.
 

Constraints:

nums1.length == m + n
nums2.length == n
0 <= m, n <= 200
1 <= m + n <= 200
-109 <= nums1[i], nums2[j] <= 109
 

Follow up: Can you come up with an algorithm that runs in O(m + n) time?
*/

/*
Given two arrays, nums1 and nums2, sorted in non-decreasing order.
Also given two integers, m and n, representing the lengths of the two arrays, respectively.
Merge nums1 and nums2 into a single array sorted in non-decreasing order.
We need to iterate through the entire nums2 array.
Create a loop to iterate through nums2 from right to left (highest value to lowest).
If num2's rightmost value is greater than num1's rightmost value, then set the last value of num1 to be num2's right most value. Decrement m.
Otherwise, set num1's rightmost value to num1's highest value (disregarding the 0s). Decrement n.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let idx = m + n - 1
  while (n > 0) {
    if (m > 0 && nums1[m - 1] > nums2[n - 1]) {
      nums1[idx] = nums1[m - 1]
      m--
    } else {
      nums1[idx] = nums2[n - 1]
      n--
    }
    idx--
  }
}
