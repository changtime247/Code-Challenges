/*
1351. Count Negative Numbers in a Sorted Matrix
Easy
Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

Example 1:
Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
Output: 8
Explanation: There are 8 negatives number in the matrix.

Example 2:
Input: grid = [[3,2],[1,0]]
Output: 0

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 100
-100 <= grid[i][j] <= 100

Follow up: Could you find an O(n + m) solution?
*/

/*
Given an array of subarrays consisting of numbers.
Return the total count of negative numbers in array.
Transform array of subarrays of values into an array of values.
Iterate through entire array counting number of negative numbers.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
  let count = 0
  const str = grid.toString()
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '-') count++
  }
  return count
}
