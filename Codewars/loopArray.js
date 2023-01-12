// 7 kyu
// Loop Array
// Write a function loopArr that loops array in a specified direction by some number of steps.
// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").
// Function should accept three arguments:
// array - non-empty array of elements of any type;
// direction - 'left' or 'right' - tells how to loop array;
// steps - number of steps to loop array (less or equal to array size);
// Examples:
// loopArr([1, 5, 87, 45, 8, 8], 'left', 2);
// should produce result: [87, 45, 8, 8, 1, 5]
// loopArr([1, 5, 87, 45, 8, 8], 'right', 2);
// should produce result: [8, 8, 1, 5, 87, 45]

// Given an array, a direction to loop the array ("left" or "right"), and the number of times array is looped.
// Return modified array after it has been looped according to arguments, provided.
// Only loop the number of steps mod array's length.
// Use combo of shift and push (or pop and unshift)

function loopArr(arr, direction, steps) {
  let shortSteps = steps % arr.length
  while (shortSteps > 0) {
    if (direction === 'left') {
      arr.push(arr.shift())
    } else arr.unshift(arr.pop())
    shortSteps--
  }
  return arr
}
