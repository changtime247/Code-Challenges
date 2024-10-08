// 7 kyu
// Nth Smallest Element (Array Series #4)
// Introduction and warm-up (highly recommended): Playing With Lists/Arrays Series
// Task
// Given an array/list of integers, find the Nth smallest element in the array.
// Notes
// Array/list size is at least 3.
// Array/list's numbers could be a mixture of positives , negatives and zeros.
// Repetition in array/list's numbers could occur, so don't remove duplications.
// Input >> Output Examples
// arr=[3,1,2]            n=2    ==> return 2
// arr=[15,20,7,10,4,3]   n=3    ==> return 7
// arr=[2,169,13,-5,0,-1] n=4    ==> return 2
// arr=[2,1,3,3,1,2],     n=3    ==> return 2

// Given an array of numbers and a number, pos.
// Return the value at position pos (pos assumes 1-index-based), as if the array were sorted.
// nthSmallest(                 [3,1,2], 2),  2
// nthSmallest(        [15,20,7,10,4,3], 3),  7
// nthSmallest(          [-5,-1,-6,-18], 4), -1
// nthSmallest([-102,-16,-1,-2,-367,-9], 5), -2
// nthSmallest(      [2,169,13,-5,0,-1], 4),  2
// nthSmallest(           [2,1,3,3,1,2], 3),  2
// Sort array. 
// Return the value at index pos - 1

function nthSmallest(arr, pos) {
  return arr.sort((a, b) => a - b)[pos - 1]
}
