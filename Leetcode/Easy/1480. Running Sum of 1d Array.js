/*
1480. Running Sum of 1d Array
Easy
5.3K
269
Companies
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
Example 2:

Input: nums = [1,1,1,1,1]
Output: [1,2,3,4,5]
Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
Example 3:

Input: nums = [3,1,2,10,1]
Output: [3,4,6,16,17]
 

Constraints:

1 <= nums.length <= 1000
-10^6 <= nums[i] <= 10^6
*/

/*
Given an array of numbers
Return an array of numbers, where each index value is derived by getting the sum of that index value plus all prior values
Iterate through array to create a new array of same length.
New array values should be found by getting the sum of the argument array index value and all prior values.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let runningSum = 0
  let newArray = []
  for (let i = 0; i < nums.length; i++) {
    newArray[i] = runningSum + nums[i]
    runningSum += nums[i]
  }
  return newArray
}
