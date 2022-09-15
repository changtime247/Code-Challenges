// 7 kyu
// max diff - easy
// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.
// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted
// [1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
// [1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

// ----------------------
// Parameter: Given an array of numbers.
// Return the max difference possible from a pair of numbers.
// Examples:
// maxDiff([]), 0);
// maxDiff([16]), 0);
// maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
// maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
// maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
// Pseudocode:
// If the argument array is empty or there is only one element, return 0. Otherwise, proceed.
// Create two variables, min and max, set to first element of array.
// Iterate through array.
// At each iteration:
// if the element is less than the min, set min to that element.
// if the element is greater than the max, set max to that element.
// After iteration, return the difference between max and min.

function maxDiff(list) {
  if (!list || list.length < 2) return 0
  let min = list[0]
  let max = list[0]
  for (let i = 0; i < list.length; i++) {
    if (list[i] < min) min = list[i]
    if (list[i] > max) max = list[i]
  }
  return max - min
}
