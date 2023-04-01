/*
704. Binary Search
Easy
8.5K
183
Companies
Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.

Example 1:
Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4

Example 2:
Input: nums = [-1,0,3,5,9,12], target = 2
Output: -1
Explanation: 2 does not exist in nums so return -1

Constraints:
1 <= nums.length <= 104
-104 < nums[i], target < 104
All the integers in nums are unique.
nums is sorted in ascending order.
*/

/*
Given an array of integers and an integer that may or may not be in the array.
If integer is in array, return the index of the integer in array.
If not, return -1.
Two pointer approach: one set at idx 0 and other set at last idx.
Using a while loop, move pointers closer by setting midpoint 
and checking whether the value at the midpoint is equal to the target (then return the midpoint idx),
or less than the target (then move start pointer up to midpoint)
or greater than the target (then move end pointer down to midpoint)
If while loop ends without meeting target, it means the value is not in array. So return -1
*/

var search = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    let mid = ~~((start + end) / 2)
    if (nums[mid] == target) return mid
    if (nums[mid] < target) start = mid + 1
    if (nums[mid] > target) end = mid - 1
  }
  return -1
}
