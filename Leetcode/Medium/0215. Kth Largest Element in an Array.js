/*
215. Kth Largest Element in an Array
Medium

Given an integer array nums and an integer k, return the kth largest element in the array.
Note that it is the kth largest element in the sorted order, not the kth distinct element.
Can you solve it without sorting?

Example 1:
Input: nums = [3,2,1,5,6,4], k = 2
Output: 5

Example 2:
Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
Output: 4

Constraints:
1 <= k <= nums.length <= 105
-104 <= nums[i] <= 104
*/

/*
Given an array of numbers in no particular order. Also given k, an integer.
Return the value at index k-1 in a sorted version of the given array in descending order.
Ex:
Sort array using built-in sort method. Return value at index k-1
findKthLargest([3,1,2,4,5,6], 2), 5
findKthLargest([3,1,2,4,5,6], 1), 6
findKthLargest([-1,2,0], 1), 1
Note: Built-in method has the best overall performance (runtime & memory).
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// ***
// Built-in sort
// ***
var findKthLargest = function (nums, k) {
  let sortedNums = nums.slice().sort((a, b) => b - a)
  return sortedNums[k - 1]
}

// ***
// Using count hash + sort of keys
// ***
// var findKthLargest = function (nums, k) {
//   let count = {}
//   for (let i = 0; i < nums.length; i++) {
//     count[nums[i]] = (count[nums[i]] || 0) + 1
//   }
//   let allKeys = Object.keys(count).sort((a, b) => b - a)
//   let i = 0
//   let res = allKeys[0]
//   while (k > 0) {
//     k -= count[allKeys[i]]
//     if (k > 0) i++
//     res = allKeys[i]
//   }
//   return res
// }

// ***
// Using quick sort
// ***
// var findKthLargest = function (nums, k) {
//   function qSort(a) {
//     if (a.length === 0) {
//       return []
//     } else {
//       const pivot = a[~~((a.length - 1) / 2)]
//       let greater = []
//       let equal = []
//       let lesser = []
//       for (let e of a) {
//         if (e < pivot) {
//           lesser.push(e)
//         } else if (e > pivot) {
//           greater.push(e)
//         } else {
//           equal.push(e)
//         }
//       }
//       return [...qSort(greater), ...equal, ...qSort(lesser)]
//     }
//   }
//   const numsSorted = qSort(nums)
//   return numsSorted[k - 1]
// }
