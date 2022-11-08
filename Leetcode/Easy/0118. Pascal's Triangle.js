/*
118. Pascal's Triangle
Easy
Given an integer numRows, return the first numRows of Pascal's triangle.

In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]

Constraints:
1 <= numRows <= 30
*/

/*
Given an integer representing the number of rows of an instance of Pascal's triangle.
Return an array of subarrays, each containing the values of the correponding row (index 0 is the 1st row; index 1, 2nd row; etc.)
First, establish base case.
Second, create an array, mainArr, that will hold the subarrays. Set the value of mainArr to initially hold the base cases.
Third, create a loop to fill the mainArr as long as its length is not equal to the function argument.
    Within that loop, create a for loop that will create the an additional row to add the the base of the triangle (we keep adding rows to the base of triangle until previous condition is met)
        The first and last values of every row is 1. The inner values can be calculated by taking the sum of the corresponding elements from previous row.
*/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 1) return [[1]]
  let mainArr = []
  for (let row = 1; row <= numRows; row++) {
    let arr = []
    for (let col = 0; col < row; col++) {
      if (col === 0 || col === row - 1) {
        arr.push(1)
      } else {
        arr.push(mainArr[row - 2][col - 1] + mainArr[row - 2][col])
      }
    }
    mainArr.push(arr)
  }
  return mainArr
}
