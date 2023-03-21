/*
2348. Number of Zero-Filled Subarrays
Medium
1.7K
55
Companies
Given an integer array nums, return the number of subarrays filled with 0.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:
Input: nums = [1,3,0,0,2,0,0,4]
Output: 6
Explanation: 
There are 4 occurrences of [0] as a subarray.
There are 2 occurrences of [0,0] as a subarray.
There is no occurrence of a subarray with a size more than 2 filled with 0. Therefore, we return 6.

Example 2:
Input: nums = [0,0,0,2,0,0]
Output: 9
Explanation:
There are 5 occurrences of [0] as a subarray.
There are 3 occurrences of [0,0] as a subarray.
There is 1 occurrence of [0,0,0] as a subarray.
There is no occurrence of a subarray with a size more than 3 filled with 0. Therefore, we return 9.

Example 3:
Input: nums = [2,10,2019]
Output: 0
Explanation: There is no subarray filled with 0. Therefore, we return 0.
*/

/*
Given an array of integers.
Return the number of subarrays filled only with 0(s).
See above for examples.
Create a variable (count) to count the number of subarrays of 0(s).
Create another variable (series) to increment the number of consecutive 0s.
Iterate through array,
    if value is 0, increment series and add series to count
    if value is not 0, reset series to 0 (since we have broken the consecutive 0s 'chain')
*/

var zeroFilledSubarray = function (nums) {
  let count = 0
  let series = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      series++
      count += series
    } else {
      series = 0
    }
  }
  return count
}
