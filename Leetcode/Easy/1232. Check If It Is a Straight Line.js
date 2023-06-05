/*
1232. Check If It Is a Straight Line
Easy
You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.

Example 1:
Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
Output: true

Example 2:
Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
Output: false

Constraints:
2 <= coordinates.length <= 1000
coordinates[i].length == 2
-10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
coordinates contains no duplicate point.
*/

/*
Given an array of subarrays, each representing the coordinate of a point on a XY plane.
Return a boolean indicating whether all the points lie on the same line.
Ex:
checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]), true
checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]), false
checkStraightLine([[0,0],[0,1],[0,-1]]), true
Get the slope from the first two coordinates.
Iterate through the rest of the coordinates to check if the slope remains the same.
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let standardSlope =
    (coordinates[1][1] - coordinates[0][1]) /
    (coordinates[1][0] - coordinates[0][0])
  if (standardSlope == -Infinity) standardSlope = Infinity

  for (let i = 2; i < coordinates.length; i++) {
    let slope =
      (coordinates[i][1] - coordinates[0][1]) /
      (coordinates[i][0] - coordinates[0][0])

    if (slope == -Infinity) slope = Infinity
    if (slope != standardSlope) return false
  }

  return true
}
