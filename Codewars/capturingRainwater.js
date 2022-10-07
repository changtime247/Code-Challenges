// Capturing Rainwater
// Create a capturingRainwater() function that takes in an array of heights, and returns the amount of rainwater that could be contained in that array.
// For example, the array [4, 2, 1, 3, 0, 1, 2] can be represented in the following histogram:Histogram with the Y-axis going from 0 to 4 and the X-axis containing the numbers from the array. Water is pooled in the empty spaces of the histogram, and you can see that it can contain 6 units of water.
// As you can see, there are 6 units of water that can be contained, so capturingRainwater([4, 2, 1, 3, 0, 1, 2]) will return 6.

// Parameter: Given an array of numbers, representing heights.
// Return the unit of rainwater collected.
// Example:
// capturingRainwater([4, 2, 1, 3, 0, 1, 2]), 6
// Pseudocode: Create two pointer variables to iterate from the two ends of the array inward.
// Create two variables to store the highest height, respective to the iteration direction of step above.
// Create one more variable to aggregrate all the rainwater collected (i.e. the accumulator).
// All newly created variables are set to 0 except for the rightPointer, which starts at the last index value of argument array.
// While the leftPointer is lesser than the rightPointer, iterate.
// Within iteration:
// if the height of element of leftPointer is less than or equal to the height of the element at the rightPointer,
//   then, if the height of element of leftPointer is greater than the leftBound, then set reassign leftBound to that element
//      else, no need to reassign
//   take the difference between leftBound and height of element of leftPointer and add that to the accumulator
// else
//   if the height of element of rightPointer is greater than the rightBound, then set reassign rightBound to that element
//      else, no need to reassign
//   take the difference between rightBound and height of element of rightPointer and add that to the accumulator
// Iteration will stop once leftPointer and rightPointer converge in middle of array.
// Return the accumulator.

function efficientSolution(heights) {
  let totalWater = 0
  let leftPointer = 0
  let rightPointer = heights.length - 1
  let leftBound = 0
  let rightBound = 0
  while (leftPointer < rightPointer) {
    if (heights[leftPointer] <= heights[rightPointer]) {
      if (heights[leftPointer] > leftBound) {
        leftBound = heights[leftPointer]
      }
      totalWater += leftBound - heights[leftPointer]
      leftPointer++
    } else {
      if (heights[rightPointer] > rightBound) {
        rightBound = heights[rightPointer]
      }
      totalWater += rightBound - heights[rightPointer]
      rightPointer--
    }
  }
  return totalWater
}
